/* eslint no-magic-numbers: 0 */
app.scenery = function(){
  var roads = new Image();

  function init(){
    
    roads.src = 'roadH.png';
    // drawRoadT(-108, 300);
    drawRoadT(-300 + (32) + 32*0 , 300 - 32 + 32*2);
    drawRoadT(-300 + (32) + 32*1 , 300 - 32 + 32*2);
    drawRoadT(-300 + (32) + 32*2 , 300 - 32 + 32*2);
    drawRoadT(-300 + (32) + 32*3 , 300 - 32 + 32*2);
  }

  function drawRoadT(carX, carY) {
    
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    //.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    app.ctx.drawImage(roads, isoX, isoY);
  }

  init();
};