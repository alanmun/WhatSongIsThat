let params = new URLSearchParams(location.search);
var songname = params.get('s'); //Extract song name
var songartist = params.get('a'); //Extract artist name
var songyoutube = params.get('y'); //Youtube url hash

if (songyoutube === null) {
  document.getElementById("result").style.visibility = "hidden";
}
else {
  songname = "     " + songname
  songartist = "     " + songartist
  songyoutube = "https://youtube.com/embed/" + songyoutube;
}
document.getElementById("song").innerHTML = songname; //songname;
document.getElementById("artist").innerHTML = songartist; //songartist;
document.getElementById("youtube").src = songyoutube;
