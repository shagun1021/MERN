const getData=(id,getNextData)=>{
       console.log("data "+id+" is in loading...");
      setTimeout(()=>{
      console.log("data "+id+" is done ")
      console.log("::::::::::::::::::::::")
      if(getNextData) getNextData()},2000);
}

getData(1,()=>{
      getData(2,()=>{
            getData(3)})
})



