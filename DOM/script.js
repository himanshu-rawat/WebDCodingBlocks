let button = document.getElementsByTagName('button');
let body = document.getElementsByTagName('body');
button[0].addEventListener('click', function() {
	body[0].classList.toggle('violet');
});
