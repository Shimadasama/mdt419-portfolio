window.onload = pageLoad;
function pageLoad()
{
	var header = document.getElementById("header");
    var modpage = document.getElementById("modpage");
    var webpro = document.getElementById("webpro");

    header.style.textAlign = "left";
    header.style.cursor = "pointer";
    header.onclick = menuLoad;

    modpage.style.cursor = "pointer";
    modpage.onclick = modLoad;

    webpro.style.cursor = "pointer";
    webpro.onclick = webproLoad;
}

function menuLoad()
{
    location.href = "index.html";
}

function modLoad()
{
    location.href = "Modpage.html";
}

function webproLoad()
{
    location.href = "Webpro.html";
}