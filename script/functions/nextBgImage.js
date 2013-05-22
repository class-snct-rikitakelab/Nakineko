nextBgImage = function() {
	bg_num++;
	var img = numToBgImage(bg_num);
	
	if(img === "unknown") {
		bg_num = 1;
		img = numToBgImage(bg_num);
	}
	
	return img;
}