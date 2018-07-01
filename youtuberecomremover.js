
setTimeout(function(){
	removeRecom();
}, 3000);

function removeRecom() {
	
	var sbDivs = document.getElementsByClassName('style-scope ytd-compact-video-renderer');
	for (var i = 0 ; i < sbDivs.length; i++) {
		var inner = sbDivs[i].innerHTML;
		var found = inner.search("Recommended for you");
		if (found>=0) sbDivs[i].style.display = "none"; 
	}

	var shDivs = document.getElementsByClassName('style-scope ytd-shelf-renderer');
	for (var i = 0 ; i < shDivs.length; i++) {
		var inner = shDivs[i].innerHTML;
		var found = inner.search("Recommended channel for you");
		if (found>=0) shDivs[i].style.display = "none"; 
	}

}

