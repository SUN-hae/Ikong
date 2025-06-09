let swiper = new Swiper(".swiper", {
  cssMode: true, //옵션
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  slidesPerGroup: 3, //한번에 슬라이딩될 개수
  spaceBetween: 20, //아이템 사이 간격
  navigation: {
    //양쪽 화살표
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    //슬라이드 페이지 도트
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
