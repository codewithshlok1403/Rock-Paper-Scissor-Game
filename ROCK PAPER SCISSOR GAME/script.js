let a = document.querySelectorAll(".icons")
let msg = document.querySelector(".msg")
let userscore = document.querySelector(".userscore")
let compscore = document.querySelector(".compscore")
let reset=document.querySelector(".reset")
let usscore = 0;
let coscore = 0;
function compCoice() {
    let arr = ["Rock", "Paper", "Scissor"];
    let randix = Math.floor(Math.random() * 3);
    return arr[randix]

}


let game = (userchoice) => {
    console.log("user choice =", userchoice);
    let comp = compCoice()
    console.log("computer choice =", comp)
    determineWinner(userchoice, comp)
}
function determineWinner(userchoice, comp) {
    if (userchoice === comp) {
        console.log("It's a TIE!");
        msg.innerText = "!Oh It's A Draw"
    }
    else if (
        (userchoice === "Rock" && comp === "Scissor") ||
        (userchoice === "Paper" && comp === "Rock") ||
        (userchoice === "Scissor" && comp === "Paper")
    ) {
        console.log(`YOU WIN ${userchoice} Beat ${comp}`);
        msg.innerText = `YOU WIN ${userchoice} Beat ${comp}`
        userscore.innerText = usscore += 1
    } else {
        console.log(`YOU LOOSE ${comp} Beat ${userchoice}`);
        msg.innerText = `YOU LOOSE ${comp} Beat ${userchoice}`
        compscore.innerText = coscore += 1
    }
}
a.forEach((val) => {
    val.addEventListener(("click"), () => {
        const userchoice = val.getAttribute("id");
        game(userchoice)
    })
})
function disable(){
    userscore.innerText=0
    compscore.innerText =0
    msg.innerText ="Play Your Move"

}
reset.addEventListener(("click"),()=>{
    disable()
})

