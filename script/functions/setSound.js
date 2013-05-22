function setSound(obj, sound_ogg, sound_mp3) {
	var canPlayOgg = ("" != obj.canPlayType("audio/ogg"));
	var canPlayMP3 = ("" != obj.canPlayType("audio/mp3"));
	
	if(canPlayOgg === true) {
		obj.src = sound_ogg;
	} else if(canPlayMP3 === true) {
		obj.src = sound_mp3;
	} else {
		alert("Sorry, this browser cannot use sound file.");
	}
}