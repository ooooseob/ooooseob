// --------------------------------------------------------------------------
// 📌 typeof 연산자 활용 (18번 예제)
// --------------------------------------------------------------------------

const o = {
  name: "object", //string
  serialNumber: 20250613, // number
  isObjectType: () => true, //function -> boolean
  isNotDefined: undefined, //undefined
  empty: null, //null
  symbol: Symbol("o"), //symbol
  int: 100n, //bigint
};

//어떤 데이터 타입인지 확인하는 법
// typeof 연산자 활용
// typeof 데이터  -> 'string', 'number' 해당하는 타입으로 나옴

console.log(typeof o);
console.log(typeof o.name);
console.log(typeof o.serialNumber);
console.log(typeof o.isObjectType);
console.log(typeof o.isObjectType());
console.log(typeof o.isNotDefined);
console.log(typeof o.empty);
console.log(typeof o.symbol);
console.log(typeof o.int);

// --------------------------------------------------------------------------
// 📌 함수 매개변수 기본값 설정 (조건문 활용) (19번 예제)
// --------------------------------------------------------------------------

function getMoney(price, unit) {
  // unit 매개변수(옵션)
  // 설정 가능한 값: '달러' 또는 '원화'
  // 기본 값: '원'

  // 만약 사용자가 전달한 인수에 의해 unit 매개변수 값이  undefined로 설정된다면 '원' 값을 unit 매개변수의 기본값으로 설정한다.
  if (unit === undefined) {
    unit = "원";
  }

  // 사용자가 전달한 인수 값이 '달러' 인 경우, 문자 연결하는 방법을 달리해서 결과값을 반환한다.
  if (unit === "$") {
    // 반환값 '$' + '80.75'
    return "$" + price;
  }

  // 개발자가 명시적으로 반환값 설정
  return price + unit;
}

let moneyKR = getMoney(5000 + 2000 + 1500 + 500); // '10000원'
let moneyUS = getMoney(10.5 + 90 - 20 + 0.25, "$"); // '$80.75'

console.log(moneyKR);
console.log(moneyUS);

/*function getMoney(price, unit) {
  // 매개변수 타입 비교
  // if (unit === undefined) {

  // 매개변수 타입이 무엇인지 문자값으로 비교
  // if (typeof unit === 'undefined') {

  // 조건문 소괄호 안에서 조건이 평가 (Truthy or Falsey)
  // 평가 이후, 부정(NOT, !) 연산자로 평가 반전
  if (!unit) {
    unit = "원";
  }

  if (unit === "달러") {
    return "$" + price;
  }

  return price + unit;
}*/
