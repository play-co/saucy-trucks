var art = GC.communityart;

art.registerConfig('truck', {
  type: 'Entity',
  opts: {
    loop: false,
    viewOpts: {
      offsetX: -72,
      offsetY: -99,
      url: 'resources/images/truck'
    },
    hitOpts : {
      offsetX: -72,
      offsetY: -99,
      width: 150,
      height: 99
    }
  }
});

art.registerConfig('sauce', {
  type: 'Entity',
  opts: {
    loop: false,
    viewOpts: {
      url: 'resources/images/sauce'
    },
    hitOpts : {
      radius: 25
    }
  }
});
