import scene;
import communityart;

import .Truck;
import .MissileTruckView;

import src.shots.Missile as Missile;

exports = Class(Truck, function(supr) {
  this.viewClass = MissileTruckView;

  this.createShot = function() {
    var exitPoint = this.getExit();
    var shotConfig = communityart(this.team === 0 ? 'banana' : 'hotdog');
    shotConfig.x = exitPoint.x;
    shotConfig.y = exitPoint.y;
    shotConfig.vy = -600;
    shotConfig.ay = 400;
    shotConfig.vx = 500;
    shotConfig.faceForward = { offset: -Math.PI / 2 };
    var shot = scene.addCustomActor(Missile, shotConfig);

    if (this.team === 0) {
    } else {
      shot.vx *= -1;
    }

    shot.onEntered(scene.camera.bottomWall, function() {
      shot.destroy();
    });

    return shot;
  };
});