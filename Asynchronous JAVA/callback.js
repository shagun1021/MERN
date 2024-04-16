// const sum=(a,b)=>a+b;

const calculator=(x,y,add)=>console.log(add(x,y));
// calculator(10,20,sum);
calculator(10,20,(a,b)=>a+b);