import scene;
import .artConfig;
//import effects;

import .trucks.SauceTruck as SauceTruck;
import .trucks.MissileTruck as MissileTruck;

import .shots.Missile as Missile;

import .setupUI;

exports = scene(function(gameData) {

  var groundY = scene.screen.height - 20;

  /**
   * @param {int} team - 0 for friendly, 1 for foe
   */
  var addTruck = function(team, ctor) {
    var truckConfig = merge(scene.getConfig('truck'), {
      team: team,
      y: groundY
    });
    var truck = scene.addCustomActor(ctor, truckConfig);

    truck.setAim(45);

    if (team === 0) {
      // PLAYER
      truck.play('green');

      truck.x = scene.camera.left + 100 + 200;

      truck.onTouch(function() {
        truck.shoot();
      });
    } else {
      // BADDIE
      truck.play('red');
      truck.flipX = true;

      truck.x = scene.camera.right - 100;

      truck.onTouch(function() {
        truck.shoot();
      });
    }

    return truck;
  };

  addTruck(0, MissileTruck);
  addTruck(1, SauceTruck);

  setupUI.game();

});
