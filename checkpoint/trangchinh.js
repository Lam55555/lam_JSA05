const email = document.querySelector(".nhapEmail");
const inputUsername = document.querySelector(".nhapUsername");
const inputPassword = document.querySelector(".nhapPassword");
const tuoi = document.querySelector(".nhaptuoi");
const btnLogin = document.querySelector(".login__signInButton");
var bt= "Link dẫn tới bài tập".link("/checkpoint/checkpoint.html")
// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value === ""||inputUsername.value === "" || inputPassword.value === "" || tuoi.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.email === email.value  &&
      user.username === inputUsername.value &&
      user.password === inputPassword.value &&
      user.age === tuoi.value
    ) {
      alert("Đăng Nhập Thành Công");
      document.getElementById("xuatthongtin").innerHTML=("Thông tin đã nhập:"+"<br>"+"Email: "+email.value+"<br>"+"Username: "+inputUsername.value+"<br>"+"password: "+inputPassword.value+"<br>"+"Age: "+tuoi.value);
      document.getElementById("sangCheckpoint").innerHTML=bt;
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});