/*
Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string.
 Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
 Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
1. string dipecah memakai fungsi string, kemudian di sortir, kemudian baru di join 

*/

function urutkanAbjad(str) {
  return str.toString().split('').sort().join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'