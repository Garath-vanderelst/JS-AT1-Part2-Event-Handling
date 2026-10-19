// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here

function resetBoxes(){
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBoxIn = document.getElementById("blueIn")
    var blueBoxBottom = document.getElementById("blueBottom")
    greenBox.className = "hidden";
    redBox.className = "hidden";
    blueBoxIn.className = "hidden";
    blueBoxBottom.className = "hidden";
    blueBoxIn.style.top = "0";
    redBox.style.top = "0";
    blueBoxIn.style.left = "0";
    redBox.style.left = "0";
    greenBox.style.backgroundColor = "Transparent"
}

function btn6_clicked() {
    "use strict"
    var greenBox = document.getElementById("green")
    greenBox.style.backgroundColor = "green"
}

function btn5_clicked() {
    "use strict"
    resetBoxes();
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBox = document.getElementById("blueIn")
    greenBox.classList.remove("hidden")
    greenBox.classList.add("greenBox")
    redBox.classList.remove("hidden")
    redBox.classList.add("redBox")
    blueBox.classList.remove("hidden")
    blueBox.classList.add("blueBox")
    blueBox.style.left = "45px"
    blueBox.style.top = "20px"
}

function btn4_clicked() {
    "use strict"
    resetBoxes();
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBox = document.getElementById("blueBottom")
    greenBox.classList.remove("hidden")
    greenBox.classList.add("greenBox")
    redBox.classList.remove("hidden")
    redBox.classList.add("redBox")
    blueBox.classList.remove("hidden")
    blueBox.classList.add("blueBox")
    redBox.style.left = "304px"
    blueBox.style.top = "-600px"
}

function btn3_clicked() {
    "use strict"
    resetBoxes();
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBox = document.getElementById("blueIn")
    greenBox.classList.remove("hidden")
    greenBox.classList.add("greenBox")
    redBox.classList.remove("hidden")
    redBox.classList.add("redBox")
    blueBox.classList.remove("hidden")
    blueBox.classList.add("blueBox")
    blueBox.style.left = "596px"
    blueBox.style.top = "-4px"
    
}

function btn2_clicked() {
    "use strict"
    resetBoxes();
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBox = document.getElementById("blueBottom")
    greenBox.classList.remove("hidden")
    greenBox.classList.add("greenBox")
    redBox.classList.remove("hidden")
    redBox.classList.add("redBox")
    blueBox.classList.remove("hidden")
    blueBox.classList.add("blueBox")

}

function btn1_clicked() {
    "use strict"
    resetBoxes();
    var greenBox = document.getElementById("green")
    var redBox = document.getElementById("red")
    var blueBox = document.getElementById("blueIn")
    greenBox.classList.remove("hidden")
    greenBox.classList.add("greenBox")
    redBox.classList.remove("hidden")
    redBox.classList.add("redBox")
    blueBox.classList.remove("hidden")
    blueBox.classList.add("blueBox")
}

function init(){
    "use strict"
    btn1_clicked;
// All event listeners here
    document.getElementById('btn1').addEventListener("click", btn1_clicked);
    document.getElementById('btn2').addEventListener("click", btn2_clicked);
    document.getElementById('btn3').addEventListener("click", btn3_clicked);
    document.getElementById('btn4').addEventListener("click", btn4_clicked);
    document.getElementById('btn5').addEventListener("click", btn5_clicked);
    document.getElementById('btn6').addEventListener("click", btn6_clicked);
}




window.onload = init;