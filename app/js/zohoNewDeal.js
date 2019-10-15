function zohoNewDeal(formid, productID, productName){
	var output = false;
	form = $(formid);
	form.addClass('loading');
	form.find('input.name').focus();
	form.find('input.email').focus();
	form.find('input.phone').focus();
	form.find('input[type="submit"]').focus();
	var name = form.find('input.name').val();
	var email = form.find('input.email').val();
	var phone = form.find('input.phone').val();
	var utm_source = getUrlParameter('utm_source');
	var utm_medium = getUrlParameter('utm_medium');
	var utm_term = getUrlParameter('utm_term');
	var utm_campaign = getUrlParameter('utm_campaign');
	var utm_content = getUrlParameter('utm_content');
	var contactID = getCookie('contactID');
	var http_refferer = window.location.href.split('?')[0];
	var funnelID = getCookie('funnel-' + productID);
	var dealID = getCookie('dealID');
	phone = phone.replace(/\s/g, '');
	$(".last1").val(phone);
	if ($('.not_error').length == 3)
	{
		if(funnelID) {
			$.ajax({
				type: "PUT",
				url: 'https://pay.geniusmarketing.me/deal',
				async: false,
				data:
				{
					dealID: dealID,
					First_Name: name,
					Email: email,
					Phone: phone,
					utm_source: utm_source,
					utm_medium: utm_medium,
					utm_term: utm_term,
					utm_campaign: utm_campaign,
					utm_content: utm_content,
					http_refferer: http_refferer
				},
				success: function(res){
					setCookie('name', name, 365);
					setCookie('email', email, 365);
					setCookie('phone', phone, 365);
					console.log(res);
					output = true;
				}
			});
		}
		else {
			$.ajax({
				type: "POST",
				url: 'https://pay.geniusmarketing.me/deal',
				async: false,
				data:
				{
					First_Name: name,
					Email: email,
					Phone: phone,
					productName: productName,
					productID: productID,
					utm_source: utm_source,
					utm_medium: utm_medium,
					utm_term: utm_term,
					utm_campaign: utm_campaign,
					utm_content: utm_content,
					http_refferer: http_refferer,
					Product_type: 'Лид магнит',
					Stage: '1. Заявка'
				},
				success: function(res)
				{
					console.log(res);
					setCookie('name', name, 365);
					setCookie('email', email, 365);
					setCookie('phone', phone, 365);
					setCookie('funnel-' + productID, true, 365);
					setCookie('contactID', res.contactID, 365);
					setCookie('dealID', res.dealID, 365);
					output = true;
				}
			});
		}
	}
	else
	{
		form.removeClass('loading');
		form.find('input.error').first().focus();
	}
	return output;
};

