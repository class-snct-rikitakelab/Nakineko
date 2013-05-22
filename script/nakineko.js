// グローバル変数
var cat				= null;
var sit_cat			= null;
var walk_cat		= null;
var mikan			= null;
var sit_mikan_cat	= null;
var mikan_bako		= null;
var sanpo_neko		= null;
var mikan_neko		= null;
var nakigoe			= null;
var bg_image		= null;
var bg_num			= 0;
var game			= null;
var scene			= null;

enchant();

window.onload = function() {
	game = new Game(GAME_W, GAME_H);
	
	var init_nx = (GAME_W - CAT_W) / 2;
	var init_ny = (GAME_H - CAT_H) / 2;
	var init_mx = (GAME_W - MIKAN_W) / 2;
	var init_my = (GAME_H - MIKAN_H) / 2;
	
	var id			= getRand(CAT_COLOR);
	var name		= numToName(id);
	var sit_img		= numToSitImg(id);
	var walk_img	= numToWalkImg(id);
	
	cat = new Cat(id, name, sit_img, walk_img, CAT_W, CAT_H, init_nx, init_ny, false, null);
	game.preload(cat.sit_img, cat.walk_img);
	
	mikan = new Mikan(MIKAN_IMG, MIKAN_W, MIKAN_H, init_mx, init_my);
	game.preload(mikan.mikan_img);
	
	game.preload(RIGHT_BUTTON_IMG, LEFT_BUTTON_IMG);
	for(var i = 1; i <= BG_MAX; i++) {
		game.preload(numToBgImage(i));
	}
	
	nakigoe = new Audio();
	setSound(nakigoe, A_SOUND_OGG, A_SOUND_MP3);
	
	game.onload = function() {
		scene = game.rootScene;
		scene.backgroundColor = BG_COLOR;
		
		bg_image = new Sprite(GAME_W, GAME_H);
		scene.addChild(bg_image);
		
		// 座っているネコのスプライト生成
		sit_cat = new MySprite(cat.w, cat.h, cat.sit_img, CAT_SCALE_X, CAT_SCALE_Y);
		
		// 歩いているネコのスプライト生成
		walk_cat = new MySprite(cat.w, cat.h, cat.walk_img, CAT_SCALE_X, CAT_SCALE_Y);
		
		// ミカン箱の中で座っているネコのスプライト生成
		sit_mikan_cat = new MySprite(mikan.w, mikan.h, cat.sit_img, MIKAN_SCALE_X, MIKAN_SCALE_Y);
		
		// ミカン箱のスプライト生成
		mikan_bako = new MySprite(mikan.w, mikan.h, mikan.mikan_img, MIKAN_SCALE_X, MIKAN_SCALE_Y);
		
		// ネコの座り姿と歩き姿のグループ生成
		sanpo_neko = new SanpoCat(cat.x, cat.y);
		sanpo_neko.addObject(sit_cat);
		sanpo_neko.addObject(walk_cat);
		sit_cat.visible = false;
		walk_cat.visible = false;
		
		// ネコとミカン箱のグループ生成
		mikan_neko = new MikanCat(mikan.x, mikan.y);
		mikan_neko.addObject(sit_mikan_cat);
		mikan_neko.addObject(mikan_bako);
		scene.addChild(mikan_neko);
		
		// ボタンのスプライト生成
		var right_button	= new MyRightButton(BUTTON_W, BUTTON_H, RIGHT_BUTTON_IMG, BUTTON_SCALE_X, BUTTON_SCALE_Y);
		var left_button		= new MyLeftButton(BUTTON_W, BUTTON_H, LEFT_BUTTON_IMG, BUTTON_SCALE_X, BUTTON_SCALE_Y);
		var right_bx		= GAME_W - BUTTON_W - (BUTTON_W / 2);
		var right_by		= (GAME_H - BUTTON_H) / 2;
		var left_bx			= BUTTON_W / 2;
		var left_by			= (GAME_H - BUTTON_H) / 2;
		right_button.x		= right_bx;
		right_button.y		= right_by;
		left_button.x		= left_bx;
		left_button.y		= left_by;
		right_button.addObject(scene);
		left_button.addObject(scene);
	};
	game.start();
};