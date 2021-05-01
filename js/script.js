'use strict'
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
		ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu) {
	iconMenu.addEventListener('click', function(e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

