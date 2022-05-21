const timeBlock = document.getElementById('timeblocks')

//Insert current date and time under the header
const currentDay = document.getElementById('currentDay')
let dateToday = moment().format("MMMM DD, YYYY");
currentDay.append(dateToday);
//Create TimeBlock div that contains all the time blocks
var timeBlockDiv = document.createElement('div')
    timeBlockDiv.style.display = "flex"
    timeBlockDiv.style.flexDirection = "column"
    timeBlockDiv.style.justifyContent = "center"
    timeBlockDiv.style.alignItems = "center"
    timeBlock.appendChild(timeBlockDiv)
 let a = 9


//Create elements that contain the time, a space to input text, and a save button
for (let i = 0; i < 9; i++) {
    createTimeBlocks()
    a++
}

function createTimeBlocks() {
    //Create timeblock elements
    var timeBlockEl = document.createElement('div')
    timeBlockEl.classList.add('row')
    timeBlockDiv.appendChild(timeBlockEl)
    //Create time element and append to timeblock element
    var timeEl = document.createElement('div')
    timeEl.classList.add('hour')
    if (a <= 11) {
        var timeText = document.createTextNode(a + ":00 AM")
    }
    else if (a === 12) {
        var timeText = document.createTextNode(a + ":00 PM")
    }
    else {
        var timeText = document.createTextNode(a - 12 + ":00 PM")
    }
    timeEl.appendChild(timeText)
    timeBlockEl.appendChild(timeEl)
    //Create text box element and append to timeblock element
    var textEl = document.createElement('input')
    textEl.classList.add('text-el')
    timeBlockEl.appendChild(textEl)
    //Create save button element
    var saveButtonEl = document.createElement('button')
    saveButtonEl.classList.add('saveBtn')
    timeBlockEl.appendChild(saveButtonEl)

}
//Allow users to input the text into the text block and save it to their local storage using the save button

//Using moment.js, allow the text blocks to dynamically change color based on the time of day

