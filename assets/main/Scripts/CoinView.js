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
var a = t("NumberAction"),
    c = t("RewardUtils"),
    s = t("DataManager"),
    l = t("Jumpjump3d"),
    u = t("Shakeshake"),
    p = t("G"),
    f = t("GlobalEvents"),
    h = t("Utils"),
    d = t("PlayerInfo"),
    g = t("GameUtils"),
    y = t("TopResSubViewBase"),
    _ = cc._decorator,
    m = _.ccclass,
    v = _.property,
    b = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_coin = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.lb_coin.string = s.dm.player.coin + ""
            },
            e.prototype.onEnable = function () {
                p.GlobalEvent.on(f.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    p.GlobalEvent.on(l.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onDisable = function () {
                p.GlobalEvent.off(f.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    p.GlobalEvent.off(l.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onEventOnDataChange = function (t) {
                var e = this;
                t.obj.model == s.dm.player.saveKey && d.default.Config.coin.key == t.obj.key && setTimeout(function () {
                    a.default.numberTo(e.lb_coin.node, s.dm.player.coin)
                }, 1600)
            },
            e.prototype.onEventOnBoom = function (t) {
                if (t.tType == c.RewardType.Coin) {
                    var e = cc.instantiate(this.node_icon_flush);
                    e.position = this.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                        g.GameUtils.addEffectAR(e),
                        e.active = !0,
                        e.opacity = 255,
                        cc.tween(e).to(.6, {
                            opacity: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            h.Utils.removeNode(e)
                        }).start(),
                        u.default.begin(this.node)
                }
            },
            r([v(cc.Label)], e.prototype, "lb_coin", void 0),
            r([m], e)
    }
        (y.default);
n.default = b;