#!/usr/bin/env python3
"""originals-clips/<musico>/*.mp4  →  video/<musico>-clipNN.mp4 + img/<musico>-clipNN.webp
Recomprime el vídeo si hace falta (H.264+AAC, vertical 9:16), extrae el
primer fotograma como cartel WebP y escupe la línea lista para datos.js."""
import os, glob, subprocess, json

SLUGS = ["evita", "nemo", "pinzarroja", "scarface", "cheguy"]
os.makedirs("video", exist_ok=True)
os.makedirs("img", exist_ok=True)

for slug in SLUGS:
    for i, f in enumerate(sorted(glob.glob(f"originals-clips/{slug}/*.*")), 1):
        name = f"{slug}-clip{i:02d}"
        mp4 = f"video/{name}.mp4"
        poster = f"img/{name}.webp"
        # H.264 + AAC, compatible con todo; máx. 1080 de ancho
        subprocess.run(["ffmpeg", "-y", "-i", f, "-c:v", "libx264", "-preset", "slow",
                        "-crf", "22", "-vf", "scale='min(1080,iw)':-2", "-c:a", "aac",
                        "-b:a", "160k", "-movflags", "+faststart", mp4],
                       check=True, capture_output=True)
        # cartel: primer fotograma
        subprocess.run(["ffmpeg", "-y", "-i", mp4, "-frames:v", "1", "-q:v", "2", poster],
                       check=True, capture_output=True)
        # proporción real
        p = subprocess.run(["ffprobe", "-v", "quiet", "-print_format", "json",
                            "-show_streams", mp4], capture_output=True, text=True)
        st = [x for x in json.loads(p.stdout)["streams"] if x["codec_type"] == "video"][0]
        ar = round(st["width"] / st["height"], 4)
        kb = os.path.getsize(mp4) // 1024
        print(f"  {name}.mp4  {st['width']}x{st['height']}  {kb} KB")
        print(f'    → clips:[ {{ file:"{name}.mp4", poster:"{poster}", ar:{ar}, pie:"" }} ]')
