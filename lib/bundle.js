/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const SweetAlert = __webpack_require__(1);

	const canvasEl = document.getElementById("canvas");
	const ctx = canvasEl.getContext("2d");
	const player = new Object("docs/Player/p1_stand.png", 400, 600, 66, 92);
	const right_sign = new Object("docs/Tiles/signRight.png", 210, 350, 70, 70);
	const exit_sign = new Object("docs/Tiles/signExit.png", 10080, 420, 70, 70);
	const door_top = new Object("docs/Tiles/door_closedTop.png", 9940, 350, 70, 70);
	const door_bottom = new Object("docs/Tiles/door_closedMid.png", 9940, 420, 70, 70);
	const controls_menu = new Object("docs/Player/controls.png", 100, 435, 70, 70);

	let coin_count = 0;
	let left_pressed = false;
	let right_pressed = false;
	let space_pressed = false;

	const total_coins = 39;
	const total_grass = 72;
	const total_clouds_a = 20;
	const total_clouds_b = 20;
	const total_clouds_c = 20;
	const total_spikes = 9;
	const total_ground = 10;

	const coin = new Array();
	const grass = new Array();
	const cloud_a = new Array();
	const cloud_b = new Array();
	const cloud_c = new Array();
	const spike = new Array();
	const ground = new Array();
	const coin_menu = new Array();

	coin_menu[0] = new Object("docs/HUD/hud_coins.png", 70, 50, 70, 70);
	coin_menu[1] = new Object("docs/HUD/hud_x.png", 140, 60, 70, 70);
	coin_menu[2] = new Object("docs/HUD/hud_0.png", 190, 55, 70, 70);
	coin_menu[3] = new Object("docs/HUD/hud_0.png", 230, 55, 70, 70);

	for (let i = 0; i <= total_clouds_a; i++) {
	  cloud_a[i] = new Object("docs/Items/cloud1.png", 10000 * Math.random(), 400 * Math.random(), 70, 70);
	}
	for (let i = 0; i <= total_clouds_b; i++) {
	  cloud_b[i] = new Object("docs/Items/cloud2.png", 10000 * Math.random(), 400 * Math.random(), 70, 70);
	}
	for (let i = 0; i <= total_clouds_c; i++) {
	  cloud_c[i] = new Object("docs/Items/cloud3.png", 10000 * Math.random(), 400 * Math.random(), 70, 70);
	}


	coin[0] = new Object("docs/Items/coinGold.png", 630, 280, 70, 70);
	coin[1] = new Object("docs/Items/coinGold.png", 840, 280, 70, 70);

	coin[2] = new Object("docs/Items/coinGold.png", 1190, 350, 70, 70);

	coin[3] = new Object("docs/Items/coinGold.png", 1715, 280, 70, 70);

	coin[4] = new Object("docs/Items/coinGold.png", 2415, 210, 70, 70);

	coin[5] = new Object("docs/Items/coinGold.png", 2765, 350, 70, 70);

	coin[5] = new Object("docs/Items/coinGold.png", 2940, 350, 70, 70);
	coin[6] = new Object("docs/Items/coinGold.png", 2940, 280, 70, 70);
	coin[7] = new Object("docs/Items/coinGold.png", 2940, 210, 70, 70);

	coin[8] = new Object("docs/Items/coinGold.png", 3395, 350, 70, 70);

	coin[9] = new Object("docs/Items/coinGold.png", 3745, 350, 70, 70);

	coin[10] = new Object("docs/Items/coinGold.png", 4200, 350, 70, 70);

	coin[11] = new Object("docs/Items/coinGold.png", 4410, 210, 70, 70);
	coin[12] = new Object("docs/Items/coinGold.png", 4480, 210, 70, 70);
	coin[13] = new Object("docs/Items/coinGold.png", 4550, 210, 70, 70);

	coin[14] = new Object("docs/Items/coinGold.png", 4900, 350, 70, 70);
	coin[15] = new Object("docs/Items/coinGold.png", 4970, 350, 70, 70);
	coin[16] = new Object("docs/Items/coinGold.png", 5040, 350, 70, 70);

	coin[17] = new Object("docs/Items/coinGold.png", 2940, 140, 70, 70);

	coin[18] = new Object("docs/Items/coinGold.png", 5320, 350, 70, 70);
	coin[19] = new Object("docs/Items/coinGold.png", 5530, 280, 70, 70);
	coin[20] = new Object("docs/Items/coinGold.png", 5740, 210, 70, 70);

	coin[21] = new Object("docs/Items/coinGold.png", 6265, 350, 70, 70);

	coin[22] = new Object("docs/Items/coinGold.png", 6825, 350, 70, 70);

	coin[23] = new Object("docs/Items/coinGold.png", 7210, 210, 70, 70);
	coin[24] = new Object("docs/Items/coinGold.png", 7280, 210, 70, 70);
	coin[26] = new Object("docs/Items/coinGold.png", 7350, 210, 70, 70);

	coin[27] = new Object("docs/Items/coinGold.png", 8120, 420, 70, 70);
	coin[28] = new Object("docs/Items/coinGold.png", 8120, 350, 70, 70);
	coin[29] = new Object("docs/Items/coinGold.png", 8120, 280, 70, 70);
	coin[30] = new Object("docs/Items/coinGold.png", 8120, 210, 70, 70);

	coin[31] = new Object("docs/Items/coinGold.png", 8470, 350, 70, 70);

	coin[32] = new Object("docs/Items/coinGold.png", 9100, 210, 70, 70);
	coin[33] = new Object("docs/Items/coinGold.png", 9240, 140, 70, 70);
	coin[34] = new Object("docs/Items/coinGold.png", 9380, 70, 70, 70);

	coin[25] = new Object("docs/Items/coinGold.png", 9660, 210, 70, 70);

	coin[35] = new Object("docs/Items/coinGold.png", 9730, 420, 70, 70);
	coin[36] = new Object("docs/Items/coinGold.png", 9800, 420, 70, 70);
	coin[37] = new Object("docs/Items/coinGold.png", 9870, 420, 70, 70);

	coin[38] = new Object("docs/Items/coinGold.png", 9520, 70, 70, 70);
	coin[39] = new Object("docs/Items/coinGold.png", 9590, 140, 70, 70);


	grass[0] = new Object("docs/Tiles/grassLeft.png", 140, 420, 70, 70);
	grass[1] = new Object("docs/Tiles/grassMid.png", 210, 420, 70, 70);
	grass[2] = new Object("docs/Tiles/grassMid.png", 280, 420, 70, 70);
	grass[3] = new Object("docs/Tiles/grassMid.png", 350, 420, 70, 70);
	grass[4] = new Object("docs/Tiles/grassMid.png", 420, 420, 70, 70);
	grass[5] = new Object("docs/Tiles/grassRight.png", 490, 420, 70, 70);

	grass[6] = new Object("docs/Tiles/grassLeft.png", 630, 350, 70, 70);
	grass[7] = new Object("docs/Tiles/grassMid.png", 700, 350, 70, 70);
	grass[8] = new Object("docs/Tiles/grassMid.png", 770, 350, 70, 70);
	grass[9] = new Object("docs/Tiles/grassRight.png", 840, 350, 70, 70);

	grass[10] = new Object("docs/Tiles/grassLeft.png", 1050, 420, 70, 70);
	grass[11] = new Object("docs/Tiles/grassMid.png", 1120, 420, 70, 70);
	grass[12] = new Object("docs/Tiles/grassMid.png", 1190, 420, 70, 70);
	grass[13] = new Object("docs/Tiles/grassMid.png", 1260, 420, 70, 70);
	grass[14] = new Object("docs/Tiles/grassRight.png", 1330, 420, 70, 70);

	grass[15] = new Object("docs/Tiles/grassLeft.png", 1540, 420, 70, 70);
	grass[16] = new Object("docs/Tiles/grassMid.png", 1610, 420, 70, 70);

	grass[17] = new Object("docs/Tiles/grassMid.png", 1820, 420, 70, 70);
	grass[18] = new Object("docs/Tiles/grassRight.png", 1890, 420, 70, 70);

	grass[19] = new Object("docs/Tiles/grassLeft.png", 2100, 350, 70, 70);
	grass[20] = new Object("docs/Tiles/grassRight.png", 2170, 350, 70, 70);

	grass[21] = new Object("docs/Tiles/grassLeft.png", 2380, 280, 70, 70);
	grass[22] = new Object("docs/Tiles/grassRight.png", 2450, 280, 70, 70);

	grass[23] = new Object("docs/Tiles/grassLeft.png", 2730, 490, 70, 70);
	grass[24] = new Object("docs/Tiles/grassRight.png", 2800, 490, 70, 70);

	grass[25] = new Object("docs/Tiles/grass.png", 2940, 420, 70, 70);

	grass[26] = new Object("docs/Tiles/grassLeft.png", 3150, 490, 70, 70);
	grass[27] = new Object("docs/Tiles/grassMid.png", 3220, 490, 70, 70);
	grass[28] = new Object("docs/Tiles/grassRight.png", 3290, 490, 70, 70);

	grass[29] = new Object("docs/Tiles/grassLeft.png", 3500, 490, 70, 70);
	grass[30] = new Object("docs/Tiles/grassMid.png", 3570, 490, 70, 70);
	grass[31] = new Object("docs/Tiles/grassRight.png", 3640, 490, 70, 70);

	grass[32] = new Object("docs/Tiles/grassLeft.png", 3850, 490, 70, 70);
	grass[33] = new Object("docs/Tiles/grassMid.png", 3920, 490, 70, 70);
	grass[34] = new Object("docs/Tiles/grassRight.png", 3990, 490, 70, 70);

	grass[35] = new Object("docs/Tiles/grass.png", 4200, 420, 70, 70);

	grass[36] = new Object("docs/Tiles/grassLeft.png", 4340, 350, 70, 70);

	grass[37] = new Object("docs/Tiles/grassRight.png", 4620, 350, 70, 70);

	grass[38] = new Object("docs/Tiles/grassLeft.png", 4830, 490, 70, 70);

	grass[39] = new Object("docs/Tiles/grassRight.png", 5110, 490, 70, 70);

	grass[40] = new Object("docs/Tiles/grass.png", 5320, 420, 70, 70);

	grass[41] = new Object("docs/Tiles/grass.png", 5530, 350, 70, 70);

	grass[42] = new Object("docs/Tiles/grass.png", 5740, 280, 70, 70);

	grass[43] = new Object("docs/Tiles/grassLeft.png", 6020, 350, 70, 70);
	grass[44] = new Object("docs/Tiles/grassMid.png", 6090, 350, 70, 70);
	grass[45] = new Object("docs/Tiles/grassRight.png", 6160, 350, 70, 70);

	grass[46] = new Object("docs/Tiles/grassLeft.png", 6230, 420, 70, 70);
	grass[47] = new Object("docs/Tiles/grassRight.png", 6300, 420, 70, 70);

	grass[48] = new Object("docs/Tiles/grassLeft.png", 6370, 490, 70, 70);
	grass[49] = new Object("docs/Tiles/grassMid.png", 6440, 490, 70, 70);
	grass[50] = new Object("docs/Tiles/grassRight.png", 6510, 490, 70, 70);

	grass[51] = new Object("docs/Tiles/grassLeft.png", 6790, 420, 70, 70);
	grass[52] = new Object("docs/Tiles/grassRight.png", 6860, 420, 70, 70);

	grass[53] = new Object("docs/Tiles/grassLeft.png", 7070, 350, 70, 70);
	grass[54] = new Object("docs/Tiles/grassMid.png", 7140, 350, 70, 70);

	grass[55] = new Object("docs/Tiles/grassRight.png", 7420, 350, 70, 70);

	grass[56] = new Object("docs/Tiles/grassLeft.png", 7700, 280, 70, 70);
	grass[57] = new Object("docs/Tiles/grassRight.png", 7770, 280, 70, 70);

	grass[58] = new Object("docs/Tiles/grassLeft.png", 8050, 490, 70, 70);
	grass[59] = new Object("docs/Tiles/grassMid.png", 8120, 490, 70, 70);
	grass[60] = new Object("docs/Tiles/grassRight.png", 8190, 490, 70, 70);

	grass[61] = new Object("docs/Tiles/grass.png", 8470, 420, 70, 70);

	grass[62] = new Object("docs/Tiles/grassLeft.png", 8750, 350, 70, 70);
	grass[63] = new Object("docs/Tiles/grassRight.png", 8820, 350, 70, 70);

	grass[64] = new Object("docs/Tiles/grass.png", 9100, 280, 70, 70);

	grass[65] = new Object("docs/Tiles/grass.png", 9240, 210, 70, 70);

	grass[66] = new Object("docs/Tiles/grass.png", 9380, 140, 70, 70);

	grass[67] = new Object("docs/Tiles/grassLeft.png", 9730, 490, 70, 70);
	grass[68] = new Object("docs/Tiles/grassMid.png", 9800, 490, 70, 70);
	grass[69] = new Object("docs/Tiles/grassMid.png", 9870, 490, 70, 70);
	grass[70] = new Object("docs/Tiles/grassMid.png", 9940, 490, 70, 70);
	grass[71] = new Object("docs/Tiles/grassMid.png", 10010, 490, 70, 70);
	grass[72] = new Object("docs/Tiles/grassRight.png", 10080, 490, 70, 70);


	ground[0] = new Object("docs/Tiles/grassMid.png", 1680, 420, 70, 70);
	ground[1] = new Object("docs/Tiles/grassMid.png", 1750, 420, 70, 70);

	ground[2] = new Object("docs/Tiles/grassMid.png", 4410, 350, 70, 70);
	ground[3] = new Object("docs/Tiles/grassMid.png", 4480, 350, 70, 70);
	ground[4] = new Object("docs/Tiles/grassMid.png", 4550, 350, 70, 70);

	ground[5] = new Object("docs/Tiles/grassMid.png", 4900, 490, 70, 70);
	ground[6] = new Object("docs/Tiles/grassMid.png", 4970, 490, 70, 70);
	ground[7] = new Object("docs/Tiles/grassMid.png", 5040, 490, 70, 70);

	ground[8] = new Object("docs/Tiles/grassMid.png", 7210, 350, 70, 70);
	ground[9] = new Object("docs/Tiles/grassMid.png", 7280, 350, 70, 70);
	ground[10] = new Object("docs/Tiles/grassMid.png", 7350, 350, 70, 70);



	spike[0] = new Object("docs/Items/spikes.png", 1715, 350, 70, 70);

	spike[1] = new Object("docs/Items/spikes.png", 4410, 280, 70, 70);
	spike[2] = new Object("docs/Items/spikes.png", 4480, 280, 70, 70);
	spike[3] = new Object("docs/Items/spikes.png", 4550, 280, 70, 70);

	spike[4] = new Object("docs/Items/spikes.png", 4900, 420, 70, 70);
	spike[5] = new Object("docs/Items/spikes.png", 4970, 420, 70, 70);
	spike[6] = new Object("docs/Items/spikes.png", 5040, 420, 70, 70);

	spike[7] = new Object("docs/Items/spikes.png", 7210, 280, 70, 70);
	spike[8] = new Object("docs/Items/spikes.png", 7280, 280, 70, 70);
	spike[9] = new Object("docs/Items/spikes.png", 7350, 280, 70, 70);



	player.gravity = 20;
	player.weight = 0.8;

	function keyDown(e) {
	  if (String.fromCharCode(e.keyCode) === "%") {
	    left_pressed = true;
	  }
	  if (String.fromCharCode(e.keyCode) === "'") {
	    right_pressed = true;
	  }
	  if (String.fromCharCode(e.keyCode) === " ") {
	    space_pressed = true;
	  }
	}

	function keyUp(e) {
	  if (String.fromCharCode(e.keyCode) === "%") {
	    left_pressed = false;
	  }
	  if (String.fromCharCode(e.keyCode) === "'") {
	    right_pressed = false;
	  }
	  if (String.fromCharCode(e.keyCode) === " ") {
	    space_pressed = false;
	  }
	}

	Animate();
	function Animate() {
	  for (let i = 0; i <= total_grass; i++) {
	    grass[i].x -= player.vel_x;
	  }
	  for (let i = 0; i <= total_ground; i++) {
	    ground[i].x -= player.vel_x;
	  }
	  for (let i = 0; i <= total_coins; i++) {
	    coin[i].x -= player.vel_x;
	    coin[i].y += coin[i].vel_y;
	    if (coin[i].vel_y < player.gravity && coin[i].vel_y !== 0) {
	      coin[i].vel_y += player.weight;
	    }
	  }
	  for (let i = 0; i <= total_spikes; i++) {
	    spike[i].x -= player.vel_x;
	  }
	  for (let i = 0; i <= total_clouds_a; i++) {
	    cloud_a[i].x -= player.vel_x * 0.6;
	  }
	  for (let i = 0; i <= total_clouds_b; i++) {
	    cloud_b[i].x -= player.vel_x * 0.8;
	  }
	  for (let i = 0; i <= total_clouds_c; i++) {
	    cloud_c[i].x -= player.vel_x * 0.7;
	  }

	  controls_menu.x -= player.vel_x * 1.5;
	  right_sign.x -= player.vel_x;
	  exit_sign.x -= player.vel_x;
	  door_top.x -= player.vel_x;
	  door_bottom.x -= player.vel_x;

	  player.y += player.vel_y;


	  if (left_pressed) {
	    player.vel_x = -6;
	  }

	  if (right_pressed) {
	    player.vel_x = 6;
	  }

	  if (!left_pressed && !right_pressed && player.vel_y === 0) {
	    player.vel_x = 0;
	  }

	  if (space_pressed && player.vel_y === 0) {
	    player.vel_y = -15;
	  }

	  if (player.vel_y < player.gravity) {
	    player.vel_y += player.weight;
	  }

	  for (let i = 0; i <= total_grass; i++) {
	    if (player.isCollidedWith(grass[i]) && player.y + player.height < grass[i].y + player.vel_y) {
	      player.y = grass[i].y - player.height;
	      player.vel_y = 0;
	    }
	  }

	  for (let i = 0; i <= total_coins; i++) {
	    if (player.isCollidedWith(coin[i])) {
	      coin[i].vel_y += 1;
	    }
	    if (coin[i].y > 500 && coin[i].y < 520) {
	      coin_count += 1;
	    }
	  }
	  if (coin_count === 0) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_0.png";
	  } else if (coin_count === 1) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_1.png";
	  } else if (coin_count === 2) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_2.png";
	  } else if (coin_count === 3) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_3.png";
	  } else if (coin_count === 4) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_4.png";
	  } else if (coin_count === 5) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_5.png";
	  } else if (coin_count === 6) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_6.png";
	  } else if (coin_count === 7) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_7.png";
	  } else if (coin_count === 8) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_8.png";
	  } else if (coin_count === 9) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_0.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_9.png";
	  } else if (coin_count === 10) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_0.png";
	  } else if (coin_count === 11) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_1.png";
	  } else if (coin_count === 12) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_2.png";
	  } else if (coin_count === 13) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_3.png";
	  } else if (coin_count === 14) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_4.png";
	  } else if (coin_count === 15) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_5.png";
	  } else if (coin_count === 16) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_6.png";
	  } else if (coin_count === 17) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_7.png";
	  } else if (coin_count === 18) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_8.png";
	  } else if (coin_count === 19) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_1.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_9.png";
	  } else if (coin_count === 20) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_0.png";
	  } else if (coin_count === 21) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_1.png";
	  } else if (coin_count === 22) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_2.png";
	  } else if (coin_count === 23) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_3.png";
	  } else if (coin_count === 24) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_4.png";
	  } else if (coin_count === 25) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_5.png";
	  } else if (coin_count === 26) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_6.png";
	  } else if (coin_count === 27) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_7.png";
	  } else if (coin_count === 28) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_8.png";
	  } else if (coin_count === 29) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_2.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_9.png";
	  } else if (coin_count === 30) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_0.png";
	  } else if (coin_count === 31) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_1.png";
	  } else if (coin_count === 32) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_2.png";
	  } else if (coin_count === 33) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_3.png";
	  } else if (coin_count === 34) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_4.png";
	  } else if (coin_count === 35) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_5.png";
	  } else if (coin_count === 36) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_6.png";
	  } else if (coin_count === 37) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_7.png";
	  } else if (coin_count === 38) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_8.png";
	  } else if (coin_count === 39) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_3.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_9.png";
	  } else if (coin_count === 40) {
	    coin_menu[2].sprite.src = "docs/HUD/hud_4.png";
	    coin_menu[3].sprite.src = "docs/HUD/hud_0.png";
	  }

	  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
	  for (let i = 0; i <= total_clouds_a; i++) {
	    ctx.drawImage(cloud_a[i].sprite, cloud_a[i].x, cloud_a[i].y);
	  }
	  for (let i = 0; i <= total_clouds_b; i++) {
	    ctx.drawImage(cloud_b[i].sprite, cloud_b[i].x, cloud_b[i].y);
	  }
	  for (let i = 0; i <= total_clouds_c; i++) {
	    ctx.drawImage(cloud_c[i].sprite, cloud_c[i].x, cloud_c[i].y);
	  }
	  ctx.drawImage(controls_menu.sprite, controls_menu.x, controls_menu.y);
	  ctx.drawImage(door_top.sprite, door_top.x, door_top.y);
	  ctx.drawImage(door_bottom.sprite, door_bottom.x, door_bottom.y);
	  ctx.drawImage(right_sign.sprite, right_sign.x, right_sign.y);
	  ctx.drawImage(exit_sign.sprite, exit_sign.x, exit_sign.y);
	  for (let i = 0; i <= total_grass; i++) {
	    ctx.drawImage(grass[i].sprite, grass[i].x, grass[i].y);
	  }
	  for (let i = 0; i <= total_coins; i++) {
	    ctx.drawImage(coin[i].sprite, coin[i].x, coin[i].y);
	  }
	  for (let i = 0; i <= total_ground; i++) {
	    ctx.drawImage(ground[i].sprite, ground[i].x, ground[i].y);
	  }
	  for (let i = 0; i <= total_spikes; i++) {
	    ctx.drawImage(spike[i].sprite, spike[i].x, spike[i].y);
	  }
	  for (let i = 0; i <= 3; i++) {
	    ctx.drawImage(coin_menu[i].sprite, coin_menu[i].x, coin_menu[i].y);
	  }


	  if (player.vel_y === 0 && player.vel_x === 0) {
	    player.sprite.src = "docs/Player/p1_stand.png";
	  } else if (player.vel_y !== 0) {
	    player.sprite.src = "docs/Player/p1_jump.png";
	  } else {
	    player.sprite.src = "docs/Player/p1_walk/PNG/p1_walk04.png";
	  }
	  ctx.drawImage(player.sprite, player.x, player.y);


	  if (player.y > 600) {
	    SweetAlert({
	      title: "You Lost!",
	      text: "Paul fell and died.  \n Would you like to play again?",
	      type: "error",
	      confirmButtonColor: "light-blue",
	      confirmButtonText: "Yes",
	      closeOnConfirm: true },
	      function(){
	        window.location.reload();
	      }
	    );
	  } else if (player.x > 9940) {
	    SweetAlert({
	      title: "You won!",
	      text: "You made it to the end! \n Would you like to play again?",
	      imageUrl: "docs/Player/p1_stand.png",
	      confirmButtonColor: "light-blue",
	      confirmButtonText: "Yes",
	      closeOnConfirm: true },
	      function(){
	        window.location.reload();
	      }
	    );
	  } else {
	    setTimeout(Animate, 1000/60);
	  }
	}

	function Object(img, x, y, width, height) {
	  this.sprite = new Image();
	  this.sprite.src = img;
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.vel_x = 0;
	  this.vel_y = 0;
	  this.gravity = 0;
	  this.weight = 0;


	  this.isCollidedWith = function (obj) {
	    if (this.x > obj.x + obj.width) {
	      return false;
	    } else if (this.x + this.width < obj.x) {
	      return false;
	    } else if (this. y > obj.y + obj.height) {
	      return false;
	    } else if (this.y + this.height < obj.y) {
	      return false;
	    } else {
	      return true;
	    }
	  };
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	// SweetAlert
	// 2014-2015 (c) - Tristan Edwards
	// github.com/t4t5/sweetalert

	/*
	 * jQuery-like functions for manipulating the DOM
	 */

	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(2);

	/*
	 * Handy utilities
	 */

	var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(3);

	/*
	 *  Handle sweetAlert's DOM elements
	 */

	var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(4);

	// Handle button events and keyboard events

	var _handleButton$handleConfirm$handleCancel = __webpack_require__(7);

	var _handleKeyDown = __webpack_require__(8);

	var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

	// Default values

	var _defaultParams = __webpack_require__(5);

	var _defaultParams2 = _interopRequireWildcard(_defaultParams);

	var _setParameters = __webpack_require__(9);

	var _setParameters2 = _interopRequireWildcard(_setParameters);

	/*
	 * Remember state in cases where opening and handling a modal will fiddle with it.
	 * (We also use window.previousActiveElement as a global variable)
	 */
	var previousWindowKeyDown;
	var lastFocusedButton;

	/*
	 * Global sweetAlert function
	 * (this is what the user calls)
	 */
	var sweetAlert, swal;

	exports['default'] = sweetAlert = swal = function () {
	  var customizations = arguments[0];

	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

	  /*
	   * Use argument if defined or default value from params object otherwise.
	   * Supports the case where a default value is boolean true and should be
	   * overridden by a corresponding explicit argument which is boolean false.
	   */
	  function argumentOrDefault(key) {
	    var args = customizations;
	    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
	  }

	  if (customizations === undefined) {
	    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
	    return false;
	  }

	  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

	  switch (typeof customizations) {

	    // Ex: swal("Hello", "Just testing", "info");
	    case 'string':
	      params.title = customizations;
	      params.text = arguments[1] || '';
	      params.type = arguments[2] || '';
	      break;

	    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
	    case 'object':
	      if (customizations.title === undefined) {
	        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
	        return false;
	      }

	      params.title = customizations.title;

	      for (var customName in _defaultParams2['default']) {
	        params[customName] = argumentOrDefault(customName);
	      }

	      // Show "Confirm" instead of "OK" if cancel button is visible
	      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
	      params.confirmButtonText = argumentOrDefault('confirmButtonText');

	      // Callback function when clicking on "OK"/"Cancel"
	      params.doneFunction = arguments[1] || null;

	      break;

	    default:
	      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
	      return false;

	  }

	  _setParameters2['default'](params);
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

	  // Modal interactions
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  /*
	   * Make sure all modal buttons respond to all events
	   */
	  var $buttons = modal.querySelectorAll('button');
	  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
	  var onButtonEvent = function onButtonEvent(e) {
	    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
	  };

	  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
	    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
	      var btnEvt = buttonEvents[evtIndex];
	      $buttons[btnIndex][btnEvt] = onButtonEvent;
	    }
	  }

	  // Clicking outside the modal dismisses it (if allowed by user)
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

	  previousWindowKeyDown = window.onkeydown;

	  var onKeyEvent = function onKeyEvent(e) {
	    return _handleKeyDown2['default'](e, params, modal);
	  };
	  window.onkeydown = onKeyEvent;

	  window.onfocus = function () {
	    // When the user has focused away and focused back from the whole window.
	    setTimeout(function () {
	      // Put in a timeout to jump out of the event sequence.
	      // Calling focus() in the event sequence confuses things.
	      if (lastFocusedButton !== undefined) {
	        lastFocusedButton.focus();
	        lastFocusedButton = undefined;
	      }
	    }, 0);
	  };

	  // Show alert with enabled buttons always
	  swal.enableButtons();
	};

	/*
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
	  if (!userParams) {
	    throw new Error('userParams is required');
	  }
	  if (typeof userParams !== 'object') {
	    throw new Error('userParams has to be a object');
	  }

	  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
	};

	/*
	 * Animation when closing modal
	 */
	sweetAlert.close = swal.close = function () {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

	  /*
	   * Reset icon animations
	   */
	  var $successIcon = modal.querySelector('.sa-icon.sa-success');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

	  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

	  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

	  // Reset custom class (delay so that UI changes aren't visible)
	  setTimeout(function () {
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
	  }, 300);

	  // Make page scrollable again
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

	  // Reset the page to its previous state
	  window.onkeydown = previousWindowKeyDown;
	  if (window.previousActiveElement) {
	    window.previousActiveElement.focus();
	  }
	  lastFocusedButton = undefined;
	  clearTimeout(modal.timeout);

	  return true;
	};

	/*
	 * Validation of the input field is done by user
	 * If something is wrong => call showInputError with errorMessage
	 */
	sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  var $errorIcon = modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

	  var $errorContainer = modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

	  $errorContainer.querySelector('p').innerHTML = errorMessage;

	  setTimeout(function () {
	    sweetAlert.enableButtons();
	  }, 1);

	  modal.querySelector('input').focus();
	};

	/*
	 * Reset input error DOM elements
	 */
	sweetAlert.resetInputError = swal.resetInputError = function (event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }

	  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
	};

	/*
	 * Disable confirm and cancel buttons
	 */
	sweetAlert.disableButtons = swal.disableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = true;
	  $cancelButton.disabled = true;
	};

	/*
	 * Enable confirm and cancel buttons
	 */
	sweetAlert.enableButtons = swal.enableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = false;
	  $cancelButton.disabled = false;
	};

	if (typeof window !== 'undefined') {
	  // The 'handle-click' module requires
	  // that 'sweetAlert' was set as global.
	  window.sweetAlert = window.swal = sweetAlert;
	} else {
	  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
	}
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var hasClass = function hasClass(elem, className) {
	  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	};

	var addClass = function addClass(elem, className) {
	  if (!hasClass(elem, className)) {
	    elem.className += ' ' + className;
	  }
	};

	var removeClass = function removeClass(elem, className) {
	  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	  if (hasClass(elem, className)) {
	    while (newClass.indexOf(' ' + className + ' ') >= 0) {
	      newClass = newClass.replace(' ' + className + ' ', ' ');
	    }
	    elem.className = newClass.replace(/^\s+|\s+$/g, '');
	  }
	};

	var escapeHtml = function escapeHtml(str) {
	  var div = document.createElement('div');
	  div.appendChild(document.createTextNode(str));
	  return div.innerHTML;
	};

	var _show = function _show(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'block';
	};

	var show = function show(elems) {
	  if (elems && !elems.length) {
	    return _show(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _show(elems[i]);
	  }
	};

	var _hide = function _hide(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};

	var hide = function hide(elems) {
	  if (elems && !elems.length) {
	    return _hide(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _hide(elems[i]);
	  }
	};

	var isDescendant = function isDescendant(parent, child) {
	  var node = child.parentNode;
	  while (node !== null) {
	    if (node === parent) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	  return false;
	};

	var getTopMargin = function getTopMargin(elem) {
	  elem.style.left = '-9999px';
	  elem.style.display = 'block';

	  var height = elem.clientHeight,
	      padding;
	  if (typeof getComputedStyle !== 'undefined') {
	    // IE 8
	    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
	  } else {
	    padding = parseInt(elem.currentStyle.padding);
	  }

	  elem.style.left = '';
	  elem.style.display = 'none';
	  return '-' + parseInt((height + padding) / 2) + 'px';
	};

	var fadeIn = function fadeIn(elem, interval) {
	  if (+elem.style.opacity < 1) {
	    interval = interval || 16;
	    elem.style.opacity = 0;
	    elem.style.display = 'block';
	    var last = +new Date();
	    var tick = (function (_tick) {
	      function tick() {
	        return _tick.apply(this, arguments);
	      }

	      tick.toString = function () {
	        return _tick.toString();
	      };

	      return tick;
	    })(function () {
	      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
	      last = +new Date();

	      if (+elem.style.opacity < 1) {
	        setTimeout(tick, interval);
	      }
	    });
	    tick();
	  }
	  elem.style.display = 'block'; //fallback IE8
	};

	var fadeOut = function fadeOut(elem, interval) {
	  interval = interval || 16;
	  elem.style.opacity = 1;
	  var last = +new Date();
	  var tick = (function (_tick2) {
	    function tick() {
	      return _tick2.apply(this, arguments);
	    }

	    tick.toString = function () {
	      return _tick2.toString();
	    };

	    return tick;
	  })(function () {
	    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
	    last = +new Date();

	    if (+elem.style.opacity > 0) {
	      setTimeout(tick, interval);
	    } else {
	      elem.style.display = 'none';
	    }
	  });
	  tick();
	};

	var fireClick = function fireClick(node) {
	  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
	  // Then fixed for today's Chrome browser.
	  if (typeof MouseEvent === 'function') {
	    // Up-to-date approach
	    var mevt = new MouseEvent('click', {
	      view: window,
	      bubbles: false,
	      cancelable: true
	    });
	    node.dispatchEvent(mevt);
	  } else if (document.createEvent) {
	    // Fallback
	    var evt = document.createEvent('MouseEvents');
	    evt.initEvent('click', false, false);
	    node.dispatchEvent(evt);
	  } else if (document.createEventObject) {
	    node.fireEvent('onclick');
	  } else if (typeof node.onclick === 'function') {
	    node.onclick();
	  }
	};

	var stopEventPropagation = function stopEventPropagation(e) {
	  // In particular, make sure the space bar doesn't scroll the main window.
	  if (typeof e.stopPropagation === 'function') {
	    e.stopPropagation();
	    e.preventDefault();
	  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
	    window.event.cancelBubble = true;
	  }
	};

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.escapeHtml = escapeHtml;
	exports._show = _show;
	exports.show = show;
	exports._hide = _hide;
	exports.hide = hide;
	exports.isDescendant = isDescendant;
	exports.getTopMargin = getTopMargin;
	exports.fadeIn = fadeIn;
	exports.fadeOut = fadeOut;
	exports.fireClick = fireClick;
	exports.stopEventPropagation = stopEventPropagation;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/*
	 * Allow user to pass their own params
	 */
	var extend = function extend(a, b) {
	  for (var key in b) {
	    if (b.hasOwnProperty(key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};

	/*
	 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
	 */
	var hexToRgb = function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
	};

	/*
	 * Check if the user is using Internet Explorer 8 (for fallbacks)
	 */
	var isIE8 = function isIE8() {
	  return window.attachEvent && !window.addEventListener;
	};

	/*
	 * IE compatible logging for developers
	 */
	var logStr = function logStr(string) {
	  if (window.console) {
	    // IE...
	    window.console.log('SweetAlert: ' + string);
	  }
	};

	/*
	 * Set hover, active and focus-states for buttons 
	 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
	 */
	var colorLuminance = function colorLuminance(hex, lum) {
	  // Validate hex string
	  hex = String(hex).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	  }
	  lum = lum || 0;

	  // Convert to decimal and change luminosity
	  var rgb = '#';
	  var c;
	  var i;

	  for (i = 0; i < 3; i++) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }

	  return rgb;
	};

	exports.extend = extend;
	exports.hexToRgb = hexToRgb;
	exports.isIE8 = isIE8;
	exports.logStr = logStr;
	exports.colorLuminance = colorLuminance;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _hexToRgb = __webpack_require__(3);

	var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(2);

	var _defaultParams = __webpack_require__(5);

	var _defaultParams2 = _interopRequireWildcard(_defaultParams);

	/*
	 * Add modal + overlay to DOM
	 */

	var _injectedHTML = __webpack_require__(6);

	var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

	var modalClass = '.sweet-alert';
	var overlayClass = '.sweet-overlay';

	var sweetAlertInitialize = function sweetAlertInitialize() {
	  var sweetWrap = document.createElement('div');
	  sweetWrap.innerHTML = _injectedHTML2['default'];

	  // Append elements to body
	  while (sweetWrap.firstChild) {
	    document.body.appendChild(sweetWrap.firstChild);
	  }
	};

	/*
	 * Get DOM element of modal
	 */
	var getModal = (function (_getModal) {
	  function getModal() {
	    return _getModal.apply(this, arguments);
	  }

	  getModal.toString = function () {
	    return _getModal.toString();
	  };

	  return getModal;
	})(function () {
	  var $modal = document.querySelector(modalClass);

	  if (!$modal) {
	    sweetAlertInitialize();
	    $modal = getModal();
	  }

	  return $modal;
	});

	/*
	 * Get DOM element of input (in modal)
	 */
	var getInput = function getInput() {
	  var $modal = getModal();
	  if ($modal) {
	    return $modal.querySelector('input');
	  }
	};

	/*
	 * Get DOM element of overlay
	 */
	var getOverlay = function getOverlay() {
	  return document.querySelector(overlayClass);
	};

	/*
	 * Add box-shadow style to button (depending on its chosen bg-color)
	 */
	var setFocusStyle = function setFocusStyle($button, bgColor) {
	  var rgbColor = _hexToRgb.hexToRgb(bgColor);
	  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
	};

	/*
	 * Animation when opening modal
	 */
	var openModal = function openModal(callback) {
	  var $modal = getModal();
	  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
	  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
	  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

	  window.previousActiveElement = document.activeElement;
	  var $okButton = $modal.querySelector('button.confirm');
	  $okButton.focus();

	  setTimeout(function () {
	    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
	  }, 500);

	  var timer = $modal.getAttribute('data-timer');

	  if (timer !== 'null' && timer !== '') {
	    var timerCallback = callback;
	    $modal.timeout = setTimeout(function () {
	      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
	      if (doneFunctionExists) {
	        timerCallback(null);
	      } else {
	        sweetAlert.close();
	      }
	    }, timer);
	  }
	};

	/*
	 * Reset the styling of the input
	 * (for example if errors have been shown)
	 */
	var resetInput = function resetInput() {
	  var $modal = getModal();
	  var $input = getInput();

	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
	  $input.value = _defaultParams2['default'].inputValue;
	  $input.setAttribute('type', _defaultParams2['default'].inputType);
	  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

	  resetInputError();
	};

	var resetInputError = function resetInputError(event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }

	  var $modal = getModal();

	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
	};

	/*
	 * Set "margin-top"-property on modal based on its computed height
	 */
	var fixVerticalPosition = function fixVerticalPosition() {
	  var $modal = getModal();
	  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
	};

	exports.sweetAlertInitialize = sweetAlertInitialize;
	exports.getModal = getModal;
	exports.getOverlay = getOverlay;
	exports.getInput = getInput;
	exports.setFocusStyle = setFocusStyle;
	exports.openModal = openModal;
	exports.resetInput = resetInput;
	exports.resetInputError = resetInputError;
	exports.fixVerticalPosition = fixVerticalPosition;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaultParams = {
	  title: '',
	  text: '',
	  type: null,
	  allowOutsideClick: false,
	  showConfirmButton: true,
	  showCancelButton: false,
	  closeOnConfirm: true,
	  closeOnCancel: true,
	  confirmButtonText: 'OK',
	  confirmButtonColor: '#8CD4F5',
	  cancelButtonText: 'Cancel',
	  imageUrl: null,
	  imageSize: null,
	  timer: null,
	  customClass: '',
	  html: false,
	  animation: true,
	  allowEscapeKey: true,
	  inputType: 'text',
	  inputPlaceholder: '',
	  inputValue: '',
	  showLoaderOnConfirm: false
	};

	exports['default'] = defaultParams;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var injectedHTML =

	// Dark overlay
	"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

	// Modal
	"<div class=\"sweet-alert\">" +

	// Error icon
	"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

	// Warning icon
	"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

	// Info icon
	"<div class=\"sa-icon sa-info\"></div>" +

	// Success icon
	"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

	// Title, text and input
	"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

	// Input errors
	"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

	// Cancel and confirm buttons
	"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

	// Loading animation
	"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

	// End of modal
	"</div>";

	exports["default"] = injectedHTML;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _colorLuminance = __webpack_require__(3);

	var _getModal = __webpack_require__(4);

	var _hasClass$isDescendant = __webpack_require__(2);

	/*
	 * User clicked on "Confirm"/"OK" or "Cancel"
	 */
	var handleButton = function handleButton(event, params, modal) {
	  var e = event || window.event;
	  var target = e.target || e.srcElement;

	  var targetedConfirm = target.className.indexOf('confirm') !== -1;
	  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
	  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
	  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

	  // Since the user can change the background-color of the confirm button programmatically,
	  // we must calculate what the color should be on hover/active
	  var normalColor, hoverColor, activeColor;
	  if (targetedConfirm && params.confirmButtonColor) {
	    normalColor = params.confirmButtonColor;
	    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
	    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
	  }

	  function shouldSetConfirmButtonColor(color) {
	    if (targetedConfirm && params.confirmButtonColor) {
	      target.style.backgroundColor = color;
	    }
	  }

	  switch (e.type) {
	    case 'mouseover':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;

	    case 'mouseout':
	      shouldSetConfirmButtonColor(normalColor);
	      break;

	    case 'mousedown':
	      shouldSetConfirmButtonColor(activeColor);
	      break;

	    case 'mouseup':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;

	    case 'focus':
	      var $confirmButton = modal.querySelector('button.confirm');
	      var $cancelButton = modal.querySelector('button.cancel');

	      if (targetedConfirm) {
	        $cancelButton.style.boxShadow = 'none';
	      } else {
	        $confirmButton.style.boxShadow = 'none';
	      }
	      break;

	    case 'click':
	      var clickedOnModal = modal === target;
	      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

	      // Ignore click outside if allowOutsideClick is false
	      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
	        break;
	      }

	      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
	        handleConfirm(modal, params);
	      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
	        handleCancel(modal, params);
	      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
	        sweetAlert.close();
	      }
	      break;
	  }
	};

	/*
	 *  User clicked on "Confirm"/"OK"
	 */
	var handleConfirm = function handleConfirm(modal, params) {
	  var callbackValue = true;

	  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
	    callbackValue = modal.querySelector('input').value;

	    if (!callbackValue) {
	      callbackValue = '';
	    }
	  }

	  params.doneFunction(callbackValue);

	  if (params.closeOnConfirm) {
	    sweetAlert.close();
	  }
	  // Disable cancel and confirm button if the parameter is true
	  if (params.showLoaderOnConfirm) {
	    sweetAlert.disableButtons();
	  }
	};

	/*
	 *  User clicked on "Cancel"
	 */
	var handleCancel = function handleCancel(modal, params) {
	  // Check if callback function expects a parameter (to track cancel actions)
	  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
	  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

	  if (functionHandlesCancel) {
	    params.doneFunction(false);
	  }

	  if (params.closeOnCancel) {
	    sweetAlert.close();
	  }
	};

	exports['default'] = {
	  handleButton: handleButton,
	  handleConfirm: handleConfirm,
	  handleCancel: handleCancel
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _stopEventPropagation$fireClick = __webpack_require__(2);

	var _setFocusStyle = __webpack_require__(4);

	var handleKeyDown = function handleKeyDown(event, params, modal) {
	  var e = event || window.event;
	  var keyCode = e.keyCode || e.which;

	  var $okButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  var $modalButtons = modal.querySelectorAll('button[tabindex]');

	  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
	    // Don't do work on keys we don't care about.
	    return;
	  }

	  var $targetElement = e.target || e.srcElement;

	  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	  for (var i = 0; i < $modalButtons.length; i++) {
	    if ($targetElement === $modalButtons[i]) {
	      btnIndex = i;
	      break;
	    }
	  }

	  if (keyCode === 9) {
	    // TAB
	    if (btnIndex === -1) {
	      // No button focused. Jump to the confirm button.
	      $targetElement = $okButton;
	    } else {
	      // Cycle to the next button
	      if (btnIndex === $modalButtons.length - 1) {
	        $targetElement = $modalButtons[0];
	      } else {
	        $targetElement = $modalButtons[btnIndex + 1];
	      }
	    }

	    _stopEventPropagation$fireClick.stopEventPropagation(e);
	    $targetElement.focus();

	    if (params.confirmButtonColor) {
	      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
	    }
	  } else {
	    if (keyCode === 13) {
	      if ($targetElement.tagName === 'INPUT') {
	        $targetElement = $okButton;
	        $okButton.focus();
	      }

	      if (btnIndex === -1) {
	        // ENTER/SPACE clicked outside of a button.
	        $targetElement = $okButton;
	      } else {
	        // Do nothing - let the browser handle it.
	        $targetElement = undefined;
	      }
	    } else if (keyCode === 27 && params.allowEscapeKey === true) {
	      $targetElement = $cancelButton;
	      _stopEventPropagation$fireClick.fireClick($targetElement, e);
	    } else {
	      // Fallback - let the browser handle it.
	      $targetElement = undefined;
	    }
	  }
	};

	exports['default'] = handleKeyDown;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _isIE8 = __webpack_require__(3);

	var _getModal$getInput$setFocusStyle = __webpack_require__(4);

	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(2);

	var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

	/*
	 * Set type, text and actions on modal
	 */
	var setParameters = function setParameters(params) {
	  var modal = _getModal$getInput$setFocusStyle.getModal();

	  var $title = modal.querySelector('h2');
	  var $text = modal.querySelector('p');
	  var $cancelBtn = modal.querySelector('button.cancel');
	  var $confirmBtn = modal.querySelector('button.confirm');

	  /*
	   * Title
	   */
	  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

	  /*
	   * Text
	   */
	  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
	  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

	  /*
	   * Custom class
	   */
	  if (params.customClass) {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
	    modal.setAttribute('data-custom-class', params.customClass);
	  } else {
	    // Find previously set classes and remove them
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
	    modal.setAttribute('data-custom-class', '');
	  }

	  /*
	   * Icon
	   */
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

	  if (params.type && !_isIE8.isIE8()) {
	    var _ret = (function () {

	      var validType = false;

	      for (var i = 0; i < alertTypes.length; i++) {
	        if (params.type === alertTypes[i]) {
	          validType = true;
	          break;
	        }
	      }

	      if (!validType) {
	        logStr('Unknown alert type: ' + params.type);
	        return {
	          v: false
	        };
	      }

	      var typesWithIcons = ['success', 'error', 'warning', 'info'];
	      var $icon = undefined;

	      if (typesWithIcons.indexOf(params.type) !== -1) {
	        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
	        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
	      }

	      var $input = _getModal$getInput$setFocusStyle.getInput();

	      // Animate icon
	      switch (params.type) {

	        case 'success':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
	          break;

	        case 'error':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
	          break;

	        case 'warning':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
	          break;

	        case 'input':
	        case 'prompt':
	          $input.setAttribute('type', params.inputType);
	          $input.value = params.inputValue;
	          $input.setAttribute('placeholder', params.inputPlaceholder);
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
	          setTimeout(function () {
	            $input.focus();
	            $input.addEventListener('keyup', swal.resetInputError);
	          }, 400);
	          break;
	      }
	    })();

	    if (typeof _ret === 'object') {
	      return _ret.v;
	    }
	  }

	  /*
	   * Custom image
	   */
	  if (params.imageUrl) {
	    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

	    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

	    var _imgWidth = 80;
	    var _imgHeight = 80;

	    if (params.imageSize) {
	      var dimensions = params.imageSize.toString().split('x');
	      var imgWidth = dimensions[0];
	      var imgHeight = dimensions[1];

	      if (!imgWidth || !imgHeight) {
	        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
	      } else {
	        _imgWidth = imgWidth;
	        _imgHeight = imgHeight;
	      }
	    }

	    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
	  }

	  /*
	   * Show cancel button?
	   */
	  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
	  if (params.showCancelButton) {
	    $cancelBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
	  }

	  /*
	   * Show confirm button?
	   */
	  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
	  if (params.showConfirmButton) {
	    $confirmBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
	  }

	  /*
	   * Custom text on cancel/confirm buttons
	   */
	  if (params.cancelButtonText) {
	    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
	  }
	  if (params.confirmButtonText) {
	    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
	  }

	  /*
	   * Custom color on confirm button
	   */
	  if (params.confirmButtonColor) {
	    // Set confirm button to selected background color
	    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

	    // Set the confirm button color to the loading ring
	    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
	    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

	    // Set box-shadow to default focused button
	    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
	  }

	  /*
	   * Allow outside click
	   */
	  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

	  /*
	   * Callback function
	   */
	  var hasDoneFunction = params.doneFunction ? true : false;
	  modal.setAttribute('data-has-done-function', hasDoneFunction);

	  /*
	   * Animation
	   */
	  if (!params.animation) {
	    modal.setAttribute('data-animation', 'none');
	  } else if (typeof params.animation === 'string') {
	    modal.setAttribute('data-animation', params.animation); // Custom animation
	  } else {
	    modal.setAttribute('data-animation', 'pop');
	  }

	  /*
	   * Timer
	   */
	  modal.setAttribute('data-timer', params.timer);
	};

	exports['default'] = setParameters;
	module.exports = exports['default'];

/***/ }
/******/ ]);