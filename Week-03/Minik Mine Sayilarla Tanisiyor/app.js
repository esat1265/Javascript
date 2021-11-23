
 let a = window.prompt('Ilk sayiyi giriniz')
 let b = window.prompt('Ikinci sayiyi giriniz')

// Aysenin iki sayi girmesini istiyoruz
// Eger sayilar esitse ekrana "Bu sayilar esittir." yazdiryoruz
// Eger sayilardan biri digerinden buyukse ekrana "Buyuk sayi budur:" yazdiryoruz

  if(a===b){
    document.getElementById("result").innerHTML = "Bu sayilar esittir.";
    console.log("Bu sayilar esittir.");
 }
 else  if(a>b){
          document.getElementById("result").innerHTML = ("Buyuk sayi:" + a);
          console.log("Buyuk sayi:" + a);
        } 
      else{ 
          document.getElementById("result").innerHTML = ("Buyuk sayi:"+ b);
          console.log("Buyuk sayi:" + b);
        }
 