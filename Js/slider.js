// const prevButton = document.querySelector('.slider__arrow--prev');
// const nextButton = document.querySelector('.slider__arrow--next');
// const dotsContainer = document.querySelector('.slider__dots');
// let currentSlide = 0;
// let autoPlayInterval;

// // Массив слайдов
// const slides = [
//   {
//     modelImg: 'img/slide1.jpg',
//     productImg: 'img/slide1-1.jpg',
//     title: 'Linda Farrow', // Добавлен тайтл
//     description: 'Очки Milo из никеля и розового золота'
//   },
//   {
//     modelImg: 'img/slide2.jpg',
//     productImg: 'img/slide2-1.jpg',
//     title: 'Linda Farrow Collection', // Добавлен тайтл
//     description: 'Очки Gold из титана'
//   },
//   {
//     modelImg: 'img/slide1.jpg',
//     productImg: 'img/slide1-1.jpg',
//     title: 'Linda Farrow Eyewear', // Добавлен тайтл
//     description: 'Очки Silver из серебра'
//   }
// ];

// // Функция для создания точек навигации
// function createDots() {
//   dotsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением точек
//   slides.forEach((_, index) => {
//     const dot = document.createElement('div');
//     dot.classList.add('slider__dot');
//     if (index === 0) dot.classList.add('active'); // Активная точка для первого слайда
//     dot.addEventListener('click', () => {
//       currentSlide = index;
//       updateSlider(currentSlide);
//     });
//     dotsContainer.appendChild(dot);
//   });
// }

// // Функция для обновления слайдера с анимацией
// // Функция для обновления слайдера с тайтлом
// function updateSlider(index) {
//   const leftImage = document.querySelector('.slider__image-left');
//   const rightImage = document.querySelector('.slider__product-image');
//   const description = document.querySelector('.slider__product-description');
//   const title = document.querySelector('.slider__product-title'); // Добавили для обновления тайтла

//   // Убираем класс active для плавной смены
//   leftImage.classList.remove('active');
//   rightImage.classList.remove('active');
//   description.classList.remove('active');
//   title.classList.remove('active'); // Тайтл тоже удаляем из активного состояния

//   // Убираем класс active у всех точек
//   document.querySelectorAll('.slider__dot').forEach(dot => dot.classList.remove('active'));

//   // Задержка для плавного эффекта перед сменой контента
//   setTimeout(() => {
//     leftImage.src = slides[index].modelImg;
//     rightImage.src = slides[index].productImg;
//     description.textContent = slides[index].description;
//     title.textContent = slides[index].title; // Обновляем текст тайтла

//     // Добавляем класс active для анимации появления
//     leftImage.classList.add('active', 'fade');
//     rightImage.classList.add('active', 'fade');
//     description.classList.add('active', 'fade');
//     title.classList.add('active', 'fade'); // Тайтл тоже добавляем в активное состояние

//     // Добавляем класс active для текущей точки
//     document.querySelectorAll('.slider__dot')[index].classList.add('active');
//   }, 300); // Время ожидания перед сменой слайда
// }

// // Функция автоплея
// function startAutoPlay() {
//   autoPlayInterval = setInterval(() => {
//     currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
//     updateSlider(currentSlide);
//   }, 300000); // Интервал в 3 секунды
// }

// // Останавливаем автоплей при наведении курсора на слайдер
// document.querySelector('.slider').addEventListener('mouseover', () => {
//   clearInterval(autoPlayInterval);
// });

// // Возобновляем автоплей при убирании курсора
// document.querySelector('.slider').addEventListener('mouseout', () => {
//   startAutoPlay();
// });

// // Обработчики кликов для стрелок
// prevButton.addEventListener('click', () => {
//   currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
//   updateSlider(currentSlide);
// });

// nextButton.addEventListener('click', () => {
//   currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
//   updateSlider(currentSlide);
// });

// // Запускаем автоплей при загрузке страницы
// createDots(); // Генерируем точки навигации
// startAutoPlay();



const prevButton = document.querySelector('.slider__arrow--prev');
const nextButton = document.querySelector('.slider__arrow--next');
const dotsContainer = document.querySelector('.slider__dots');
let currentSlide = 0;
let autoPlayInterval;
let startX = 0; // Начальная позиция X для свайпа
let isDragging = false; // Флаг для отслеживания процесса перетаскивания

