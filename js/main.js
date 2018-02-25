var link = document.querySelector('.btn-map'),
		popup = document.querySelector('.overlay'),
		close = document.querySelector('.modal-close'),
		popupWin = popup.querySelector('.modal-feedback');

var form = popup.querySelector('form'),
		user = popup.querySelector('[name=user]'),
		mail = popup.querySelector('[name=mail]'),
		text = popup.querySelector('[name=text]');

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
	popupWin.classList.add('modal-animation');
	user.focus();
});

close.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popupWin.classList.remove("modal-error");
	popupWin.classList.remove('modal-animation');
});

window.addEventListener('keydown', function(evt) {
	if(evt.keyCode === 27) {
		if(popup.classList.contains('modal-show')) {
			popup.classList.remove('modal-show');
			popupWin.classList.remove('modal-error');
			popupWin.classList.remove('modal-animation');
		}
	}
});

form.addEventListener("submit", function(evt) {
	if (!user.value || !mail.value || !text.value) {
		evt.preventDefault();
		popupWin.classList.add("modal-error");
		console.log("error");
	}
});