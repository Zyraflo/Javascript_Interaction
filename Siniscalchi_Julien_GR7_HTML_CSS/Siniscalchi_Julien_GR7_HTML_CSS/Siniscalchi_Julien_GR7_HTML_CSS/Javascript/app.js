let accordeons = document.querySelectorAll(".accordeon");

accordeons.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});

const image = document.getElementById("burger"); //on définit un objet avec son id

image.addEventListener("click", () => {
  image.setAttribute("src", "images/croix.png"); // Quand l'objet est cliqué, on change la source de l'image pour mettre la croix
});

function validerFormulaire() {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var adresse = document.getElementById("adresse").value;
  var ville = document.getElementById("ville").value;
  var email = document.getElementById("email").value;
  var codePostal = document.getElementById("code-postal").value;
  var pays = document.getElementById("pays").value;
  var motDePasse = document.getElementById("mot-de-passe").value;
  var confirmerMotDePasse = document.getElementById(
    "confirmer-mot-de-passe"
  ).value;
// Vérifier la taille de 2 caractères minimum pour le prénom, nom, adresse et ville
  if (
    nom.length < 2 ||
    prenom.length < 2 ||
    adresse.length < 2 ||
    ville.length < 2
  ) {
    alert(
      "Veuillez remplir correctement les champs Nom, Prénom, Adresse, Ville (au moins 2 caractères)."
    );
    return;
  }
// Vérifier que l'on entre bien une adresse mail
  if (email.indexOf("@") === -1) {
    alert("Veuillez saisir une adresse email valide.");
    return;
  }
// Vérifier la taille du code postal, 5 caractères minimum
  if (codePostal.length !== 5) {
    alert("Le code postal doit contenir exactement 5 caractères.");
    return;
  }
// Vérifier qu'un pays a bien été choisis
  if (pays === "") {
    alert("Veuillez sélectionner un pays.");
    return;
  }
// Vérifier la taille du mdp, 6 caractères minimum
  if (
    motDePasse.length < 6 ||
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(motDePasse)
  ) {
    alert(
      "Le mot de passe doit contenir au moins 6 caractères avec des caractères alphanumériques."
    );
    return;
  }
// Vérifier que le mdp de confirmation soit le même
  if (motDePasse !== confirmerMotDePasse) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  // Si toutes les conditions sont remplies, afficher le message de confirmation
  document.getElementById("inscription-form").style.display = "none";
  document.getElementById("confirmation-message").style.display = "block";
}
