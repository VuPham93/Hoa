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
    c = t("GuideManager"),
    s = t("UIManager"),
    l = t("GameUtils"),
    u = t("EffectTip"),
    p = cc._decorator,
    f = p.ccclass,
    h = (p.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.timer = 0,
                e.aning = !1,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.mapView = t,
                    this.bornTime = a.Utils.getCurTime()
            },
            e.prototype.onEnable = function () { },
            e.prototype.onDisable = function () {
                this.mapView = void 0
            },
            e.prototype.update = function (t) {
                var e,
                    n,
                    o = this;
                if (this.mapView && this.mapView.levelData) {
                    var i = a.Utils.getCurTime();
                    if (!(i - this.bornTime < 5))
                        if (this.timer < 1)
                            this.timer += t;
                        else if (this.timer = 0, !(l.GameUtils.popLayer.childrenCount > 0 || s.ui.isLoading || this.mapView.levelData.pausing || this.aning || c.gm.isGuiding || 0 == (null === (e = this.mapView.levelData.tipList) || void 0 === e ? void 0 : e.length)) && i - this.mapView.levelData.lastDeadCheckTime > 3) {
                            this.aning = !0;
                            for (var r = this.mapView.levelData.tipList, p = 0; p < r.length; p++)
                                null === (n = this.mapView.tiles[r[p].key].cptBudbase) || void 0 === n || n.node.addComponent(u.default);
                            this.mapView.levelData.lastDeadCheckTime = i,
                                setTimeout(function () {
                                    o.aning = !1
                                }, 3e3)
                        }
                }
            },
            r([f], e)
    }
        (cc.Component));
n.default = h;