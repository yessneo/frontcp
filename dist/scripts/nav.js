const copied =	document.querySelector('.copied');
const btn = document.querySelector(".btn");

(() => {
	const menuButton = document.querySelector('.menu__button');
	const menuList = document.querySelector('.menu__list');

	menuButton.addEventListener('click', () => {
		let expanded = menuButton.getAttribute('aria-expanded') === 'true' || 'false';
		menuButton.setAttribute('aria-expanded', !expanded);
		menuButton.classList.toggle('menu__button--open');
		menuList.classList.toggle('menu__list--open'); 
	})
})();

var clipboard = new ClipboardJS('.btn', {
	text: function() {
		return css.value;
	}
});


clipboard.on('success', function(e) {
	console.log(e);

	
	
});

clipboard.on('error', function(e) {
	console.log(e);
});

btn.addEventListener('click', function showCopied() {

	// copied.style.display = "block";
	copied.style.height = "60px";

	setTimeout(clearCopied, 2000);
})
function clearCopied() {
	// copied.style.display = "none";
	copied.style.height = "0";
}
