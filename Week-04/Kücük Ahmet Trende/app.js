let rnumber, sayac =0, hak=4;

let tahmin = document.querySelector("#tahmin");

let puan =100;

rnumber = Math.round(Math.random()*10); 

tahmin.onclick= function() {
    let kacinciTren = document.querySelector("#kacinci-tren");
    

    sayac++;
    if (rnumber!=kacinciTren.value && sayac >= hak) {
        document.getElementById("sonuc").innerHTML = "Uzgunum Ahmeti bulamadiniz!"; 
        document.getElementById("puan").innerHTML = "0"; 
    } 
    if (rnumber > kacinciTren.value) {
        window.alert("sonraki vagonlara bakiniz!") ;
    } else
    if (rnumber < kacinciTren.value) {
        window.alert("onceki vagonlara bakiniz!") ;  
    } else
    if (rnumber == kacinciTren.value){
        document.getElementById("sonuc").innerHTML = "Tebrikler Ahmet'i buldunuz!";
        puan = puan - ((sayac-1)*25);
        document.getElementById("puan").innerHTML = puan;
    } 
}
    