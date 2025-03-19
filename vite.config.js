import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // page
        index: 'index.html',
        //components
        //main
        header: 'src/components/main_header/header.html',
        nav: 'src/components/main_nav/main_nav.html',
        nav_pc: 'src/components/main/header/main_nav_pc/main_nav_pc.html',
        //mypage
        mypage: 'src/components/mypage/mypage_user_profile.html',
        //login
        login_header: 'src/components/login/login_header.html',
        login_ment1: 'src/components/login/login_ment1.html',
        login_ment2: 'src/components/login/login_ment2.html',
        login_email: 'src/components/login/login_email.html',
        login_checkbox: 'src/components/login/login_checkbox',
        login_button: 'src/components/login/login_button',
        login_id: 'src/components/login/login_id',
        login_account: 'src/components/login/login_account',
        login_google: 'src/components/login/login_google',
        login_qr: 'src/components/login/login_qr',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
