const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const gifContainer = document.getElementById('gifContainer');

noBtn.addEventListener('click', function() {
  yesBtn.style.transform = 'scale(1.2)';
  yesBtn.style.transition = 'transform 0.5s';
  noBtn.style.display = 'none';
});

yesBtn.addEventListener('click', function() {
  gifContainer.classList.remove('hidden');
});
