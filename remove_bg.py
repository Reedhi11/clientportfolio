import sys
from PIL import Image

def remove_bg(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        
        # We will use a simple flood fill approach from the edges
        mask = [[False for _ in range(width)] for _ in range(height)]
        
        # We need a faster queue (list pop(0) is O(N)), using a set for queue is faster for unique
        from collections import deque
        queue = deque()
        
        # Add all edge pixels to the queue
        for x in range(width):
            queue.append((x, 0))
            queue.append((x, height - 1))
        for y in range(height):
            queue.append((0, y))
            queue.append((width - 1, y))
            
        pixels = img.load()
        
        # Threshold for "background" (near white/light gray)
        def is_bg(r, g, b):
            return r > 220 and g > 220 and b > 220

        while queue:
            x, y = queue.popleft()
            if x < 0 or x >= width or y < 0 or y >= height:
                continue
            if mask[y][x]:
                continue
                
            r, g, b, a = pixels[x, y]
            if is_bg(r, g, b) and a > 0:
                mask[y][x] = True
                pixels[x, y] = (r, g, b, 0) # Make transparent
                # Add neighbors
                queue.append((x+1, y))
                queue.append((x-1, y))
                queue.append((x, y+1))
                queue.append((x, y-1))
                
        img.save(output_path, "PNG")
        print("Background removed successfully.")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    remove_bg("src/assets/socialmedia/phone_mockup.png", "src/assets/socialmedia/phone_mockup.png")
