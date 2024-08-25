### Resizing and Squeezing Letters in LaTeX

This repository contains the code and images for resizing and squeezing letters using LaTeX and ImageMagick.

**To generate `sized_logo_v3.png`**:

1. Create the LaTeX file:
```latex
\documentclass{standalone}
\usepackage{amsmath}
\begin{document}
\Huge
\vspace*{3in}$\displaystyle\Sigma\ \scriptscriptstyle \kern-0.1em\vdash\ \kern-0.1em\displaystyle \Delta\ \scriptscriptstyle \kern-0.1em\vdash\ \kern-0.1em\displaystyle \Pi$
\vspace*{3in}
\end{document}
```

**Explanation**:
- `\displaystyle`: Used to make Greek letters larger.
- `\scriptscriptstyle`: Used to make the `\vdash` symbols smaller.
- `\kern-0.1em`: Adjust spacing between symbols.

2. Compile the LaTeX file to a PDF:
```sh
pdflatex sized_logo_v3.tex
```

3. Convert the PDF to a high-resolution PNG using ImageMagick:
```sh
magick convert -density 6000 -background white -alpha remove -resize 12000x12000 sized_logo_v3.pdf sized_logo_v3.png
```

