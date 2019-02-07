let JSONarray = [];

function loadDb(){

  let requestURL = "http://127.0.0.1:8080/api/ufc/getfighters"
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Access-Control-Allow-Origin','*');
  request.responseType = "json"
  request.send();
  request.onload = function() {
  console.log("dhsfuisdfh")
    JSONarray = request.response;

  }
}


function searchFighters(ufc){
  document.getElementById("fighter").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].firstName.includes(ufc.value.toUpperCase())){

      document.getElementById("fighter").innerHTML += "<br><div class='holster'>" + JSONarray[i].firstName + JSONarray[i].lastName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].style + "<br>" + JSONarray[i].weightClass + "<br>" + JSONarray[i].POB + "<div id='holster'><br>";
    }
  }
}

function showWeightClass(weightClass){
  //document.getElementById("bantam").innerHTML = "";
let string="";
  for(i in JSONarray){

    if(JSONarray[i].weightClass == weightClass){
      console.log(JSONarray[i]);

      string += "<p>"+JSONarray[i].firstName + JSONarray[i].lastName + "<br>"  + JSONarray[i].style + "<br>"  + JSONarray[i].weightClass + "<br></p>";


    }
  }
  document.getElementById("FightersList").innerHTML = string;
}

/*

function showBantam(){
  //document.getElementById("bantam").innerHTML = "";

  for(i in JSONarray){

    if(JSONarray[i].class == "Bantamweight"){

      document.getElementById("bantam").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}

function showWelter(ufc){
  document.getElementById("welter").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Welterweight"){

      document.getElementById("welter").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}

function showHeavy(ufc){
  document.getElementById("heavy").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Heavyweight"){

      document.getElementById("heavy").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}

function showFeather(ufc){
  document.getElementById("feather").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Featherweight"){

      document.getElementById("feather").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}

function showLight(ufc){
  document.getElementById("light").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Lightweight"){

      document.getElementById("light").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}

function showLHW(ufc){
  document.getElementById("lhw").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Light-Heavyweight"){

      document.getElementById("lhw").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].fighters + "<br>";
    }
  }
}*/
