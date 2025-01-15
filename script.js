//your JS code here. If required.

const p = document.getElementById('timer');



setInterval(()=>{
	const Date = new Date();
	 p.innerHTML = Date.toLocaleString();
},1000)

