document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

const videos = document.querySelector("video");
const audios = document.querySelector("audio");

let players = [];

for (let i = 0; i < audios.clientHeight; i++) {
	players.push(audios[i]);
}

for (let i = 0; i < videos.clientHeight; i++) {
	players.push(videos[i]);
}

for (let i = 0; i < players.length; i++) {
	players[i].removeAttribute("controls");
}

function playerController(
	player,
	playPauseButton,
	stopButton,
	forwardButton,
	timeLabel
) {
	this.player = player;
	this.playPauseButton = playPauseButton;
	this.stopButton = stopButton;
	this.forwardButton = forwardButton;
	this.timeLabel = timeLabel;
	this.interval;
	this.playPauseButton.onClick = function () {
		if (player.paused) {
			player.play();
		} else {
			player.pause();
			playPauseButton.textContent = "Play";
		}
	};
}

function changeContrast() {
	const checkbox = document.getElementById("contrast-checkbox");

	const h1 = document.querySelectorAll("h1");
	const h2 = document.querySelectorAll("h2");
	const h3 = document.querySelectorAll("h3");
	const p = document.querySelectorAll("p");
	const a = document.querySelectorAll("a");
	const li = document.querySelectorAll("li");
	const navA = document.querySelectorAll("nav a");
	const label = document.querySelectorAll("label");
	const contrastDiv = document.getElementById("contrast-div");

	//sections
	const sectionHome = document.getElementById("home");
	const sectionMenu = document.getElementById("menu");
	const sectionAbout = document.getElementById("about");
	const sectionGallery = document.getElementById("gallery");
	const sectionQuestionSection = document.getElementById("question-section");
	const sectionContact = document.getElementById("contact");
	const footer = document.getElementById("footer");

	const textarea = document.getElementById("textarea");
	const input = document.getElementById("input");
	const submit = document.getElementById("submit");

	let colorWhite = "#FFF";
	let colorYellow = "#FF0";
	let colorBlue = "#00F";
	let colorBlack = "#000";
	let colorLightGrey = "#F2F2F2";

	if (checkbox.checked) {
		setColorForElements(h1, colorYellow);
		setColorForElements(h2, colorYellow);
		setColorForElements(h3, colorYellow);
		setColorForElements(p, colorYellow);
		setColorForElements(a, colorYellow);
		setColorForElements(li, colorYellow);
		setColorForElements(label, colorYellow);
		setColorForElement(contrastDiv, colorYellow);

		//sections
		setBackgroundColorForElement(sectionHome, colorBlack);
		setBackgroundColorForElement(sectionMenu, colorBlack);
		setBackgroundColorForElement(sectionAbout, colorBlack);
		setBackgroundColorForElement(sectionGallery, colorBlack);
		setBackgroundColorForElement(sectionQuestionSection, colorBlack);
		setBackgroundColorForElement(sectionContact, colorBlack);
		setBackgroundColorForElements(sectionContact, colorBlack);
    setBackgroundColorForElement(footer, colorBlack);

    //form
    setBackgroundColorForElements(input, colorBlack);
    setColorForElements(input, colorYellow);
    setBackgroundColorForElements(textarea, colorBlack);
    setColorForElements(textarea, colorYellow);
	} else {
		setColorForElements(h1, colorBlack);
		setColorForElements(h2, colorBlack);
		setColorForElements(h3, colorBlack);
		setColorForElements(p, colorBlack);
		setColorForElements(a, colorBlue);
		setColorForElements(li, colorBlack);
		setColorForElements(navA, colorWhite);
		setColorForElements(label, colorBlack);
		setColorForElement(contrastDiv, colorWhite);

		//sections
		setBackgroundColorForElement(sectionHome, colorLightGrey);
		setBackgroundColorForElement(sectionMenu, colorWhite);
		setBackgroundColorForElement(sectionAbout, colorLightGrey);
		setBackgroundColorForElement(sectionGallery, colorWhite);
		setBackgroundColorForElement(sectionQuestionSection, colorLightGrey);
		setBackgroundColorForElement(sectionContact, colorWhite);
		setBackgroundColorForElement(footer, colorWhite);

    //form
    setBackgroundColorForElements(input, colorBlack);
    setColorForElements(input, colorYellow);
    setBackgroundColorForElements(textarea, colorBlack);
    setColorForElements(textarea, colorYellow);
	}
}

function setColorForElements(elements, color) {
	elements.forEach((element) => {
		element.style.color = color;
	});
}

function setColorForElement(element, color) {
	element.style.color = color;
}

function setBackgroundColorForElement(element, color) {
	element.style.backgroundColor = color;
}

function setBackgroundColorForElements(elements, color) {
	elements.forEach((element) => {
		element.style.backgroundColor = color;
	});
}
