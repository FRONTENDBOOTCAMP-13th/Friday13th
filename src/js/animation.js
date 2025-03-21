document.addEventListener('DOMContentLoaded', function () {
  // 필요한 요소들 선택
  const bannerList = document.querySelector('.main_banner_mobile_list');
  const bannerWrappers = document.querySelectorAll(
    '.main_banner_mobile_wrapper'
  );
  const leftButton = document.querySelector('.main_banner_mobile_button_left');
  const rightButton = document.querySelector(
    '.main_banner_mobile_button_right'
  );

  // 현재 보여지는 배너 인덱스
  let currentIndex = 0;
  // 전체 배너 개수
  const totalBanners = bannerWrappers.length;

  // 배너 이동 함수
  function moveBanner(index) {
    // 인덱스 범위 확인 및 조정
    if (index < 0) index = totalBanners - 1;
    if (index >= totalBanners) index = 0;

    currentIndex = index;

    // transform을 사용하여 배너 이동
    const translateValue = -currentIndex * 100;
    bannerList.style.transform = `translateX(${translateValue}%)`;
  }

  // 버튼 이벤트 리스너 추가
  leftButton.addEventListener('click', () => {
    moveBanner(currentIndex - 1);
  });

  rightButton.addEventListener('click', () => {
    moveBanner(currentIndex + 1);
  });

  // 터치 이벤트 처리 (모바일 스와이프 지원)
  function setupTouchEvents() {
    let startX = 0;
    let isDragging = false;

    bannerList.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    bannerList.addEventListener('touchmove', (e) => {
      if (!isDragging) return;

      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;

      // 작은 움직임은 무시
      if (Math.abs(diff) < 30) return;

      if (diff > 0) {
        // 왼쪽으로 스와이프
        moveBanner(currentIndex + 1);
      } else {
        // 오른쪽으로 스와이프
        moveBanner(currentIndex - 1);
      }

      isDragging = false;
    });

    bannerList.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // 자동 슬라이드 설정
  function setupAutoSlide() {
    const autoSlideInterval = setInterval(() => {
      moveBanner(currentIndex + 1);
    }, 3000); // 3초마다 슬라이드

    // 사용자 상호작용 시 자동 슬라이드 일시 중지
    const container = document.querySelector('.main_banner_mobile_container');

    container.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });

    container.addEventListener('touchstart', () => {
      clearInterval(autoSlideInterval);
    });

    // 선택적: 마우스나 터치가 떠나면 자동 슬라이드 다시 시작
    // container.addEventListener('mouseleave', () => {
    //   setupAutoSlide();
    // });
  }

  // 드래그 이벤트 처리 (데스크톱 지원)
  function setupDragEvents() {
    let startX = 0;
    let isDragging = false;

    bannerList.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      isDragging = true;
      // 드래그 중 텍스트 선택 방지
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const currentX = e.clientX;
      const diff = startX - currentX;

      // 작은 움직임은 무시
      if (Math.abs(diff) < 30) return;

      if (diff > 0) {
        // 왼쪽으로 드래그
        moveBanner(currentIndex + 1);
      } else {
        // 오른쪽으로 드래그
        moveBanner(currentIndex - 1);
      }

      isDragging = false;
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  // 키보드 이벤트 처리 (접근성)
  function setupKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        moveBanner(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        moveBanner(currentIndex + 1);
      }
    });
  }

  // 초기화 함수 실행
  setupTouchEvents();
  setupDragEvents();
  setupKeyboardEvents();
  setupAutoSlide();

  // 첫 번째 배너 표시
  moveBanner(0);
});
