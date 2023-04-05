const images = [
  {
    img: './images/ROD-Admiral.svg',
    dot: document.querySelector('.dot-1'),
    line: document.querySelector('.line-decorate-1'),
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months'
  },
  {
    img: './images/Sochi.svg',
    dot: document.querySelector('.dot-2'),
    line: document.querySelector('.line-decorate-2'),
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
  },
  {
    img: './images/ROD-Patriot.svg',
    dot: document.querySelector('.dot-3'),
    line: document.querySelector('.line-decorate-3'),
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'
  }
]

const slider = document.querySelector('.slider');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');


const setImage = (index) => {
  slider.style.backgroundImage = `url(${images[index].img})`;
}

const makeActive = (index) => {
  images[index].dot.style.opacity = 1;
  images[index].line.classList.add('brown-hypertext');
}

const makeInactive = (index) => {
  images[index].dot.style.opacity = 0.3;
  images[index].line.classList.remove('brown-hypertext');
}

const changeTextContent = (index) => {
  document.querySelector('.city-text').textContent = images[index].city;
  document.querySelector('.area').textContent = images[index].area;
  document.querySelector('.time').textContent = images[index].time;
}

const pressOnElement = (index) => {
  makeInactive(currentIndex);
  changeTextContent(index);
  currentIndex = index;
  setImage(currentIndex);
  makeActive(currentIndex);
}


let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex -= 1;
  }

  changeTextContent(currentIndex);
  setImage(currentIndex);
  makeActive(currentIndex);
})

arrowRight.addEventListener('click', () => {
  makeInactive(currentIndex);

  if (currentIndex == images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  changeTextContent(currentIndex);
  setImage(currentIndex);
  makeActive(currentIndex);
})

for (let i = 0; i <= images.length - 1; i++) {
  images[i].dot.addEventListener('click', () => {
    pressOnElement(i);
  });
  images[i].line.addEventListener('click', () => {
    pressOnElement(i);
  });
}