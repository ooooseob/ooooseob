const clickable_button = document.querySelector(".clickable");
const body = document.body;

clickable_button.addEventListener("click", () => {
  // body 요소에 is-active 클래스 이름 추가
  body.classList.toggle("is-active");
  // .clickable_button 요소에 is-active 클래스 이름 추가
  clickable_button.classList.toggle("is-active");
});
