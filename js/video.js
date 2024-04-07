//var video = document.getElementById('video');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});


document.addEventListener('DOMContentLoaded', function() {
    let video = document.getElementById("player1");  //video element
	let playButton = document.getElementById("play"); //play video button
    let volumeDisplay = document.getElementById("volume"); //volume element
	let pauseButton = document.getElementById("pause"); //pause video button
	let slowerButton = document.getElementById("slower"); //slow down button
	let fasterButton = document.getElementById("faster"); //speed up button
	let skipButton = document.getElementById("skip"); //skip ahead button
	let muteButton = document.getElementById("mute"); //mute button
	let volumeSlider = document.getElementById("slider"); //volume slider
	let OldSchoolButton = document.getElementById("vintage"); //old school button
	let originalButton = document.getElementById("orig"); //original button

    video.autoplay = false; //turn off autoplay
    video.loop = false; //turn off looping
	console.log("Autoplay is set to ", video.autoplay);
	console.log("Loop is set to ", video.loop);

	//Play video and update volume information
    playButton.addEventListener("click", function() {
        video.play(); //play video
        volumeDisplay.textContent = video.volume * 100 + '%';
		console.log("Play Video");
    });

	//Pause video
    pauseButton.addEventListener("click", function() {
        video.pause();
		console.log("Pause Video");
    });

	//Slow down speed
	slowerButton.addEventListener("click", function() {
		video.playbackRate -= 0.1;
		console.log("Slow down Video");
		console.log("Speed is ", video.playbackRate);
	});

	//Speed up speed
	fasterButton.addEventListener("click", function() {
		video.playbackRate += 0.1;
		console.log("Speed up Video");
		console.log("Speed is ", video.playbackRate);
	});

	//Advance video by 10 seconds
	skipButton.addEventListener("click", function() {
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		}
		else {
			video.currentTime = 0;
		}
		console.log("Video current time is ", video.currentTime);
	});

	//Mute/Unmute volume
	muteButton.addEventListener("click", function() {
		video.muted = !video.muted;
		if (video.muted) {
            muteButton.textContent = "Unmute";
			console.log("Mute");
        } 
		else {
            muteButton.textContent = "Mute";
			console.log("Unmute");
        }
	});

	//Adjust volume via slider
	volumeSlider.addEventListener("input", function() {
		video.volume = volumeSlider.value / 100;
		volumeDisplay.textContent = volumeSlider.value + '%';
		console.log("The current value is ", volumeSlider.value / 100);
	});

	//Adds oldSchool class on the video element
	OldSchoolButton.addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	//Removes oldSchool class on video element
	originalButton.addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

