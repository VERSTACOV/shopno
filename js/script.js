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

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto); //получаем в константу этот объект
			//выщитать положение этого объекта с учетом высоты шапки
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight; //создаем константу gotoBlockValue и с помощью встроенной функции getBoundingClientRect() точка топ, потому что хочу получить растояние от верха этого объекта.Яполучаю его место положение  на странице в пикселях, так же я добавляю количество прокрученых пикселей для этого используем pageYOffset (y-вертикаль) и отнимаем высоту шапки.

			if (iconMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconMenu.classList.remove('active');
				menuBody.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}