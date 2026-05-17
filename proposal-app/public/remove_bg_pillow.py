from PIL import Image, ImageDraw
import os

def remove_background(image_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Create a mask using floodfill from corners
    rgb_img = img.convert('RGB')
    
    # Floodfill the background with magenta
    ImageDraw.floodfill(rgb_img, (0, 0), (255, 0, 255), thresh=30)
    ImageDraw.floodfill(rgb_img, (img.width-1, 0), (255, 0, 255), thresh=30)
    ImageDraw.floodfill(rgb_img, (0, img.height-1), (255, 0, 255), thresh=30)
    ImageDraw.floodfill(rgb_img, (img.width-1, img.height-1), (255, 0, 255), thresh=30)
    
    data = img.getdata()
    rgb_data = rgb_img.getdata()
    
    new_data = []
    for i, item in enumerate(rgb_data):
        if item == (255, 0, 255):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(data[i])
            
    img.putdata(new_data)
    img.save(image_path)
    print(f"Processed {image_path}")

for filename in os.listdir("."):
    if filename.endswith(".png"):
        remove_background(filename)
