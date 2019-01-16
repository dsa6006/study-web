//오브젝트 - 배열 비교
//-> 데이터타입:
//number, str, array(object), boolean, object, null(데이터가 아무것도 없을때 타입)
//오브젝트는 모든 데이터 타입을 다 넣을수 있음

let soccer = {
    name:"축구",
    count:11,
    need:"공"
}

let people = {
    name:"cos",
    phone:"01022227777",
    address:"busan",
    age:50,
    hobby:["농구",soccer,"음악"]
}
console.log(people);
console.log(people.hobby[1].count);
console.log(people.hobby[2]);

//오브젝트 = 사물. 하나의 변수로 표현하지 못할때 오브젝트로 표현가능
console.log(people);
console.log(typeof people);

console.log(people.name);
console.log(people.phone);
console.log(people.address);
console.log(people.age);
//오브젝트는 점으로 찾을 수 있음.

let num1 = [1,2,3,4,5];

let num2 = {
    one:1,
    two:2,
    important:3,
    four:4,
    five:5
}

console.log(num2.important);

//1학년 7반이 있는데 각 반에 학생수
//30 30 30 30 40 20 50

let c = [30,30,30,30,40,20,50];
console.log(c);
