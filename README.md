# Simple Web Shop

## Project Overview

This repository contains the source code and assets for a simple web shop utilizing the Printify API for custom t-shirt orders.

### Directory Structure
- `scripts/`: Contains JavaScript files and various scripts.
- `logs/`: Contains log files.
- `assets/`: Contains assets such as LaTeX source files and images.
    - `latex/source`: LaTeX source (.tex) and auxiliary files (.aux, .log).
    - `latex/output`: Generated PDFs from LaTeX files.
    - `latex/images`: Generated images from LaTeX files.
- `index.html`: Main HTML file for the web shop.

## Developer Notes
- **LaTeX Documentation**: See the `image_generation.md` and `resizing_and_squeezing_letters.md` for commands and instructions to generate and adjust images.

## Printify API
The Printify API allows for programmatic management of custom products. Below are some of the commands used:
- **Generate an API Key**: Visit [Printify API](https://printify.com/api) to generate an API key.
- **Get Available Blueprints**:

`curl -X GET "https://api.printify.com/v1/catalog/blueprints" -H "Authorization: Bearer <API_KEY>"`


- **Create a Product**:

```
curl -X POST "https://api.printify.com/v1/shops/<SHOP_ID>/products.json" -H "Authorization: Bearer <API_KEY>" -H "Content-Type: application/json" -d '{
    "title": "Custom T-Shirt",
    "blueprint_id": 3,
    "print_provider_id": 1,
    "variants": [
      {
        "id": 4011,
        "price": 1999,
        "is_enabled": true
      }
    ],
    "print_areas": [
      {
        "variant_id": 4011,
        "image_id": "<IMAGE_ID>",
        "placeholders": [
          {
            "position": "front"
          }
        ]
      }
    ]
  }'
```
## Useful Commands:
- Compile LaTeX to PDF:
pdflatex <filename>.tex
sh
- Convert PDF to PNG using ImageMagick:
magick convert -density 6000 -background white -alpha remove -resize 12000x12000 <filename>.pdf <filename>.png
sh
## To-Do List:
- [ ] Integrate Printify API for product management
- [ ] Finalize web shop layout and UI/UX
- [ ] Implement checkout and payment functionalities
- [ ] Set up deployment workflows

## Vercel Deployment Commands:

1. Install Vercel CLI:
npm install -g vercel

2. Login to Vercel:
vercel login

3. Deploy to Vercel:
vercel


