// Generate letter slots
const uppercaseLetters = document.getElementById('uppercase-letters');

/*for (let i = 0; i < uppercaseLetters.children.length; i+=2) {
  let slot = document.createElement('div');
  slot.className = 'slot btn btn-light m-2';
  uppercaseLetters.insertBefore(slot, uppercaseLetters.children[i + 1]);
}*/


// Get lowercase letters
const letters = document.querySelectorAll('.lowercase-letter');


letters.forEach(letter => {
  letter.addEventListener('dragstart', dragStart);
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  window.location.reload();
});

// Drag handlers
function dragStart(e) {

  const letter = e.target;
  const dragText = letter.textContent;

  e.dataTransfer.setData('text', dragText);

  console.log("dragText is " + dragText);
  console.log("e.dataTransfer.getData('text') is " + e.dataTransfer.getData('text'));
  // Create copy
  const newLetter = createLetterCopy(letter, e);

  newLetter.classList.add('invisible');

}

function createLetterCopy(letter, e) {


  const dragText = letter.textContent;

  e.dataTransfer.setData('text', dragText);

  console.log("FROM game.js:  dragText is " + dragText);
  console.log("FROM game.js:  e.dataTransfer.getData('text') is " + e.dataTransfer.getData('text'));
  const newLetter = document.createElement('div');

  newLetter.textContent = letter.textContent;
  newLetter.className = letter.className + ' lowercase-letter';

  return newLetter;

}




// Draw new empty slots
function drawSlots() {

  const row = document.querySelector('#uppercase-letters');

  for (let i = 0; i < row.children.length; i+=2) {
    // Insert empty slot
  }

}

// Import event handlers
import {dragOver, drop} from './check.js';

// Attach event listeners
const slots = document.querySelectorAll('.slot');
slots.forEach(slot => {
  slot.addEventListener('dragover', dragOver);
  slot.addEventListener('drop', drop);
});