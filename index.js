$(document).ready(function(){
	firstPlay = true;
	const myAudio = document.getElementById("audio_play");
	const myVideo = document.getElementById('video_intro');
	myVideo.volume = 0.1;
	document.getElementById("main-frame-error").style.display = "none";
	document.onkeydown = function(event) {
		switch (event.keyCode) {
			case 77:
				myVideo.muted = !myVideo.muted;
				if(myVideo.muted)
				{
					myAudio.innerHTML  = '[ Muted (Press <B>[M]</B> to unmute) ]';
				}else{
					myAudio.innerHTML = '[ Unmuted (Press <B>[M]</B> to mute) ]';
				}
				break;
			case 32:
				document.getElementById("main-frame-error").style.display = "block";
				break;
			case 38:
				document.getElementById("main-frame-error").style.display = "block";
				break;
			case 107:
				if(myVideo.volume <= 1)
					myVideo.volume = myVideo.volume + 0.1
				break;
			case 109:
				if(myVideo.volume > 0)
					myVideo.volume = myVideo.volume - 0.1
				break;
		}
		return false;
	}
})
