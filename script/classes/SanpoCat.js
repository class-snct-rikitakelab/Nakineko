var SanpoCat = Class.create(Group, {
	initialize : function(x, y) {
		Group.call(this);
		this.x = x;
		this.y = y;
	},
	
	addObject : function(obj) {
		this.addChild(obj);
	},
	
	ontouchstart : function(event) {
		cat.standUp();
	},
	
	ontouchmove : function(event) {
		cat.walkAround(event);
	},
	
	ontouchend : function(event) {
		cat.walkStop();
	},
});