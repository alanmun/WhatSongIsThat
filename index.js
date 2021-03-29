let params = new URLSearchParams(location.search);
var songname = params.get('s'); //Extract song name
var songartist = params.get('a'); //Extract artist name
var songdate = params.get('d'); //Extract possible date
var songyoutube = params.get('y'); //Youtube url video ID

if (songdate === "" || songdate === null){ //No date was provided. Should be "", but null is checked as well for backwards compatibility
	document.getElementById('dateholder').style.display = "none"; //Hide it if no date available
}

if (songyoutube === null) {
	document.getElementById("result").style.display = "none";
} else if (songyoutube === "") {
	document.getElementById("youtube").style.display = "none"; //Hide the video since its nonexistent
	document.getElementById('novid').innerHTML = "No video was found on YouTube for this song result.";

	songname = "     " + songname;
	songartist = "     " + songartist;
	songdate = "     " + songdate;

	document.getElementById("song").innerHTML = songname;
	document.getElementById("artist").innerHTML = songartist;
	document.getElementById("date").innerHTML = songdate;

	document.getElementById("showOnlyOnHome").style.display = "none";
} else {
	songname = "     " + songname;
	songartist = "     " + songartist;
	songdate = "     " + songdate;
	songyoutube = "https://youtube.com/embed/" + songyoutube;

	document.getElementById("song").innerHTML = songname;
	document.getElementById("artist").innerHTML = songartist;
	document.getElementById("date").innerHTML = songdate;
	document.getElementById("youtube").src = songyoutube;

	document.getElementById("showOnlyOnHome").style.display = "none";
}