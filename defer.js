 function sleep(ms)
	{
		var dt = new Date();
		dt.setTime(dt.getTime() + ms);
		while (new Date().getTime() < dt.getTime());
	}
	sleep(2000);
 
document.getElementById('inner').innerHTML = "Hello World!";