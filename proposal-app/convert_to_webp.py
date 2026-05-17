import os
from PIL import Image

public_dir = r"c:\Users\samuk\Desktop\2k26ZLL\proposal-app\public"

print("Starting WebP conversion...")
converted_count = 0

for filename in os.listdir(public_dir):
    if filename.endswith(".png"):
        img_path = os.path.join(public_dir, filename)
        webp_path = os.path.join(public_dir, filename.replace(".png", ".webp"))
        try:
            img = Image.open(img_path)
            # Save as WebP with 80% quality
            img.save(webp_path, "WEBP", quality=80, method=6)
            print(f"Successfully converted {filename} to WebP.")
            # Remove original PNG to save space
            os.remove(img_path)
            converted_count += 1
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")

print(f"Conversion complete! Converted {converted_count} files.")
