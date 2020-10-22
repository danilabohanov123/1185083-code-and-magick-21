`use strict`;

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_COLOR = `#ffffff`;
const SHADOW_SHIFT = 10;
const SHADOW_COLOR = `rgba(0, 0, 0, 0.7)`;
const MASSAGE_X = 110;
const MASSAGE_Y = 30;
const MASSAGE_ROW_GAP = 20;
const messageRows = [`Ура вы победили!`, `Список результатов:`];
const COLUMN_WIDTH = 40;
const MAX_HEIGHT = 150;
const GAP = 20;
const COLUMN_GAP = 50;
const PLAYER_FONT = 16;
const COLOR_MAIN_PLAYER = `#ff0000`;
const START_Y = 265;
const BASIC_FONT = `#000000`;
const BASIC_BACKGROUND = `#ffffff`;
const RES_Y = 75;
let maxTime;

const randomInteger = (l, r) => {
  return parseInt(Math.random() * (r - l) + l, 10);
};

const renderRect = (ctx, x, y, width, height, color = BASIC_BACKGROUND) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);

};

const printText = (ctx, str, x, y, color = BASIC_FONT, font = `16px PT Mono`) => {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(str, x, y);
};

const renderPlayerResult = (ctx, x, y, tm, player) => {
  ctx.font = String(PLAYER_FONT) + `px PT Mono`;
  ctx.fillStyle = BASIC_FONT;
  ctx.fillText(player, x, y - PLAYER_FONT);
  const columnHeight = parseInt(MAX_HEIGHT / maxTime * tm, 10);
  if (player === `Вы`) {
    renderRect(ctx, x, y - PLAYER_FONT - GAP - columnHeight, COLUMN_WIDTH, columnHeight, COLOR_MAIN_PLAYER);
  } else {
    const playerSaturation = randomInteger(0, 100);
    renderRect(ctx, x, y - PLAYER_FONT - GAP - columnHeight, COLUMN_WIDTH, columnHeight, `hsl(240, ` + String(playerSaturation) + `%, 50%)`);
  }
  ctx.fillStyle = BASIC_FONT;
  ctx.fillText(parseInt(tm, 10), x, RES_Y);
};

window.renderStatistics = (ctx, names, times) => {
  renderRect(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  for (let i = 0; i < messageRows.length; i++) {
    printText(ctx, messageRows[i], MASSAGE_X, MASSAGE_Y + i * MASSAGE_ROW_GAP);
  }
  maxTime = Math.max.apply(null, times);
  for (let i = 0; i < names.length; i++) {
    renderPlayerResult(ctx, GAP + CLOUD_X + i * (COLUMN_GAP + COLUMN_WIDTH), CLOUD_Y + START_Y, times[i], names[i]);
  }
};
