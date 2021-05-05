let x = document.getElementsByClassName("drum");
let y = document.getElementsByClassName("drumSound");

for (let i = 0; i < x.length; i++) {
	x[i].addEventListener("click", function () {
		addAnimation(x[i]);
		y[i].play();
		removeAnimation(x[i]);
	});
}

document.addEventListener("keydown", function(event) {
	switch (event.keyCode) {
		case 87:
			y[0].play();
			var z = document.getElementsByClassName("" + event.key)[0];
			addAnimation(z);
			removeAnimation(z);
			break;
		case 65:
			y[1].play();
			z = document.getElementsByClassName("" + event.key)[0];
			addAnimation(z);
			removeAnimation(z);
			break;
		case 83:
			z = document.getElementsByClassName("" + event.key)[0];
			y[2].play();
			addAnimation(z);
			removeAnimation(z);
			break;
		case 68:
			z = document.getElementsByClassName("" + event.key)[0];
			y[3].play();
			addAnimation(z);
			removeAnimation(z);
			break;
		case 74:
			z = document.getElementsByClassName("" + event.key)[0];
			y[4].play();
			addAnimation(z);
			removeAnimation(z);
			break;
		case 75:
			z = document.getElementsByClassName("" + event.key)[0];
			y[5].play();
			addAnimation(z);
			removeAnimation(z);
			break;
		case 76:
			z = document.getElementsByClassName("" + event.key)[0];
			y[6].play();
			addAnimation(z);
			removeAnimation(z);
			break;
		default:
	}
});

function addAnimation(currentKey) {
	currentKey.className += " pressed";
}

function removeAnimation(currentKey) {
	setTimeout(function () {currentKey.classList.remove("pressed")}, 400);
}
