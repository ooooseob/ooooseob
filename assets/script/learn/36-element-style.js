// (() => {
//   const headline = document.querySelector("h1");

//   // console.log(headline);
//   // headline.style.fontSize = 100 + "px";

//   // 마우스 엔터 (mouseenter)
//   headline.addEventListener("mouseenter", () => {
//     headline.style.fontSize = "300px";
//   });

//   // 마우스 리브 (mouseleave)
//   headline.addEventListener("mouseleave", () => {
//     headline.style.fontSize = "42.4px";
//   });
// })();

{
  const cButton = document.querySelector(".change-style-button");
  const style = document.querySelector(".box");
  console.log(cButton);
  console.log(style);

  cButton.addEventListener("click", () => {
    style.style.setProperty("padding", "40px");
  });
}
