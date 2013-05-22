numToBgImage = function(num) {
	var img = null;
	
	switch(num) {
		case 1:
			img = MIZUTAMA_RED;
			break;
		case 2:
			img = MIZUTAMA_GREEN;
			break;
		case 3:
			img = MIZUTAMA_BLUE;
			break;
		case 4:
			img = CHECK_RED;
			break;
		case 5:
			img = CHECK_YELLOW;
			break;
		case 6:
			img = CHECK_GREEN;
			break;
		case 7:
			img = CHECK_PURPLE;
			break;
		case 8:
			img = RENGA_B_YELLOW;
			break;
		case 9:
			img = RENGA_OCHER;
			break;
		case 10:
			img = RENGA_GRAY;
			break;
		default:
			img = "unknown";
			break;
	}
	return img;
}