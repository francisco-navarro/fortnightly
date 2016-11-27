/* eslint no-magic-numbers: 0 */
var draw = function() {
  'use strict';
  var SQUARE_SIZE = 50;
  var _60 = Math.PI / 3;
  var _30 = Math.PI / 6;
  //Calculamos la altura segun teorema del seno
  var SQUARE_HEIGHT = Math.sin(_30) * (SQUARE_SIZE / 2) / Math.sin(_60);

  var canvas = document.getElementById('map');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    createMap(10, 10);
  } else {
    console.warn('canvas not compatible');
  }

  function createMap(n, m) {
    //Create a map of n*m positions
    var offsetX = 250,
      offsetY = SQUARE_SIZE;

    for(var i = 0; i < n; i++) {
      for(var j = 0; j < m; j++) {
        //http://gamedev.stackexchange.com/questions/34787/how-to-convert-mouse-coordinates-to-isometric-indexes
        var x = i * SQUARE_SIZE/2 - j * SQUARE_SIZE/2 + offsetX;
        var y = i * SQUARE_HEIGHT + j * SQUARE_HEIGHT + offsetY;
        land(x, y);
      }
    }
  }

  function land(x, y) {
    var B = [x + SQUARE_SIZE / 2, y + SQUARE_HEIGHT];
    var C = [x + SQUARE_SIZE, y];
    var D = [x + SQUARE_SIZE / 2, y - SQUARE_HEIGHT];

    ctx.moveTo(x, y);
    ctx.beginPath();
    ctx.lineTo.apply(ctx, B);
    ctx.lineTo.apply(ctx, C);
    ctx.lineTo.apply(ctx, D);
    ctx.lineTo(x, y);
    ctx.fillStyle = 'rgba(161, 212, 144, 0.8)';
    ctx.closePath();
    ctx.strokeStyle = '#09330A';
    ctx.stroke();
    ctx.fill();
  }
};