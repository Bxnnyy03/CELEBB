// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // compensate for fixed navbar
        behavior: "smooth"
      });
    }
  });
});
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // compensate for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// Service slider code
(function(){
  const track = document.querySelector('.service-slider-celebspa-track');
  const boxes = document.querySelectorAll('.service-slider-celebspa-box');
  const prevBtn = document.querySelector('.service-slider-celebspa-buttons .prev');
  const nextBtn = document.querySelector('.service-slider-celebspa-buttons .next');
  const sliderContainer = document.querySelector('.service-slider-celebspa');

  if (!track || boxes.length === 0 || !prevBtn || !nextBtn || !sliderContainer) return; // ป้องกัน error ถ้า element ไม่มีในหน้า

  let boxWidth = boxes[0].offsetWidth + 20; // 20 คือ margin-right
  let visibleBoxesCount = Math.floor(sliderContainer.offsetWidth / boxWidth);
  let maxIndex = boxes.length - visibleBoxesCount;
  if(maxIndex < 0) maxIndex = 0;

  let currentIndex = 0;

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      track.style.transform = `translateX(-${boxWidth * currentIndex}px)`;
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      track.style.transform = `translateX(-${boxWidth * currentIndex}px)`;
    }
  });

  window.addEventListener('resize', () => {
    boxWidth = boxes[0].offsetWidth + 20;
    visibleBoxesCount = Math.floor(sliderContainer.offsetWidth / boxWidth);
    maxIndex = boxes.length - visibleBoxesCount;
    if(maxIndex < 0) maxIndex = 0;
    if(currentIndex > maxIndex) currentIndex = maxIndex;
    track.style.transform = `translateX(-${boxWidth * currentIndex}px)`;
  });
})();
