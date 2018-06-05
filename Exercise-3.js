/*Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. 
Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. 
Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.
Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).*/



function cariMedian(arr){
  arr.sort(function(a,b){ 
    return a-b; // urutkan dulu array secara menaik/ascending 
  });
  var midArr = arr.length/2 // deklarasikan pertengahan array 
  var arrGanjil = Math.floor (midArr); //  panjang array ganjil ambil indeks ke [midArr]
  var arrGenap = (arr[midArr-1] + arr[midArr])/2; //  panjang array genap, ambil indeks midArr-1 + indeks midArr, tutup kurung baru dibagi 2 
  
  if (arr.length % 2 !== 0){ // jika panjang array tidak habis dibagi 2 maka berarti array ganjil, langsung ambil indeks [arrGanjil]
    return arr[arrGanjil];
  }else{
    return arrGenap; // jika tidak langsung masuk ke operasi arrgenap dan ambil indeks hasilnya 
  }
}


console.log(cariMedian([1, 2, 3, 4, 5])); // 3 ganjil  

console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7 genap  

console.log(cariMedian([3, 4, 7, 6, 10])); // 7 ganjil  

console.log(cariMedian([1, 3, 3])); // 3 ganjil  

console.log(cariMedian([7, 7, 8, 8])); // 7.5 genap  

