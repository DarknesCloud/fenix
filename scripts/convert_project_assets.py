from pathlib import Path
from PIL import Image

assets = [
    ('project-new-hope.png', 'project-new-hope.webp'),
    ('project-installation.png', 'project-installation.webp'),
    ('project-repair.png', 'project-repair.webp'),
    ('project-web.png', 'project-web.webp'),
]

base = Path(__file__).resolve().parent.parent / 'public' / 'images' / 'projects'
for source_name, target_name in assets:
    source = base / source_name
    target = base / target_name
    with Image.open(source) as image:
        image.convert('RGB').save(target, 'WEBP', quality=88, method=6)
        print(f'{target.name}: {image.size[0]}x{image.size[1]}')
