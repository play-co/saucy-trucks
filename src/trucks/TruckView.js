import communityart;
import entities.EntityView as EntityView;

import ui.SpriteView as SpriteView;
import ui.ImageView as ImageView;

exports = Class(EntityView, function(supr) {
  this.STATES = {
    IDLE: 0,
    EMPTY: 1
  };

  this.init = function(opts) {
//    opts.width = 140;
//    opts.height = 100;
    opts.offsetX = -70;
    opts.offsetY = -100

    supr(this, 'init', [opts]);

    this.team = null;
    this.teamColor = null;

    var truckConfig = communityart('truck', 'ImageView');
    truckConfig.superview = this;
    this.baseTruck = new ImageView(truckConfig);
  };

  this.reset = function(opts) {
    supr(this, 'reset', [opts]);

    this.team = opts.team;
    this.teamColor = this.team === 0 ? 'green' : 'red';

    this.baseTruck.setImage('resources/images/truck_' + this.teamColor + '_0.png');

    //
    this.aim = 0;
    this.state = 0;
  };

  this.setAim = function(angle) {
    this.aim = angle * DEG_TO_RAD;
  };

  this.setState = function(newState) {
    if (this.state === newState) { return false; }
    this.state = newState;
    return true;
  };

  this.getExit = function() {
    return {
      x: 0,
      y: 0
    };
  };
});