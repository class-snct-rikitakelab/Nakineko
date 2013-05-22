numToWalkImg = function(num) {
	var img = null;
	
	switch(num) {
		case 0:
			img = AO_WALK_IMG;
			break;
		case 1:
			img = BUCHI_WALK_IMG;
			break;
		case 2:
			img = KURI_WALK_IMG;
			break;
		case 3:
			img = KURO_WALK_IMG;
			break;
		case 4:
			img = SHIRO_WALK_IMG;
			break;
		case 5:
			img = TORA_WALK_IMG;
			break;
		default:
			img = "unknown";
			break;
	}
	
	return img;
}