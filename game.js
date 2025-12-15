const sky = document.getElementById('sky');
const starCount = 120; // number of stars

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // random size
  const size = Math.random() * 3 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // random position
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  // random twinkle speed
  const twinkleDuration = 1.5 + Math.random() * 3;
  const twinkleDelay = Math.random() * 5;
  star.style.animationDuration = `${twinkleDuration}s`;
  star.style.animationDelay = `${twinkleDelay}s`;

  // random drift direction and distance
  const dx = (Math.random() - 0.5) * 50; // move -25 to +25px horizontally
  const dy = (Math.random() - 0.5) * 50; // move -25 to +25px vertically
  star.style.setProperty('--dx', `${dx}px`);
  star.style.setProperty('--dy', `${dy}px`);

  // combine twinkle + drift
  const driftDuration = 20 + Math.random() * 20; // 20–40s
  star.style.animation += `, drift ${driftDuration}s infinite alternate linear`;

  sky.appendChild(star);
}
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const images = project.querySelectorAll('img');
  let index = 1; // start with the second image (0 = first, 1 = second)

  // make sure second one is visible at start
  images.forEach(img => img.style.opacity = 0);
  images[index].style.opacity = 1;

  setInterval(() => {
    images[index].style.opacity = 0;
    index = (index + 1) % images.length;
    images[index].style.opacity = 1;
  }, 2000);
});
const haver = document.querySelector()