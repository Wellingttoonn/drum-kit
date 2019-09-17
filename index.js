// Select all buttons
document.querySelectorAll('.drum').forEach((drum)=> {
  // Add a click event listener for each button
  drum.addEventListener('click', (e)=> {
    playSound(e.target.innerHTML)
    animatePress(e.target.innerHTML)
  });
});

// Add event listener for keyboard keys
document.addEventListener('keypress', (e)=> {
  playSound(e.key)
  animatePress(e.key)
})

// Play sound
function playSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;    

    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break; 

    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;    

    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      break;
  }
}

// Animate button press
function animatePress(key) {
  document.querySelector(`.${key}`).classList.add("pressed");

  setTimeout(()=> {
    document.querySelector(`.${key}`).classList.remove("pressed");
  }, 100)
}
