//hoisting

//technolgies that cover frontend,backend, database are stacks

console.log(a);
let a;
a = 2; 
{
    var a = "2";
    a= 2+ "2"; 
    console.log(a);
}
console.log(a);
