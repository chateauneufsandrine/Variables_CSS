// let inputSpacing = document.querySelector("#spacing");
// let inputBlur = document.querySelector("#blur");
// let inputColors = document.querySelector("#colors");
// // console.log(inputSpacing);
// // console.log(inputBlur);

// inputSpacing.addEventListener("change", handleChangeLaVariable);
// inputBlur.addEventListener("change", handleChangeLeBlur);
// inputColors.addEventListener("change", handlechangeLaCouleur);

// function handleChangeLaVariable() {
//   console.log(inputSpacing.value + "vh");
//   document.documentElement.style.setProperty(
//     `--spacing`,
//     inputSpacing.value + "vh"
//   );
  
// }

// function handleChangeLeBlur() {
//   console.log(inputBlur.value + "vh");
//   document.documentElement.style.setProperty(
//     `--blur`,
//     inputBlur.value + "vh"
//   );

// }

// function handlechangeLaCouleur() {
//   document.documentElement.style.setProperty("--color", inputColors.value);
// }

///////////  VERSION DYNAMIQUE ///////////

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("change", handleChangeOnInput);
});

function handleChangeOnInput(event){
  let input = event.target;
  let inputValue = input.value;
  let sizing = input.dataset.sizing;
 
  if (sizing) {
    inputValue += sizing;
  }

  let cssVariable = `--${input.name}`;
  
  document.documentElement.style.setProperty(cssVariable, inputValue); 
}