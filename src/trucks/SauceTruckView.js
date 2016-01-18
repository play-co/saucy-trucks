import .TruckView;

import ui.ImageView as ImageView;

var HALF_PI = Math.PI / 2;

exports = Class(TruckView, function(supr) {
  this.init = function(opts) {
    supr(this, 'init', [opts]);

    var bs = this.baseTruck.style;

    var bottleConfig = scene.getConfig('sauceBottle', 'ImageView');
    bottleConfig.superview = this;
    bottleConfig.x = 38 + bs.offsetX;
    bottleConfig.y = 15 + bs.offsetY;
    this.bottle = new ImageView(bottleConfig);
  };

  this.reset = function(opts) {
    supr(this, 'reset', [opts]);

    this.bottle.setImage('resources/images/bottle_' + this.team + '.png');
  };

  this.setAim = function(angle) {
    supr(this, 'setAim', [angle]);
    scene.animate(this.bottle, 'aim')
      .then({ r: this.aim }, 400);
  };

  this.setState = function(newState) {
    if (supr(this, 'setState', [newState])) {
//      this.updateLauncherImage();
      return true;
    }
    return false;
  };

  this.getExit = function() {
    var bs = this.bottle.style;
    var radius = bs.anchorY;
    var aim = this.aim;
    return {
      x: bs.x + Math.cos(aim) * radius,
      y: bs.y - Math.sin(aim + HALF_PI) * radius
    };
  };
});
