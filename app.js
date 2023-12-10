let  gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["red", "yellow", "green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("click", function () {
    if(started == false)
    {
console.log("game is started");
started = true;
levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}






function levelup(){
    userseq =[];
    level++;
    h2.innerHTML=`level ${level}`;

let randidx = Math.floor(Math.random() * 3);
let rancolor = btns[randidx];
let ranbtn = document.querySelector(`.${rancolor}`);
gameseq.push(rancolor);

btnflash(ranbtn);
}

function checkans(idx) {
    if(userseq[idx] == gameseq[idx])
    {
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
        }
    }
    else {
        h2.innerHTML=`GAME OVER! YOUR SCORE WAS <b>${level}</b> <br> PRESS ANY KEY TO START`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
    }
}


function btnpress() {
    let btn = this;
    userflash(btn);
  
    usercolor= btn.getAttribute("id");
     userseq.push(usercolor);
      checkans(userseq.length -1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click", btnpress);
}

// function reset() {
//     started = false;
//     gameseq  = [];
//     userseq = [];
//     level = 0;
// }
// reset();