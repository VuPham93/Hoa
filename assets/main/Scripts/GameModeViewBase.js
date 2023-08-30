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
    c = t("AniUtil"),
    s = t("Utils"),
    l = t("GameUtils"),
    u = t("BattleEvents"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.eff_particle = null,
                e.frame_light = null,
                e.lb_num = null,
                e.node_eff_macro = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.mapView = t
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(u.EventOnComponentDelete.NAME, this._onEventOnComponentDelete, this)
            },
            e.prototype.onDisable = function () {
                a.GlobalEvent.off(u.EventOnComponentDelete.NAME, this._onEventOnComponentDelete, this)
            },
            e.prototype.checkWin = function () {
                return !1
            },
            e.prototype.showEffect = function (t, e) {
                var n = this,
                    o = this.mapView.tiles[t];
                c.AniUtil.createEffectSpriteHome(o.node, this.node_eff_macro, [this.frame_light], function () {
                    e && e(),
                        c.AniUtil.aniDou(n.node_eff_macro);
                    var t = cc.instantiate(n.eff_particle);
                    t.position = n.node_eff_macro.convertToWorldSpaceAR(cc.v2(0, 0)),
                        l.GameUtils.addEffectAR(t),
                        setTimeout(function () {
                            s.Utils.removeNode(t)
                        }, 2e3)
                }, 1, 1, !0)
            },
            e.prototype._onEventOnComponentDelete = function (t) {
                this.onEventOnComponentDelete(t.tilekey, t.comptType, t.comptColor)
            },
            e.prototype.onEventOnComponentDelete = function () { },
            r([h(cc.Prefab)], e.prototype, "eff_particle", void 0),
            r([h(cc.SpriteFrame)], e.prototype, "frame_light", void 0),
            r([h(cc.Label)], e.prototype, "lb_num", void 0),
            r([h(cc.Node)], e.prototype, "node_eff_macro", void 0),
            r([f], e)
    }
        (cc.Component);
n.default = d;