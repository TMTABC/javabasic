// // bài 10 toán tử chấm hỏi chấm(hạn chế lỗi)
// let user = {};
// // thao tác với object
// // console.log(user.address);
// //console.log(user.address ? user.address.street : undefined);
// // obj user ?. address ?. street //underfined
// console.log(user?.address?.street ?? 'not found user');
// // thao tác function
// //obj . func ?. {}
// let obj = {
//     name: 'tmt',
//     channel: 'hoi',
//     addresss: {
//         streets: 'abc',
//         province: 'hang '
//     }
// }
// console.log(obj?.addresss?.xyz?.def)
// const test = undefined;
// test?.map ? (item => item)

let sum = (x, y, call) => {
    let tong = x + y;
    // setTimeout(() => {
    //     call(tong);

    // }, 5000)

    let i = 0;
    let timer = setInterval(() => {
        call(tong);
        i++;
        if (i === 5) {
            clearInterval(timer);
        }
    }, 1000);
    console.log('check i= ', i)
}
let pirntSum = (meseger) => {
    // if (meseger > 15)
    console.log('>>>x+y= ', meseger);
}
sum(5, 6, pirntSum);
// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arry = [
    { name: 'KBT', age: 18 },
    { name: 'TMT', age: 18 },
    { name: 'KTM', age: 38 },
    { name: 'NN', age: 48 },
    { name: 'Ksdc', age: 28 }
]
let filter = arry.filter((item, index) => {
    return item && item.age === 18;
})
console.log(filter);