let a =  document.getElementById("ilk sayi").value;
let b =  document.getElementById("ikinci sayi").value;

// Aysenin iki sayi girmesini istiyoruz
// Eger sayilardan biri digerinden buyukse ekrana "Buyuk sayi budur:" yazdiryoruz
// Eger sayilar esitse ekrana "Bu sayilar esittir." yazdiryoruz

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