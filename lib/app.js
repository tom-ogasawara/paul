// const SweetAlert = require('sweetalert');

const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");
const player = new Object("docs/Player/p1_stand.png", 400, 100, 66, 92);
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
    // SweetAlert({
    //   title: "You Lost!",
    //   text: "Paul fell and died.  \n Would you like to play again?",
    //   type: "error",
    //   confirmButtonColor: "light-blue",
    //   confirmButtonText: "Yes",
    //   closeOnConfirm: true },
    //   function(){
    //     window.location.reload();
    //   }
    // );
    alert("You lost! Paul fell and died.");
    window.location.reload();
  } else if (player.x > 9940) {
    // SweetAlert({
    //   title: "You won!",
    //   text: "You made it to the end! \n Would you like to play again?",
    //   imageUrl: "docs/Player/p1_stand.png",
    //   confirmButtonColor: "light-blue",
    //   confirmButtonText: "Yes",
    //   closeOnConfirm: true },
    //   function(){
    //     window.location.reload();
    //   }
    // );
    alert("You won! Paul made it home");


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
