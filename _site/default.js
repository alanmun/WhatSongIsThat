let params2 = new URLSearchParams(location.search);
var hash = params2.get('y'); //Youtube url hash

var thumbnail = "img.youtube.com/vi/" + hash + "/0.jpg"

if(hash != null){
	//hash was defined and we can try to update the content property of the meta tag on default.html
	document.querySelector('meta[property="og:image"]').setAttribute("content", thumbnail);
	document.querySelector('meta[name="twitter:image"]').setAttribute("content", thumbnail);
}