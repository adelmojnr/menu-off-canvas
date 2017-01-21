var btnMenu = document.querySelectorAll(".btn-menu"),
 	wrap = document.querySelector(".wrap");

for (var i = 0; i < btnMenu.length; i++) {
	btnMenu[i].addEventListener('click', showMenu);
}


function showMenu() {
	if(wrap.classList.contains('show-menu')){
		wrap.classList.remove('show-menu');
	}else{
		wrap.classList.add('show-menu');
	}

}

