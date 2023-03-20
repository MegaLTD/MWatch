function RI(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ThisEp(){
	let i = RI(0, 2);
	const links = [
		"https://909.jp.eu.org/MegaWatch/Souq-Elkanto/E1/",
		"https://5005.eu.org/MegaWatch/Souq-Elkanto/E1/",
		"https://99.ru.eu.org/MegaWatch/Souq-Elkanto/E1/"
	];

	window.location.href=links[i];
}