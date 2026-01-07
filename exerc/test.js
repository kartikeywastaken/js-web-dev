const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'> Buy Now! </button>"


function buy(){
    container.innerHTML += "<p> thank u for buying </p>"
}