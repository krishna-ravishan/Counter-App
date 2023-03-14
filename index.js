
let countEl = document.getElementById("count-el")
let resultEl = document.getElementById("result-el")

let count = 0
let result = 0

function increment(){
    count = count + 1
    countEl.textContent = count
}

function save(){
    result = count
    count = 0
    resultEl.textContent += " " + result + " " + "+"  
    countEl.textContent = 0
}