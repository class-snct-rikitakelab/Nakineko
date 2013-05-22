// アプリの画面の大きさ [pixel]
var GAME_W			= 600;	// アプリ画面の横幅
var GAME_H			= 450;	// アプリ画面の縦幅
// アプリに用いる画像の大きさ [pixel]
var CAT_W			= 250;	// ネコ画像の横幅
var CAT_H			= 250;	// ネコ画像の縦幅
var MIKAN_W			= 250;	// ミカン箱画像の横幅
var MIKAN_H			= 250;	// ミカン箱画像の縦幅
var BUTTON_W		= 80;	// ボタン画像の横幅
var BUTTON_H		= 80;	// ボタン画像の縦幅
// アプリに用いる画像の縮小倍率数値 [百分率]
var CAT_SCALE_X		= 0.6;	// ネコ画像の横幅縮小倍率
var CAT_SCALE_Y		= 0.6;	// ネコ画像の縦幅縮小倍率
var MIKAN_SCALE_X	= 0.6;	// ミカン箱画像の横幅縮小倍率
var MIKAN_SCALE_Y	= 0.6;	// ミカン箱画像の縦幅縮小倍率
var BUTTON_SCALE_X	= 1.0;	// ボタン画像の横幅縮小倍率
var BUTTON_SCALE_Y	= 1.0;	// ボタン画像の縦幅縮小倍率
// その他アプリに必要な情報
var BG_MAX			= 10;	// 背景画像の種類の数
var BG_COLOR		= "#00FF00"; // ゲームの背景色(48bitカラー)
// オブジェクト用の画像・音声のリソースURL
var AO_SIT_IMG		= "../image/object/aosong.png";
var AO_WALK_IMG		= "../image/object/aowalk.png";
var BUCHI_SIT_IMG	= "../image/object/buchisong.png";
var BUCHI_WALK_IMG	= "../image/object/buchiwalk.png";
var KURI_SIT_IMG	= "../image/object/kurisong.png";
var KURI_WALK_IMG	= "../image/object/kuriwalk.png";
var KURO_SIT_IMG	= "../image/object/kurosong.png";
var KURO_WALK_IMG	= "../image/object/kurowalk.png";
var SHIRO_SIT_IMG	= "../image/object/shirosong.png";
var SHIRO_WALK_IMG	= "../image/object/shirowalk.png";
var TORA_SIT_IMG	= "../image/object/torasong.png";
var TORA_WALK_IMG	= "../image/object/torawalk.png";
var MIKAN_IMG		= "../image/object/nekochigura.png";
var RIGHT_BUTTON_IMG= "../image/button/next.png";
var LEFT_BUTTON_IMG	= "../image/button/prev.png";
var A_SOUND_OGG		= "../sound/raneko.ogg";	// ラ♪(.ogg)
var A_SOUND_MP3		= "../sound/raneko.mp3";	// ラ♪(.mp3)
// 背景用の画像のリソースURL
var MIZUTAMA_RED	= "../image/background/bg042_01.gif";
var MIZUTAMA_GREEN	= "../image/background/bg042_04.gif";
var MIZUTAMA_BLUE	= "../image/background/bg042_06.gif";
var CHECK_RED		= "../image/background/bg075_01.gif";
var CHECK_YELLOW	= "../image/background/bg075_03.gif";
var CHECK_GREEN		= "../image/background/bg075_04.gif";
var CHECK_PURPLE	= "../image/background/bg075_07.gif";
var RENGA_B_YELLOW	= "../image/background/bg098_02.gif";
var RENGA_OCHER		= "../image/background/bg098_03.gif";
var RENGA_GRAY		= "../image/background/bg098_10.gif";
// ネコに関する情報
var CAT_MAX			= 1;
var CAT_COLOR		= 6;
var WAIT_TIME		= 3;