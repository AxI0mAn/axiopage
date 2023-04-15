function openLP() {
  document.getElementById('openLanding').classList.toggle('show');
}
function openCS() {
  document.getElementById('openCatalog').classList.toggle('show');
}
function openIS() {
  document.getElementById('openInfoSite').classList.toggle('show');
}
function openOther() {
  document.getElementById('openOtherSites').classList.toggle('show');
}

// Close the start_button menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.start_click')) {
    var start_buttons = document.getElementsByClassName('start_button-content');
    var i;
    for (i = 0; i < start_buttons.length; i++) {
      var openstart_button = start_buttons[i];
      if (openstart_button.classList.contains('show')) {
        openstart_button.classList.remove('show');
      }
    }
  }
};
