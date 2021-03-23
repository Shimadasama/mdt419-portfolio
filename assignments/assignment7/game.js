window.onload = pageLoad;
function pageLoad()
{
	var startBTN = document.getElementById("start");
    startBTN.onclick = startGame;
}

function startGame()
{
	alert("Are you ready?");
	addBox();
	timeStart();
}

function timeStart()
{
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.1; // 0.5 minute
	var second = min * 60; 
	var isGameEnd = false;
	var x = document.getElementById("clock");
	var nullText = document.createTextNode("");
	
	timer = setInterval(timeCount, TIMER_TICK);	//setting timer using setInterval function

	var timerText =  document.createElement("timerText");	
	x.appendChild(timerText);
	
	function timeCount()
	{
		second -= 1;
		var allbox = document.querySelectorAll("#game-layer box");
		timerText.innerHTML = second + "s";	
		
		if(second != 0 && allbox.length == 0 && isGameEnd == false) //ชนะ
		{
			alert("Mission completed");
			x.replaceChild(nullText, timerText); //clear & reset timer
			clearScreen(); //clear & reset box
			isGameEnd = true;
		}
		else if(second == 0 && allbox.length != 0 && isGameEnd == false) //แพ้
		{	
			alert("Mission failed, We'll get it next time");
			x.replaceChild(nullText, timerText); //clear & reset timer
			clearScreen(); //clear & reset box
			isGameEnd = true;
		}

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox()
{
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;

	for (var i = 0; i < numbox; i++)
	{
		var tempbox = document.createElement("box");
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop; //change box color
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";		
		gameLayer.appendChild(tempbox); //add element to HTML node
		bindBox(tempbox);
	}
}

function bindBox(box)
{
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function()
	{
		box.parentNode.removeChild(box);
	}
}

function clearScreen()
{
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer box");

	//delete all  div
	for (var i = 0; i < allbox.length; i++)
	{		
		allbox[i].remove();
	}	
}



