// let currentdate = new Date();
// let Day=currentdate.getDay()
// let time=currentdate.getHours()
// console.log(Day)
// console.log(time)
const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth()+1;
    const day = now.getDate();

    const currentDate = `${year}-${month}-${day}`;
    console.log("Current Date: " + currentDate);
