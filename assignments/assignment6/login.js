// URL parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const regUsername = urlParams.get('username')
const regPassword = urlParams.get('password')

window.onload = loginLoad;
function loginLoad()
{
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin() //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
{
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

    if (username.value != regUsername || password.value != regPassword)
    {        
        alert("User info incorrect");
        return false;
    }
    else
    {
		alert("Welcome " + username.value);
        return true;
    } 
}

			