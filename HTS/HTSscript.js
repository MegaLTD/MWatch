function HTS(id,ep){
	let H=["428910.42web.io", "6006.rf.gd", "404.000.pe",
	       "444.unaux.com", "10001.unaux.com", "7777.unaux.com",
	       "3.liveblog365.com", "arabymovies.gq", "10.000.pe",
	       "koora-live.gq", "n-e-t-f-l-i-x.gq", "7.liveblog365.com",
	       "8811.unaux.com", "6446.unaux.com", "555.000.pe",
	       "5.liveblog365.com", "22.unaux.com", "90909.unaux.com",
	      "0.liveblog365.com", "223344.unaux.com",
	      "001.liveblog365.com", "75.cn.eu.org",
	      "81.fr.eu.org", "80.mk.eu.org"];
	let i=Math.floor(Math.random() * 24);
	let link;
	if(ep=="F"){
		link = "http://"+H[i]+"/MegaWatch/movie.php?id="+id;
	}else{
		link = "http://"+H[i]+"/MegaWatch/?id="+id+"&ep="+ep;
	}
	
	document.getElementById("HTSLink").setAttribute("href", link);

}
