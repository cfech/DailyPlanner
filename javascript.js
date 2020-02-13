
var TimeBlocks = $(".timeblock")


// Setting date a top of screen
$("#currentDay").text(moment().format("dddd, MMMM Do"))





//Setting date 
var currentTime = moment().format('h:mm:ss a')



// console.log(CurrTime) /// the it is right now 




//looop willl run once for each time block 
for (i = 0; i < TimeBlocks.length; i++) {
    let OurTime = $(TimeBlocks[i]).data("miltime")
    var CurrTime = moment().format("HH");
    console.log(OurTime)// the time in the time blocks 
    console.log(CurrTime)// time it is right now 
    console.log(TimeBlocks)
     var currentTimeBlock = $(TimeBlocks[i])
     var currentTxtArea = currentTimeBlock.next()
     console.log(currentTxtArea)
    if (CurrTime > OurTime) {
        $(currentTxtArea).addClass("past")
        console.log("past")
    } else if (CurrTime == OurTime) {
        $(currentTxtArea).addClass("present")
        console.log("present")
    } else if (CurrTime < OurTime) {
        $(currentTxtArea).addClass("future")
        console.log("future")
    }


}













//Setting local storage for (9AM )
$("#saveBtnNine").on("click", function () {
    textAreaNine = document.getElementById("textAreaNine").value;

    localStorage.setItem("9AM", textAreaNine)
})
if (localStorage.getItem("9AM") === null) {
    console.log("nothing here")
} else {
    var nineAmRetrieval = localStorage.getItem("9AM")

    textAreaNine.textContent = nineAmRetrieval
}
//Setting Local Storage for 10AM 
$("#saveBtnTen").on("click", function () {
    console.log("button 10")
    textAreaTen = document.getElementById("textAreaTen").value;
    console.log(textAreaTen)
    localStorage.setItem("10AM", textAreaTen)
})
if (localStorage.getItem("10AM") === null) {
    console.log("nothing here")
} else {
    var TenAmRetrieval = localStorage.getItem("10AM")
    console.log(TenAmRetrieval)
    textAreaTen.textContent = TenAmRetrieval
}
//Setting Local storage for 11 AM 
$("#saveBtnEleven").on("click", function () {
    console.log("button 11")
    textAreaEleven = document.getElementById("textAreaEleven").value;
    console.log(textAreaEleven)
    localStorage.setItem("11AM", textAreaEleven)
})
if (localStorage.getItem("11AM") === null) {
    console.log("nothing here")
} else {
    var ElevenAmRetrieval = localStorage.getItem("11AM")
    console.log(ElevenAmRetrieval)
    textAreaEleven.textContent = ElevenAmRetrieval
}

//Setting local Storage for 12AM
$("#saveBtnTwelve").on("click", function () {
    console.log("button 12")
    textAreaTwelve = document.getElementById("textAreaTwelve").value;
    console.log(textAreaTwelve)
    localStorage.setItem("12PM", textAreaTwelve)
})
if (localStorage.getItem("12PM") === null) {
    console.log("nothing here")
} else {
    var TwelvePmRetrieval = localStorage.getItem("12PM")
    console.log(TwelvePmRetrieval)
    textAreaTwelve.textContent = TwelvePmRetrieval
}
//Settting Local Storage for 1PM

$("#saveBtnOne").on("click", function () {
    console.log("button 1")
    textAreaOne = document.getElementById("textAreaOne").value;
    console.log(textAreaOne)
    localStorage.setItem("1PM", textAreaOne)
})
if (localStorage.getItem("1PM") === null) {
    console.log("nothing here")
} else {
    var OnePmRetrieval = localStorage.getItem("1PM")
    console.log(OnePmRetrieval)
    textAreaOne.textContent = OnePmRetrieval
}

//Setting local storage for 2 PM
$("#saveBtnTwo").on("click", function () {
    console.log("button 2")
    textAreaTwo = document.getElementById("textAreaTwo").value;
    console.log(textAreaTwo)
    localStorage.setItem("2PM", textAreaTwo)
})
if (localStorage.getItem("2PM") === null) {
    console.log("nothing here")
} else {
    var TwoPmRetrieval = localStorage.getItem("2PM")
    console.log(TwoPmRetrieval)
    textAreaTwo.textContent = TwoPmRetrieval
}
//setting local storage for 3pm
$("#saveBtnThree").on("click", function () {
    console.log("button 3")
    textAreaThree = document.getElementById("textAreaThree").value;
    console.log(textAreaThree)
    localStorage.setItem("3PM", textAreaThree)
})
if (localStorage.getItem("3PM") === null) {
    console.log("nothing here")
} else {
    var ThreePmRetrieval = localStorage.getItem("3PM")
    console.log(ThreePmRetrieval)
    textAreaThree.textContent = ThreePmRetrieval
}

//Set local storage for 4pm
$("#saveBtnFour").on("click", function () {
    console.log("button 4")
    textAreaFour = document.getElementById("textAreaFour").value;
    console.log(textAreaFour)
    localStorage.setItem("4PM", textAreaFour)
})
if (localStorage.getItem("4PM") === null) {
    console.log("nothing here")
} else {
    var FourPmRetrieval = localStorage.getItem("4PM")
    console.log(FourPmRetrieval)
    textAreaFour.textContent = FourPmRetrieval
}

//setting local storage for 5pm

$("#saveBtnFive").on("click", function () {
    console.log("button 5")
    textAreaFive = document.getElementById("textAreaFive").value;
    console.log(textAreaFive)
    localStorage.setItem("5PM", textAreaFive)
})
if (localStorage.getItem("5PM") === null) {
    console.log("nothing here")
} else {
    var FivePmRetrieval = localStorage.getItem("5PM")
    console.log(FivePmRetrieval)
    textAreaFive.textContent = FivePmRetrieval
}



















