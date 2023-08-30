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
var a = t("G"),
    c = t("GameManager"),
    s = t("BattleConfig"),
    l = t("BattleEvents"),
    u = cc._decorator,
    p = u.ccclass,
    f = u.property,
    h = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_ring = null,
                e.pregressbar = null,
                e.node_boom1 = null,
                e.node_boom2 = null,
                e.list = [],
                e.aning = !1,
                e.curStrength = 0,
                e
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(l.EventOnFlowerStatusStrengthChanged.NAME, this.onEventOnFlowerStatusStrengthChanged, this)
            },
            e.prototype.onDisable = function () {
                a.GlobalEvent.off(l.EventOnFlowerStatusStrengthChanged.NAME, this.onEventOnFlowerStatusStrengthChanged, this)
            },
            e.prototype.onEventOnFlowerStatusStrengthChanged = function (t) {
                this.list.push(t.strength);
                var e = t.color;
                t.color > 0 && (c.default.instance.resList.setFlower(this.node_boom1, e, 10, void 0), c.default.instance.resList.setFlower(this.node_boom2, e, 10, void 0))
            },
            e.prototype.update = function () {
                var t = this;
                if (!this.aning && 0 != this.list.length) {
                    var e = this.list.shift(),
                        n = this.curStrength < e,
                        o = e / s.BattleConfig.Strength_Boom2,
                        i = s.BattleConfig.Strength_Boom1 / s.BattleConfig.Strength_Boom2;
                    cc.tween(this.pregressbar).to(.1, {
                        fillRange: o
                    }, {
                        easing: cc.easing.sineOut,
                        onUpdate: function (e) {
                            var o = e.fillRange;
                            n ? (o >= i && !t.node_boom1.active && (t.node_boom1.active = !0, cc.tween(t.node_boom1).to(.1, {
                                scale: .5
                            }, {
                                easing: cc.easing.backOut
                            }).start()), o >= 1 && !t.node_boom2.active && (t.node_boom2.active = !0, cc.tween(t.node_boom2).to(.1, {
                                scale: .5
                            }, {
                                easing: cc.easing.backOut
                            }).start())) : (o < i && t.node_boom1.active && (t.node_boom1.active = !1, cc.tween(t.node_boom2).to(.1, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()), o < 1 && t.node_boom2.active && (t.node_boom2.active = !1, cc.tween(t.node_boom2).to(.1, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()))
                        }
                    }).delay(.1).call(function () {
                        t.aning = !1
                    }).start(),
                        this.curStrength = e,
                        this.aning = !0
                }
            },
            r([f(cc.Node)], e.prototype, "gp_ring", void 0),
            r([f(cc.Sprite)], e.prototype, "pregressbar", void 0),
            r([f(cc.Node)], e.prototype, "node_boom1", void 0),
            r([f(cc.Node)], e.prototype, "node_boom2", void 0),
            r([p], e)
    }
        (cc.Component);
n.default = h;