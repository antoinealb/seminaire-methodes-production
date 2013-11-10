#!/bin/sh

dot -Tpdf -o images/lds_process.pdf images/lds_process.dot &&
pdflatex rapport.tex &&
bibtex rapport.aux &&
pdflatex rapport.tex && 
pdflatex rapport.tex &&
xdg-open rapport.pdf  2> /dev/null
