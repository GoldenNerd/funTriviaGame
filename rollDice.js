//++++++++++++++++++++++++++
/*Note: each dice face is made of 9 equally sized squares arranged in a 3x3 matrix. And there is a dit in the middle of each square. As we turn on or off dots, we obtain the dot patterns that represent numbers on the dice face. Dots are displayed by setting their color to white. Dots are hidden by setting their color to transparent. The background color of all squares is transparent. But the square matrix is incripted on top of another square. The background color of this substrate layer is changed to 
a color or to transparent to produce an appearance ir dissappearance effect. */
function eraseDots(){
  // Erase Dice face: Turn off all dots on all squares by setting them to transparent color
 const squaresCollection=document.getElementsByClassName('square');
 const squaresArray = Array.from(squaresCollection);
 squaresArray.forEach(function(item){
   item.style.color='transparent';
 });
}
//++++++++++++++++++++++++++
function rollADice(){
  // Produce a random number between 1 and 6, both inclusive.
const randomNumber = Math.floor(6*Math.random())+1;
console.log(`Dice stopped rolling at ${randomNumber}`);
return randomNumber;
}
//++++++++++++++++++++++++++
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
// Define the dot pattern to display on dice1, for each of its 6 random numbers
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
function animateDieRoll1(){
  // Grab 1st dice.
const firstDie=document.getElementById('dice-one').style;
// The possible colors for dice1:
const colors = ['red','green','blue','orange','deeppink','orangered','black','maroon','purple','teal'];
// Paint dice1 face to the random color
let colorIndex;
colorIndex = Math.floor(
  Math.random()*(colors.length+1)
  );
  let color = colors[colorIndex]
firstDie.backgroundColor=color;
// Generate a random angle between 0 and 90 in increments of 2
let angl;
angl = Math.floor(
  Math.random()*91
  )/2;
// Update dice rotation to the random angle
function updateAngl(angl){
firstDie.transform=`rotate(${angl}deg)`;}
updateAngl(angl);
}
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
function animateDieRoll2(){
  // Grab 2nd dice
const secondDie=document.getElementById('dice-two').style;
// The possible colors for dice2:
const colors = ['red','green','blue','orange','deeppink','orangered','black','maroon','purple','teal'];
// Paint dice2 face to the random color
let colorIndex;
colorIndex = Math.floor(
  Math.random()*(colors.length+1)
  );
  let color = colors[colorIndex]
secondDie.backgroundColor=color;
// Generate a random angle between 0 and 90 in increments of 2
let angl;
angl = Math.floor(
  Math.random()*91
  )/2;
// // Update dice rotation to the random angle
function updateAngl(angl){
secondDie.transform=`rotate(${angl}deg)`;}
updateAngl(angl);
}
//++++++++++++++++++++++++++
// Roll both dice once
function callAll() {
eraseDots();
rollDice1();
rollDice2();
}
// Roll both dice multiple times
function play(){
const firstDie=document.getElementById('dice-one').style;
const secondDie=document.getElementById('dice-two').style;

   setTimeout(
     function() {
// Roll both dice one time
    callAll();
    firstDie.transform='translate(xpx, ypx)';
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
function updateAngl(angl){
firstDie.transform=`rotate(${angl}deg)`;
secondDie.transform=`rotate(${angl}deg)`;
}
updateAngl(0);


  }, 150);
  }, 300);
  }, 450);
  }, 600);
 }
//++++++++++++++++++++++++++
const rollDicesBtn = document.getElementById('roll-dice');
rollDicesBtn.addEventListener('click', play);



