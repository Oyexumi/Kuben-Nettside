//Variablene 
var fag1 = document.getElementById("fag1");
var fag2 = document.getElementById("fag2");
var fag3 = document.getElementById("fag3");
var fag4 = document.getElementById("fag4");
var fag5 = document.getElementById("fag5");
var fag6 = document.getElementById("fag6");
var fag7 = document.getElementById("fag7");
var fag8 = document.getElementById("fag8");
var fag9 = document.getElementById("fag9");
var fag10 = document.getElementById("fag10");
var fag11 = document.getElementById("fag11");

//Visuelle elementer
var resultatEl = document.getElementById("resultat");
var knappEl = document.getElementById("knapp").addEventListener("click", calculate);

//Funksjon som plusser alle karakterene
function calculate(e) {
    var sum = Number(fag1.value) + Number(fag2.value) + Number(fag3.value) + Number(fag4.value) + Number(fag5.value)
    + Number(fag6.value) + Number(fag7.value) + Number(fag8.value) + Number(fag9.value) + Number(fag10.value)
    + Number(fag11.value);

    var snitt = sum/11; //Funksjon som deler alle karaktererene på 11
    if (snitt < 4.45) { //Om Snittet er lavere en 4.45 får du en advarsel
      alert("Snittet ditt er for lavt for Kuben. GG go next")
    }
    else if (snitt > 6) { //Om Snittet er høyere enn 6 får du en advarsel
      alert("Snittet ditt er høyere enn 6. Har du regnet riktig?")
    }
    resultatEl.innerHTML = "Ditt karaktersnitt er: " + snitt.toFixed(2); //Viser karaktersnittet
}
fag2.oninput = function () {
  if (this.value.length > 1)
      this.value = this.value.slice(0,1); 
}

const allInputs = document.querySelectorAll(".input-elements"); //Leter etter all kode med input-elements classen for å sørge for at de ikke kan ha mer enn ett siffer
allInputs.forEach(input => {
  input.oninput = function () {
    if (this.value.length > 1)
        this.value = this.value.slice(0,1); 
      }
      });