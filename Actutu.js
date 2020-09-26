livres = [
    {
        titre: "Les aventures de Glandalf",
        auteur: "Gladalf imself",
        prix: 15,
        image: "les aventure de glandalf.jpg",
        resume: "Raconte l'aventure de Glandalf"
    },

    {
        titre: "La revanche Glandalf",
        auteur: "Jsaipas Qui",
        prix: 12,
        image: "la vengance de glandalf.jpg",//chaque livres est dans ce tableau
        resume: "Raconte la revanche de Glandalf"
    },
    {
        titre: "Le retour",
        auteur: "Jsuis Perdu",
        prix: 8,
        image: "la revanche de glandalf.jpg",
        resume: "Raconte jesaispaskwa"
    },
    {
        titre: "Le retour de la vengance de l'aventure de Glandalf",
        auteur: "Gladalf imself",
        prix: 4,
        image: "le retour de la vengance de glandalf .jpg",
        resume: "Raconte Le retour de la vengance de l'aventure de Glandalf"
    }
]
function afficheRecommandations() {//ici c'est la fonction qui permet d'afficher trois livre aléatoire sur le site

   


    livre_aleatoire = Math.floor(Math.random() * livres.length);
    livre_aleatoire2 = Math.floor(Math.random() * livres.length);
    livre_aleatoire3 = Math.floor(Math.random() * livres.length);

    document.getElementById('titre1').innerHTML = livres[livre_aleatoire].titre;
    document.getElementById('auteur1').innerHTML = livres[livre_aleatoire].auteur;
    document.getElementById('price1').innerHTML = livres[livre_aleatoire].prix;
    document.getElementById('posterGlandalf1').setAttribute("src", livres[livre_aleatoire].image);

   
    document.getElementById('titre2').innerHTML = livres[livre_aleatoire2].titre;
    document.getElementById('auteur2').innerHTML = livres[livre_aleatoire2].auteur;
    document.getElementById('price2').innerHTML = livres[livre_aleatoire2].prix;
    document.getElementById('posterGlandalf2').setAttribute("src", livres[livre_aleatoire2].image);


    document.getElementById('titre3').innerHTML = livres[livre_aleatoire3].titre;
    document.getElementById('auteur3').innerHTML = livres[livre_aleatoire3].auteur;
    document.getElementById('price3').innerHTML = livres[livre_aleatoire3].prix;
    document.getElementById('posterGlandalf3').setAttribute("src", livres[livre_aleatoire3].image);

}
afficheRecommandations()// ici la fonction qui affiche les livres par rapport a un prix max

var prixMax = 12;
livres.forEach(function (livre) {
    if (livre.prix <= prixMax) {
        console.log(livre);
    }


});
