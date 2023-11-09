// Add event listeners
const slots = document.querySelectorAll('.empty-slot');
slots.forEach(slot => {
  slot.addEventListener('dragover', dragOver);
  slot.addEventListener('drop', drop);
});

export function dragOver(e) {
  e.preventDefault();
}

export function drop(e) {

  const slot = e.target;
  const uppercaseLetter = slot.previousElementSibling;
  const dragText = e.dataTransfer.getData('text'); // Get data



  // Match logic
  const lower = dragText.toLowerCase();
  const upper = uppercaseLetter.textContent.toLowerCase();

  if (lower === upper) {

    // On match
    const audio = new Audio('/static/audio/success.wav');
    audio.play();
    slot.innerHTML = dragText;
    slot.draggable = false;

  } else {
    console.log("FROM check.js:  lower was " + lower + " and upper was " + upper);
    // On fail
    const audio = new Audio('/static/audio/failure.mp3');
    audio.play();

  }

}