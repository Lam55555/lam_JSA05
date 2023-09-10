// var bai1 = setTimeout(function(){
//     document.getElementById("cau").innerHTML=("Chào mừng bạn đến với freetuts.net") + ("Chào mừng bạn đến với freetuts.nets");
// }, 3000);
// function clearAlert()
// {
//     clearTimeout(bai1);
// }

// setInterval(function Xuathien(){
//     document.getElementById("cau").innerHTML=("Chào mừng bạn đến với freetuts.net")&&("Chào mừng bạn đến với freetuts.nessst");
// }, 3000

// )


// for(let i = 0; i<=products.length; i++){ 
//     setTimeout(function(){
//         document.getElementById("cau").innerHTML=products[i];
//    }, 1000);
// }


let products = ["aabc", "bbac" , "ccab" , "bbca"]
for( let n = 0; n<=products.length;n++){
function abc()

{
    // document.getElementById("cau").innerHTML = [n++];
}
    
    setTimeout(abc,1000);
    
}
let myArray=["aabc", "bbac" , "ccab" , "bbca"]
for(let x=0; x<=myArray.length; x++){
    document.getElementById("cau").innerHTML=myArray[x++];
    setTimeout(myArray[x++],3000)
}





// let myArray=[4,5,7,8,9,1]
// console.log(myArray)

// for(let i = 0; i<myArray.length;i++){ console.log("Giá trị của phần tử thứ",i, "là:", myArray[i])}

// var x = 1;
//         function rePlay(){
//             for(var i = 1; i <= 10; i++){
//                 setTimeout(abc, 1000*i);
//             }
//         }
//         function abc(){
//             document.getElementById("cau").innerHTML = x++;
//         }


