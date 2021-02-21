let params = new URLSearchParams(location.search);
var songname = params.get('s'); //Extract song name
var songartist = params.get('a'); //Extract artist name
var songyoutube = params.get('y'); //Youtube url video ID

if (songyoutube === null) {
	document.getElementById("result").style.display = "none";
}
else {
	songname = "     " + songname
	songartist = "     " + songartist
	songyoutube = "https://youtube.com/embed/" + songyoutube;

	document.getElementById("song").innerHTML = songname;
	document.getElementById("artist").innerHTML = songartist;
	document.getElementById("youtube").src = songyoutube;

	document.getElementById("showOnlyOnHome").style.display = "none";
}