// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용)
// --------------------------------------------------------------------------

function getMoney(price, unit) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500); // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, '$'); // '$80.75'

console.log(moneyKR);
console.log(moneyUS);
