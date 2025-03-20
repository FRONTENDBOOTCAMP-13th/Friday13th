document.addEventListener("DOMContentLoaded", () => {
  const outer = document.querySelector(".main_banner_mobile");
  const innerList = document.querySelector(".main_banner_mobile_list");
  const inners = document.querySelectorAll(".main_banner_mobile_wrapper");
  const buttonLeft = document.querySelector(".main_banner_mobile_button_left");
  const buttonRight = document.querySelector(".main_banner_mobile_button_right");

  let currentIndex = 0; // 현재 슬라이드 인덱스
  const totalSlides = inners.length;
  let interval; // 자동 슬라이드 타이머

  // 모든 슬라이드의 width를 동일하게 설정
  inners.forEach((slide) => {
    slide.style.width = `${outer.clientWidth}px`;
  });

  // innerList 크기 설정
  innerList.style.width = `${outer.clientWidth * totalSlides}px`;

  // 슬라이드 이동 함수
  function moveSlide(index) {
    currentIndex = index < 0 ? totalSlides - 1 : index % totalSlides;
    innerList.style.transform = `translateX(-${currentIndex * outer.clientWidth}px)`;
  }

  // 좌우 버튼 클릭 이벤트
  buttonLeft.addEventListener("click", () => {
    moveSlide(currentIndex - 1);
    resetInterval();
  });

  buttonRight.addEventListener("click", () => {
    moveSlide(currentIndex + 1);
    resetInterval();
  });

  // 자동 슬라이드 기능
  function startAutoSlide() {
    interval = setInterval(() => {
      moveSlide(currentIndex + 1);
    }, 2000);
  }

  function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
  }

  startAutoSlide(); // 자동 슬라이드 시작
});
