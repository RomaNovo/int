_('click', '[data-modal]', (e, el) => {
	e.preventDefault();

	let name = el.dataset.modal;
	let modal = document.querySelector(`.modal-${name}`);
	let content = document.querySelector('.content');
	let parents = [document.body, document.documentElement];

	modal.classList.add('active');
	content.classList.add('blur');
	parents.forEach(item => item.style.overflowY = 'hidden');
});

_('click', '.modal__close', (e, el) => {
	let parents = [document.body, document.documentElement];
	let modals = document.querySelectorAll('.modal');
	let content = document.querySelector('.content');

	content.classList.remove('blur');
	parents.forEach(item => item.style.overflowY = 'auto');
	modals.forEach(item => item.classList.remove('active'));
});