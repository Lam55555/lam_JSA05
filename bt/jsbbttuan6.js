function doi5s(){
    return new Promise(resolve =>
        {
            setTimeout(()=>{
                alert("a")
            },5000)
        })
}

async function f(){
    console.log("Đợi 5s");
    const namgiay = await doi5s();
}
f()
const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isActive: true
  };
  //[
    //     {
    //         "user":[
    //             {
    //                 "name" : "John Doe",
    //                 "age":"30",
    //                  email: "john.doe@example.com",
    //                  isActive: true
    //             }
//                     ]
//            }
//   ]


    //             {
    //                 "name": "Hieu",
    //                 "gioitinh":"nam"
    //             }
    //                     ]
                
    
    //     }
    // ]

const userr = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  };
  console.log(userr)

// [
//     {
//         "userr":[
//             {
//                 name: "John Doe",
//                 age: 30,
//                 address: {
//                   street: "123 Main St",
//                   city: "New York",
//                   country: "USA"
//                          } 
//             }
//         ]
//     }
    
// ]
 
