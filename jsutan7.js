// const fetchData = async  () =>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data =  await response.json();
//         // console.log(data);
//         let userIdElement = document.createElement('h2');
//         let titleElement = document.createElement('h2');
//         let completeTaskElement = document.createElement('h2');

//         userIdElement.textContent = data.userId;
//         titleElement.textContent = data.title;
//         completeTaskElement.textContent = data.completed;

//         const dataElement = document.getElementById("data");

//         dataElement.appendChild(userIdElement);
//         dataElement.appendChild(titleElement);
//         dataElement.appendChild(completeTaskElement);
//     }
//     catch(e){}

//     }
// };
// fetchData();

// const fetchData = async() =>{
// try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data  = await response.json();
//     let userIdElement = document.createElement('h2');
//     let idElement = document.createElement('h2');
//     let  titleElement = document.createElement('h2');
//     let bodyElement = document.createElement('h2');

//     userIdElement.textContent =  data.userId;
//     idElement.textContent = data.id;
//     titleElement.textContent = data.title;
//     bodyElement.textContent = data.body;

//     const dataElement = document.getElementById("data");

//     dataElement.appendChild(userIdElement);
//     dataElement.appendChild(idElement);
//     dataElement.appendChild(titleElement);
//     dataElement.appendChild(bodyElement);
// }
// catch(e){}

// }
// fetchData()

const fetchData = async()=>{
    try{
        const response =  await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await response.json;

        let idElement = document.createElement('h2');
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src",data.url)
    }
    catch(e){}
}
fetchData();

