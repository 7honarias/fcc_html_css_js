const btnHamburger = document.querySelector('#hamburger');
const header = document.querySelector('header')
btnHamburger.addEventListener('click', function(){
	console.log('click button hamburger');
	if(header.classList.contains('open')){
		header.classList.remove('open');
	}
	else {
		header.classList.add('open');
	}
});