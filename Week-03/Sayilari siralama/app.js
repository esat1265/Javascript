// let a = Number(document.querySelector("#first-number").value);
// let b = Number(document.querySelector("#second-number").value);
// let c = Number(document.querySelector("#third-number").value);

let a = window.prompt('#first-number');
let b = window.prompt('#second-number');
let c = window.prompt('#third-number');

let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    if(a > b && a > c){
        if(b > c){
            document.getElementById("order").innerHTML = ( a + ">" + b + ">" + c );
            console.log(a + ">" + b + ">" + c); 
        } else {
           document.getElementById("order").innerHTML = a + '>' + c + '>' + b ;
           console.log(a + ">" + c + ">" + b);
        }
    };
    if(b > a && b > c){
        if(a > c){
            document.getElementById("order").innerHTML = ( b + ">" + a + ">" + c );
            console.log(b + ">" + a + ">" + c); 
        } else{
           document.getElementById("order").innerHTML = b + '>' + c + '>' + a ;
           console.log(b + ">" + c + ">" + a);
        }
    };
    if(c > a && c > b){
        if(b > a){
            document.getElementById("order").innerHTML = ( c + ">" + b + ">" + a );
            console.log(c + ">" + b + ">" + a); 
        } else{
           document.getElementById("order").innerHTML = c + '>' + a + '>' + b ;
           console.log(c + ">" + a + ">" + b);
        }
    };
});
