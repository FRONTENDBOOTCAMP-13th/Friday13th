// src/main.js 파일에 다음 코드를 추가하세요

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
  // 필요한 요소 선택
  const navWrapper = document.querySelector('.main_navigation_wrapper');
  const body = document.body;

  // 메뉴 버튼 생성 및 추가 (HTML에 버튼이 없는 경우)
  const menuButton = document.createElement('button');
  menuButton.classList.add('menu-toggle-btn');
  menuButton.innerHTML = '메뉴';
  menuButton.style.position = 'fixed';
  menuButton.style.top = '20px';
  menuButton.style.right = '20px';
  menuButton.style.zIndex = '5';
  menuButton.style.padding = '10px 15px';
  document.body.appendChild(menuButton);

  // 메뉴 닫기 버튼 생성 및 추가
  const closeButton = document.createElement('button');
  closeButton.classList.add('menu-close-btn');
  closeButton.innerHTML = '닫기';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '20px';
  closeButton.style.right = '20px';
  document.querySelector('.main_navigation').appendChild(closeButton);

  // 메뉴 열기 기능
  menuButton.addEventListener('click', () => {
    navWrapper.classList.add('active');
    body.style.overflow = 'hidden'; // 스크롤 방지
  });

  // 메뉴 닫기 기능 - 닫기 버튼 클릭
  closeButton.addEventListener('click', () => {
    navWrapper.classList.remove('active');
    body.style.overflow = ''; // 스크롤 복원
  });

  // 메뉴 외부 클릭 시 닫기
  navWrapper.addEventListener('click', (e) => {
    // 클릭한 요소가 navWrapper인 경우에만 닫힘 (내부 요소 클릭은 무시)
    if (e.target === navWrapper) {
      navWrapper.classList.remove('active');
      body.style.overflow = '';
    }
  });

  // 페이지 로드 시 메뉴 초기 상태 설정
  // 기본적으로 CSS에서 .active 클래스를 제거하기
  navWrapper.classList.remove('active');
});
