var ida = document.querySelector('.ida');
var idb = document.querySelector('.idb');
var idc = document.querySelector('.idc');
var urla = document.querySelector('.urla');
var urlb = document.querySelector('.urlb');
var urlc = document.querySelector('.urlc');

var button= document.querySelector('.submit');

/* Daten aus API für 3 Bilder gewinnen */

fetch('https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJXcUpEVjB2ZA1lWeWoyMWlYUWltNWJyUVk3VUkxczVuNWR5X3JPQXlrUFJmVTVSOW52VlRuOFcyenRDRUhPeUNkX1BSYkpCOENyb3IwMkZAvSXJCVkduN0Y5akF0MndSSU5VRmVR')
.then(response => response.json())
.then(data => {
    var idaValue = data['data'][0]['id'];
    var idbValue = data['data'][1]['id'];
    var idcValue = data['data'][2]['id'];

/* ida.innerHTML = idaValue;
idb.innerHTML = idbValue;
idc.innerHTML = idcValue; */

fetch('https://graph.instagram.com/'+idaValue+'?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXcUpEVjB2ZA1lWeWoyMWlYUWltNWJyUVk3VUkxczVuNWR5X3JPQXlrUFJmVTVSOW52VlRuOFcyenRDRUhPeUNkX1BSYkpCOENyb3IwMkZAvSXJCVkduN0Y5akF0MndSSU5VRmVR')
.then(response => response.json())
.then(pic => {
    var urlaValue = pic['media_url'];

fetch('https://graph.instagram.com/'+idbValue+'?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXcUpEVjB2ZA1lWeWoyMWlYUWltNWJyUVk3VUkxczVuNWR5X3JPQXlrUFJmVTVSOW52VlRuOFcyenRDRUhPeUNkX1BSYkpCOENyb3IwMkZAvSXJCVkduN0Y5akF0MndSSU5VRmVR')
.then(response => response.json())
.then(pic => {
    var urlbValue = pic['media_url'];

fetch('https://graph.instagram.com/'+idcValue+'?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXcUpEVjB2ZA1lWeWoyMWlYUWltNWJyUVk3VUkxczVuNWR5X3JPQXlrUFJmVTVSOW52VlRuOFcyenRDRUhPeUNkX1BSYkpCOENyb3IwMkZAvSXJCVkduN0Y5akF0MndSSU5VRmVR')
.then(response => response.json())
.then(pic => {
    var urlcValue = pic['media_url'];
 
/* erhaltenen Bilder ins HTML einfügen */    
document.getElementById("picinsta").src = urlaValue;
document.getElementById("picinstb").src = urlbValue;
document.getElementById("picinstc").src = urlcValue;

/* urla.innerHTML = urlaValue;
urlb.innerHTML = urlbValue;
urlc.innerHTML = urlcValue; */

})
})
})
})
