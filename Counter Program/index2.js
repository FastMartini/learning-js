
let countLabel = document.getElementById("countLabel");
let decreasebtn = document.getElementById("decreasebtn");
let increasebtn = document.getElementById("increasebtn");
let resetbtn = document.getElementById("resetbtn");
let count = 0;


decreasebtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}


resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;

}

increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}



