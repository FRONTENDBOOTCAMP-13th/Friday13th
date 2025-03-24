import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // page
        index: 'index.html',
        main_page: 'src/page/main_page/main_page.html',
        reset_main_page: 'src/page/main_page/main_page_reset.html',
        mypage_page: 'src/page/mypage_page/mypage.html',
        frame_page: 'src/page/frame_page/frame_page.html',
        search_page: 'src/page/search_page/search_page.html',
        smartphone: 'src/page/smartphone/smartphone_page.html',
        tv_page: 'src/page/tv_page/tv_page.html',
        kitchen_page: 'src/page/kitchen_page/kitchen_page.html',
        living_page: 'src/page/living_page/living_page.html',
        exhibitions_page: 'src/page/exhibitions_page/exhibitions_page.html',
        purchase_page: 'src/page/purchase/putchase1.html',
        pc_page: 'src/page/pc_page/pc_page.html',
        loginpage: 'src/page/login_page/loginpage.html',
        pay_page: 'src/page/pay_page/pay_page.html',

        //components

        //main
        header: './src/components/main/header/main_header/main_header.html',
        nav: './src/components/main/header/main_nav/main_nav.html',
        nav_pc: './src/components/main/header/main_nav_pc/main_nav_pc.html',
        search_bar:
          './src/components/main/header/main_search_bar/main_search_bar.html',
        banner: './src/components/main/main_compo/main_banner.html',
        cardimg: './src/components/main/main_compo/main_cardimg.html',
        cardpro: './src/components/main/main_compo/main_cardpro.html',
        cardscroll: './src/components/main/main_compo/main_cardscroll.html',

        //login
        login_header: 'src/components/login/login_header.html',
        login_ment1: 'src/components/login/login_ment1.html',
        login_ment2: 'src/components/login/login_ment2.html',
        login_email: 'src/components/login/login_email.html',
        login_checkbox: './src/components/login/login_checkbox.html',
        login_button: './src/components/login/login_button.html',
        login_id: './src/components/login/login_id.html',
        login_account: './src/components/login/login_account.html',
        login_google: 'src/components/login/login_google.html',
        login_qr: 'src/components/login/login_qr.html',

        //mypage
        mypage_user_profile: 'src/components/mypage/mypage_user_profile.html',
        mypage_order_status: 'src/components/mypage/mypage_order_status.html',
        mypage_review_write: 'src/components/mypage/mypage_review_write.html',
        mypage_product_management:
          'src/components/mypage/mypage_product_management.html',
        mypage_favorite_products:
          'src/components/mypage/mypage_favorite_products.html',
        mypage_recent_store: 'src/components/mypage/mypage_recent_store.html',
        mypage_qr_scanned_products:
          'src/components/mypage/mypage_qr_scanned_products.html',
        mypage_qr_smart_estimate:
          'src/components/mypage/mypage_smart_estimate.html',

        //smartphone
        smartphone_cardcomponent:
          'src/components/smartphone/smartphone_cardcomponent.html',
        smartphone_button: 'src/components/smartphone/smartphone_button.html',
        smartphone_select_color:
          'src/components/smartphone/smartphone_select_color.html',
        smartphone_text: 'src/components/smartphone/smartphone_text.html',
        smartphone_nav: 'src/components/smartphone/smartphone_nav.html',
        smartphone_order: 'src/components/smartphone/smartphone_order.html',

        //search_components
        search_searchbar: 'src/components/search/searchbar.html',
        search_menu: 'src/components/search/search_menu.html',
        search_product: 'src/components/search/search_product.html',

        //tv_components
        tv_card_component: 'src/components/tv/tv_card_component.html',

        //card_components
        card_component: 'src/components/cardcomponent/card_component.html',
        card_component_button:
          'src/components/cardcomponent/card_component_button.html',
        card_component_text:
          'src/components/cardcomponent/card_component_text.html',
        products_nav: 'src/components/cardcomponent/products_nav.html',
        products_order: 'src/components/cardcomponent/products_order.html',

        //mainpage_footer
        main_footer_final: 'src/components/main_footer/main_footer_final.html',

        //frame_component
        frame_location: 'src/components/frame/frame_location.html',
        frame_shopping_cart: 'src/components/frame/frame_shopping_cart.html',
        frame_empty_cart: 'src/components/frame/frame_empty_cart.html',
        frame_recommend: 'src/components/frame/frame_recommend.html',
        frame_button: 'src/components/frame/frame_button.html',
        frame_cart_foot: 'src/components/frame/frame_cart_foot.html',
        frame_payment: 'src/components/frame/frame_payment.html',

        //pay_components
        pay_button: 'src/components/pay/pay_button.html',
        pay_payment: 'src/components/pay/payment_method.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
