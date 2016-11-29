/* eslint no-magic-numbers: 0 */
app.scenery = function(){
  var roads = new Image();
  var size;

  function init(){
    roads.src = 'roadH.png';
    size = app.conf.SQUARE_SIZE;
    drawRoadT(0, 2);
    drawRoadT(1, 2);
    drawRoadT(2, 2);
    drawRoadT(3, 2);
  }

  function drawRoadT(x, y) {
    //Cartesian coords
    var carX = app.conf.offsetX + (size) + size * x;
    var carY = app.conf.offsetY - size + size * y;
    //Isometric coords
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    app.ctx.drawImage(roads, isoX, isoY);
  }

  init();
};