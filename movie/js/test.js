let people = {
    name:"cos",
    age:20,
    hobby:["축구","농구"]
}
console.log(people);

let people_json = '{"name":"cos","age":20,"hobby"["축구","농구"]}'
console.log(people_json);

//자바스크립트를 제이슨문자열로 바꿈
let change_json = JSON.stringify(people);
console.log(change_json);

//제이슨문자열을 자바스크립트 오브젝트로 바꿈
let change_object = JSON.parse(change_json);
console.log(change_object);
console.log(change_object.name);