let color ; 
let tab = [];
let cameroun = ["green", "red" , "yellow" , "green" , "red" , "yellow"];
let france = ["blue", "white" , "red" , "blue", "white" , "red" ];
let senegal = ["green" , "jaune" , "rouge" ,"green" , "jaune" , "rouge"  ];
let tchad = ["blue", "yellow" , "red" , "blue", "yellow" , "red"];
let canada = ["red", "white" , "red" ,"red", "white" , "red"];

let country;
function dropOver(e) {
    e.preventDefault(); 
    console.log("le toucher")
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id );
    color = e.target.id;
    console.log("le commencement" , e.target.id );
  }

function drop(e) {
    e.preventDefault(); 
    var data = e.dataTransfer.getData("text");
    e.target.append(document.getElementById(data));
    e.target.style.backgroundColor = color;
    console.log("finish", e.target.id , color);
    //tab.push(color);
    tab[e.target.id - 1] = color
    console.log(tab);

    if(tab.length == 6 && tab[0] !== undefined && tab[1] != undefined && tab[2] != undefined && tab[3] != undefined && tab[4] != undefined && tab[5] != undefined){
      console.log("ready !!!");
      console.log(tab);
      // for (let i = 0; i < tab.length; i++) {
      //     if (tab[i] === cameroun[i]) {
      //         country = "cameroun"
      //     }
      // }

     if(JSON.stringify(tab)==JSON.stringify(cameroun)){
        country = "cameroun"
        alert(country);
     } else if(JSON.stringify(tab)==JSON.stringify(france)){
      country = "france"
      alert(country);
   } else if(JSON.stringify(tab)==JSON.stringify(canada)){
    country = "canada"
    alert(country);
 } else if(JSON.stringify(tab)==JSON.stringify(senegal)){
  country = "senegal"
  alert(country);
} else if(JSON.stringify(tab)==JSON.stringify(tchad)){
  country = "tchad"
  alert(country);
} else {
  alert("try Again")
}

      
      
    }


   
  }

  

console.log("bonjour");