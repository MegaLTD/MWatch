function RI(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ThisEp(){
	let i = RI(0, 2);
	const links = [
		"https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E1/39qpKU2sQc.html",
		"https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E1/39qpKU2sQc.html",
		"https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E1/39qpKU2sQc.html"
		];

	window.location.href=links[i];
}
function NextEp(){
	let j = RI(0, 2);
	const links = [
		"https://909.jp.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://5005.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html",
		"https://99.ru.eu.org/MegaWatch/Al-Kabeer-Awi-7/E2/4nJVQrVpvU.html"
		];

	window.location.href=links[j];
}
