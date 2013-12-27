Voir les slides
===============
Ouvrir le fichier slides.html avec un navigateur récent (Chromium, Firefox, Pas Internet Explorer...).
Certains éléments peuvent ne pas s'afficher correctement si le PC n'est pas connecté à internet (il manque certains CSS).

Compiler les slides
==================
Les slides utilisent reveal.js comme logiciel de présentation et sont écrites en jade.

Pour les compiler :

    jade slides.jade

Pour surveiller le fichier jade et le recompiler a chaque sauvegarde : 

    jade -w -P slides.jade

Il suffit ensuite d'ouvrir le fichier slides.html dans un navigateur web pour que ca marche. 
