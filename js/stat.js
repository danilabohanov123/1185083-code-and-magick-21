"use strict";

const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_COLOR = `#ffffff`;
const SHADOW_SHIFT = 10;
const SHADOW_COLOR = `rgba(0, 0, 0, 0.7)`;

const renderRect = (ctx, x, y, width, height, color = `#000000`) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);

};

window.renderStatistics = (ctx, names, times) => {
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  renderRect(ctx, CLOUD_X + SHADOW_SHIFT, CLOUD_Y + SHADOW_SHIFT, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);

};
