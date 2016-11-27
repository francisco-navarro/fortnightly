/* eslint no-magic-numbers: 0 */

var draw = function() {
  'use strict';
  var canvas = document.getElementById('draw');
  var ctx;

  if (canvas.getContext){
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect(10, 10, 55, 50);
    ctx.clearRect(20, 20, 20, 20);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 55, 50);
  } else {
    console.warn('canvas not supported');
  }
};