let swiper = new Swiper(".swiper", {
  cssMode: true, //옵션
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  slidesPerGroup: 3, //한번에 슬라이딩될 개수
  spaceBetween: 40, //아이템 사이 간격
  loop: true,
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

function updateTimer() {
  const future = Date.parse("2025/07/25 18:20:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;
  document.getElementById("timer").innerHTML =
    "<h5>남은 시간</h5>" +
    d +
    "<span>일 : </span>" +
    h +
    "<span> : </span>" +
    m +
    "<span> : </span>" +
    s;
}

setInterval(updateTimer, 1000);
