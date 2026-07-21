#!/usr/bin/env python3
"""originals/<musico>/*  →  site/img/<musico>-NN-<ancho>.webp
Convierte a WebP en varios anchos, mide la proporción y localiza la cara
para calcular el encuadre de las miniaturas. Escupe el JS listo para pegar."""
import os, glob, cv2
from PIL import Image, ImageOps

WIDTHS  = [320, 800, 1400, 2000]     # 320 = miniatura de la tira de contactos
QUALITY = 82
SLUGS   = ["evita", "nemo", "pinzarroja", "scarface", "cheguy"]
OUT     = "site/img"
os.makedirs(OUT, exist_ok=True)

FRONT = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
PERFIL = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_profileface.xml")

def cara(path, w, h):
    """Devuelve (x,y) del centro de la cara en tanto por uno, o None."""
    img = cv2.imread(path)
    g = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    g = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8)).apply(g)   # son fotos oscurísimas
    hits = []
    for c in (FRONT, PERFIL):
        for sf in (1.05, 1.1):
            hits += list(c.detectMultiScale(g, sf, 5, minSize=(int(w * .03), int(h * .03))))
    # una cara de verdad en un plano de escenario es pequeña: fuera los falsos positivos
    hits = [r for r in hits if r[3] / h < 0.25]
    if not hits:
        return None
    x, y, fw, fh = max(hits, key=lambda r: r[2] * r[3])
    return ((x + fw / 2) / w, (y + fh / 2) / h)

def encuadre(foco):
    """object-position para los recortes pequeños (miniaturas y hero)."""
    if not foco:
        return "center 40%"
    fx, fy = foco
    # dejamos aire por encima de la cabeza
    return f"{round(fx*100)}% {max(0, round((fy - 0.08) * 100))}%"

lineas = []
for slug in SLUGS:
    fotos = []
    for i, f in enumerate(sorted(glob.glob(f"originals/{slug}/*.*")), 1):
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        w, h = im.size
        name = f"{slug}-{i:02d}"
        ws = sorted({x for x in WIDTHS if x <= w} | ({w} if w < WIDTHS[-1] else set()))
        for x in ws:
            im.resize((x, round(h * x / w)), Image.LANCZOS).save(
                f"{OUT}/{name}-{x}.webp", "WEBP", quality=QUALITY, method=6)
        foco = cara(f, w, h)
        ar = round(w / h, 2)
        pos = encuadre(foco)
        fotos.append(f'      {{ n:"{name}", w:{ws}, ar:{ar}, pos:"{pos}", pie:"" }}')
        cara_txt = f"cara en {round(foco[0]*100)}%,{round(foco[1]*100)}%" if foco else "sin cara detectada"
        print(f"  {name:16} {w}x{h}  ar={ar:<5} {cara_txt:24} → pos {pos}")
    lineas.append(f"  // {slug}\n    fotos:[\n" + ",\n".join(fotos) + "\n    ],")

print("\n" + "\n".join(lineas))
