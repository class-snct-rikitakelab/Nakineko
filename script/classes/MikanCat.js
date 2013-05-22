var MikanCat = Class.create(Group, {
	initialize : function(x, y) {
		Group.call(this);
		this.x = x;
		this.y = y;
	},
	
	addObject : function(obj) {
		this.addChild(obj);
	},
	
	ontouchstart : function(event) {
		if(cat.sanpo_flag === true) {
			return;
		}
		scene.addChild(sanpo_neko);
		sit_mikan_cat.visible = false;
		cat.standUp();
		cat.mewNya();
	},
	
	ontouchmove : function(event) {
		if(cat.sanpo_flag === true) {
			return;
		}
		cat.walkAround(event);
	},
	
	ontouchend : function(event) {
		if(cat.sanpo_flag === true) {
			return;
		}
		cat.walkStop();
	},
});