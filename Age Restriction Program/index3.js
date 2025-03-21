const myAge = document.getElementById("myAge");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;

mySubmit.onclick = function(){
    age = myAge.value;
    age = Number(age);

    if(age >= 18){
        result.textContent = "You are old enough to enter this site.";
    }
    else{
        result.textContent = "You are not old enough to enter this site."
    }
}