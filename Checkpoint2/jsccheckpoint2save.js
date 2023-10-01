const dangkyUser = document.querySelector(".username");
const btnDangKy  =document.querySelector(".buttonDangky");
const btnXoa = document.querySelector(".buttonxoa");
const btnCheck = document.querySelector(".buttonKtratontai");

btnDangKy.addEventListener("click", (e) => {
    e.preventDefault();
    if (dangkyUser.value === "") 
    {
      alert("vui lòng không để trống");
    } 
    else 
    {
      const user = {
        username: dangkyUser.value,
      }
      let json = JSON.stringify(user);
      localStorage.setItem(dangkyUser.value, json);
      alert("Đăng Ký Thành Công");
    }
});

btnXoa.addEventListener("click",(e)=>
{
    localStorage.clear();
})

btnCheck.addEventListener("click",(e)=>
{
    var storageUser = localStorage.getItem("user");
    var userName = document.querySelector('.username');

    if(userName.value === storageUser){
        alert('trùng tên đăng nhập');
    }else{
        alert("Chưa trùng");
    }
})
    
