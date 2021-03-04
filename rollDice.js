//++++++++++++++++++++++++++
/*Note: each dice face is made of 9 equally sized squares arranged in a 3x3 matrix. And there is a dot in the middle of each square. As we turn on or off dots, we obtain the dot patterns that represent numbers on the dice face. Dots are displayed by setting their color to white. Dots are hidden by setting their color to transparent. The background color of all squares is transparent. But the square matrix is incripted on top of another square. The background color of this substrate square is changed to
a color or to transparent to produce an appearance or dissappearance effect. */
// Grab all dots on each square of dice1
const dice1dot00 = document.getElementById('dice1dot00').style;
const dice1dot01 = document.getElementById('dice1dot01').style;
const dice1dot02 = document.getElementById('dice1dot02').style;
const dice1dot10 = document.getElementById('dice1dot10').style;
const dice1dot11 = document.getElementById('dice1dot11').style;
const dice1dot12 = document.getElementById('dice1dot12').style;
const dice1dot20 = document.getElementById('dice1dot20').style;
const dice1dot21 = document.getElementById('dice1dot21').style;
const dice1dot22 = document.getElementById('dice1dot22').style;
//++++++++++++++++++++++++++
// Prepare for next dice roll
function eraseDots(){
  // Erase both Dice faces: Turn off all dots on all squares by setting them to transparent color. The square class is a property of each square that contains a dot. Each dice face is a 6x6 matrixes of squares.
 const squaresCollection=document.getElementsByClassName('square');
 const squaresArray = Array.from(squaresCollection);
 squaresArray.forEach(function(item){
   item.style.color='transparent';
 });
}
//++++++++++++++++++++++++++
function rollADice(){
  // Produces a random number between 1 and 6, both inclusive.
const randomNumber = Math.floor(6*Math.random())+1;
console.log(`Dice stopped rolling at ${randomNumber}`);
return randomNumber;
}
//++++++++++++++++++++++++++
// Roll dice#1 by calling the rollDice() random number generator function. 
function rollDice1(){
let outcome =rollADice();
one1(outcome);
two1(outcome);
three1(outcome);
four1(outcome);
five1(outcome);
six1(outcome);
animateDieRoll1();
}
//++++++++++++++++++++++++++
// Now transform the random number generated by the rollADice() function to its corresponding dot pattet by turning on and off the individual dots that conform the dice top face. The dice top face is what shows on the game screen once the dice roll animation ends. Below are six functions. Each function is responsible for handling the on/off pattern of one random numbers 1 trough 6. Only one will come into play for each dice roll. 
function one1(outcome){
if(outcome===1){
dice1dot11.color = 'white';
}
}

function two1(outcome){
if(outcome===2){
dice1dot00.color = 'white';
dice1dot22.color = 'white';
}
}
function three1(outcome){
if(outcome===3){
dice1dot00.color = 'white';
dice1dot11.color = 'white';
dice1dot22.color = 'white';
}
}

function four1(outcome){
if(outcome===4){
dice1dot00.color = 'white';
dice1dot02.color = 'white';
dice1dot20.color = 'white';
dice1dot22.color = 'white';
}
}

function five1(outcome){
if(outcome===5){
dice1dot00.color = 'white';
dice1dot02.color = 'white';
dice1dot11.color = 'white';
dice1dot20.color = 'white';
dice1dot22.color = 'white';
}
}

function six1(outcome){
if(outcome===6){
dice1dot00.color = 'white';
dice1dot10.color = 'white';
dice1dot20.color = 'white';
dice1dot02.color = 'white';
dice1dot12.color = 'white';
dice1dot22.color = 'white';
}
}
//++++++++++++++++++++++++++
// Grab 1st dice.
const firstDice=document.getElementById('dice-one').style;
// Update dice rotation to the random angle
function updateAngl1 (angl){
firstDice.transform=`rotate(${angl}deg)`;}
//++++++++++++++++++++++++++
// After the dice pattern is defined by above six functions, is time to run the animation. Step1) The function picks one of 10 colors at random.
function animateDieRoll1(){
// The possible colors for dice1:
const colors = ['red','green','blue','orange','deeppink','orangered','black','maroon','purple','teal'];
// Paint dice1 face to the random color
let colorPointer;
colorPointer = Math.floor(
  Math.random()*(colors.length+1)
  );
  let color = colors[colorPointer];
firstDice.backgroundColor=color;
// Generate a random angle between 0 and 90 in increments of 2
let angl;
angl = Math.floor(
  Math.random()*91
  )/2;
// Update dice rotation to the random angle
updateAngl1(angl);
}


