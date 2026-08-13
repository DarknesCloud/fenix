from pathlib import Path
from PIL import Image

assets = [
    ('renacer.png', 'renacer.webp'),
    ('construir.png', 'construir.webp'),
    ('trascender.png', 'trascender.webp'),
]

base = Path(__file__).resolve().parent.parent / 'public' / 'images' / 'philosophy'
for source_name, target_name in assets:
    source = base / source_name
    target = base / target_name
    with Image.open(source) as image:
        image.convert('RGB').save(target, 'WEBP', quality=88, method=6)
        print(f'{target.name}: {image.size[0]}x{image.size[1]}')
