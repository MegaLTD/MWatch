function HTS(id,ep){
	let H=["428910.42web.io",
		"1111.us.eu.org",
		"12.sk.eu.org",
		"6006.rf.gd",
		"000.au.eu.org",
		"444.unaux.com",
		"10001.unaux.com"];
	let i=Math.floor(Math.random() * 7);
	let link = "http://"+H[i]+"/?id="+id+"&ep="+ep;
	document.getElementById("HTSLink").setAttribute("href", link);

}
