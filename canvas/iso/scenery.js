/* eslint no-magic-numbers: 0 */
app.scenery = function(){
  var roadX = new Image();
  var roadY = new Image();
  var curve1 = new Image();
  var curve2 = new Image();
  var curve3 = new Image();
  var curve4 = new Image();
  var size;

  function init(){
    roadX.src = 'roadX.png';
    roadY.src = 'roadY.png';
    curve1.src = 'curve1.png';
    curve2.src = 'curve2.png';
    curve3.src = 'curve3.png';
    curve4.src = 'curve4.png';

    size = app.conf.SQUARE_SIZE;
    drawTile(roadX, 0, 2);
    drawTile(roadX, 1, 2);
    drawTile(roadX, 2, 2);
    drawTile(roadX, 3, 2);
    drawTile(roadX, 4, 2);
    drawTile(roadX, 4, 6);

    drawTile(curve2, 5, 2);
    drawTile(curve4, 5, 6);

    drawTile(roadY, 5, 3);
    drawTile(roadY, 5, 4);
    drawTile(roadY, 5, 5);
  }

  function drawTile(image, x, y) {
    //Cartesian coords
    var carX = app.conf.offsetX + (size) + size * x;
    var carY = app.conf.offsetY - size + size * y;
    //Isometric coords
    var isoX = carX + carY;
    var isoY = (carY - carX) / 2.0;

    app.ctx.drawImage(image, isoX, isoY);
  }

  init();
};