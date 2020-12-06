$(document).ready(function(){
	firstPlay = true;
	const myAudio = document.getElementById("audio_play");
	const myVideo = document.getElementById('video_intro');
	myVideo.volume = 0.1;
	document.onkeydown = function(event) {
		switch (event.keyCode) {
			case 32: 
				myVideo.muted = !myVideo.muted;
				if(myVideo.muted)
				{
					myAudio.innerHTML  = '[ Muted (Press space to unmute) ]';
				}else{
					myAudio.innerHTML = '[ Unmuted (Press space to mute) ]';
				}
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
