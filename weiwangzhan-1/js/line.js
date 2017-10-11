$(function(){
if (/iP(hone|od|ad)/.test(navigator.userAgent)) {  
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/), version = parseInt(
				v[1], 10);
		if (version >= 8) {
			document.documentElement.classList.add('hairlines')
		}
	};

})