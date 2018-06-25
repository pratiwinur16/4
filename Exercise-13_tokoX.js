function countProfit(shoppers) {
  if (shoppers.length === 0){
    return shoppers;
  }
  
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
 
  var sepatu = []
  var baju = []
  var sweater = []
  var totalbarang=0;
  var profitBaju = 0;
  var profitSepatu = 0 ;
  var profitSWeater = 0;
  for (i=0 ; i<shoppers.length; i++)
    if (shoppers[i]['product']==='Sepatu Stacattu'){
      if (listBarang[0][2] -shoppers[i]['amount'] >=0){
        listBarang[0][2] = listBarang[0][2]- shoppers[i]['amount']
        profitSepatu = profitSepatu+ (shoppers[i]['amount']*1500000)
        sepatu.push(shoppers[i].name)
      }
    }
    else if (shoppers[i]['product']==='Baju Zoro'){
      if (listBarang[1][2] -shoppers[i]['amount'] >=0){
        listBarang[1][2] = listBarang[1][2]- shoppers[i]['amount']
        profitBaju = profitBaju+ (shoppers[i]['amount']*500000)
        baju.push(shoppers[i].name)
      }
    }
    else if (shoppers[i]['product']==='Sweater Uniklooh'){
      if (listBarang[2][2] -shoppers[i]['amount'] >=0){
        listBarang[2][2] = listBarang[2][2]- shoppers[i]['amount']
        profitSWeater = profitSWeater+ (shoppers[i]['amount']*175000)
        sweater.push(shoppers[i].name)
      }
    }
  var tampil = [{
    product : 'Sepatu Stacattu',
    shoppers : sepatu,
    leftOver : listBarang[0][2],
    totalProfit : profitSepatu,
  },
  {
    product : 'Baju Zoro',
    shoppers : baju,
    leftOver : listBarang[1][2],
    totalProfit : profitBaju,
  },
  {
    product : 'Sweater Uniklooh',
    shoppers : sweater,
    leftOver : listBarang[2][2],
    totalProfit : profitSWeater,
  }
  ]
  return tampil
  // you can only write your code here!
}



// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [], // ini kenapa gak nampil rani ya ? 
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
