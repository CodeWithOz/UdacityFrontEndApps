const hamburger = document.querySelector('.hamburger a'),
  sidebar = document.querySelector('.cats-menu');

// handle hamburger clicks
hamburger.addEventListener('click', event => {
  event.preventDefault();

  sidebar.classList.toggle('sidebar-hidden');
});

// populate cat names in sidebar
const sidebarCats = sidebar.querySelectorAll('li');
sidebarCats.forEach(cat => {
  // get the inner anchor tag
  const clickableArea = cat.children[0];

  // update its text
  clickableArea.textContent = cat.dataset.name;
});

// give the cats names
const cats = [...document.querySelectorAll('img')],
  catNames = ['Floor cat', 'Stunned cat'];
cats.forEach((cat, index) => {
  cat.previousElementSibling.textContent = catNames[index];
});

// track clicks on the image
const imageDiv = document.querySelector('.cat-pic');
imageDiv.addEventListener('click', event => {
  const { target } = event;

  // exit if click is not from an image
  if (target.tagName !== 'IMG') return;

  // get and increment count
  const counter = target.nextElementSibling.querySelector('.clicks');
  let curClicks = Number(counter.textContent);
  curClicks++;

  // update counter text
  counter.textContent = curClicks;
});
