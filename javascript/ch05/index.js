//배열
const num = [1,2,3,4,5];
console.log(typeof num); //object타입
console.log(num);
console.log(num[0]);
console.log(num[4]);

num.push(6); //배열에 추가할때
console.log(num);

num.pop(); //배열에서 빼내는 방법. 빼낼땐 뭘 뺄지 지정할 수 없고 제일 끝에있는 것이 빼진다.
console.log(num);

//split : 따로따로 구분해주는 것
let str = "money:3000";
let arr = str.split(":");
console.log(arr);
console.log(arr[1]);

let ele = document.querySelector("#data"); //남이 만든거도 다 가져올수 있음.
ele.innerHTML = arr[1]+"원 벌었습니다."