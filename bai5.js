const myArray = ['cádc', 'âc', 'tyn'];
const myList = myArray.map((item) => `<p> ${item} </p> `);
const ages = [32, 33, 15, 16, 09]
const t = ages.filter((item) => {
    return item > 18;
});
let obj = {
    ten: "KBT",
    where: "ST",
    full: function () {
        // return `Tên: ${this.ten} where: ${this.where}`;
        return this.ten;
    }
}
console.log('check obj>>> :', obj.full(), obj.where);