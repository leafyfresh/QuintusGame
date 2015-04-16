var Q = Quintus({ development: true })
.include("Sprites, Anim, Input, Touch")
.setup({ width: 800, height: 480 })
.controls();


Q.Sprite.extend("Player", {
    init: function (p) {
       // debugger;
        this._super(p, {
             asset: p,
          ////  sprite: "4cheets",
          // sheet: "4cheets",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed:10
        });

        this.add("animation");
        this.play("");
        // this.play("default");
    }
});


Q.load(["starBackground.png", "cheet.png","4cheets.png", "4cheets.json"], function () {
   Q.compileSheets("4cheets.png", "4cheets.json");
    Q.animations("4cheets", {default: {frames:[0,1,3,2], rate: 1 }})

    var background = new Q.Sprite({ asset: "starBackground.png", x: Q.el.width / 2, y: Q.el.height / 2, type: Q.SPRITE_NONE })
    var player = new Q.Player("cheet.png");
    var playerTwo = new Q.Player('redcheet.png');
    Q.gameLoop(function (dt) {
      //  console.log('looping..');
        Q.clear();
        background.render(Q.ctx);
        player.update(dt);
        player.render(Q.ctx);
        if (Q.inputs['left']){
            console.log("left~");
            player.p.x--;
        }
        if (Q.inputs['right']){
            console.log("right!");
            player.p.x++;
        }
    });
});
