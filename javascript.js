var TimeBlocks = $(".timeblock")

// Setting date a top of screen
$("#currentDay").text(moment().format("dddd, MMMM Do"))

//Setting date for comparison
var currentTime = moment().format('h:mm:ss a')

//For loop that compares the current time to the time of the block for all blocks in the Timeblocks array
for (i = 0; i < TimeBlocks.length; i++) {
    let OurTime = $(TimeBlocks[i]).data("miltime")
    var CurrTime = moment().format("HH");
    var currentTimeBlock = $(TimeBlocks[i])
    var currentTxtArea = currentTimeBlock.next()
    if (CurrTime > OurTime) {
        $(currentTxtArea).addClass("past")
    } else if (CurrTime == OurTime) {
        $(currentTxtArea).addClass("present")
    } else if (CurrTime < OurTime) {
        $(currentTxtArea).addClass("future")
    }
}

//Setting and Retrieving local storage for all rows 

//Setting local storage for (9AM )
$("#saveBtnNine").on("click", function () {
    textAreaNine = document.getElementById("textAreaNine").value;
    localStorage.setItem("9AM", textAreaNine)
})
if (localStorage.getItem("9AM") === null) {
} else {
    var nineAmRetrieval = localStorage.getItem("9AM")
    textAreaNine.textContent = nineAmRetrieval
}
//Setting Local Storage for 10AM 
$("#saveBtnTen").on("click", function () {
    textAreaTen = document.getElementById("textAreaTen").value;
    localStorage.setItem("10AM", textAreaTen)
})
if (localStorage.getItem("10AM") === null) {
} else {
    var TenAmRetrieval = localStorage.getItem("10AM")
    textAreaTen.textContent = TenAmRetrieval
}
//Setting Local storage for 11 AM 
$("#saveBtnEleven").on("click", function () {
    textAreaEleven = document.getElementById("textAreaEleven").value;
    localStorage.setItem("11AM", textAreaEleven)
})
if (localStorage.getItem("11AM") === null) {
} else {
    var ElevenAmRetrieval = localStorage.getItem("11AM")
    textAreaEleven.textContent = ElevenAmRetrieval
}

//Setting local Storage for 12AM
$("#saveBtnTwelve").on("click", function () {
    textAreaTwelve = document.getElementById("textAreaTwelve").value;
    localStorage.setItem("12PM", textAreaTwelve)
})
if (localStorage.getItem("12PM") === null) {
} else {
    var TwelvePmRetrieval = localStorage.getItem("12PM")
    textAreaTwelve.textContent = TwelvePmRetrieval
}

//Setting Local Storage for 1PM
$("#saveBtnOne").on("click", function () {
    textAreaOne = document.getElementById("textAreaOne").value;
    localStorage.setItem("1PM", textAreaOne)
})
if (localStorage.getItem("1PM") === null) {
} else {
    var OnePmRetrieval = localStorage.getItem("1PM")
    textAreaOne.textContent = OnePmRetrieval
}

//Setting local storage for 2 PM
$("#saveBtnTwo").on("click", function () {
    textAreaTwo = document.getElementById("textAreaTwo").value;
    localStorage.setItem("2PM", textAreaTwo)
})
if (localStorage.getItem("2PM") === null) {
} else {
    var TwoPmRetrieval = localStorage.getItem("2PM")
    textAreaTwo.textContent = TwoPmRetrieval
}
//setting local storage for 3pm
$("#saveBtnThree").on("click", function () {
    textAreaThree = document.getElementById("textAreaThree").value;
    localStorage.setItem("3PM", textAreaThree)
})
if (localStorage.getItem("3PM") === null) {
} else {
    var ThreePmRetrieval = localStorage.getItem("3PM")
    textAreaThree.textContent = ThreePmRetrieval
}

//Set local storage for 4pm
$("#saveBtnFour").on("click", function () {
    textAreaFour = document.getElementById("textAreaFour").value;
    localStorage.setItem("4PM", textAreaFour)
})
if (localStorage.getItem("4PM") === null) {
} else {
    var FourPmRetrieval = localStorage.getItem("4PM")
    textAreaFour.textContent = FourPmRetrieval
}

//setting local storage for 5pm

$("#saveBtnFive").on("click", function () {
    textAreaFive = document.getElementById("textAreaFive").value;
    localStorage.setItem("5PM", textAreaFive)
})
if (localStorage.getItem("5PM") === null) {
} else {
    var FivePmRetrieval = localStorage.getItem("5PM")
    textAreaFive.textContent = FivePmRetrieval
}