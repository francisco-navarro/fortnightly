var app = {
  draw: function() {
    'use strict';
    var canvas = document.getElementById('map');

    if (canvas.getContext) {
      app.ctx = canvas.getContext('2d');
      app.map(10, 10);
    } else {
      console.warn('canvas not compatible');
    }
  }
};