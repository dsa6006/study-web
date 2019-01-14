const firstName //두개의 단어가 만날때 띄어쓰기를 못해서 대문자로 구분함. 커멧?
    = "gildong";
const lastName //const는 변하지않는 것. let은 변수
    = "HONG";

    console.log(firstName);
    console.log(lastName);
    console.log(lastName+" "+firstName);

const fullName = lastName+" "+firstName;

    console.log(fullName);

// 대문자 소문자
console.log(firstName.toLocaleUpperCase());
console.log(lastName.toLocaleLowerCase());

const sendmoney = "money,10000,recever,jooho,sender,cos";
console.log(sendmoney);
console.log(sendmoney.split(","));

const data = sendmoney.split(",");
console.log(data);
console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])
console.log(data[4])
console.log(data[5])

console.log(1+"2");