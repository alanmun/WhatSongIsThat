let params = new URLSearchParams(location.search);
var hash = params.get('y'); //Youtube url hash

var youtubelink = "https://www.youtube.com/watch?v=" + hash;

if(hash != null){
	//hash was defined and we can try to update the content property of the meta tag on default.html
	document.querySelector('meta[property="og:image"]').setAttribute("content", youtubelink);
	document.querySelector('meta[name="twitter:image"]').setAttribute("content", youtubelink);
}