


var buttonLogin = document.getElementById("login");
buttonLogin.addEventListener('click', function()
{

})
// Username:"Lam";
// Password:"123";

document.getElementById('LoginForm').addEventListener('submit', function(e)

{
    e.preventDefault();
    var usernameinput = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if(usernameinput =="Lam"&&password==123)
{
    localStorage.setItem("Username",usernameinput);
    var greetingElement = document.createElement('p');
    greetingElement.textContent = 'Xin chao ' + usernameinput + '!';
    document.body.appendChild(greetingElement);
}
else
{
    alert("sai");
}
});
document.addEventListener('DOMContentLoaded', function()
{
    var username = localStorage.getItem("Username");
    if(username)
    {
        var greetingElement = document.createElement('p');
    greetingElement.textContent = 'Xin chao ' + usernameinput + '!';
    document.body.appendChild(greetingElement);
    }
})