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
var a = t("SwitchNode"),
    c = t("Utils"),
    s = t("GameUtils"),
    l = t("BattleCompBase"),
    u = t("LevelData"),
    p = t("MapView"),
    f = t("GameModeViewBase"),
    h = cc._decorator,
    d = h.ccclass,
    g = h.property,
    y = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.mapView = null,
                e.switch_mode = null,
                e.eff_particle = null,
                e
        }
        return i(e, t),
            e.prototype.refreshView = function () {
                var t = u.Game_Mode[this.levelData.properties.game_mode];
                this.switch_mode.showIndex = t,
                    this.switch_mode.node.children[t].getComponent(f.default).init(this.mapView)
            },
            e.prototype.onGuide = function () {
                var t = cc.instantiate(this.eff_particle);
                t.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    s.GameUtils.addEffectAR(t),
                    setTimeout(function () {
                        c.Utils.removeNode(t)
                    }, 2e3)
            },
            e.prototype.getNode = function () {
                return this.node
            },
            r([g(p.default)], e.prototype, "mapView", void 0),
            r([g(a.default)], e.prototype, "switch_mode", void 0),
            r([g(cc.Prefab)], e.prototype, "eff_particle", void 0),
            r([d], e)
    }
        (l.default);
n.default = y;