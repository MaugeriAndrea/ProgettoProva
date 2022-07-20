function validazione(){
    var pass = document.getElementById('pass');
    var min = document.getElementById('min');
    var max = document.getElementById('max');
    var num = document.getElementById('num');
    var spec = document.getElementById('spec');
    var lun = document.getElementById('lun');
    var email = document.getElementById('email');


    if(pass.value.match(/[0-9]/)){
        num.style.color = "green";
    } else {
        num.style.color = "red";
    }

    if(pass.value.match(/[A-Z]/)){
        max.style.color = "green";
    } else {
        max.style.color = "red";
    }

    if(pass.value.match(/[a-z]/)){
        min.style.color = "green";
    } else {
        min.style.color = "red";
    }

    if(pass.value.match(/[!\"\£\$\%\&\/\(\)\=\?\^\<\>\.\,\;\:\[\]\{\}]/)){
        spec.style.color = "green";
    } else {
        spec.style.color = "red";
    }

    if(pass.value.length >= 8){
        lun.style.color = "green";
    } else {
        lun.style.color = "red";
    }

    if(email.value.match(/[@]/)){
        email = true;
    } else {
        email = false;
    }
    
}

function login(){
    var pass = document.getElementById('pass');
    var min = document.getElementById('min');
    var max = document.getElementById('max');
    var num = document.getElementById('num');
    var spec = document.getElementById('spec');
    var lun = document.getElementById('lun');
    var email = document.getElementById('email');
    
    if(pass.value.match(/[0-9]/)){
        num = true;
    } else {
        num = false;
    }

    if(pass.value.match(/[A-Z]/)){
        max = true;
    } else {
        max = false;
    }

    if(pass.value.match(/[a-z]/)){
        min = true;
    } else {
        min = false;
    }

    if(pass.value.match(/[!\"\£\$\%\&\/\(\)\=\?\^\<\>\.\,\;\:\[\]\{\}]/)){
        spec = true;
    } else {
        spec = false;
    }

    if(pass.value.length >= 8){
        lun = true;
    } else {
        lun = false;
    }

    if(email.value.match(/[@]/)){
        email = true;
    } else {
        email = false;
    }



    if (num == true && min == true && max == true && spec == true && lun == true && email == true){
        window.location.replace("./index.html");
    } else {
        alert('controlla i dati e riprova');
    }
    
}

const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random'

function loadImages(numImages = 18){
   let i=0;
    while(i < numImages){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
    const img =  document.createElement('img');
    img.src = `${data.message}`
    container.appendChild(img)
    })
    i++;
    }   
    }

loadImages();

window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY)
    console.log(window.innerHeight)
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages();
    }
})



function aggiungi(){
    alert("l'oggetto è stato aggiunto correttamente alla lista desideri");
}


function rimuovi1(){
    document.getElementById('img1').style.display = "none";
    document.getElementById('bottonea1').style.display = "none";
    document.getElementById('bottoner1').style.display = "none";
}

function rimuovi2(){
    document.getElementById('img2').style.display = "none";
    document.getElementById('bottonea2').style.display = "none";
    document.getElementById('bottoner2').style.display = "none";
}

function rimuovi3(){
    document.getElementById('img3').style.display = "none";
    document.getElementById('bottonea3').style.display = "none";
    document.getElementById('bottoner3').style.display = "none";
}

$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}
