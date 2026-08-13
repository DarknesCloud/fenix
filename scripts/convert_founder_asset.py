from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/fenix-solutions/public/images/founder/founder-placeholder.png')
target = source.with_suffix('.webp')
with Image.open(source) as image:
    image.save(target, 'WEBP', quality=88, method=6)
source.unlink()
print(target)
