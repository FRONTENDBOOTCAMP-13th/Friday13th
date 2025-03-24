// document.addEventListener('DOMContentLoaded', function () {
//   const tabs = document.querySelectorAll('.scrum-tab');
//   const content = document.querySelector('.scrum-content');

//   // 스크럼 회의록 데이터
//   const scrumData = [
//     {
//       day: 1,
//       date: '2025년 3월 17일 (월)',
//       summary:
//         '프로젝트 킥오프 미팅으로 전체적인 목표와 일정을 공유했습니다. 각 팀원의 역할과 책임을 명확히 정의하고, 초기 요구사항 분석을 시작했습니다.',
//       attendees: ['김민준', '이지윤', '박서현', '정도윤'],
//       completed: [
//         {
//           task: '프로젝트 레포지토리 생성 및 초기 설정',
//           owner: '박서현',
//           status: 'completed',
//         },
//         { task: '요구사항 문서 작성', owner: '정도윤', status: 'completed' },
//       ],
//       inProgress: [{ task: '삼성 공식 홈페이지 분석 및' }],
//     },
//   ];
// });

document.getElementById('openModal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('modal-open'); // 배경 어둡게
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open'); // 원래대로 복구
});

window.addEventListener('click', function (event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open'); // 원래대로 복구
  }
});
