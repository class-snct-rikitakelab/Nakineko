numToSitImg = function(num) {
	var img = null;
	
	switch(num) {
		case 0:
			img = AO_SIT_IMG;
			break;
		case 1:
			img = BUCHI_SIT_IMG;
			break;
		case 2:
			img = KURI_SIT_IMG;
			break;
		case 3:
			img = KURO_SIT_IMG;
			break;
		case 4:
			img = SHIRO_SIT_IMG;
			break;
		case 5:
			img = TORA_SIT_IMG;
			break;
		default:
			img = "unknown";
			break;
	}
	
	return img;
}