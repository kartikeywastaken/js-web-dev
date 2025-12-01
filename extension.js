let leadsTrackker = [];
const inputBtn = document.getElementById("inputBtn");
const inputEl = document.getElementById("inputEl");
const delEl = document.getElementById("DelBtn");
let ul = document.getElementById("ulEl");
const tab = document.getElementById("saveBtn");

let leadsFromStorage = JSON.parse(localStorage.getItem("myLeads")) // converts myLeads string into array
// console.log(leadsFromStorage)

if (leadsFromStorage) { // truthy value 
    leadsTrackker = leadsFromStorage; // makes the myLead an array 
    renderleads(leadsTrackker) // passing an argument
}

function renderleads(leads){  // passing a parameter
    let listItems = ""
    for(let i = 0; i < leads.length; i++) {
    listItems += "<li><a target = '_blank' href = '#'>" + leadsTrackker[i] + " "+ "</a></li>" ;
    // listItems += "<li><a target = '_blank' href = '#'>" + localStorage.getItem("myLeads") + " "+ "</a></li>" ;
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]         // another method to do the same thing as innerhtml
    // ulEl.append(li)
    }
    ul.innerHTML = listItems // innerHTML is same as text content it is used to display texts but in this case it 
    // uses the tags present and then makes them a part of html
}
// let myLeads = `["www.google.com"]`;  // converting a string(in form of an array) to a string 
// console.log(typeof myLeads)
// myLeads = JSON.parse(myLeads) // converts to array
// myLeads.push("abc")
// console.log(myLeads)

// let myLeads = ["www.google.com"];
// myLeads = JSON.stringify(myLeads) // converts it into a string 
// console.log(typeof myLeads)

tab.addEventListener("click", function(){
   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs)
    myLeads.push(tabs[0].url)
    // console.log(tabs[0].url)
    localStorage.getItem("myLeads", JSON.stringify(leadsTrackker))
    renderleads(myLeads)
    });
})

inputBtn.addEventListener("click", function() { // adds an event which responds when user clicks
    // console.log("good night buddy")
    myLeads.push(inputEl.value)  // inputEl.value takes whatever the value/data is entered into the dialogue box into the array
    // console.log(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(leadsTrackker)) // makes a variable myLeads and stores the array
    renderleads(leadsTrackker) // as a string using json 
    inputEl.value = ""; // to clear the the input element box
})

delEl.addEventListener("click", function () {
    localStorage.clear(leadsTrackker); // clears from local storage
    leadsTrackker = [] // clears myLead array 
    renderleads(leadsTrackker)
})

