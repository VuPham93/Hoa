var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
});
var o = t("Utils"),
    i = t("BattleConfig"),
    r = t("GameUtils"),
    a = function () {
        function t() { }
        return t.effectIn = function (t, e) {
            var n = o.Utils.randomFloat(.6, 1.2),
                a = o.Utils.randomFloat(.5, .8),
                c = a * i.BattleConfig.Tile_Height * .3 + o.Utils.randomInt(20, 40),
                s = o.Utils.randomInt(200, 255),
                l = o.Utils.randomInt(-20, 20),
                u = c,
                p = r.GameUtils.createNodeByFrame(t, 0, void 0, !0);
            p.opacity = s,
                p.position = e.convertToWorldSpaceAR(cc.v2(l, u)),
                r.GameUtils.addEffectAR(p),
                cc.tween(p).to(.2, {
                    scale: n
                }, {
                    easing: cc.easing.sineIn
                }).by(a, {
                    y: -c - i.BattleConfig.Tile_Height / 2 * o.Utils.randomFloat(.5, 1),
                    opacity: -s,
                    scale: -n / 1.2
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    o.Utils.removeNode(p)
                }).start()
        },
            t.effectIn2 = function (t, e) {
                var n = o.Utils.randomFloat(.3, .5),
                    a = n * i.BattleConfig.Tile_Height * .3 + o.Utils.randomInt(20, 40),
                    c = o.Utils.randomInt(64, 100),
                    s = o.Utils.randomInt(-20, 20),
                    l = a,
                    u = r.GameUtils.createNodeByFrame(t, 0, void 0, !0);
                u.opacity = c,
                    u.scaleY = 4,
                    u.scaleX = .5,
                    u.position = e.convertToWorldSpaceAR(cc.v2(s, l)),
                    r.GameUtils.addEffectAR(u),
                    cc.tween(u).by(n, {
                        y: -a - i.BattleConfig.Tile_Height / 2 * o.Utils.randomFloat(.5, 1),
                        opacity: -c
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        o.Utils.removeNode(u)
                    }).start()
            },
            t.effectOut = function (t, e) {
                var n = o.Utils.randomFloat(.6, 1.2),
                    a = o.Utils.randomFloat(.5, .8),
                    c = a * i.BattleConfig.Tile_Height * .3 + o.Utils.randomInt(20, 40),
                    s = o.Utils.randomInt(200, 255),
                    l = o.Utils.randomInt(-20, 20),
                    u = o.Utils.randomInt(-10, 10),
                    p = r.GameUtils.createNodeByFrame(t, 0, void 0, !0);
                p.opacity = s,
                    p.position = e.convertToWorldSpaceAR(cc.v2(l, u)),
                    r.GameUtils.addEffectAR(p),
                    cc.tween(p).to(.3, {
                        opacity: s,
                        scale: n / 2
                    }, {
                        easing: cc.easing.sineIn
                    }).by(a, {
                        y: c,
                        opacity: -s / 2,
                        scale: n / 2
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        o.Utils.removeNode(p)
                    }).start()
            },
            t
    }
        ();
n.default = a;