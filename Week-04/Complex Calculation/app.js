const array=[9,12,1,8,6,12,24,25,81,100];
console.log(array);

// karekoklerinin bulunmasi

for (let i = 0; i < array.length; i++) {
    let karekok = Math.sqrt(array[i]);
    console.log("karekokleri:"+karekok);
} 

//===================================================

// karelerinin bulunmasi

for (let i = 0; i < array.length; i++) {
    let kare = Math.pow(array[i],2);
    console.log("kareleri:"+ kare);
}

//======================================================

// toplamlarinin ve ortalamanin bulunmasi

let sum = 0 ;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log("tum sayilarin toplam:"+ sum);

let ortalama = sum / array.length;
console.log("ortalamasi:"+ ortalama);

//======================================================


// max ve min degerleri icin once siralayip sonra ilk ve son degerleri alalim.

let sirala = array.sort(function(a,b){return a-b});

let max = array[array.length-1];
console.log("max:"+ max);

let min = array[0];
console.log("min:"+ min);
