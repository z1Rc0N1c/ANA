console.log("/*본인 이름*/");

//조건문
let i = 1;
if(/* i가 0보다 클 경우*/){
    console.log("i는 0보다 큽니다.")
}else if(/*i가 0보다 작을 경우*/){
    console.log("i는 0보다 작습니다.")
}else{
    console.log("i는 0입니다.")
}
//반복문
for(let i = 1; /*조건식:6보다 작을 때까지 반복*/; i++){
    console.log(i)
}

let me = {
    "name": ""/*이름*/,
    "age": ""/*나이 */,
    "school": ""/*학교 */,
}
console.log(me.name)
//무언가에 대한 여러 개의 속성을 나타내야 할 때 사용한다.
//배열
//매개변수 활용 예시
function test(x) {
    let y = //x에 3을 곱하는 연산식
    console.log(y)
}
addnum(3, 5)
// 익명 함수 변수 할당
const multi = function(x, y) {//x,y를 받아서 두 수를 곱하여 출력하는 함수
    console.log(/*연산식*/)
}
multi(3,5);
//익명 함수 사용처: 콜백 함수, 임시 사용, 인자로 보낼 때
//함수 선언식
//화살표 함수 사용 이유:
const add = (a, b) => //a+b의 값을 출력하는 코드

//함수 표현 차이

let gaon = {
"time": /*가온의 time값*/ ,
"money": /*가온의 money값*/,
"hp": /*가온의 hp값*/,
}
let jiwon = {
"time": /*지원의 time값*/,
"money": /*지원의 money값*/,
"hp": /*지원의 hp값*/,
}
console.log((/*가온의 time 변수*/)>=(/*지원의 time변수 */))
let cnt = 0//cnt는 count의 줄임말
while(/*변수명*/>0){
    /*변수명*/ -=50;
    cnt++
}
console.log(cnt)