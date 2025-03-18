import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',

        header: 'src/components/main_header/header.html',
        nav: 'src/components/main_nav/main_nav.html',


        mypage: 'src/components/mypage/user_profile.html',

        header: 'src/components/header/header.html',
        login_header: 'src/components/login/login_header.html',
        login_ment: 'src/components/login/login_ment.html',

      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
