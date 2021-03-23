window.onload = pageLoad;
function pageLoad()
{
	var header = document.getElementById("header");

    header.style.textAlign = "left";
    header.style.cursor = "pointer";
    header.onclick = menuLoad;    
}

function menuLoad()
{
    location.href = "index.html";
}