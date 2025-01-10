$(document).ready(function() {
	const audio = document.getElementById("song");
	const container = document.querySelector(".progress .track");
	const elapsed = document.querySelector(".progress .current");
	function progress_animation() {
		var rect = container.getBoundingClientRect();
		console.log("RECT:", rect.width);
		var percentage = audio.currentTime / audio.duration;
		elapsed.style.width = (percentage * rect.width) + "px";
		console.log("PCT:", percentage);
		window.requestAnimationFrame(progress_animation);
	};
	audio.load();
	audio.oncanplaythrough = function(e) {
		const totalMinutes = Math.floor(audio.duration / 60);
		const totalSeconds = Math.floor(audio.duration % 60);
		$("#left").html(totalMinutes +":"+(totalSeconds >= 10 ? totalSeconds : "0"+totalSeconds));
	};
	audio.onended = function(e) {
		$("#play-pause i").toggleClass(["mdi-pause", "mdi-play"]);
		// audio.stop();
	};
	audio.ontimeupdate = function(e) {
		console.log("E:", e);
		const totalMinutes = Math.floor(audio.duration / 60);
		const totalSeconds = Math.floor(audio.duration % 60);
		const minutes = Math.floor(audio.currentTime / 60);
		const seconds = Math.floor(audio.currentTime % 60);
		$("#current").html(minutes +":"+(seconds >= 10 ? seconds : "0"+seconds));
		$("#left").html((totalMinutes - minutes) +":"+((totalSeconds - seconds) >= 10 ? (totalSeconds - seconds) : "0"+(totalSeconds - seconds)));
		window.requestAnimationFrame(progress_animation);
	};
	$("#play-pause").on("click", function(e) {
		window.requestAnimationFrame(progress_animation);
		$btn = $(e.currentTarget);
		$btn.toggleClass("playing");
		$btn.toggleClass("paused");
		if( !audio.paused ) {
			audio.pause();
		} else {
			audio.play();
		}
		
		$btn.find("i").toggleClass(["mdi-pause", "mdi-play"]);
	});
	$("#rwd").on("click", function(e) {
		console.log("AD-10", (audio.currentTime - 10));
		if( audio.currentTime >= 10 ) {
			audio.currentTime = audio.currentTime - 10;
		} else {
			audio.currentTime = 0;
		}
	});
	
	$("#fwd").on("click", function(e) {
		console.log("AD+10", (audio.currentTime + 10));
		if( audio.currentTime + 10 < audio.duration ) {
			audio.currentTime = audio.currentTime + 10;
		} else {
			audio.currentTime = audio.duration;
		}
	});
})