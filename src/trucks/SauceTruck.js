import communityart;
import .Truck;
import .SauceTruckView;

exports = Class(Truck, function(supr) {
  this.viewClass = SauceTruckView;

  this.createShot = function() {
    var exitPoint = this.getExit();
    var sauceConfig = communityart('sauce');
    sauceConfig.x = exitPoint.x;
    sauceConfig.y = exitPoint.y;
    sauceConfig.vy = -600;
    sauceConfig.ay = 400;
    sauceConfig.vx = 500;
    sauceConfig.faceForward = { offset: -Math.PI / 2 };

    if (this.team === 0) {
      sauceConfig.viewOpts.url = 'resources/images/sauce_green_0.png';
    } else {
      sauceConfig.viewOpts.url = 'resources/images/sauce_red_0.png';
      sauceConfig.vx *= -1;
    }

    var sauce = scene.addActor(sauceConfig);

    sauce.onEntered(scene.camera.bottomWall, function() {
      sauce.destroy();
    });

    return sauce;
  };
});