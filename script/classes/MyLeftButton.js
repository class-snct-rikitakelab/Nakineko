// MyLeftButtonクラス
var MyLeftButton = Class.create(Sprite, {
	initialize : function(w, h, img, scale_x, scale_y) {
		Sprite.call(this, w, h);
		this.image = game.assets[img];
		this.scaleX = scale_x;
		this.scaleY = scale_y;
	},
	
	addObject : function(scene) {
		scene.addChild(this);
	},
	
	ontouchend : function(event) {
		var bg_prev = prevBgImage();
		bg_image.image = game.assets[bg_prev];
	},
});