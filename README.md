### Image Generation with LaTeX and ImageMagick

This repository contains the code and images for generating high-resolution logos using LaTeX and ImageMagick.

**To generate `squeezed_logo_v3.png`:**

1. Create the LaTeX file:
```latex
\documentclass{standalone}
\usepackage{amsmath}
\usepackage{graphicx}
\begin{document}
\Huge
\vspace*{3in}$\Sigma$\kern-0.1em$\vdash$\kern-0.1em$\Delta$\kern-0.1em$\vdash$\kern-0.1em$\Pi$
\vspace*{3in}
\end{document}
```

2. Compile the LaTeX file to a PDF:
```sh
pdflatex squeezed_logo_v3.tex
```

3. Convert the PDF to a high-resolution PNG using ImageMagick:
```sh
magick convert -density 6000 -background white -alpha remove -resize 12000x12000 squeezed_logo_v3.pdf squeezed_logo_v3.png
```

