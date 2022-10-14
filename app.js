/** @format */

const loader = document.querySelector('.loader');

window.addEventListener('load', (e) => {
	setTimeout(() => {
		loader.classList.add('fadeOut');
		setTimeout(() => {
			loader.style.display = 'none';
		}, 1000);
	}, 5000);
});
