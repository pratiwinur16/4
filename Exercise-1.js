function angkaPrima(angka) {
  
  var prima = true;// biarkan prima true 
  var i = 2 // harus dideklarasikan, kalo enggak, salah pas running auto 
  for (i=2;i<angka;i++) {
    if(angka%i==0) {
      prima= false; // return prima jadi false
      break; // break perulangan 
    }// end if inner 
  }// end inner loop
  return prima; // kembalikan nilai prima 
}// end function 


console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1345)); // false

/*
1. mula2 buat sebuah variabel boolean prima yang diisi dengan nilai true
2. pengulangan dimulai dari i=2 karena 2 adalah bilangan prima terkecil, i harus kurang dari angka yang dimasukkan, dan increment i 
3. jika angka mod i  samadengan 0 maka nilai prima yang semula true menjadi false 
4. berikan break untuk menghentikan perulangan 
5. end if inner 
6. end inner loop 
7. kembalikan nilai angka, baik itu true ataupun false 
8. end function */
