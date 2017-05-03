document.addEventListener("DOMContentLoaded", function() {
  function removeTransition(e) {
    // console.log(e);
    if (e.propertyName !== 'box-shadow') return;

    e.target.classList.remove('key-pressed');
  }

  function keyPressed(e) {
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    
    key.classList.add('key-pressed');
  }

  const keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(function(element) {
      element.addEventListener('transitionend', removeTransition)
  });

  window.addEventListener('keydown', keyPressed);
});
