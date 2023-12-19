/* 마우스 애니메이션 */
let mouse = document.querySelector('#mouse');

let myAnimation = requestAnimationFrame(aniFn);

let posX = 0;
let posY = 0;
let targetPosX = 0;
let targetPosY = 0;
let g = 0.05;

function aniFn()
{
    mouse.style.left = posX+ 'px';
    mouse.style.top = posY+ 'px';
    
    //move algorithm
    posX += (targetPosX-posX) * g;
    posY += (targetPosY-posY) * g;
   
    requestAnimationFrame(aniFn);
}



document.addEventListener('mousemove', setPos);

function setPos(e)
{
    targetPosX = e.clientX;
    targetPosY = e.clientY;
}
/* 마우스 애니메이션 */










/* 최상단 버튼 */ 
const $topBtn = document.querySelector(".moveTopBtn");

// 버튼 클릭 시 맨 위로 이동
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}
/* 최상단 버튼 */












/* swiper 방식 귤 슬라이더*/
var swiper = new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    speed: 250,


    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
    },
});











/* 비디오 to 메인 페이지 */ 


// let videoWeb = document.querySelector('#videoForWeb');
// let link = 'main.html';
// videoWeb.onended = function()
// {
//     location.href = link;
// }










// if(window.addEventListener)
// {
//     window.addEventListener('load', function(){
//     if(window.HTMLVideoElement) {
//     var player = document.getElementById('videoForWeb');
//     player.addEventListener("ended", function() {
//     //이 부분이 실행된다
//     location.href= 'main.html';
//     });}}, false);
// }

// 출처: https://reg1.tistory.com/6 [보조기억장치:티스토리]









/* <video id=myVideo src... ...></video>

<script>

myVideo.onended = function() {

    미디어가 끝난 후 발생하는 이벤트;

}

</script> */








// /* 비디오 재생 */
// playVideo = (video) => {
//     this._video.addEventListener('ended',(e) => {
//         nextPage(main.html);
//       });
// } 








