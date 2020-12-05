/* mit jOuery arbeiten; Variablen einlesen */
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
/* var id= document.querySelector('.id'); */
var icon= document.querySelector('.icon');


/* Daten aus API gewinnen */
button.addEventListener('click', function(name){
  /* 5 Tage Vorhersage mit 16 Tage Funktion über vorgeschlagenen API-Dienst nicht kostenlos */
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=d0bb3f25c1d2250eff68d40b5fe26ff5')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        /* var idValue = data['weather'][0]['id']; */
        var iconValue = data['weather'][0]['icon'];

    main.innerHTML = nameValue;
    desc.innerHTML = "Rudolf sees... "+descValue +"!";
    temp.innerHTML = "Temperature: "+tempValue;
    /* id.innerHTML = "Weather-ID: "+idValue; */
    /* icon.innerHTML = iconValue; */
    input.value ="";

    /* Popup */
    document.getElementById("card").style.visibility = "visible";
   
    /* Wetter-Icon festlegen */
    if(iconValue == '01d') {
      document.getElementById("picture").src = "01d.png";
    }
    if(iconValue == '01n') {
      document.getElementById("picture").src = "01n.png";
    }
    if(iconValue == '02d') {
      document.getElementById("picture").src = "02d.png";
    }
    if(iconValue == '02n') {
      document.getElementById("picture").src = "02n.png";
    }
    if(iconValue == '03n') {
      document.getElementById("picture").src = "03n.png";
    }
    if(iconValue == '04d') {
      document.getElementById("picture").src = "04d.png";
    }
    if(iconValue == '05d') {
      document.getElementById("picture").src = "05d.png";
    }
    if(iconValue == '04n') {
      document.getElementById("picture").src = "04n.png";
    }
    if(iconValue == '05n') {
      document.getElementById("picture").src = "05n.png";
    }
    if(iconValue == '03d') {
      document.getElementById("picture").src = "03d.png";
    }
    if(iconValue == '09d') {
      document.getElementById("picture").src = "09d.png";
    }
    if(iconValue == '09n') {
      document.getElementById("picture").src = "09n.png";
    }
    if(iconValue == '10d') {
      document.getElementById("picture").src = "10d.png";
    }
    if(iconValue == '10n') {
      document.getElementById("picture").src = "10n.png";
    }
    if(iconValue == '11d') {
      document.getElementById("picture").src = "11d.png";
    }
    if(iconValue == '11n') {
      document.getElementById("picture").src = "11n.png";
    }
    if(iconValue == '13d') {
      document.getElementById("picture").src = "13d.png";
    }
    if(iconValue == '13n') {
      document.getElementById("picture").src = "13n.png";
    }
    if(iconValue == '50d') {
      document.getElementById("picture").src = "50d.png";
    }
    if(iconValue == '50n') {
      document.getElementById("picture").src = "50n.png";
    }

})

/*Fehler, kein Extrafehlercode für "appid" Fehler*/
.catch(err => alert("Only for city's from planet earth!"));
})