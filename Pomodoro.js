
var set = 0;

window.addEventListener('load', () => 
{
	var min = 0;
	var sec = 59;
	var min2 = 0;
	var sec2 = 59;

	var minus_session = document.getElementById('minus-session');
	var plus_session = document.getElementById('plus-session');
	var minus_break = document.getElementById('minus-break');
	var plus_break = document.getElementById('plus-break');
	var start = document.getElementById('start');

	plus_session.addEventListener('click', () =>
	{
		min += 5;
		document.getElementById('Time').innerText = `${min} : ${sec}`;
		document.getElementById('session-time').innerText = min;
	})
	document.getElementById('set').innerText = `Session`;
	minus_session.addEventListener('click', () =>
	{
		if(min===0 || min-5 < 0)
			alert("already zero do something dummy!");
		else
			min -= 5;
		document.getElementById('Time').innerText = `${min} : ${sec}`;
		document.getElementById('session-time').innerText = min;
	})

	plus_break.addEventListener('click', () =>
	{
		
		min2 += 5;
		document.getElementById('break-time').innerText = min2;
	})
	minus_break.addEventListener('click', () =>
	{
		if(min2===0 || min2-5 < 0)
			alert("WOOH bro take a break it's already Zero!");
		else
			min2 -= 5;
		document.getElementById('break-time').innerText = min2;
	})

	start.addEventListener('click', () =>
	{
		Time(sec, min, sec2, min2);
	})

});

var Time = (sec, min, sec2, min2) =>
{
	setInterval( () => 
	{
		sec--;
		if(sec>=10)
			document.getElementById('Time').innerText = `${min} : ${sec}`;
		else
			document.getElementById('Time').innerText = `${min} : 0${sec}`;
		if(sec===0)
		{
			min--;
			sec = 59;
		}
		if(min===-1)
		{
			document.getElementById('set').innerText = `Break`;
			set++;
			min = 0;
			sec = 0;
			Time_2(sec2, min2);
		}

	}, 1000);
}

var Time_2 = (sec2, min2) =>
{
	var audio = new Audio('alarm.wav');
	audio.play();
	setInterval( () => 
	{
		sec2--;
		if(sec2>=10)
			document.getElementById('Time').innerText = `${min2} : ${sec2}`;
		else
			document.getElementById('Time').innerText = `${min2} : 0${sec2}`;
		if(sec2===0)
		{
			min2--;
			sec2 = 59;
		}
		if(min2===-1)
		{
			audio.play();
			alert("Please Reset you Pomodoro-Clock!");
			window.location.reload(true);
		}

	}, 1000);
}