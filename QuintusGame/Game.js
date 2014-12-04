var Q = Quintus({ development: true })
.include("Sprites")
.setup({ width: 800, height: 480 });


Q.Sprite.extend("Player", {
    init: function (p) {
        this._super(p, {
            asset: "cheat.png",
            x: Q.el.width / 2,
            y: Q.el.height - 60,
            type: Q.SPRITE_FRIENDLY,
            speed:10
        });
    }
});

Q.Sprite.extend("Penguin", {
    init: function (p) {
        this._super({
            asset: "cheat.png",
            cx: 0,
            cy:0
        });
    }
});

Q.load(["starBackground.png"], function () {
    var background = new Q.Sprite({ asset: "starBackground.png", x: Q.el.width / 2, y: Q.el.height / 2, type: Q.SPRITE_NONE })
    penguin = new Q.Penguin();
    debugger;
    penguin.render(Q.ctx);
    Q.gameLoop(function (dt) {
        Q.clear();
        background.render(Q.ctx);
        alert("test - delete me")
        alert("test -  yes delete me")
    });
});
