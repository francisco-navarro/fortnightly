var app = {
  draw: function() {
    'use strict';
    var canvas = document.getElementById('map');

    if (canvas.getContext) {
      app.ctx = canvas.getContext('2d');
      app.ctx.font= '8px Georgia';

      app.ctx.iLineTo = function(carX, carY) {
        var isoX = carX + carY;
        var isoY = (carY - carX) / 2.0;

        app.ctx.lineTo(isoX, isoY);
      };

      app.ctx.iMoveTo = function(carX, carY) {
        var isoX = carX + carY;
        var isoY = (carY - carX) / 2.0;
        app.ctx.moveTo(isoX, isoY);
      };

      app.map(9, 9);
      app.scenery();
    } else {
      console.warn('canvas not compatible');
    }
  }
};

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}