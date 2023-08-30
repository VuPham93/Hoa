var t = require;
var e = module;
var n = exports;
var o,
    i = this && this.__extends || (o = function (t, e) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            }
            || function (t, e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    }, function (t, e) {
        function n() {
            this.constructor = t
        }
        o(t, e),
            t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    r = this && this.__decorate || function (t, e, n, o) {
        var i,
            r = arguments.length,
            a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, o);
        else
            for (var c = t.length - 1; c >= 0; c--)
                (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
        return r > 3 && a && Object.defineProperty(e, n, a),
            a
    };
Object.defineProperty(n, "__esModule", {
    value: !0
});
var a = t("Utils"),
    c = t("BattleConfig"),
    s = t("GameUtils"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ball = null,
                e.line = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e, o, i, r, a, c) {
                var s = cc.instantiate(t);
                s.position = e.convertToNodeSpaceAR(o);
                var l = s.getComponent(n);
                return l.init(i, r, a, c),
                    s.parent = e,
                    l
            },
            e.prototype.init = function (t, e, n, o) {
                this.dir = t,
                    this.idx = e,
                    this.color = o,
                    t < 0 ? this.line.active = !1 : (this.line.active = !0, this.line.angle = 60 * -t),
                    n < c.BattleConfig.Strength_Boom1 ? this.ball.scale = .8 : n < c.BattleConfig.Strength_Boom2 ? this.ball.scale = 1 : this.ball.scale = 1.2
            },
            e.prototype.onTouchMove = function (t) {
                this.node.opacity = t ? 255 : 64
            },
            e.prototype.createPoints = function () {
                if (!(this.dir < 0)) {
                    for (var t = a.Utils.randomIntInclusive(1, 2), e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), n = function () {
                        var t = new cc.Node;
                        t.addComponent(cc.Sprite).dstBlendFactor = cc.macro.BlendFactor.ONE;
                        var n = "images/bud_boom/eff_" + o.color + "_3";
                        a.Utils.updateNodeSpriteFrame(n, t, !1);
                        var i = e.add(cc.v2(a.Utils.randomInt(-15, 15), a.Utils.randomInt(-15, 15)));
                        t.position = i,
                            s.GameUtils.addEffectAR(t);
                        var r = o.line.angle + 90 + a.Utils.randomInt(-20, 20),
                            l = a.Utils.angleToRadian(r),
                            u = c.BattleConfig.Tile_Height * a.Utils.randomFloat(.6, 1),
                            p = t.x + Math.cos(l) * u,
                            f = t.y + Math.sin(l) * u,
                            h = a.Utils.randomFloat(.6, 1.5);
                        cc.tween(t).to(h, {
                            x: p,
                            y: f,
                            opacity: 0
                        }, {
                            easing: cc.easing.quadOut
                        }).call(function () {
                            a.Utils.removeNode(t)
                        }).start()
                    }, o = this, i = 0; i < t; i++)
                        n();
                    s.GameUtils.createEffectClear(e, this.color)
                }
            },
            e.prototype.remove = function () {
                var t = this;
                return new Promise(function (e) {
                    setTimeout(function () {
                        cc.tween(t.ball).to(.15, {
                            scale: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).start(),
                            cc.tween(t.line).delay(.1).to(.15, {
                                opacity: 0
                            }, {
                                easing: cc.easing.sineOut
                            }).call(function () {
                                t.createPoints(),
                                    a.Utils.removeNode(t.node),
                                    e()
                            }).start()
                    }, 100 * t.idx)
                })
            },
            r([p(cc.Node)], e.prototype, "ball", void 0),
            r([p(cc.Node)], e.prototype, "line", void 0),
            n = r([u], e)
    }
        (cc.Component);
n.default = f;