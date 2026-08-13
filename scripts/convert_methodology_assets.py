from pathlib import Path
from PIL import Image

assets = [
    ('step-01-entender.png', 'step-01-entender.webp'),
    ('step-02-disenar.png', 'step-02-disenar.webp'),
    ('step-03-construir.png', 'step-03-construir.webp'),
    ('step-04-evolucionar.png', 'step-04-evolucionar.webp'),
]

base = Path(__file__).resolve().parent.parent / 'public' / 'images' / 'methodology'
for source_name, target_name in assets:
    source = base / source_name
    target = base / target_name
    with Image.open(source) as image:
        image.convert('RGB').save(target, 'WEBP', quality=88, method=6)
        print(f'{target.name}: {image.size[0]}x{image.size[1]}')
