//1. 자료형
let a = "ANA";
console.log(typeof(a));

let b = 123;
console.log(typeof(b));

let c = true;
console.log(typeof(c));

let d = {
    "소나축": "소프트웨어 나눔 축제",
    "날짜": "9월 2일",
    "장소": "선린인터넷고등학교"
}

console.log(typeof(d));
//2. 조건문
let month = 10;
if(month == 9){
    console.log("이번 달은 9월입니다.");
}else{
    console.log(`이번 달은 ${month}월입니다`);
}
//3. 반복문
for(let i = 10; i>0; i--){
    console.log(i);
}

let i = 10;
while(i>0){
    console.log(i);
    i--;
}
//4. 함수
let ana = 0;
function AnA(){
    for(let j = 1; j<5; j++){
        ana +=2;
    }
        return ana;
}
AnA();
console.log(ana);