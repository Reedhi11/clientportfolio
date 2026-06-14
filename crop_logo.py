from PIL import Image
import os

balaji_path = r"d:\Reedhi\Prakritiportfolio\src\assets\logo\balaji\balaji branding.jpg"
balaji_out = r"d:\Reedhi\Prakritiportfolio\src\assets\logo\balaji"

img = Image.open(balaji_path)
w, h = img.size

# Using the precise dark bands we found, here are the actual separator lines
# The separators we found:
#  y=1408 to y=1501  mid=1454 (End of Identity)
#  y=2436 to y=2524  mid=2480 (End of Idea)
#  y=3276 to y=3387  mid=3331 (End of Sketch)
#  y=3896 to y=3985  mid=3940 (End of Typography / start of Variations? - wait, the typography and variations are close. Let's look at the next gap)
#  y=4100 to y=4165  mid=4132 (End of Typography/Color)
#  y=4892 to y=4980  mid=4936 (End of Variations / start of Apps)

sections = {
    "brand_identity":    (0,    0, w, 1454),
    "brand_idea":        (0, 1454, w, 2480),
    "concept_sketch":    (0, 2480, w, 3331),
    "typography_color":  (0, 3331, w, 4132),
    "logo_variations":   (0, 4132, w, 4936),
    "brand_application": (0, 4936, w, h),
}

for name, box in sections.items():
    cropped = img.crop(box)
    out_path = os.path.join(balaji_out, f"{name}.png")
    cropped.save(out_path, "PNG")
    print(f"Saved {name}.png  crop=y({box[1]}-{box[3]})  h={box[3]-box[1]}px")

print("\nDone! All Balaji sections re-cropped accurately.")
