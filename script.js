document.querySelectorAll(".story-btn").forEach(function(btn){
  btn.addEventListener('click', function(){
    btn.classList.toggle('change');
    btn.nextElementSibling.classList.toggle('change');
  });
});
