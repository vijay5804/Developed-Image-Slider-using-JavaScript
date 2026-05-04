document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  let slides = document.querySelectorAll(".slide");
let slidesClass = document.getElementsByClassName("slide");
console.log(slides);
console.log(slidesClass);
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots-container");

  let currentIndex = 1; 
  const transitionTime = 500; 
    
  slides.forEach((slide, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      if (isMoving) return;
      currentIndex = index + 1;
      updateSlider(true);
    });
    dotsContainer.appendChild(dot);
  });
  const dots = document.querySelectorAll(".dot");

  // 2. Clone first and last slides for infinite effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  
  slider.appendChild(firstClone);
  slider.prepend(lastClone);

  // 3. Initial Position
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  let isMoving = false;

  function updateSlider(withAnimation = true) {
    if (withAnimation) {
      slider.style.transition = `transform ${transitionTime}ms ease-in-out`;
    } else {
      slider.style.transition = "none";
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    let dotIndex = currentIndex - 1;
    console.log(dotIndex)
    if (currentIndex === 0) dotIndex = slides.length - 1;
    if (currentIndex === slides.length + 1) dotIndex = 0;

    dots.forEach(d => d.classList.remove("active"));
    dots[dotIndex].classList.add("active");
  }


  slider.addEventListener('transitionend', () => {
    isMoving = false;
    if (currentIndex === 0) {
      slider.style.transition = "none";
      currentIndex = slides.length;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    if (currentIndex === slides.length + 1) {
      slider.style.transition = "none";
      currentIndex = 1;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  nextBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex++;
    updateSlider(true);
  });

  prevBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;
    currentIndex--;
    updateSlider(true);
  });
});