var mouseX = 0,
  mouseY = 0;
$(document).mousemove(function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

// cache the selector
var mouseMove = $('#mouseMove');
var xp = 0,
  yp = 0;
var loop = function () {
  // change 12 to alter damping, higher is slower
  xp += mouseX - xp - 25;
  yp += mouseY - yp - 25;
  mouseMove.css({ left: xp, top: yp });
};

window.rInterval = function (callback, delay) {
  var dateNow = Date.now,
    requestAnimation = window.requestAnimationFrame,
    start = dateNow(),
    stop,
    intervalFunc = function () {
      dateNow() - start < delay || ((start += delay), callback());
      stop || requestAnimation(intervalFunc);
    };
  requestAnimation(intervalFunc);
  return {
    clear: function () {
      stop = 1;
    },
  };
};
window.rInterval(loop, 1);
