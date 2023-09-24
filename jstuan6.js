// function waitTwoSecond(){
//     return new Promise(resolve => 
//         {
//             setTimeout(()=>{
//                 resolve("Chờ 2 giây")
//             },2000)
            
//         })
// }
 
// async function f(){
//     console.log("Bắt đầu");
//     const result = await waitTwoSecond();

//     console.log(result);

// }
// f()

    function doi5s(){
        return new Promise(resolve =>
            {
                setTimeout(()=>{
                    resolve("Chờ 2 giây")
                },2000)
            })
    }
    function doi4s(){
        return new Promise(resolve =>
            {
                setTimeout(()=>{
                    resolve("Chờ 4 giây")
                },2000)
            })
    }
    async function f(){
    console.log("Bắt đầu");
    const namgiay = await doi5s();
    const bongiay = await doi4s();
    console.log(namgiay);
    console.log(bongiay);

}
f()
// [
//     {
//         "giaovien":[
//             {
//                 "name" : "Huyen",
//                 "gioitinh":"nu"
//             },
//             {
//                 "name": "Hieu",
//                 "gioitinh":"nam"
//             }
//                     ]
            

//     }
// ]
// GET: Trả về với một Resource hoặc có một danh sách Resource.
// POST: Nó hỗ trợ tạo mới một Resource. 
// PUT: Thường hỗ trợ cho việc cập nhật các thông tin cho Resource. 
// DELETE: Xóa một Resource.
