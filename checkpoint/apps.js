const dangkyEmail = document.querySelector(".dangkyEmail");
const dangkyUser = document.querySelector(".dangkyUsername");
const dangkyPass = document.querySelector(".dangkyPassword");
const dangkytuoi = document.querySelector(".age");
const btnDangky = document.querySelector(".buttondangky");
// validation form register and register user local storage

btnDangky.addEventListener("click", (e) => {
  e.preventDefault();
  if (dangkyUser.value === "" || dangkyPass.value === "" ||dangkyEmail.value === ""|| dangkytuoi.value === "") 
  {
    alert("vui lòng không để trống");
  } 
  else 
  {
    // array user
    const user = {
      email: dangkyEmail.value,
      username: dangkyUser.value,
      password: dangkyPass.value,
      age: dangkytuoi.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(dangkyUser.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "/checkpoint/trangchinh.html";
  }
});