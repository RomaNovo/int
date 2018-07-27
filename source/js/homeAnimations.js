document.addEventListener('DOMContentLoaded', () => {
	const plansLines = [...document.querySelectorAll('.plans__line')];
	let plansCurrent = 0;

	setInterval(() => {
		plansCurrent = plansCurrent >= plansLines.length - 1 ? 0 : plansCurrent + 1;
		plansLines.forEach((item, i) => {
			item == plansLines[plansCurrent] ? item.classList.add('plans__line_active') : item.classList.remove('plans__line_active')
		});
	}, 6000)
});