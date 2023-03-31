// Get random number between 2 ranges
function randomNum(m, n) {
	m = parseInt(m);
	n = parseInt(n);
	return Math.floor(Math.random() * (n - m + 1)) + m;
}

function heartAnimation() {
	let keyframes =
		`@keyframes animated-heart-dynamic {
	   0%  {opacity: 0; transform: translate(0, 0) rotate(45deg); animation-timing-function: ease-in;}
	  50%  {opacity: 1; transform: translate(0, -20vh) rotate(45deg); animation-timing-function: ease-out;}
	 100%  {opacity: 0; transform: translate(0, -40vh) rotate(${Math.random() * 100}deg); animation-timing-function: ease-in;}`;
	const head = document.getElementsByTagName('head')[0];
	let style= document.createElement('STYLE');
	style.innerHTML = keyframes;
	head.appendChild(style);

	let x = document.getElementsByClassName('effect-text')[0];
	let heartCount = (x.offsetWidth/100)*5;
	for (let i = 0; i < heartCount; i++) {
		let heartSize = (randomNum(40, 160) / 10);
		let temp = document.createElement('span')
		temp.className = 'tiny-heart'
		temp.style.cssText = 'top: '+ randomNum(40, 80) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 1) +'s; animation-duration: '+ randomNum(3, 10) +'s'
		temp.style.animationName = 'animated-heart-dynamic'
		x.append(temp)
		// x.append('<span class="tiny-heart" style="top: '+ randomNum(40, 80) +'%; left: '+ randomNum(0, 100) +'%; width: '+ heartSize +'px; height: '+ heartSize +'px ; animation-delay: -'+ randomNum(0, 3) +'s; animation-duration: '+ randomNum(2, 5) +'s"></span>')
	}
}

setInterval(timerRender, 1000)
const firstDate = new Date(2023, 0, 31)
let days = 0, hours = 0, minutes = 0, seconds = 0
function timerRender()
{
	let different = Date.now() - +firstDate
	console.log(`different: ${different}`)
	if(different > 0)
	{
		days = Math.floor(different / 1000 / 60 / 60 / 24);
		hours = Math.floor(different / 1000 / 60 / 60) % 24;
		minutes = Math.floor(different / 1000 / 60) % 60;
		seconds = Math.floor(different / 1000) % 60;
	}

	updateText('days', days)
	updateText('hours', hours)
	updateText('minutes', minutes)
	updateText('seconds', seconds)
}

function updateText(id, text)
{
	let x = document.getElementById(id)
	if(!x) return
	text = text.toString()
	if(text.length === +1) text = `0${text}` // example 1 minutes -> 01 minutes
	x.style.animationName = x.innerHTML === text ? 'none' : 'pulse'

	x.innerText = text
}
heartAnimation();
timerRender();
