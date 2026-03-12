// Définir la variable permettant de récupérer l'input de type color
/* A cette variable, appliquer la méthode (addEventListener) écoutant l'événement 
de type change et jouant la fonction permettant d'ajouter une propriété de style
 (SetProperty) au document :
- le nom de la propriété est la variable CSS --main-color 
- La valeur est définie par la valeur de l'input
*/

let inputChooser = document.querySelector("#chooser");

inputChooser.addEventListener("change", changerLaCouleur);

function changerLaCouleur() {
  document.documentElement.style.setProperty(
    "--main-color",
    inputChooser.value,
  );
}
