import scene;
//import effects;

exports = scene(function() {

  var groundY = scene.screen.height - 20;

  var shootFrom = function(truck) {
    console.log('Shot from: ', truck.team, truck.x, truck.y);
    var sauce = scene.addActor('sauce', {
      x: truck.x,
      y: truck.y,
      vy: -600,
      ay: 400,
      vx: 500
    });

    if (truck.team === 0) {
      sauce.play('green');
    } else {
      sauce.play('red');
      sauce.vx *= -1;
    }

    sauce.onEntered(scene.camera.bottomWall, function() {
      sauce.destroy();
    });

    sauce.onTick(function() {
      sauce.rotateAt(sauce.x + sauce.vx, sauce.y + sauce.vy, -Math.PI / 2);
    });

    return sauce;
  };

  /**
   * @param {int} team - 0 for friendly, 1 for foe
   */
  var addTruck = function(team) {
    var truck = scene.addActor('truck', { y: groundY });
    truck.team = team;

    if (team === 0) {
      // PLAYER
      truck.play('green');

      truck.x = scene.camera.left;

      truck.onTouch(function() {
        shootFrom(truck);
      });
    } else {
      // BADDIE
      truck.play('red');
      truck.flipX = true;

      truck.x = scene.camera.right;
    }

    return truck;
  };

  addTruck(0);
  addTruck(1);

});
