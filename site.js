// This program works out based on user inputs, how much sleep a user is getting, and steps they can take if they don't get enough sleep
// Created by Ben Akehurst - October 2016

// These elements are used depending on user inputs and need to be loaded on page load
function init(){
    // The tips at the bottom of the page
    var sleepInformationWindow = document.getElementById('sleepInformationWindow');
    sleepInformationWindow.style.display = "none";

    var goodThumbSpan = document.getElementById('goodThumbSpan');
    goodThumbSpan.style.display = "none";
}

function sleepCalulator(){

  // Makes a variable for all the user input boxes for use in validation
  var numberLikeToSleep = document.getElementById("numberLikeToSleep");
  var inputMonday = document.getElementById("monday");
  var inputTuesday = document.getElementById("tuesday");
  var inputWednesday = document.getElementById("wednesday");
  var inputThursday = document.getElementById("thursday");
  var inputFriday = document.getElementById("friday");
  var inputSaturday = document.getElementById("saturday");
  var inputSunday = document.getElementById("sunday");

  // Takes the user inputs and turns them into interger values
  var likeToSleep = parseInt(numberLikeToSleep.value);
  var monday = parseInt(inputMonday.value);
  var tuesday = parseInt(inputTuesday.value);
  var wednesday = parseInt(inputWednesday.value);
  var thursday = parseInt(inputThursday.value);
  var friday = parseInt(inputFriday.value);
  var saturday = parseInt(inputSaturday.value);
  var sunday = parseInt(inputSunday.value);

  // Validation
  //Sets default values for input box style
  numberLikeToSleep.style.backgroundColor = "";
  inputMonday.style.backgroundColor = "";
  inputTuesday.style.backgroundColor = "";
  inputWednesday.style.backgroundColor = "";
  inputThursday.style.backgroundColor = "";
  inputFriday.style.backgroundColor = "";
  inputSaturday.style.backgroundColor = "";
  inputSunday.style.backgroundColor = "";

  // validation - the user needs to fill in each box for the program to works
  if (likeToSleep == ""){
    numberLikeToSleep.style.backgroundColor = "red";
    return;
  }

   if (monday == ""){
    inputMonday.style.backgroundColor = "red";
    return;
  }

   if (tuesday == ""){
    inputTuesday.style.backgroundColor = "red";
    return;
  }

   if (wednesday == ""){
    inputWednesday.style.backgroundColor = "red";
    return;
  }

   if (thursday == ""){
    inputThursday.style.backgroundColor = "red";
    return;
  }

   if (friday == ""){
    inputFriday.style.backgroundColor = "red";
    return;
  }

   if (saturday == ""){
    inputSaturday.style.backgroundColor = "red";
    return;
  }

   if (sunday == ""){
    inputSunday.style.backgroundColor = "red";
    return;
  }

  // Based on the final user inputs, 2 values are caculated
  // This var takes the amont of time the user would like to sleep each night and multiplys it by 7 giving us a weekly target number
  var idealSleepHours = likeToSleep * 7;
  // Here, based on user inputs, an actual amount of weekly sleep is calculated
  var actualSleepHours = monday + tuesday + wednesday + thursday + friday + saturday + sunday;

  // This is used for checking the user inputs are being received and converted to working variables.
  // console.log(idealSleepHours);
  // console.log(actualSleepHours);

  // Here we call the next stage of the program and send it our 2 numbers - the amount of time the user would like to sleep and how much time they do sleep
  sleepCalculation(idealSleepHours,actualSleepHours);
}

// In this function comparisons between the two figures are compared and depending on the if/else outcomes, following functions are called.
function sleepCalculation(ideal, actual){

    // Here we receive the 2 numbers from the previous function and turn them back into usable variables
    var idealSleepHours = ideal; //amount i want to sleep
    var actualSleepHours = actual; //Amount I sleep

    // This is used for checking that the values are sent though correctly
    // console.log("after transfer ideal: " + idealSleepHours);
    // console.log("actual sleep after transfer: " + actualSleepHours);

    // Here we call our first function showing information to the user. This is displayed to the user and is not dependent on the logic of the program.
    youSleepMessage(actualSleepHours);

    if(actualSleepHours > idealSleepHours){
      goodSleep(goodThumbSpan);
    }

    else if (actualSleepHours == idealSleepHours){
      okSleep(goodThumbSpan);
    }

    else if (actualSleepHours < idealSleepHours){
      badSleep(sleepInformationWindow);
    }
}

// This function makes a calculation on how much the user sleeps in a month and a year and presents this information to the user. It is presented to the user regardless of the amount they sleep.
function youSleepMessage(actualSleepHours){

  var actualSleepHours;
  var monthlySleep = actualSleepHours*4;
  var yearlySleep = actualSleepHours*52;
  
  var spanYouSleepXHours = document.getElementById('spanYouSleepXHours');
  spanYouSleepXHours.innerHTML = "You're currently getting" + " " + actualSleepHours + " " + "hours of sleep per week." + "\nThis comes out to" + " " + monthlySleep + " " + "hours of sleep per month, " + "\nOr" + " " + yearlySleep + " " + "hours of sleep per year!" ;
}

function goodSleep(goodThumbSpan){
  
  var spanGoodSleepMessage = document.getElementById('spanGoodSleepMessage');
  spanGoodSleepMessage.innerHTML = "Based on you current sleep pattern, you're getting more than enough sleep!"

  goodThumbSpan.style.display = "block";
}

function okSleep(goodThumbSpan){

  var spanOkSleepMessage = document.getElementById('spanOkSleepMessage');
  spanOkSleepMessage.innerHTML = "Based on you current sleep pattern, you're getting enough sleep, but maybe you should try to get to bed earlier now and again."

  goodThumbSpan.style.display = "block";
}

function badSleep(sleepInformationWindow){
  
  var spanBadSleepMessage = document.getElementById('spanBadSleepMessage');
  spanBadSleepMessage.innerHTML = "Based on you current sleep pattern, you're not getting enough sleep. We suggest looking at the following tips to get a better nights sleep."

  sleepInformationWindow.style.display = "block";

}
















