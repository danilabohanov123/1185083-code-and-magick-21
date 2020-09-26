"use strict";

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

const renderRect = (ctx, x, y, width, height, color = `#ffffff`) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);

};

const printText = (ctx, str, x, y, color = `#000000`, font = `16px PT Mono`) => {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(str, x, y);
};

const renderPlayerResult = (ctx, x, y, score, player) => {
  ctx.fillText(player);

};

window.renderStatistics = (ctx, names, times) => {
  renderRect(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  for (let i = 0; i < messageRows.length; i++) {
    printText(ctx, messageRows[i], MASSAGE_X, MASSAGE_Y + i * MASSAGE_ROW_GAP);
  }
  const maxTime = times.max();
  for (let i = 0; i < names.length; i++) {
    renderPlayerResult(ctx,  )
  }
};
