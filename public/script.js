const animationTarget = document.getElementById('animation-target');

// Define your animation using Anime.js
anime({
  targets: animationTarget,
  translateX: 250,
  duration: 1000,
  autoplay: true,
  loop: true,
  easing: 'easeInOutQuad',
});
