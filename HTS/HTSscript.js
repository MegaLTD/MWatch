function HTS(id,ep){
	let H=["428910.42web.io", "6006.rf.gd", "404.000.pe", "psyplay.gq",
	       "444.unaux.com", "7777.unaux.com", "999.000.pe", "arabymovies.ml",
	       "arabymovies.gq", "10.000.pe", "42.42web.io", "psyplay.cf",
	       "koora-live.gq", "n-e-t-f-l-i-x.gq", "7.liveblog365.com", "66.000.pe",
	       "6446.unaux.com", "555.000.pe", "4000.rf.gd", "55.42web.io",
	       "5.liveblog365.com", "22.unaux.com", "90909.unaux.com", "77.rf.gd",
	      "0.liveblog365.com", "223344.unaux.com", "001.liveblog365.com",
	      "155.liveblog365.com", "301.unaux.com", "10101.unaux.com",
	      "8177.000.pe", "2000.000.pe", "3210.rf.gd"];
	let i=Math.floor(Math.random() * 33);
	let link;
	if(ep=="F"){
		link = "http://"+H[i]+"/MegaWatch/movie.php?id="+id;
	}else{
		link = "http://"+H[i]+"/MegaWatch/?id="+id+"&ep="+ep;
	}
	
	document.getElementById("HTSLink").setAttribute("href", link);

}
