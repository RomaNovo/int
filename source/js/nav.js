class NavLink extends Component{
	constructor(link){
		super({ clicked: false });
		this.link = link;
		if (window.matchMedia( "(max-width: 1024px)" )){
			this.link.onclick = (e) => this.click(e);
			document.addEventListener('click', (e) => this.reset(e));
		}
	}

	click(e){
		if (!this.state.clicked){
			e.preventDefault();
			this.setState({ clicked: true });
		}
	}

	reset(e){
		if (e.target != this.link) this.setState({ clicked: false });
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let childrenLinks = document.querySelectorAll('.nav__link_children > a');

	childrenLinks.forEach(item => new NavLink(item));
	// window.matchMedia( "(min-width: 500px)" );
});