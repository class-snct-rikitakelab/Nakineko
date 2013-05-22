numToName = function(num) {
	var name = null;
	
	switch(num) {
		case 0:
			name = "ao";
			break;
		case 1:
			name = "buchi";
			break;
		case 2:
			name = "kuri";
			break;
		case 3:
			name = "kuro";
			break;
		case 4:
			name = "shiro";
			break;
		case 5:
			name = "tora";
			break;
		default:
			name = "unknown";
			break;
	}
	
	return name;
}