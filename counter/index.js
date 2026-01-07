let count = 0;
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saveEl")
let welcome = document.getElementById("welcome")
let purchase = document.getElementById("purchase-btn")
let error = document.getElementById("error")
let ans = document.getElementById("operation")

console.log(countEl)


let num1 = prompt("Enter first number:"); // takes string input from user
num1 = parseInt(num1); // converts the string input to integer 
let num2 = prompt("Enter second number:");
num2 = parseInt(num2);


function add(){
    let sum = num1 + num2;
    ans.textContent = "Sum: " + sum;
}

function sub(){
    let sub = num1 - num2;
    ans.textContent = "Difference: " + sub;
}


function multi(){
    let pdt = num1*num2;
    ans.textContent = "Product: " + pdt;
}

function div(){
    let div = num1/num2;
    ans.textContent = "Quotient: " + div;
}


function increment(){
    count = count +1;
    countEl.textContent = count; // changing the text to count 
    console.log(count) 
}

// DOM = document object model, simply how u use javascript to modify a website 

function purchase_o(){
    error.textContent = "Something went wrong, please try again"
}

function save(){ // function named save
    console.log(count)
    let entries = count + ' - ' ; // creating a variable entries to store the count with a dash
    saveEl.textContent = saveEl.textContent + entries; // updating the text content of saveEl 
    count = 0; // resetting the count to 0
    countEl.textContent = count; // updating the countEl to show 0 
}


// .innerText is aware of CSS, while .textContent is not. For example, if an element is hidden using CSS (e.g., display: none;), .innerText will not include the text of that element, whereas .textContent will include it regardless of its visibility.

// use textContent instead of innerText when u want to get the text including hidden text like spaces etc.

// let name = "yash";
// let greeting = "welcome back ";
// welcome.innerText = greeting  + name;
// welcome += "!";
// allowes concatenation of different strings