// There is probably a better way, but for the time being,I'm just duplicating above procedures for the 2nd dice.
//++++++++++++++++++++++++++
// Grab all dots on each square of dice2
const dice2dot00 = document.getElementById('dice2dot00').style;
const dice2dot01 = document.getElementById('dice2dot01').style;
const dice2dot02 = document.getElementById('dice2dot02').style;
const dice2dot10 = document.getElementById('dice2dot10').style;
const dice2dot11 = document.getElementById('dice2dot11').style;
const dice2dot12 = document.getElementById('dice2dot12').style;
const dice2dot20 = document.getElementById('dice2dot20').style;
const dice2dot21 = document.getElementById('dice2dot21').style;
const dice2dot22 = document.getElementById('dice2dot22').style;
//++++++++++++++++++++++++++

function rollDice2(){
let outcome = rollADice();
one2(outcome);
two2(outcome);
three2(outcome);
four2(outcome);
five2(outcome);
six2(outcome);
animateDieRoll2();
}
//++++++++++++++++++++++++++
// Define the dot pattern to display on dice2, for each of its 6 random numbers
function one2(outcome){
if(outcome===1){
dice2dot11.color = 'white';
}
}

function two2(outcome){
if(outcome===2){
dice2dot00.color = 'white';
dice2dot22.color = 'white';
}
}

function three2(outcome){
if(outcome===3){
dice2dot00.color = 'white';
dice2dot11.color = 'white';
dice2dot22.color = 'white';
}
}

function four2(outcome){
if(outcome===4){
dice2dot00.color = 'white';
dice2dot02.color = 'white';
dice2dot20.color = 'white';
dice2dot22.color = 'white';
}
}

function five2(outcome){
if(outcome===5){
dice2dot00.color = 'white';
dice2dot02.color = 'white';
dice2dot11.color = 'white';
dice2dot20.color = 'white';
dice2dot22.color = 'white';
}
}

function six2(outcome){
if(outcome===6){
dice2dot00.color = 'white';
dice2dot10.color = 'white';
dice2dot20.color = 'white';
dice2dot02.color = 'white';
dice2dot12.color = 'white';
dice2dot22.color = 'white';
}
}
//++++++++++++++++++++++++++
// Grab 2nd dice
const secondDice=document.getElementById('dice-two').style;
// Update dice rotation to the random angle
function updateAngl2 (angl){
secondDice.transform=`rotate(${angl}deg)`;}

function animateDieRoll2(){
// The possible colors for dice2:
const colors = ['red','green','blue','orange','deeppink','orangered','black','maroon','purple','teal'];
// Paint dice2 face to the random color
let colorPointer;
colorPointer = Math.floor(
  Math.random()*(colors.length+1)
  );
  let color = colors[colorPointer]
secondDice.backgroundColor=color;
// Generate a random angle between 0 and 90 in increments of 2
let angl;
angl = Math.floor(
  Math.random()*91
  )/2;
// Update dice rotation to the random angle
updateAngl2(angl);
}
//++++++++++++++++++++++++++
// Roll both dice once
function callAll() {
eraseDots();
rollDice1();
rollDice2();
}

function updateBothAngls (angl){
firstDice.transform=`rotate(${angl}deg)`;
secondDice.transform=`rotate(${angl}deg)`;
}

// Roll both dice multiple times
function play(){
// const firstDice=document.getElementById('dice-one').style;
// const secondDice=document.getElementById('dice-two').style;

setTimeout(
function() {
// Roll both dice one time
callAll();
setTimeout(
function() {
// Roll both dice one time
callAll();
setTimeout(
function() {
// Roll both dice one time
callAll();
setTimeout(
function() {
// Roll both dice one time
callAll();
// Update final dice rotation to angle 0deg
updateBothAngls(0);
  }, 600);
  }, 450);
  }, 300);
  }, 150);
 }
//++++++++++++++++++++++++++
const rollDicesBtn = document.getElementById('roll-dice');
rollDicesBtn.addEventListener('click', play);



