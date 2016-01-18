import scene.ui.ButtonView as ButtonView;
import scene.ui.RadioGroup as RadioGroup;

import src.trucks.SauceTruck as SauceTruck;
import src.trucks.MissileTruck as MissileTruck;

exports = {
  game: function() {
    // Set up the game UI
    this.unitSelectGroup = new RadioGroup({
      radio: true
    });
    this.laneSelectGroup = new RadioGroup({
      radio: true
    });

    // TRUCK BUTTONS
    var truck = new SauceTruck(scene.getConfig('truck'));
    truck.reset({ team: 0 });
    var btn = this._makeTruckButton({
      truck: truck,
      x: 50,
      y: 50
    });
    this.unitSelectGroup.addButton(btn);
    btn.setPressed(true);

    truck = new MissileTruck(scene.getConfig('truck'));
    truck.reset({ team: 0 });
    this.unitSelectGroup.addButton(this._makeTruckButton({
      truck: truck,
      x: 250,
      y: 50
    }));

    // LANE BUTTONS
    for (var i = 0; i < 3; i++) {
      var btn = this._makeLaneButton({
        x: 50,
        y: scene.screen.height - 150 - i * 170
      });
      this.laneSelectGroup.addButton(btn);
      if (i === 0) {
        btn.setPressed(true);
      }
    }
  },

  _makeTruckButton: function(opts) {
    var x = new ButtonView({
      superview: scene.ui,
      x: opts.x,
      y: opts.y,
      width: 150,
      height: 150,
      image: 'resources/images/button_bg.png',
      pressedImage: 'resources/images/button_selected.png',
      toggle: true,
      icon: opts.truck.view
    });
    // Trucks are bottom center origin, move the icons to the right place
    x.icon.style.x = x.style.width / 2;
    x.icon.style.y = x.style.height;
    x.icon.style.scale = 0.65;
    return x;
  },

  _makeLaneButton: function(opts) {
    var x = new ButtonView({
      superview: scene.ui,
      x: opts.x,
      y: opts.y,
      width: 150,
      height: 150,
      image: 'resources/images/button_bg.png',
      pressedImage: 'resources/images/button_arrow.png',
      toggle: true
    });
    return x;
  }
};
