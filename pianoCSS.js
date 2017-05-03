document.addEventListener("DOMContentLoaded", function() {

  function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    e.target.classList.remove('key-pressed');
  }

  function keyPlaying(e) {
      var keyCod, key, sounds;

      if( e.keyCode === undefined ) {
        keyCode = e.target.getAttribute("data-key");
        key = document.querySelector(`li[data-key="${keyCode}"]`);
        sounds = document.querySelector(`audio[data-key="${keyCode}"]`);
      } else {
        key = document.querySelector(`li[data-key="${e.keyCode}"]`);
        sounds = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      }

      if (!sounds) return;
      sounds.currentTime = 0;
      sounds.play();
      key.classList.add('key-pressed');
  }


  var keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(function(element) {
      element.addEventListener("click", keyPlaying);
      element.addEventListener('transitionend', removeTransition);
  });

  window.addEventListener('keydown', keyPlaying);
});
/