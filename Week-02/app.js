
function myFunction() {
    var copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("show").innerHTML = (copyText.value);
    console.log(copyText.value);
}


document.getElementById("data-type").innerHTML = 
typeof "Selam" + "<br>" +
typeof 1453 + "<br>" +
typeof true + "<br>" +
typeof function () {} 
    
console.log(document.getElementById("data-type").innerHTML) ;

