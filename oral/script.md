# Slide de titre
Bonjour okay ?

#Intro
## Qu'est-ce qu'un MID ?
* Circuit électronique
* Substrat plastique
* 3D

# Applications
* Forte intégration

## Automobile
* Volant
* Guidon
* Diminue le cablâge

## Telecom
* Permet de maitriser le pattern de radiation.
* Permet d intégrer au chassis
* Premier exemple : Antenne 2.4Ghz soudable
* Second exemple : Antenne de smartphone intégrée (tout les fabriquants sauf Apple qui utilie le chassis métallique).

##Connectique
* Fischer minimax : pièce d exemple qui est presentee. Tres forte densite de pins (30 pins sur 10mm de diametre). Environnement hostile (etanche a l'eau de mer, au sable, etc...)
* Train miniature : Seul le contact de droite est en MID, l autre en tole de Cu pliée

#Fabrication des MID
* Deux processus : LDS et 2-shot
* Le LDS est plus récent et de loin le plus utilisé.
##Laser Direct Structuring
* Trois étapes.
* Breveté par LPKF.
* Adapté a la prod de masse depuis 2006.

##Injection
* Procédé d'injection standard.
* On utilise un thermoplastique dopé avec un composé a base de palladium, qui servira d'attache pendant la métallisation.
* Ce dopant augmente la viscosité -> Presse d'injection électrique obligatoire pour un controle precis de l'injection

##Activation
* On "brûle" le polymère avec un laser, ce qui ne laisse que le palladium et des cavités.
* Le laser suit le tracé des pistes.
* Sur la video : On observe la vitesse du laser et le changement de couleur sur le tracé des pistes. Le tuyau derrière sert a absorber les fumées de polymère.

##Métallisation
* Procédé semblable au PCB, sauf pour le cuivre.
* Déposition sans électricité
* Différentes couches visible sur la slide.
* Le nickel sert a empêcher le cuivre de diffuser dans l'or qui le protège de l'oxydation.
* Possibilité de faire une couche de cuivre galvanique après la première couche de cuivre, mais les pistes doivent etre connectés avant de métalliser (partie enlevable).
* Étape longue, mais on mets plusieurs pièces a la fois.

## Vidéo de métallisation
* Tambour sert a mettre plusieurs pièces a la fois.
* Il tourne pour brasser les pièces.
* Changement de bain automatique.
* Les bulles sont des bulls d'hydrogène (produit de réaction). On doit faire attention a ne pas les pieger dans la piece ce qui arreterait la reaction.

##Two-shot
* Procédé plus ancien
* Plus cher (demande deux moules).
* Permet de faire des pièces impossible au LDS.

#Conception
* Toutes les règles a respecter sont dans ce document fait par LPKF.
* Polymères activables (voir liste). Fournisseurs dans document.
* Taille des pistes. Clearance = distance entre les pistes.
* angle d'incidence : Laser doit pouvoir acceder a la piste en respectant un angle pour eviter une perte d'intensite et de resolution. -> On fait tourner la pièce ou plusieurs lasers.

## Prototypage
* Injection peu facile a prototyper -> Impression 3D + ProtoPaint.
* Possible de faire un soft mold pour tester l'injection (moins cher).
* Possibilité d'usiner un bloc de matière activable. 
* Avant l'impression 3D, moulage sous vide (20 piece).
* Délais : 6 semaines pour lancer une série, 1 semaine pour un proto 3D. 4 semaines pour un soft mold.

#Coûts
##Pièce étudiée
* Protection contre l'intrusion.
* Voir mécanique
* Pas le droit de le prendre en photo (confidentiel) mais... INTERNET
* Série de 500'000, production 5 jours sur 7, 24/24.

##Injection
* CAO donne 25 grammes de PC.
* Moule estimé avec le séminaire d'électroérosion et UGV.
* Temps de cycle estimé à 20 secondes pendant la visite de l'usine.

##Activation
* Un opérateur par machine, qui fait une pièce a la fois.
* Temps de cycle de 30s comprenant inspection des pièces.
* Machines LPKF très cher, car monopole.
##Métallisation
* Difficile a calculer, manque d'info.
* Expliquer les hypothèses sur le métal (5x plus, tout compris).
* Finition standard, 6 um de cuivre.
* Expliquer que le temps de cycle est dominé par le bain de cuivre.

## Récapitulatif
* Etape la plus cher : métallisation, car métaux chers.

## Récapitulatif 2
* Diminution des coûts possible avec des machines d'activation automatique.
* Electricité négligeable, donc pas sur le graphique.

# Et les PCB ?
* On se demande pourquoi pas tout en MID ?
* Les MID ne remplacent pas les PCB.o
## MID vs PCB
* Densité de pistes
* Fonction mécaniques sur pièce MID
* Connecteur sur MID un peu étrange, mais p-e norme.
* Circuit multicouche.
* Ces deux images montrent des bons exemples d'application ou l'autre solution serait absurde.

##Alternatif PCB
* Pour montrer la différence de prix pour une solution intégrée
* Même fonction qu'avant
* Expliquer les trois pièces.
* Seul le fond est considéré.
* Assemblage manuel

##Coût de l'alternative
* Cout du PCB calculé avec le séminaire adapté (pas de via pas de trou monoface)
* Le connecteur et son assemblage sont estimés.
* Boitier en PC standard (donc moins cher) mais meme moule.
* Assemblage estimé a 10 secondes sans colle ni vis.
* 2x plus cher **ordre de grandeur**, sans protection sur les cotés.
* Avantage des MID dans ce type d'application avec fonction mécanique.
* D'autre applications rendraient peut etre les PCB plus intéressants.
* Utiliser le meilleur des deux mondes (exemple tel portable avec antenne MID et carte mere PCB).
