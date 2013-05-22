prevBgImage = function() {
	bg_num--;
	var img = numToBgImage(bg_num);
	
	if(img === "unknown") {
		bg_num = BG_MAX;
		img = numToBgImage(bg_num);
	}	
	
	return img;
}