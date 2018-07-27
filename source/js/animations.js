class Shaking{
	constructor(item){
		this.item = item;
		this.timeout = 10;
		this.item.style.transition = `transform ${this.timeout}s`;
		this.animate();
		this.start();
	}

	start(){
		setInterval(this.animate.bind(this), (this.timeout * 1000));
	}

	animate(){
		this.item.style.transform = `translate(${this.random}px, ${this.random}px)`;
	}

	get random(){
		return Math.floor(Math.random() * 20) - 10
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const shaking = document.querySelectorAll('.shaking');
	shaking.forEach((item, i) => new Shaking(item));

	const navTrigger = document.querySelector('.nav__menu');
	navTrigger.onclick = () => {
		let elements = [
			navTrigger,
			document.querySelector('.nav__links'),
			document.querySelector('.nav__burger'),
			document.querySelector('.nav__login_mobile'),
			document.querySelector('.nav__logo'),
		];

		elements.forEach(item => item.classList.toggle('active'));
	}

	const ageProblems = document.querySelectorAll('.problems__item');
	window.addEventListener('switchchange', (e) => {
		if (e.detail.name == 'age'){
			ageProblems.forEach((item, i) => {
				e.detail.active ? item.classList.add('active') : item.classList.remove('active');
			})
		}
	})
});