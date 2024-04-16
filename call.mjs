const sum=(x,y)=>{
      return(x+y);
}
const mul=(x,y)=>{
      return(x*y);
}

const print=(msg)=>{
      console.log(msg);
}

export {sum,mul}
// export {sum as Add,mul as Multiply} // agar anme change karan hain toh

// ext->module java script takki error na aay

export default print; // koi b naam lelo