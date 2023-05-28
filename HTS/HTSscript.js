function HTS(id,ep){
	let H=["428910.42web.io", "1111.us.eu.org",
		"12.sk.eu.org", "6006.rf.gd",
		"000.au.eu.org", "444.unaux.com",
		"10001.unaux.com", "3.liveblog365.com",
	      "arabymovies.gq", "koora-live.gq",
	       "n-e-t-f-l-i-x.gq","8811.unaux.com",
	       "6446.unaux.com","5.liveblog365.com",
	       "22.unaux.com"];
	let i=Math.floor(Math.random() * 15);
	let link = "http://"+H[i]+"/MegaWatch/?id="+id+"&ep="+ep;
	document.getElementById("HTSLink").setAttribute("href", link);

}
