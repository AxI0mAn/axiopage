function openBackgr() {
  document.getElementById('openBackgrounds').classList.toggle('show');
}
function openBut() {
  document.getElementById('openButtons').classList.toggle('show');
}
function openTexts() {
  document.getElementById('openTexts').classList.toggle('show');
}
function openCards() {
  document.getElementById('openCards').classList.toggle('show');
}
function openNavbars() {
  document.getElementById('openNavbars').classList.toggle('show');
}
function openSliders() {
  document.getElementById('openSliders').classList.toggle('show');
}
function openScripts() {
  document.getElementById('openScripts').classList.toggle('show');
}
function openOtherComponents() {
  document.getElementById('openOtherComponents').classList.toggle('show');
}

// Close the start_button menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.start_click')) {
    var start_buttons = document.getElementsByClassName('start_content');
    var i;
    for (i = 0; i < start_buttons.length; i++) {
      var openstart_button = start_buttons[i];
      if (openstart_button.classList.contains('show')) {
        openstart_button.classList.remove('show');
      }
    }
  }
};
