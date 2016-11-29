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

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fillStyle = 'rgba(161, 212, 144, 0.5)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();
    //Triangle stroke
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  } else {
    console.warn('canvas not supported');
  }
};