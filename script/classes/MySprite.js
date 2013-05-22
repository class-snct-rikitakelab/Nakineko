// MySpriteクラス
var MySprite = Class.create(Sprite, {
	initialize : function(w, h, img, scale_x, scale_y) {
		Sprite.call(this, w, h);
		this.image = game.assets[img];
		this.scaleX = scale_x;
		this.scaleY = scale_y;
	},
});