/*Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga*/

function changeVocals (str) {
  //code di sini
      str= str.split('a').join('b')
      str= str.split('i').join('j')
      str= str.split('u').join('v')
      str= str.split('e').join('f')
      str= str.split('o').join('p')
      str= str.split('A').join('B')
      str= str.split('I').join('J')
      str= str.split('U').join('V')
      str= str.split('E').join('F')
      str= str.split('O').join('P')
     
	return str
}

function reverseWord (str) {
  //code di sini
   var splitString = str.split(""); 
   var reverseArray = splitString.reverse();
   var joinArray = reverseArray.join("");
   return joinArray;
}

function setLowerUpperCase (str) {
  //code di sini
  var kata = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      kata += str[i].toLowerCase();
    }
    else {
      kata += str[i].toUpperCase();
    }
  }
  return kata;
}


function removeSpaces (str) {
  return str.replace(/\s/g,'');
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5 || name ===undefined) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
} else {
    var ubahVokal = changeVocals(name);
    var balikKata = reverseWord(ubahVokal);
    var lowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(lowerUpper);
    return hapusSpasi;
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
