// loops in js ->
// > for loops
// > for in loop
// > for of loop
// > foreach loop


let arr=[10,7,2,6,3,2,1];

//for loop

for(let i=0;i<arr.length;i++){
      console.log(`arr[${i}] = ${arr[i]}`);
}


//for in loop

for(val in arr){  
      // for in -> arr passing the value of arr[index] to val

console.log(val);
}

for(let val of arr){
      
      console.log(val);
}


arr.forEach(arr=> console.log(arr));
