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
var a = t("RewardUtils"),
    c = t("Jumpjump3d"),
    s = t("Shakeshake"),
    l = t("G"),
    u = t("Utils"),
    p = t("GameUtils"),
    f = t("BattleCompBase"),
    h = t("BattleEvents"),
    d = cc._decorator,
    g = d.ccclass,
    y = d.property,
    _ = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ico_step = null,
                e.lb_num = null,
                e.node_icon_flush = null,
                e.node_water = null,
                e
        }
        return i(e, t),
            e.prototype.refreshView = function () {
                this.lb_num.string = "" + this.levelData.steps
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    l.GlobalEvent.on(h.EventOnStepChanged.NAME, this.onEventOnStepChanged, this),
                    l.GlobalEvent.on(c.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    l.GlobalEvent.off(h.EventOnStepChanged.NAME, this.onEventOnStepChanged, this),
                    l.GlobalEvent.off(c.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onEventOnStepChanged = function (t) {
                var e = this;
                if (cc.tween(this.lb_num.node).to(.1, {
                    scale: .8
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    e.lb_num.string = "" + t.step
                }).delay(.1).to(.1, {
                    scale: 1
                }, {
                    easing: cc.easing.backOut
                }).start(), this.levelData) {
                    var n = t.step / this.levelData.properties.nr_moves * 92;
                    cc.tween(this.node_water).to(.3, {
                        y: n
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
                }
            },
            e.prototype.onEventOnBoom = function (t) {
                if (t.tType == a.RewardType.Step) {
                    var e = cc.instantiate(this.node_icon_flush);
                    e.position = this.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                        p.GameUtils.addEffectAR(e),
                        e.active = !0,
                        e.opacity = 255,
                        cc.tween(e).to(.6, {
                            opacity: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            u.Utils.removeNode(e)
                        }).start(),
                        s.default.begin(this.node)
                }
            },
            r([y(cc.Node)], e.prototype, "ico_step", void 0),
            r([y(cc.Label)], e.prototype, "lb_num", void 0),
            r([y(cc.Node)], e.prototype, "node_icon_flush", void 0),
            r([y(cc.Node)], e.prototype, "node_water", void 0),
            r([g], e)
    }
        (f.default);
n.default = _;