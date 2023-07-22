// let x = equation(5,8) ;
// function equation(a,b){
//     if (a == 0 && b == 0){
//         alert('Phương trình vô số nghiệm');
//     }
//     else if (a != 0 && b == 0){
//         alert('Phương trình có nghiệm x = 0');
//     }
//     else if (a == 0 && b != 0){
//         alert("Phương trình vô nghiệm");
//     }
//     else {
//         alert('Phương trình có nghiệm x = ' + (-b/a));
//     }
// }
// console.log(equation);
let a=6;
let b=8;
let c= 10;
function tamgiacvuong(a,b,c){
    if (a*a+c*c==b*b && b*b+c*c==a*a && a*a+b*b==c*c){
        alert('cạnh huyền là c='+ (a*a+b*b));
        alert("đường cao là "+(a*b/c));
        alert("Tổng số đo hai góc bằng 90 độ")
    }
    else{
     console.log("đây ko phải là tam giác vuông")
    }
};
console.log(tamgiacvuong);

