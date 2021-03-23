window.onload = pageLoad;
function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
{     
    var password = document.forms["myForm"]["password"];
    var rePassword = document.forms["myForm"]["repassword"];

    if (password.value != rePassword.value)
    {        
        alert("Password incorrect");
        return false;
    }
    else
    {
        return true;
    }    
}