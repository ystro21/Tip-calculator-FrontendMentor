const billInput = document.getElementById("bill-input")
const selectClicks = document.querySelectorAll(".select-click")
const peopleInput = document.getElementById("people-input")
const customInput = document.querySelector(".custom-input")
const resultTip = document.querySelector(".result-tip")
const resultTotal = document.querySelector(".result-total")
const submitBtn = document.querySelector(".submit-btn")
const errorTitle = document.querySelector(".error-title")

billInput.value = "0.0"
peopleInput.value = "1"
resultTip.innerHTML = (0.0).toFixed(2)
resultTotal.innerHTML = (0.0).toFixed(2)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15

function billResult(){
    billValue = parseFloat(billInput.value)
    calculateTip()
}

function peopleResult(){
    peopleValue = parseFloat(peopleInput.value)
    if(peopleValue == 0){
        errorTitle.classList.add("error")
        peopleInput.classList.add("error")
    } else {
        errorTitle.classList.remove("error")
        peopleInput.classList.remove ("error")
    }
    calculateTip()
}

function customTip(){
    tipValue = parseFloat(customInput.value / 100)

    selectClicks.forEach(function(val){
        val.classList.remove("active")
    })
    calculateTip()
}

function handleClick(e){
    selectClicks.forEach(function(val){
        // console.log(val.innerHTML);
        val.classList.remove("active")
        if(e.target.innerHTML == val.innerHTML){
            val.classList.add("active")
            tipValue = parseFloat(val.innerHTML)/100
        }
        customInput.value = "Custom"
    })
    calculateTip()
}

function calculateTip() {
    if(peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue
        let total = (billValue + tipAmount) / peopleValue
        resultTip.innerHTML = tipAmount.toFixed(2)
        resultTotal.innerHTML = total.toFixed(2)
    }
    submitBtn.removeAttribute("disabled")
}

function reset(){
    billInput.value = "0.0"
    billResult()
    peopleInput.value = "1"
    peopleResult()
    customInput.value = "Custom"
    selectClicks.forEach(function(val){
        val.classList.remove("active")
    })
    submitBtn.setAttribute("disabled", "")
}

billInput.addEventListener("input", billResult)
peopleInput.addEventListener("input", peopleResult)
selectClicks.forEach(function(val){
    val.addEventListener("click", handleClick)
})
customInput.addEventListener('input', customTip)
submitBtn.addEventListener("click", reset)


// resultTotal.textContent = parseFloat(0.00)
// resultTip.textContent = parseFloat(0.00)
// let count = parseFloat(bill.value)
// let people = parseFloat(numberPeople.value);
// let countOut = count
// let peopleOut = people
// let result;

// console.log("początkowa wartość bill", count);
// console.log("poczatkowa wartość people", people);

// const billResult = () => {
//     count = bill.value
//     people = numberPeople.value
//     if(count === ""){
//         count = 0
//     }
//     // // let people = numberPeople.value
//     // // let result = (parseFloat(count) / parseFloat(people))
//     if(count === 0){
//         result = 0
//     }
//     countOut = count
//     peopleOut = people
//     resultTotal.textContent = parseFloat(count).toFixed(2)
// }

// const countPeople = () => {
//     people = numberPeople.value
//     count = bill.value
//     if(count === ""){
//         count = 0
//     }
//     // // let people = numberPeople.value
//     // // let result = (parseFloat(count) / parseFloat(people))
//     if(count === 0){
//         result = 0
//     }
//     resultTotal.textContent = parseFloat(count).toFixed(2)
//     if(people === ""){
//         people = 0
//     }

//     if(people === 0){
//         result = parseFloat(count)
//         // resultTotal.textContent = parseFloat(result).toFixed(2)
//     } else if(count === 0){
//         result = 0
//     } //else if(count > 0 && people === 0){
//     //     resultTotal.textContent = parseFloat(result).toFixed(2)
//     // }
//     else if(count > 0 && people > 0) {
//         result = parseFloat(count) / parseFloat(people)
//         // resultTotal.textContent = parseFloat(result).toFixed(2)
//     }

//     countOut = count
//     peopleOut = peopleOut

    
//     resultTotal.textContent = parseFloat(result).toFixed(2)
//     console.log("bill", parseFloat(count));
//     console.log("people", parseFloat(people));
//     console.log("total", resultTotal.textContent);
    
// }


// resultTotal.textContent = parseFloat(countOut).toFixed(2) / parseFloat(peopleOut).toFixed(2)
// // function resultSplitter () {
// //     billResult()
// //     countPeople()
// // }

// // resultSplitter()
