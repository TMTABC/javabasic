// bài 8
const person = { name: "Eric", age: 26, eyecolor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name);
// console.log(age);
const { age, name } = person;
console.log(name);
console.log(age);
// -------------
const city = ['ha noi', 'da nang', 'sai gon', 'ca mau']
// const [ha noi,da nang,ca mau]
// x,y,z là 3 phần tử đầu của city
const [x, y, , z] = city;
console.log(x, y, z)
const react = {

    salary: 2000,
    tool: 'facebook',
    like: 'bugs'
};
const { like } = react;
// const{like:t}=react; ko khuyên dugf nhìu
console.log(like)
// bài 9----------------------------------------
const a = 10;
let b = '';
// if (a >5){
//     console.log(`greater than 5 >5`);
// }else{
//     console.log(`less than 5 <5`);
// }
b = a > 5 ?
    `greater than 5 >5`
    :
    `less than 5 <5`
console.log(b)