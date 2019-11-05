$(document).ready(function() {

 // инициализируем wow.js (Раскоментить если надо wow.js)
	// if ($(window).width() > 1000) {
	//   wow = new WOW(
	//     {
	//       animateClass: 'animated',
	//       offset:       100
	//     }
	//   );
	//   wow.init();
	// }

});


// var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
// if (isIOS) {
// 	var canvasVideo = new CanvasVideoPlayer({
// 			videoSelector: '.video',
// 			canvasSelector: '.canvas',
// 			timelineSelector: false,
// 			autoplay: true,
// 			makeLoop: true,
// 			pauseOnClick: false,
// 			audio: false
// 	});
// }
// else {
// 	document.querySelectorAll('.canvas')[0].style.display = 'none';
// }


function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function clearF1Cookie() {
	setCookie("name","",-1);
	setCookie("email","",-1);
	setCookie("last1","",-1);
}

$(window).load(function() {
	$("input.name").val(getCookie("name"));
	$("input.email").val(getCookie("email"));
	$("input.phone").val(getCookie("phone"));
});


$.get("https://ipapi.co/json/?key=e4192db949f63bdb4a84f9d73bf5cafa9921a6a5", function(data) {
	console.log(data);
	if(getCookie("phone")){
		$('input.phone').val(getCookie("phone"));
	}
	else {
		$('input.phone').val(data.country_calling_code);
	}
	$("input.phone").intlTelInput({
		utilsScript       : 'js/utils.js',
		defaultCountry    : 'auto',
		separateDialCode  : false,
		nationalMode      : false,
		initialCountry    : data.country,
		preferredCountries: ['ua', 'ru', 'by', 'kz']
	});
});

$('.btn-anchor').on('click', function(e) {
	e.preventDefault();
	anchorScroller(this, 1500);
});

$('.btn-utm').each(function(){
	var utm = window.location.search.substr(1);
	var url = $(this).attr('href');
	$(this).attr('href', url + '?' + utm);
});

$('form .subm').on('click', function(e){
	e.preventDefault();
	var form = $(this).closest('form');
	form.addClass('loading');
	setTimeout(function(){
		form.submit();
	}, 1000)
});

var utm ='?' + window.location.search.substr(1);
var tyurl = $('#checkrespo').val();
$('#checkrespo, #emailexist').val(tyurl + utm);

