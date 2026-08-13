from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/fenix-solutions/public/images/new-hope')
for stem in ('new-hope-building-placeholder', 'new-hope-project-placeholder'):
    source = root / f'{stem}.png'
    target = root / f'{stem}.webp'
    with Image.open(source) as image:
        image.save(target, 'WEBP', quality=88, method=6)
    source.unlink()
    print(target)
