///////////////////////////////////////////////////////////////////////////
// Hackathon project theme :  Game Flag                                  //
// write by Oman Kevin and fuh goolove etienne                           // 
///////////////////////////////////////////////////////////////////////////

// gloval variable to set the color 
let color;

// content the element that the user have selected 
let tab = [];

// cameroun position element color
let cameroun = ["green", "red", "yellow", "green", "red", "yellow"];
// france position element color
let france = ["blue", "white", "red", "blue", "white", "red"];
// senegal position element color
let senegal = ["green", "jaune", "rouge", "green", "jaune", "rouge"];
// tchad position element color
let tchad = ["blue", "yellow", "red", "blue", "yellow", "red"];
// canada position element color
let canada = ["red", "white", "red", "red", "white", "red"];
// variable the content the name of the country
let country;

// drop over event
function dropOver(e) {
  e.preventDefault();
}

// drag event 
function drag(e) {
  // set the id of the target 
  e.dataTransfer.setData("text", e.target.id);
  color = e.target.id;
  console.log("le commencement", e.target.id);
}

// drop event 
function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.append(document.getElementById(data));
  e.target.style.backgroundColor = color;
  console.log("finish", e.target.id, color);
  //tab.push(color);
  tab[e.target.id - 1] = color
  console.log(tab);

  if (tab.length == 6 && tab[0] !== undefined && tab[1] != undefined && tab[2] != undefined && tab[3] != undefined && tab[4] != undefined && tab[5] != undefined) {

    if (JSON.stringify(tab) == JSON.stringify(cameroun)) {
      country = "cameroun"
      document.getElementById("country").innerHTML = country;
      son = new Audio("clap.wav");
      son.play();
    } else if (JSON.stringify(tab) == JSON.stringify(france)) {
      country = "france"
      document.getElementById("country").innerHTML = country
      son = new Audio("clap.wav");
      son.play();
    } else if (JSON.stringify(tab) == JSON.stringify(canada)) {
      country = "canada"
      document.getElementById("country").innerHTML = country
      son = new Audio("clap.wav");
      son.play();
    } else if (JSON.stringify(tab) == JSON.stringify(senegal)) {
      country = "senegal"
      document.getElementById("country").innerHTML = country
      son = new Audio("clap.wav");
      son.play();
    } else if (JSON.stringify(tab) == JSON.stringify(tchad)) {
      country = "tchad"
      document.getElementById("country").innerHTML = country
      son = new Audio("clap.wav");
      son.play();
    } else {
      document.getElementById("country").innerHTML = "retry again country dont exit now"
      son = new Audio("audio.mp3");
      son.play();
    }

  }

}

// let modal = document.getElementById("myModal");

// let span = document.getElementsByClassName("close")[0];

