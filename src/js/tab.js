document.querySelectorAll('.tab-button').forEach((button) => {
  button.addEventListener('click', () => {
    // 모든 탭 버튼에서 active 클래스 제거
    document.querySelectorAll('.tab-button').forEach((btn) => {
      btn.classList.remove('active');
    });

    // 모든 탭 패널에서 active 클래스 제거
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      panel.classList.remove('active');
    });

    // 클릭한 탭 버튼에 active 클래스 추가
    button.classList.add('active');

    // 해당 탭 패널 표시
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});
