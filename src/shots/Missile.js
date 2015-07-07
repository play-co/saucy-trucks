import scene.actor.Actor as Actor;

//import .TruckView;

exports = Class(Actor, function(supr) {
//  this.viewClass = TruckView;

  this.init = function(opts) {
    supr(this, 'init', [opts]);
  };

});
