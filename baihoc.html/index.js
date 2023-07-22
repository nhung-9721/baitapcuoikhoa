
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// arr.push(6);
// console.log(arr);
// arr.pop(6);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.splice(3,0,3.5)
// console.log(arr);
// //thêm phần tử bất kỳ vào giữa 
// arr.unshift(9);
// console.log(arr);
// let number = ['h', 98,'nhung']
// console.log(number)
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach((item,index) => {
//     console.log(item,index);
// })
//item đại diện cho phần tử hiện tại đang duyệt 
// index đại diện cho index của phần tử hiện tại đang duyệt 
// ra khỏi phạm vi của forEach thì ko thể sử dụng item và index
// trong ngoặc bắt buộc phải có items ko có index cũng đc 
// cách viết khác arry_và_name.forEach(function(item,index)){}
//   for(
//     let i =0 ;// khai báo một biến đếm để đếm số lần lặp 
//     i<10;// điều kiện để tiếp tục vòng lặp 
//     i = i+1// cập nhật biến đếm 
//   ){
// phần code lặp lại 
// đựơcj phép sử dụng biến i
// được phép sử dụng các biến đã khai báo trước đó ở ngoài vòng lặp 
//     console.log(i)
//   }
// vòng lặp while :lặp lại cho đến khi điều kiện sai
//   let a = 2;
//   while (a == 2){
//     // phần code lặp lại 
// console.log(a);
// a=a+1;
// //for ...in :lặp lại các key của object
//for...of: lặp qua các phần tử các mảng (arry)
// for(const i of [1,2,3,4,5])// i là biến sẽ lưu lại giá trị chúng ta lặp qua
// //arr:mảng được lặp 
// console.log(i);
// // cập nhật điều kiện để tiếp tục vòng lặp 
//   } 
// câu lệnh điều kiện if/else
//if (điều kiện ){
//     phần code sẽ chảy khi biểu thức đúng 
//}else{
//phần code ko chạy khi biẻue thức sai
//}
//else if(biểu thức 2){
// phần code chạy khi biểu thức 1 vs 2 sai 
//}
//   const point =7;
//   if (point >8 && point <10){
//     console.log(" học sinh giỏi ");
//   }else if( point>=6,5 && point<8){
//     console.log(" học sinh khá ")
//   }else{
//     console.log(" học sinh trung bình ")
//   }
//   // toán tử "và ":&&
//   // toán tử "hoặc ":||
//   // toán tử ko bằng :!=
//   //toán tử bằng :==
//   // object (đối tượng ): lưu trữ thông tin dưới dạng key-value
//   const student ={
//     // key :value(number,string , boolean , arry, object)
//     name:"nguyen thi nhung",
//     age:16,
//     isFemale :true,
//     hobbies:["swiming","music"],
//     address:{
//         stress:"xuan phuong",
//         city:"ha noi",
//     }

//   }
// const student2={
//     name:"nguyen thi linh",
//     age:16,
//     isFemale :true,
//     hobbies:["swiming","music"],
//     address:{
//         stress:"xuan phuong",
//         city:"ha noi",
//     }

// }
// const students =[student,student2];
// for(const std of students){
//     //std là một object học sinh :
//   //  object_var.key
//   console.log(std.name);
//   console.log(std.age);
//   console.log(std.isFemale);  
//   // truy xuất đến thông tin của học sinh theo key
//   // cập nhật thông tin của học hócinh 
//   std.name="nguyễn thị anh";
//   console.log(std.name);
// }

// const inputEL = document.getElementById("search-box");
// console.log(inputEL);
// console.log([inputEL])
// inputEL.addEventListener("input", function (event){
//     console.log(inputEL.value);
// })

const products = [
    {
        name: "iphone 12"
    },
    {
        name: "iphone 13"
    },
    {
        name: "iphone 14"
    },
    {
        name: "sam sung"
    },


];
const inputEl = document.getElementById("search-box");
const pEl = document.getElementById("search-input");
inputEl.addEventListener("input", function (event) {
    pEl.innerHTML = ""// khi suự kiện xảy ra thì nó cũng xảy ra 
    const searchValue = inputEl.value;// hàm xóa khoản trắng nghĩa là nếu đánh cách thì sẽ ko tra
    if (searchValue.trim() != "") {
        products.forEach((item) => {
            if (item.name.toLowerCase().includes(searchValue.trim().toLowerCase())) {
                pEl.innerHTML = pEl.innerHTML + item.name + "<br>";
            }
        });

    }
})