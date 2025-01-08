const btns = document.querySelectorAll(".btn");
const head = document.querySelector("#winner");
const reset = document.querySelector(".btnr");
console.log(btns)
let p1 = document.querySelector("#player1");
let c1=0,c2=0;
let p2 = document.querySelector("#player2");
let player="X";
let i=0;
const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
btns.forEach((button, index) => {
    button.addEventListener('click', (ev) => {
        if(player=="X")
        {
            button.innerText = "X";
            player="O";
        }
        else{
            button.innerText = "O";
            player="X";
        }
        button.disabled=true;
        checkwins();
    });
});
const checkwins=() =>{
    for(let win of wins)
    {   
        display(btns[win[0]].innerText,btns[win[1]].innerText,btns[win[2]].innerText)
    }
        
}
const display=(v1,v2,v3) => {
    if(v1==v2 && v2==v3)
        if(v1=="X" && v2=="X" && v3=="X")
        {
            c1++;
            p1.innerText=`Player 1(X): ${c1}`;
            head.innerText="Player 1 is winner";

        }
        
        if(v1=="O" && v2=="O" && v3=="O"){
            c2++;
            p2.innerText=`Player 2(O): ${c2}`;
            head.innerText="Player 2 is winner";
        }
}
reset.addEventListener("click",() => {
    btns.forEach((button) => {
        button.innerText="";
        player="X";
        button.disabled=false;
        if(c1==5 || c2==5)
        {
            c1=0;
            c2=0;
            p1.innerText=`Player 1(X): ${c1}`;
            p2.innerText=`Player 2(O): ${c2}`;
        }
    });
})