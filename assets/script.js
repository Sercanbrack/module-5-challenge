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
let hours = 9

function saveData(event){
    event.preventDefault;
    var input = document.getElementById("text-container").value
    localStorage.setItem('text-element', input)
    var dataSaved = document.createElement('p')
    dateToday.appendChild(dataSaved)
    var dataSavedText = document.createTextNode("Event saved to local storage!")
    dataSaved.appendChild(dataSavedText)
    setTimeout(dataSavedText.remove(), 2000)

}
function retrieveData(){
    document.getElementById("text-container").value = localStorage.getItem('text-element')
}

//Create elements that contain the time, a space to input text, and a save button
for (let i = 0; i < 9; i++) {
    createTimeBlocks()
    retrieveData()
    hours++
}

function createTimeBlocks() {
    //Create timeblock elements
    var timeBlockEl = document.createElement('div')
    timeBlockEl.classList.add('row')
    timeBlockDiv.appendChild(timeBlockEl)
    //Create time element and append to timeblock element
    var timeEl = document.createElement('div')
    timeEl.classList.add('hour')
    if (hours <= 11) {
        var timeText = document.createTextNode(hours + ":00 AM")
    }
    else if (hours === 12) {
        var timeText = document.createTextNode(hours + ":00 PM")
    }
    else {
        var timeText = document.createTextNode(hours - 12 + ":00 PM")
    }
    timeEl.appendChild(timeText)
    timeBlockEl.appendChild(timeEl)
    //Create text box element and append to timeblock element
    var textEl = document.createElement('input')
    textEl.setAttribute("id", "text-container")
    textEl.setAttribute("name", "text-element")
    textEl.classList.add('text-el')
    
    timeBlockEl.appendChild(textEl)
    //Create save button element
    var saveButtonEl = document.createElement('button')
    var saveButtonImg = document.createElement('img')
    saveButtonImg.src = "assets/save icon.webp"
    saveButtonImg.classList.add('save-img')
    saveButtonEl.appendChild(saveButtonImg)
    saveButtonEl.classList.add('saveBtn')
    timeBlockEl.appendChild(saveButtonEl)
    saveButtonEl.addEventListener('click', saveData)
    //Set timeblocks to change color based on current time
    let currentTime = moment().format("k")
    console.log(currentTime)
    if (currentTime > hours){
        $(".text-el").addClass("past")
    } else if (currentTime < hours) {
        $(".text-el").addClass("future")
    } else {
        $(".text-el").addClass("present")
    }
//Allow users to input the text into the text block and save it to their local storage using the save button

//Using moment.js, allow the text blocks to dynamically change color based on the time of day
}
