# Simple Web Shop

## Project Overview

This repository contains the source code and assets for a simple web shop utilizing Printify API for custom t-shirt orders. 

### Directory Structure
- `angular/`: Contains Angular project files.
- `js/`: Contains JavaScript files.
- `assets/`: Contains assets such as LaTeX source files and images.
      - `latex/source`: LaTeX source (.tex) and auxiliary files (.aux, .log).
      - `latex/images`: Generated images and PDFs from LaTeX files.

## Developer Notes
- **LaTeX Documentation**: See the `image_generation.md` and `resizing_and_squeezing_letters.md` for commands and instructions to generate and adjust images.

## To-Do List:
- [ ] Integrate Printify API for product management
- [ ] Finalize web shop layout and UI/UX
- [ ] Implement checkout and payment functionalities
- [ ] Set up deployment workflows

## Useful Commands:
- Compile LaTeX to PDF:
  ```sh
  pdflatex <filename>.tex
  ```
- Convert PDF to PNG using ImageMagick:
  ```sh
  magick convert -density 6000 -background white -alpha remove -resize 12000x12000 <filename>.pdf <filename>.png
  ```


