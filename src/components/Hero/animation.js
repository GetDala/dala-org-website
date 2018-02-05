import anime from 'animejs';

export function animateHero() {
  let lines = document.querySelectorAll('line');

  var line1offset = anime.setDashoffset(lines[0]);
  var line2offset = anime.setDashoffset(lines[1]);
  var line3offset = anime.setDashoffset(lines[2]);

  var logoTimeline = anime.timeline();

  logoTimeline
    .add({
      targets: '#tinyCubes',
      opacity: 1,
      transformOrigin: [200, 200],
      scale: [0, 1],
      rotate: {
        value: '1turn',
        duration: 100
      },
      duration: 500,
      easing: 'easeInOutSine'
    }).add({
    targets: '#line1',
    strokeDashoffset: [line1offset, 0],
    duration: 120,
    easing: 'easeInOutSine',
  }).add({
    targets: '#line2',
    strokeDashoffset: [(0 - line2offset), 0],
    duration: 120,
    easing: 'easeInOutSine',
  }).add({
    targets: '#line3',
    strokeDashoffset: [line3offset, 0],
    duration: 120,
    easing: 'easeInOutSine',
  }).add({
    targets: '#gradientCube',
    duration: 400,
    opacity: 1,
    easing: 'easeInOutSine',
    offset: 500
  }).add({
    targets: '#purpleCube',
    transformOrigin: [228, 228],
    scale: [0, 1],
    duration: 500,
    easing: 'easeInOutElastic',
    opacity: 1,
    elasticity: 600,
    offset: '-=300'
  }).add({
    targets: '#centerCube',
    transformOrigin: [228, 228],
    scale: [0, 1],
    duration: 500,
    easing: 'easeOutElastic',
    opacity: 1,
    elasticity: 600
  })
    .add({
      targets: '#dalaLogo',
      transformOrigin: [228, 228],
      translateY: [100, 0],
      rotateY: {
        value: 360,
        duration: 500
      },
      duration: 400,
      offset: 1100
    }).finished.then(animateContent);
}

function animateContent() {
  var fills = document.querySelectorAll('#wordmarkFills path');
  var cover = document.querySelector('.hero-cover');

  anime({
    targets: cover,
    opacity: 0,
    duration: 400,
    easing: 'easeOutSine'
  }).finished.then(() => {
    cover.remove();
  });

  for (var i = 0; i < fills.length; i++) {
    var pathEl = fills[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
      targets: pathEl,
      stroke: {
        value: '#fff'
      },
      strokeDashoffset: [offset, 0],
      duration: anime.random(400, 700),
      delay: anime.random(0, 250),
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  };

  anime({
    targets: fills,
    fill: '#fff',
    duration: 4000,
    offset: 700
  });

  var logoTimeline = anime.timeline();
  logoTimeline.add({
    targets: '.hero-h1',
    translateY: [40, 0],
    opacity: 1,
    duration: 400,
    offset: 600,
    easing: 'easeOutSine'
  })
    .add({
      targets: '.hero-h2',
      translateY: [70, 0],
      duration: 400,
      opacity: 1,
      easing: 'easeOutSine',
      offset: '-=300'
    })
    .add({
      targets: '.learn-more',
      translateY: [-30, 0],
      duration: 400,
      opacity: [0, 1],
      easing: 'easeOutSine'
    });
}