from __future__ import annotations

from typing import Tuple

Color = Tuple[int, int, int]


def hex_to_rgb(value: str) -> Color:
    value = value.lstrip('#')
    return tuple(int(value[index:index + 2], 16) for index in (0, 2, 4))  # type: ignore[return-value]


def composite(foreground: Color, alpha: float, background: Color) -> Color:
    return tuple(round(foreground[index] * alpha + background[index] * (1 - alpha)) for index in range(3))  # type: ignore[return-value]


def luminance(color: Color) -> float:
    channels = []
    for channel in color:
        normalized = channel / 255
        channels.append(normalized / 12.92 if normalized <= 0.04045 else ((normalized + 0.055) / 1.055) ** 2.4)
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]


def contrast(foreground: Color, background: Color) -> float:
    light, dark = sorted((luminance(foreground), luminance(background)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


primary = hex_to_rgb('#0B1F33')
primary_card = hex_to_rgb('#102A43')
white = hex_to_rgb('#FFFFFF')
gold_light = hex_to_rgb('#E0AF4F')
accent_gold = hex_to_rgb('#C58A24')
muted = hex_to_rgb('#667085')
secondary_tech = hex_to_rgb('#1E5A8A')

pairs = {
    'Texto muted sobre blanco': (muted, white),
    'Gold light sobre azul profundo': (gold_light, primary),
    'Accent gold sobre azul profundo': (accent_gold, primary),
    'Azul tecnológico sobre blanco': (secondary_tech, white),
    'Blanco 68% sobre azul profundo': (composite(white, 0.68, primary), primary),
    'Blanco 74% sobre azul profundo': (composite(white, 0.74, primary), primary),
    'Blanco 76% sobre azul profundo': (composite(white, 0.76, primary), primary),
    'Blanco 52% sobre azul oscuro': (composite(white, 0.52, primary_card), primary_card),
    'Blanco 68% sobre azul oscuro': (composite(white, 0.68, primary_card), primary_card),
    'Blanco 72% sobre azul profundo': (composite(white, 0.72, primary), primary),
}

for label, (foreground, background) in pairs.items():
    value = contrast(foreground, background)
    level = 'AA texto normal' if value >= 4.5 else 'AA texto grande/controles' if value >= 3 else 'No cumple AA'
    print(f'{label}: {value:.2f}:1 — {level}')