// Массив слайдов
const slides = [
  {
    modelImg: 'img/slide1.jpg',
    productImg: 'img/slide1-1.png',
    title: 'Linda Farrow',
    description: 'Очки Milo из никеля и розового золота'
  },
  {
    modelImg: 'img/slide2.jpg',
    productImg: 'img/slide2-1.jpg',
    title: 'Linda Farrow Collection',
    description: 'Очки Gold из титана'
  },
  {
    modelImg: 'img/slide1.jpg',
    productImg: 'img/slide1-1.png',
    title: 'Linda Farrow Eyewear',
    description: 'Очки Silver из серебра'
  }
];

// Функция для создания точек навигации
function createDots() {
  dotsContainer.innerHTML = ''; // Очищаем контейнер перед добавлением точек
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('slider__dot');
    if (index === 0) dot.classList.add('active'); // Активная точка для первого слайда
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlider(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

// Функция для обновления слайдера с тайтлом
function updateSlider(index) {
  const leftImage = document.querySelector('.slider__image-left');
  const rightImage = document.querySelector('.slider__product-image');
  const description = document.querySelector('.slider__product-description');
  const title = document.querySelector('.slider__product-title');

  // Убираем класс active для плавной смены
  leftImage.classList.remove('active');
  rightImage.classList.remove('active');
  description.classList.remove('active');
  title.classList.remove('active');

  // Убираем класс active у всех точек
  document.querySelectorAll('.slider__dot').forEach(dot => dot.classList.remove('active'));

  // Задержка для плавного эффекта перед сменой контента
  setTimeout(() => {
    leftImage.src = slides[index].modelImg;
    rightImage.src = slides[index].productImg;
    description.textContent = slides[index].description;
    title.textContent = slides[index].title;

    // Добавляем класс active для анимации появления

    // Плавное появление/исчезновение (fade) — это анимация, используемая по умолчанию. Она делает элементы прозрачными и плавно меняет их видимость.

    // Скольжение слева (slide-in-left) — элемент выезжает слева и становится видимым.
    
    // Увеличение (scale-up) — элемент увеличивается от небольшого размера до полного.
    
    // Поворот (rotate) — элемент плавно поворачивается от небольшого угла до нормального положения.
    
    // Скольжение снизу (slide-in-bottom) — элемент появляется снизу, как будто выезжает.
    
    // Чтобы использовать разные варианты анимации, достаточно изменить 'fade' в строках с `classList.add
    leftImage.classList.add('active', 'fade');
    rightImage.classList.add('active', 'fade');
    description.classList.add('active', 'fade');
    title.classList.add('active', 'fade');

    // Добавляем класс active для текущей точки
    document.querySelectorAll('.slider__dot')[index].classList.add('active');
  }, 300); // Время ожидания перед сменой слайда
}

// Функция автоплея
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider(currentSlide);
  }, 300000); // Интервал в 3 секунды
}

// Останавливаем автоплей при наведении курсора на слайдер
document.querySelector('.slider').addEventListener('mouseover', () => {
  clearInterval(autoPlayInterval);
});

// Возобновляем автоплей при убирании курсора
document.querySelector('.slider').addEventListener('mouseout', () => {
  startAutoPlay();
});

// Обработчики кликов для стрелок
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  updateSlider(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  updateSlider(currentSlide);
});

// Добавляем поддержку свайпов
const slider = document.querySelector('.slider');

// Начало свайпа или перетаскивания
slider.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX; // Сохраняем начальную точку касания
  isDragging = true;
});

slider.addEventListener('mousedown', (event) => {
  startX = event.clientX; // Сохраняем начальную точку клика
  isDragging = true;
});

// Завершение свайпа или перетаскивания
slider.addEventListener('touchend', (event) => {
  const endX = event.changedTouches[0].clientX;
  handleSwipe(endX); // Обрабатываем свайп
  isDragging = false;
});

slider.addEventListener('mouseup', (event) => {
  const endX = event.clientX;
  handleSwipe(endX); // Обрабатываем свайп
  isDragging = false;
});

// Обработка свайпа
function handleSwipe(endX) {
  const diffX = startX - endX;

  if (diffX > 50) {
    // Свайп влево
    nextButton.click();
  } else if (diffX < -50) {
    // Свайп вправо
    prevButton.click();
  }
}

// Предотвращение выделения текста при перетаскивании мышью
slider.addEventListener('mousemove', (event) => {
  if (isDragging) {
    event.preventDefault(); // Отключаем выделение текста
  }
});

// Запускаем автоплей при загрузке страницы
createDots(); // Генерируем точки навигации
startAutoPlay();
