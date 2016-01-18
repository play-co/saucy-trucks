import .TruckView;

import ui.ImageView as ImageView;

exports = Class(TruckView, function(supr) {
  this.init = function(opts) {
    supr(this, 'init', [opts]);

    var bs = this.baseTruck.style;
    this.launcher = new ImageView({
      superview: this,
      x: 38 + bs.offsetX,
      y: 15 + bs.offsetY,
    });
  };

  this.reset = function(opts) {
    supr(this, 'reset', [opts]);

    var launcherConfigName = this.team === 0 ? 'bananaLauncher' : 'hotdogLauncher';
    var launcherConfig = scene.getConfig(launcherConfigName);
    this.launcher.updateOpts(launcherConfig);
    this.updateLauncherImage();
  };

  this.updateLauncherImage = function() {
    var imageUrl = 'resources/images/';
    imageUrl += this.team === 0 ? 'banana' : 'hotdog';
    imageUrl += '_';
    imageUrl += this.state === 0 ? '0' : '1';
    imageUrl += '.png';
    this.launcher.setImage(imageUrl);
  };

  this.setAim = function(angle) {
    supr(this, 'setAim', [angle]);
    scene.animate(this.launcher, 'aim')
      .then({ r: this.aim - Math.PI / 2 }, 400);
  };

  this.setState = function(newState) {
    if (supr(this, 'setState', [newState])) {
      this.updateLauncherImage();
      return true;
    }
    return false;
  };

  this.getExit = function() {
    var bs = this.launcher.style;
    var radius = 0;
    return {
      x: bs.x + Math.cos(this.aim) * radius,
      y: bs.y - Math.sin(this.aim + Math.PI / 2) * radius
    };
  };
});
