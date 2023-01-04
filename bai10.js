// bài 10 toán tử chấm hỏi chấm(hạn chế lỗi)
let user = {};
// thao tác với object
// console.log(user.address);
//console.log(user.address ? user.address.street : undefined);
// obj user ?. address ?. street //underfined
console.log(user?.address?.street ?? 'not found user');
// thao tác function
//obj . func ?. {}
let obj = {
    name: 'tmt',
    channel: 'hoi',
    addresss:{
        streets:'abc',
        province:'hang '
    }
}
console.log(obj?.addresss?.xyz?.def)
const test = undefined;
test?.map?(item=>item)