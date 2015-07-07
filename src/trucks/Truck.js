import scene.actor.Actor as Actor;

import .TruckView;

exports = Class(Actor, function(supr) {
  this.viewClass = TruckView;

  this.init = function(opts) {
    supr(this, 'init', [opts]);
  };

  this.reset = function(opts) {
    supr(this, 'reset', [opts]);
    this.team = opts.team;
    this.cooldown = 0;
    this.cooldownTime = 0.500;
  };

  this.setAim = function(angle) {
    this.view.setAim(angle);
  };

  this.shoot = function() {
    if (this.cooldown <= 0) {
      this.cooldown = this.cooldownTime;
      this.createShot();
      this.view.setState(1);
    }
  };

  this.update = function(dt) {
    supr(this, 'update', [dt]);
    if (this.cooldown > 0) {
      this.cooldown -= dt;
      if (this.cooldown <= 0) {
        this.view.setState(0);
      }
    }
  };

  this.getExit = function() {
    var pos = this.view.getExit();
    if (this.team === 1) {
      pos.x *= -1;
    }

    pos.x += this.x;
    pos.y += this.y;
    return pos;
  };
});
