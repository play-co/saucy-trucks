import scene;
import communityart;
//import effects;

import .trucks.SauceTruck as SauceTruck;
import .trucks.MissileTruck as MissileTruck;

import .shots.Missile as Missile;

exports = scene(function(gameData) {

  var groundY = scene.screen.height - 20;

  var shootFrom = function(truck) {
    console.log('Shot from: ', truck.team, truck.x, truck.y);
    truck.shoot();
  };

  /**
   * @param {int} team - 0 for friendly, 1 for foe
   */
  var addTruck = function(team, ctor) {
    var truckConfig = merge(communityart('truck'), {
      team: team,
      y: groundY
    });
    var truck = scene.conglomorate(ctor, truckConfig);

    truck.setAim(45);

    if (team === 0) {
      // PLAYER
      truck.play('green');

      truck.x = scene.camera.left + 100;

      truck.onTouch(function() {
        shootFrom(truck);
      });
    } else {
      // BADDIE
      truck.play('red');
      truck.flipX = true;

      truck.x = scene.camera.right - 100;

      truck.onTouch(function() {
        shootFrom(truck);
      });
    }

    return truck;
  };

  addTruck(0, MissileTruck);
  addTruck(1, SauceTruck);

});
