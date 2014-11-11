var Q = Quintus({ development: true })
.include("Sprites")
.setup({ width: 800, height: 480 });




Q.load(["starBackground.png"], function () {
    var background = new Q.Sprite({ asset: "starBackground.png", x: Q.el.width / 2, y: Q.el.height / 2, type: Q.SPRITE_NONE })
    Q.gameLoop(function (dt) {
        Q.clear();
        background.render(Q.ctx);
        alert("test - delete me")
    });
});
