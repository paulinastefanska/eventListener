const h1 = document.querySelector("h1");
document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX + 1; // max 255 - qty from 0
  const y = e.clientY + 1; // max 255 - qty from 0
  const width = window.innerWidth;
  const height = window.innerHeight;
  h1.textContent = `${x}, ${y}`;

  const red = x / width * 100; // max 100
  const green = y / height * 100; // max 100
  const blue = ((x / width * 100) + (y / height * 100)) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
})

