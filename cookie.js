var affichage = 0;
var score = 0;
var compteur = 1;
var prixMulti = 50;

function Clic() {
  score += compteur;
  var resultat = document.getElementById('licorne');
  resultat.innerHTML = score;
  var sound = document.getElementById("hiiii");
            sound.play();
};

function mouseDown(){document.getElementById('licorne').classList.add("dw");}
function mouseUp(){document.getElementById('licorne').classList.remove("dw");}

function incrementer(){
  if (score < prixMulti) {
    alert("Vous ne pouvez pas encore acheter ce bonus !");
  } else {
    compteur += 1;
    score -= prixMulti;
    prixMulti = prixMulti * 2;
    var resultat = document.getElementById('licorne');
    resultat.innerHTML = score;
    var multi = document.getElementById('multiplier');
    multi.innerHTML = "Multiplicateur x" + compteur + "<br>" + "Coût : " + prixMulti + " macarons";
  }
};

function mouseDown2(){document.getElementById('multiplier').classList.add("arc");}
function mouseUp2(){document.getElementById('multiplier').classList.remove("arc");}

function AutoClic(){
  if (score < 200){
   /* alert("Vous ne pouvez pas encore acheter ce bonus !");*/
  } else {
    score -= 200;
    var auto = setInterval(Clic, 10000);
    var resultat = document.getElementById('licorne');
    resultat.innerHTML = score;
  }
};

function mouseDown3(){document.getElementById('autoclicker').classList.add("chatarc");}
function mouseUp3(){document.getElementById('autoclicker').classList.remove("chatarc");}
