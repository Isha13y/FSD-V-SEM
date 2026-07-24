const email= document.getElementById("email");
const name = document.getElementById("name");
const password = document.getElementsById("password");
const btn = document
btn.addEventListener("click",()=>{
    email.preventDefault();
    const val = email.innerText;
    console.log(val);

})