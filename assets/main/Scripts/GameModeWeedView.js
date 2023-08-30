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
var a = t("TileData"),
    c = t("GameModeViewBase"),
    s = cc._decorator,
    l = s.ccclass,
    u = (s.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e),
                    this.lb_num.string = this.mapView.levelData.comptNum[a.Tile_Component_Type.weed] + ""
            },
            e.prototype.checkWin = function () {
                return this.mapView.levelData.getCurComptNum(a.Tile_Component_Type.weed) <= 0
            },
            e.prototype.onEventOnComponentDelete = function (t, e) {
                var n = this;
                e == a.Tile_Component_Type.weed && this.showEffect(t, function () {
                    var t = Math.max(0, ~~n.lb_num.string - 1);
                    n.lb_num.string = t + ""
                })
            },
            r([l], e)
    }
        (c.default));
n.default = u;