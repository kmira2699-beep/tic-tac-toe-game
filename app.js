let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0; // draw check

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const resetGame = () =>{
turnO = true;
count = 0;
enableBoxes();
msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
box.addEventListener("click",()=>{

if(turnO){
box.innerText="O";
turnO=false;
}else{
box.innerText="X";
turnO=true;
}

box.disabled=true;
count++;

let isWinner = checkWinner();

if(count===9 && !isWinner){
gameFailed();
}

});
});

const disableBoxes = ()=>{
for(let box of boxes){
box.disabled=true;
}
};

const enableBoxes = ()=>{
for(let box of boxes){
box.disabled=false;
box.innerText="";
}
};

const showWinner = (winner)=>{
msg.innerText = `Congratulations Winner ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const gameFailed = ()=>{
msg.innerText = "Failed! No Winner";
msgContainer.classList.remove("hide");
};

const checkWinner = ()=>{
for(let pattern of winPatterns){

let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val!="" && pos2Val!="" && pos3Val!=""){

if(pos1Val===pos2Val && pos2Val===pos3Val){

showWinner(pos1Val);
return true;

}

}

}

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



// console.log("welcome to apna college!");
// console.log("I love javascript!");

// Fullname = "Tony stark";
// age = 24;
// price = 99.99;
// x = null
// y = undefined;
 // console.log(price);
// console.log(x);

// const PI = 3.14;
// console.log(PI);
// let a;
// console.log(a);


// {
//     let a = 5;
//     console.log(a);
// }
// {
//     let a = 10;
//     console.log(a);
// }

// const student = 
// {
//     fullname: "mira kumari";
//     age: 20,
//     cgpa:8.2,
//     ispass: true,
// };
// student["name"] = "mira kumari";

// console.log(student["cgpa"]);

     //Artimetic operators
// let a = 5;
// let b = 2;
// console.log("a = " , a, " & b = " , b );
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);

//unary operator
// let a = 5;
// let b = 2;
// console.log("a = " , a, " & b = ", b);
// console.log("a++ = " , a++);
// console.log("a = ", a); 

    //Assignment operators
//     let a = 5;
//     let b = 2;
// a +=4; // a = a + 4        
// console.log("a = " , a);//9


//Comparison operators
// let a = 5;
// let b = 2;
//   console.log("5==2" , a==b); //false

// let a = 5;
// let b = 5;
// console.log("5 == 5" , a==b); // true
  
// let a = 5;
// let b = 3;
// console.log("5 > 3" , a > b);
// console.log("5 < 3" , a < b);
   
        //Logical operators
        // let a = 6;
        // let b = 5 ;
        //    let cond1 = a > b; //true
        //    let cond2 = a === 6; //true
        //    console.log("cond1 && cond2 = " , cond1 && cond2);
 
//    let a = 6;
//    let b = 5;
//    console.log("!(6<5) = " , !(a === 6)); //true     






        // console.log("hello!");
        // console.dir(window);
        

