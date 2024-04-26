function makeFavorite(index) {
	var hearts = document.getElementsByClassName("heart_icon");

	if (hearts[index].textContent == "favorite_border") {
		hearts[index].textContent = "favorite";
		hearts[index].style.color = "red";
	} else {
		hearts[index].textContent = "favorite_border";
		hearts[index].style.color = "black";
	}
}

function closeAd() {
	var ad = document.getElementById("ad");
	ad.style.display = "none";
}
