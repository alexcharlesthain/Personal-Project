let JSONarray = [];

function loadDb(){

  let requestURL = "http://127.0.0.1:8080/api2/ufc/allProducts"
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


function searchProducts(ufc){
  document.getElementById("product").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].title.includes(ufc.value.toUpperCase())){

      //document.getElementById("product").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].category + "<br><br>" + JSONarray[i].rating + "<br><br>£" + JSONarray[i].price + "<br><br>";
      document.getElementById("product").innerHTML += "<br><div class='holster'>" + JSONarray[i].title + "<br>" + JSONarray[i].description + "<br>"  + JSONarray[i].category + "<br>£" + JSONarray[i].price + "<div id='holster'><br>";
    }
  }
}

function showGloves(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "gloves"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].price + "<br><br>£";
    }
  }
}

function show(ufc){
  document.getElementById("textarea").innerHTML = "";

  for(i = 0; i < JSONarray.length; i++){

    if(JSONarray[i].category == "Gear"){

      document.getElementById("textarea").innerHTML += JSONarray[i].title + "<br>" + JSONarray[i].description + "<br><br>"  + JSONarray[i].price + "<br><br>£";
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
