//--------------------------------------------------
// while 문
//--------------------------------------------------
{
  const numbers = [9, 6, 3];

  // 반복문 (프로그래밍에서 수행할 일이 반복적으로 이뤄줘야 하는 경우)
  // while 문

  // numbers 배열의 각 인덱스에 해당하는 변수 정의
  let 인덱스 = 0;
  let 반복횟수 = numbers.length; // 배열 원소 총 갯수

  while (인덱스 < 반복횟수) {
    let 배열원소 = numbers[인덱스];
    console.log(배열원소);
    인덱스 = 인덱스 + 1;
  }

  // numbers 배열 안 각각의 원소에 접근해서 그 값을 콘솔 패널에 출력하고 싶어요.
  // console.log(numbers[0])
  // console.log(numbers[1])
  // console.log(numbers[2])
}
