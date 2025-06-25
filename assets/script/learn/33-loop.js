// --------------------------------------------------------------------------
// 📌 루프(Loop)
// --------------------------------------------------------------------------

// let count = 0

// const draw = () => {
//   // count = count + 1
//   console.count("도화지에 그림을 그린 횟수");
// };

// // draw()
// // draw()
// // draw()
// // draw()
// // draw()

// // const numbers = [100, 99, 98, 97]
// // console.log(numbers)

// let wantToDraw = true;

// // 조건문
// // 조건이 참이면 블록 내부의 코드 한 번 수행
// if (wantToDraw) {
//   draw();
// }

// // 루프(반복)문
// // 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// let n = 0;

// while (wantToDraw) {
//   draw();

//   // 조건을 거짓으로 만들께요! (멈춤)
//   // wantToDraw = !wantToDraw
//   if (n > 2) {
//     wantToDraw = false;
//   }

//   n += 1;
// }

const draw = () => {
  // count = count + 1
  console.count('도화지에 그림을 그린 횟수');
};

let wantToDraw = true;

// 조건문
// 조건이 참이면 블록 내부의 코드 한 번 수행
if (wantToDraw) {
  console.log('if문');
  draw();
}

// 루프(반복)문
// 조건이 참이면 블록 내부의 코드를 조건이 거짓이 될 때까지 반복 수행
// 특정 상황(조건) 설정
let i = 10;

while (wantToDraw) {
  console.log('while문');
  draw();

  // 특정 상황이 일치되는 경우
  if (i <= 0) {
    // 조건을 참에서 거짓으로 변경
    wantToDraw = false;
    console.log('i =', i, 'wantToDraw =', wantToDraw);
  } else {
    i = i - 1; // 10 - 1 -> 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
    console.log('i =', i);
  }
}

{
  // 선감소
  let k = 100;

  while (--k >= 0) draw();
}

const students = [{ 이름: '홍민영' }, { 이름: '윤정화' }, { 이름: '허시온' }, { 이름: '조선현' }, { 이름: '성정현' }, { 이름: '조장원' }];

// for 문을 사용해 수강생의 이름을 콘솔 패널에 출력
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student.이름);
}

// 역순
for (let i = 0; i < students.length - 1; i = i - 1) {
  const student = students[i];
  console.log(student.이름);
}

(() => {
  // 컴퓨터 프로그래밍의 기본 구조 중 하나인 루프에 숙달하기 위한 연습을 진행하세요.

  // 1. for 문을 사용해 `1`부터 `100`까지의 숫자 중, 짝수만 출력

  // 2. while 문을 사용해 숫자 `10`부터 `1`까지 역순으로 출력

  // 3. for … of 문을 사용해 다음 배열의 과일 출력
  const fruits = ['사과', '바나나', '귤', '복숭아'];

  // 4. do … while 문을 사용해 입력된 비밀번호(`'3001'`) 매칭 검토 후 결과 출력
  let i = 0,
    input;
  const attempts = ['0124', '8291', '3001', '9073'];

  // 5. for … in 문을 사용해 객체의 key, value 출력
  const student = {
    name: '선호',
    grade: 'A',
    age: 22,
  };

  // 6. `1`부터 `20`까지 반복
  //     1. `5`부터 `10`까지는 건너띄고 나머지 출력
  //     2. `17`이 되면 반복 종료
})();
