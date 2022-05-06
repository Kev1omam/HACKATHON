function dropOver(e) {
    e.preventDefault();
    //console.log(e);
    console.log("le toucher")
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id );
    console.log("le commencement" , e.target.id );
  }

function drop(e) {
    e.preventDefault();
    console.log("finish");
    var data = e.dataTransfer.getData("text");
    e.target.append(document.getElementById(data));
    
  }

console.log("bonjour");