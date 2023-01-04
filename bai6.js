// bài 6
const base_url = "locallhost.8080";
 api = "get-user"; fetch_page = 2;
console.log(`// ${base_url}/${api}?page=${fetch_page}`)
// bài 7
const numbersOne = [1,2,3]
const numberstwo = [4,5,6]
const thirdArr = [...numbersOne,...numberstwo]
const fouthArr = [...numberstwo,...numbersOne]
let myArr = ["eric","hoidait","react"];
// myArr.pusưh(`new item`)
// myArr = [...myArr, `new item`]
// myArr.unshift(`new item`)
myArr = [`new item`,...myArr]
console.log(myArr)
function sum(x,y,z){
    return x + y + z;
}
console.log(sum(...numbersOne));