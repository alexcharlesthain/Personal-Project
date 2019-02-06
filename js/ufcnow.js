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

      document.getElementById("fighter").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].lastName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].style + "<br><br>" + JSONarray[i].dob + "<br><br>" + JSONarray[i].pob + "<br><br>";
    }
  }
}

function showBantam(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Bantamweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showWelter(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Welterweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showHeavy(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Heavyweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showMiddle(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Middleweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showFeather(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Featherweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showLight(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Lightweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

function showLHW(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].class == "Light-Heavyweight"){

      document.getElementById("textarea").innerHTML += JSONarray[i].firstName + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].fighters + "<br><br>";
    }
  }
}

//function showDocumentary(film){
  //document.getElementById("textarea").innerHTML = "";

//  for(i = 0; i < JSONarray.length; i++){

  //  if(JSONarray[i].category == "Documentary"){

  //    document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].price + "<br><br>";
