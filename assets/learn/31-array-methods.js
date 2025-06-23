const JS_학습_주제 = [
  "변수",
  "함수",
  "조건문",
  "객체",
  "배열",
  "비교 연산자",
  "부정 연산자",
];

// 배열 항목 위치(index) 찾기(find)
let 함수_인덱스, 비교_연산자_인덱스;

함수_인덱스 = JS_학습_주제.indexOf("함수"); // 기대값: 1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);
함수_인덱스 = JS_학습_주제.indexOf("함 수"); // 기대값: -1 / 결과값: ?
console.log("함수_인덱스 =", 함수_인덱스);

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: -1 / 결과값: -1

비교_연산자_인덱스 = JS_학습_주제.indexOf("비교 연산자");
console.log("비교_연산자_인덱스 =", 비교_연산자_인덱스); // 기대값: 5 / 결과값: 5

const fruitBasket = ["패션후르츠", "애플망고", "워터멜론", "오렌지"];
// indexOf() 메서드가 반환한 값이 -1보다 크다면? 그 값은 true이다.
console.log(fruitBasket.indexOf("패션") > -1); // false
console.log(fruitBasket.indexOf("패션후르츠") > -1); // true
console.log(fruitBasket.indexOf("애플망고") > -1); // true
console.log(fruitBasket.indexOf("워터멜론") > -1); // true
console.log(fruitBasket.indexOf("오렌지") > -1); // true

// 구문이 긴데? 재사용 가능한 함수로 작성해볼까요? (내가 작성한 코드 망한거)
// function hasItem(배열, 배열아이템) {
//   console.log(배열, fruitBasket.indexOf(배열아이템) > -1);
// }

//야무썜 코드
function hasItem(배열, 값) {
  return 배열.indexOf(값) > -1;
}

hasItem(fruitBasket, "패션"); // 반환값: false
hasItem(fruitBasket, "오렌지"); // 반환값: true

//맨앞추 .unshift()
//맨뒤추 .push
//맨앞제 .shift()
//맨뒤제 .pop()

const numbers2 = [9, 10, 3, 4, 7, 8];
// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
// [1, 2, 3, 4, 5, 6]

numbers2.shift();
numbers2.shift();
numbers2.unshift(1, 2);
numbers2.pop();
numbers2.pop();
numbers2.push(5, 6);

console.log(numbers2);

const numbers = [9, 10, 3, 4, 7, 8];
console.log(numbers); // [9, 10, 3, 4, 7, 8]

// 맨 앞 제거 -> 추가
// numbers.shift()
// numbers.shift() // [3, 4, 7, 8]
numbers.splice(0, 2);
// numbers.unshift(1, 2)
numbers.splice(0, 0, 1, 2);

// 맨 뒤 제거 -> 추가
// numbers.pop()
// numbers.pop()
numbers.splice(numbers.length - 2, 2); // [1, 2, 3, 4]
// numbers.push(5, 6)
numbers.splice(numbers.length, 0, 5, 6);

// 추가 및 제거 방법을 사용해 아래 결과를 만들어 보세요.
console.log(numbers); // [1, 2, 3, 4, 5, 6]

const people = ["세종대왕", "이순신", "김구", "유관순", "장영실", "신사임당"];

console.log(people);

console.log(people.indexOf("이순신"));
people.unshift("지석영");
people.splice(0, 0, "정약용");
console.log(people);

people.push("김유신");
people.splice(9, 0, "을지문덕");
console.log(people);

people.splice(2, 2);
console.log(people);
people.splice(4, 2);
console.log(people);
