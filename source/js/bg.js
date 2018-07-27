class BackgroundBall{
	constructor(bg, i){
		this.parent = bg;
		this.zIndex = i;

		this.coords = {
			top: Math.floor(Math.random() * 90),
			left: Math.floor(Math.random() * 90)
		}

		this.init();
	}

	get element(){
		let ball = document.createElement('div');
		ball.classList.add('ball', 'background__ball', this.color, this.size);
		ball.style.zIndex = this.zIndex;

		return ball
	}

	init(){
		this.ball = this.element;
		this.parent.appendChild(this.ball);

		this.ball.style.top = `calc(${Math.floor(Math.random() * 90)}% - ${this.ball.offsetHeight/2}px)`;
		this.ball.style.left = `calc(${Math.floor(Math.random() * 90)}% - ${this.ball.offsetWidth/2}px)`;

		this.move();
		this.animate();
	}

	animate(){
		this.interval = setInterval(this.move.bind(this), 10000)
	}

	move(){
		let coords = this.generate;
		this.ball.style.transform = `translate(${coords[0]}%, ${coords[1]}%)`;
	}

	get generate(){
		return [
			Math.floor(Math.random() * 200) - 100,
			Math.floor(Math.random() * 200) - 100
		]
	}

	get color(){
		return `ball_${['green', 'blue'][Math.floor(Math.random() * 2)]}`
	}

	get size(){
		return `ball_${['xs', 's', 'm', 'l', 'xl'][Math.floor(Math.random() * 5)]}`
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let bg = document.querySelector('.background');

	Array.from(Array(10).keys()).forEach(item => new BackgroundBall(bg, item));
});