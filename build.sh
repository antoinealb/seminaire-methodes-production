#!/bin/sh

pdflatex rapport.tex &&
bibtex rapport.aux &&
pdflatex rapport.tex && 
pdflatex rapport.tex &&
xdg-open rapport.pdf  2> /dev/null
