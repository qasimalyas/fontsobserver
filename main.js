document.addEventListener("DOMContentLoaded", function(event) {

	var font = new FontFaceObserver('source-code-pro');

	font.load().then(function () {
		console.log('font loaded.');
		sessionStorage.fontsLoaded = true;
	}).catch(function () {
		console.log('FAIL');
		sessionStorage.fontsLoaded = false;
	});

});