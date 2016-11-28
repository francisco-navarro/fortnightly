/* eslint no-magic-numbers: 0 */
app.map = function(height, width) {
  'use strict';
  var SQUARE_SIZE = 64;
  var _60 = Math.PI / 3;
  var _30 = Math.PI / 6;
  //Calculamos la altura segun teorema del seno
  var SQUARE_HEIGHT = 16;//Math.sin(_30) * (SQUARE_SIZE / 2) / Math.sin(_60);

  function createMap(n, m) {
    //Create a map of n*m positions
    var offsetX = 280,
      offsetY = SQUARE_SIZE;
    
    app.ctx.iLineTo = function() {
      isoX = carX + carY;
      isoY = carY - carX / 2.0;

      carX = (isoX - isoY) / 1.5;
      carY = isoX / 3.0 + isoY / 1.5;
    };

    for(var i = 0; i < n; i++) {
      for(var j = 0; j < m; j++) {
        //http://gamedev.stackexchange.com/questions/34787/how-to-convert-mouse-coordinates-to-isometric-indexes
        var x = i * SQUARE_SIZE/2 - j * SQUARE_SIZE/2 + offsetX;
        var y = i * SQUARE_HEIGHT + j * SQUARE_HEIGHT + offsetY;
        mesh(x, y);
        // mesh2(100 + i * SQUARE_SIZE, 100 + j * SQUARE_SIZE);
        //http://www.alcove-games.com/advanced-tutorials/isometric-tile-picking/
      }
    }
  }

  function mesh2(x, y){
    app.ctx.moveTo(x, y);
    app.ctx.beginPath();
    app.ctx.lineTo(x + SQUARE_SIZE, y);
    app.ctx.lineTo(x + SQUARE_SIZE, y + SQUARE_SIZE);
    app.ctx.lineTo(x, y + SQUARE_SIZE);
    app.ctx.lineTo(x, y);
    app.ctx.strokeStyle = '#19343A';
    app.ctx.stroke();
  }

  function mesh(x, y) {
    var B = [x + SQUARE_SIZE / 2, y + SQUARE_HEIGHT];
    var C = [x + SQUARE_SIZE, y];
    var D = [x + SQUARE_SIZE / 2, y - SQUARE_HEIGHT];

    app.ctx.moveTo(x, y);
    app.ctx.beginPath();
    app.ctx.lineTo.apply(app.ctx, B);
    app.ctx.lineTo.apply(app.ctx, C);
    app.ctx.lineTo.apply(app.ctx, D);
    app.ctx.lineTo(x, y);
    app.ctx.closePath();
    app.ctx.strokeStyle = '#09330A';
    app.ctx.stroke();
    //app.ctx.fillStyle = 'rgba(161, 212, 144, 0.8)';
    //app.ctx.fill();
  }

  createMap(height, width);
  app.SQUARE_HEIGHT = SQUARE_HEIGHT;
  app.SQUARE_SIZE = SQUARE_SIZE;
};