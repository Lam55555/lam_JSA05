async function fetchData()
{
try {
let response= await fetch("https://picsum.photos/v2/list");
const data = await response.json();

console.log(data);

for(let post of data)
{
let datas = document.getElementById("data");

let imgElement = document.createElement("img");
imgElement.setAttribute("src",post.url)
imgElement.appendChild(datas)
}
}
catch(error){console.error('Error',error);
}
}
fetchData();