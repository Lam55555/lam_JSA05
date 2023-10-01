// const fetchData = async()=>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();

//         let userIdElement = document.createElement("h2");
//         let idElement = document.createElement("h2");
//         let titleElement = document.createElement("h4");
//         let bodyElement = document.createElement("p");
//         const dataElement = document.getElementById("data");


//         userIdElement.textContent = data.userId;
//         idElement.textContent = data.id;
//         titleElement.textContent = data.title;
//         bodyElement.textContent = data.body;

        

//         dataElement.appendChild(userIdElement);
//         dataElement.appendChild(idElement);
//         dataElement.appendChild(titleElement);
//         dataElement.appendChild(bodyElement);
//     }
//     catch(e){}
// }
// fetchData();

// const fetchData = async() =>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         const data  = await response.json();
//         let userIdElement = document.createElement('h2');
//         let idElement = document.createElement('h2');
//         let  titleElement = document.createElement('h2');
//         let bodyElement = document.createElement('h2');
    
//         userIdElement.textContent =  data.userId;
//         idElement.textContent = data.id;
//         titleElement.textContent = data.title;
//         bodyElement.textContent = data.body;
    
//         const dataElement = document.getElementById("data");
    
//         dataElement.appendChild(userIdElement);
//         dataElement.appendChild(idElement);
//         dataElement.appendChild(titleElement);
//         dataElement.appendChild(bodyElement);
//     }
//     catch(e){}
    
//     }
//     fetchData()



// var postAPI="https://jsonplaceholder.typicode.com/posts";
// fetch(postAPI)
// .then(function(response){
//         return response.json();
//         //JSON.parse:JSON -> Javascript types
// })
// .then(function(posts){
//     var htmls = posts.map(function(post){
//         return `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>`;
//     });
//     var html = htmls.join('');
//     document.getElementById('data').innerHTML = html;
// })
// .catch(function(err){
//     alert("có lỗi");
// });

// var postAPI="https://jsonplaceholder.typicode.com/posts";
// const fetchData = async  () =>{
//     try{
//         const response = await fetch(postAPI);
//         const data =  await response.json();
//         // console.log(data);
//         let titleElement = document.createElement('h2');
//         let bodyElement = document.createElement('p');

//         titleElement.textContent = data.title;
//         bodyElement.textContent = data.body;

//         const dataElement = document.getElementById("data");

//         dataElement.appendChild(titleElement);
//         dataElement.appendChild(bodyElement);
//     }
//     catch(e){
//         alert("có lỗi");
//     }

//     };

//     fetchData();

// async function fetchData() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
        
//         // Lặp qua mỗi đối tượng trong mảng data
//         for (let post of data) {
//             // Xử lý thông tin của mỗi bài viết (post) ở đây
//             let titleElement = document.createElement("h2");
//         let bodyElement = document.createElement("p");
//             // console.log(post.title);
//             // console.log(post.body);

//             titleElement.textContent = post.title;
//             bodyElement.textContent = post.body;

//             const dataElement = document.getElementById("data");

//             dataElement.appendChild(titleElement);
//             dataElement.appendChild(bodyElement);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// fetchData();

async function fetchData()
{
try {
let response= await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

for(let post of data)
{
let titleElement = document.createElement("h2");
let bodyElement= document.createElement("p");
titleElement.textContent = post.title;
bodyElement.textContent = post.body;
const dataElement = document.getElementById("data");
dataElement.appendChild(titleElement);
dataElement.appendChild(bodyElement);
}
}
catch(error){console.error('Error',error);
}
}
fetchData();