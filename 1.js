function cekPalindrom (input) {
    let x = String(input).split("").reverse().join('');
//     if (x==input) {
//         console.log( input + " merupakan bilangan palindrom");
//     } else {
//         console.log( input + " bukan bilangan palindrom");
//     }
//     return x;
// }

// console.log(cekPalindrom(10012));

switch (x==input) {
    case true :
        alert( input + " merupakan bilangan palindrom");
    break;
    default :
        alert( input + " bukan bilangan palindrom");
}
return x;
}
 function cek() {
     var angka = document.getElementById("angka").value;
     cekPalindrom(angka);
 }