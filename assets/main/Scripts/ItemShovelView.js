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
    c = t("DataManager"),
    s = t("Jumpjump3d"),
    l = t("Shakeshake"),
    u = t("G"),
    p = t("GlobalEvents"),
    f = t("Utils"),
    h = t("PlayerInfo"),
    d = t("GameUtils"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_num = null,
                e.node_icon = null,
                e.node_icon_flush = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.refreshNum()
            },
            e.prototype.onEnable = function () {
                u.GlobalEvent.on(p.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    u.GlobalEvent.on(s.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onDisable = function () {
                u.GlobalEvent.off(p.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    u.GlobalEvent.off(s.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onEventOnDataChange = function (t) {
                t.obj.model == c.dm.player.saveKey && [h.default.Config.shovel.key, "shovel_prefab"].includes(t.obj.key) && this.refreshNum()
            },
            e.prototype.refreshNum = function () {
                c.dm.player.shovel_prefab > 0 ? this.lb_num.string = "Thử" : 0 == c.dm.player.shovel ? this.lb_num.string = "+" : this.lb_num.string = c.dm.player.shovel + ""
            },
            e.prototype.onEventOnBoom = function (t) {
                if (t.tType == a.RewardType.Shovel) {
                    var e = cc.instantiate(this.node_icon_flush);
                    e.position = this.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                        d.GameUtils.addEffectAR(e),
                        e.active = !0,
                        e.opacity = 255,
                        cc.tween(e).to(.6, {
                            opacity: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            f.Utils.removeNode(e)
                        }).start(),
                        l.default.begin(this.node)
                }
            },
            r([_(cc.Label)], e.prototype, "lb_num", void 0),
            r([_(cc.Node)], e.prototype, "node_icon", void 0),
            r([_(cc.Node)], e.prototype, "node_icon_flush", void 0),
            r([y], e)
    }
        (cc.Component);
n.default = m;