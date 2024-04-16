let arr=[3,7,4,6];

// for(val of arr){
//       console.log(val);
// }

// array map using arrow function
//   let mp= arr.map(item=>console.log(item+10));
//   mp();

  let sumOfArray=arr.reduce((result,value)=>result+value);
  console.log(sumOfArray);