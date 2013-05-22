// Catクラス
var Cat = Class.create({
	initialize : function(id, name, sit_img, walk_img, w, h, x, y, sanpo_flag, timer_id) {
		this.id = id;
		this.name = name;
		this.sit_img = sit_img;
		this.walk_img = walk_img;
		this.w = w;
		this.h = h;
		this.x = x;
		this.y = y;
		this.sanpo_flag = sanpo_flag;
		this.timer_id = timer_id;
	},
	
	// 立ち上がる動作
	standUp : function() {
		sit_cat.visible = false;
		sanpo_neko.x = this.x;
		sanpo_neko.y = this.y;
		walk_cat.visible = true;
	},
	
	// 座る動作
	sitDown : function() {
		walk_cat.visible = false;
		sanpo_neko.x = this.x;
		sanpo_neko.y = this.y;
		sit_cat.visible = true;
		this.mewNya();
	},
	
	// 歩き回る動作
	walkAround : function(move) {
		clearTimeout(this.timer_id); 			// 経過時間をリセット
		sanpo_neko.x = move.x - (CAT_W / 2);
		sanpo_neko.y = move.y - (CAT_H / 2);
		this.x = sanpo_neko.x; 					// 移動した先のx座標値を保持
		this.y = sanpo_neko.y; 					// 移動した先のy座標値を保持
	},
	
	// 立ち止まる動作
	walkStop : function() {
		this.sanpo_flag = true;
		this.timer_id = setTimeout(function() {cat.sitDown();}, WAIT_TIME * 1000);
	},
	
	// 鳴く動作
	mewNya : function() {
		nakigoe.play();
	},
});