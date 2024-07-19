
//ctrl+k+c for highlighted to comments
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// let myAge = 31
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
//----------------end 



// document.getElementById("count-enter").innerText = 5
// change the count-enter in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
// camelCase
let countAll = document.getElementById("count-enter") // pass in arguments

let count = 0

function increment() {
    count = count + 1
    //"count += 1" this is still the same with "count = count + 1" above
    countAll.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent = saveEl.textContent + countStr // or saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph

    countAll.textContent = 0
    count = 0
    console.log(count)
}
