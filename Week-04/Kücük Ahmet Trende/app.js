let rnumber, sayac =0, hak=4; // 4 hakkimiz olacak

let tahmin = document.querySelector("#tahmin"); // tahmin butonu ile tahminde bulanacagiz 

let puan =100; // baslangic puai 100 alalim

rnumber = Math.round(Math.random()*10); //1 ile 10 arasinda sayi uretecek

tahmin.onclick= function() {
    let kacinciTren = document.querySelector("#kacinci-tren"); 
    

    sayac++;
    if (rnumber!=kacinciTren.value && sayac == hak) {  //girilen deger ile random sayi eslenmeyince ve hak bitince oyun biter
        document.getElementById("sonuc").innerHTML = "Uzgunum Ahmeti bulamadiniz!"; 
        document.getElementById("puan").innerHTML = "<h2>"+"0"+"</h2>"; 
    } 
    if (rnumber > kacinciTren.value) { //kucuk sayi tahmin edildiginde daha buyuk sayi girmesi istenir
        window.alert("sonraki vagonlara bakiniz!") ;
    } else
    if (rnumber < kacinciTren.value) { //buyuk sayi tahmin edildiginde daha kucuk sayi girmesi istenir
        window.alert("onceki vagonlara bakiniz!") ;  
    } else
    if (rnumber == kacinciTren.value){ //tahmin edilen sayi girilen sayi ile ayni ise puan hesaplanir ve ekrana yazdirilir
        document.getElementById("sonuc").innerHTML = "Tebrikler Ahmet'i buldunuz!";
        puan = puan - ((sayac-1)*25);
        document.getElementById("puan").innerHTML ="<h2>"+ puan + "</h2>"+"<h2>"+ sayac +". defada bildiniz"+"</h2>";
    } 
}
    