#!/bin/sh

dot -Tpdf -o lds_process.pdf lds_process.dot
pdflatex rapport.tex &&
bibtex rapport.aux &&
pdflatex rapport.tex && 
pdflatex rapport.tex &&
xdg-open rapport.pdf  2> /dev/null
