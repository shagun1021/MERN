//rest parameters

// const sum=(...numbers)=>{ //array that stores parameters  --> rest parameter
const sum=(num1=0,num2=0,...numbers)=>{ //also allow array that stores parameters , num1=0 -> default parameters
      let s=numbers.reduce((a,b)=>a+b);
      console.log("summ of number=",(num1+num2+s));
}

sum(2,4,4,5,66,1); // 

