const myPromise= new Promise((resolve,reject)=>{
    let age=17;
    if(age>=18){
        resolve("eliglbe for vote")
    }
    else{
        reject("Not eligible for vote")
    }

})
const checkEligibility=async()=>{
    try{
        const msg= await myPromise;
        console.log(msg);

    }
    catch(error){
    console.log(error);
}
}
checkEligibility();

//console.log(myPromise);

//myPromise
 //   .then((msg)=>console.log(msg))
  //  .then((error)=>console.log(error))