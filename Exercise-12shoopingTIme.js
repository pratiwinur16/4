function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId === '' || memberId === undefined){
    return "Mohon maaf, toko X hanya berlaku untuk member saja "
  } else if (money < 50000 || money === undefined){
    return "Mohon maaf, uang tidak cukup"
  }
  else {
    var pembeli = {
      memberId : memberId,
      money : money,
      listPurchased : [],
      changeMoney : 0
    }; 
   var sepatuScattu = 1500000;
   var bajuZoro = 500000;
   var bajuHandN = 250000;
   var sweaterUniklooh =175000;
   var  casingHandphone = 50000; 
   var sisa = money 
   if (sisa >= sepatuScattu){
     pembeli.listPurchased.push("Sepatu Stacattu")
     sisa -=1500000;
   }  if (sisa >= bajuZoro){
     pembeli.listPurchased.push ("Baju Zoro")
     sisa -= 500000;
   }  if (sisa >= 250000){
     pembeli.listPurchased.push("Baju brand H&N")
     sisa -= 250000;
   }  if (sisa >= 175000){
     pembeli.listPurchased.push("weater brand Uniklooh")
     sisa -= 175000;
   }  if (sisa >=50000 ){
     pembeli.listPurchased.push("Casing Handphone")
     sisa -= 50000;
  
   }
  }
  //pembeli.changeMoney =sisa;
return pembeli ; 
} 





// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
