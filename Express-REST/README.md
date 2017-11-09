# Exercice Express + Mongoose

## 1 - Faire l'update d'un contact

    PUT /api/contacts/5a043028126767db1ab8d784 HTTP/1.1
    Host: localhost
    Content-type: application/json

    {
      "prenom": "Jean",
      "nom": "Dupont"
    }

## 2 - Créer un nouveau Model Societe

Créer les URL :

* GET /api/societes
* GET /api/societes/5a043028126767db1ab8d784

## 3 - Facultatif, faire des "jointures" avec populate

Sur GET /api/contacts/5a043028126767db1ab8d784

Afficher la société à laquelle il appartient
