const student={
      id:1,
      class:"6th",
      name:"shagun",
      mbl:123456789

}
let arr=[student]
// console.log(student);
for(ob in student){
      console.log(` ${ob} : ${student[ob]}`);
}