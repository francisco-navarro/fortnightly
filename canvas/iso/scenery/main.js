/* eslint no-magic-numbers: 0 */
app.scenery = {
  init: function(){
    var size;

    function init(){
      size = app.conf.SQUARE_SIZE;
      app.scenery.drawTile = drawTile;
      app.scenery.roads();
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
  }
};