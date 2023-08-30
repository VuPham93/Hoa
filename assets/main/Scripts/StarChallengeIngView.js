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
var a = t("DataManager"),
    c = t("G"),
    s = t("Utils"),
    l = t("GameUtils"),
    u = t("StarChallengeConfig"),
    p = t("StarChallengeEvents"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.label = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                var t = this;
                this.refreshCountDownView(),
                    this._interval = setInterval(function () {
                        t.refreshCountDownView()
                    }, 1e3)
            },
            e.prototype.refreshCountDownView = function () {
                var t = a.dm.starChallenge.time_match_start,
                    e = s.Utils.getCurTime(),
                    n = t + 60 * u.StarChallengeConfig.Match_Cycle - e;
                this.label.string = s.Utils.formatTime(Math.max(0, n), !0),
                    n < 0 && (c.GlobalEvent.dispatchEvent(new p.EventOnChallengeTimeout), clearInterval(this._interval))
            },
            e.prototype.onDisable = function () {
                clearInterval(this._interval)
            },
            e.prototype.onBtnGoClicked = function () {
                s.Utils.btnLock() || (l.GameUtils.playSoundBtnClicked(), c.GlobalEvent.dispatchEvent(new p.EventOnChallengeGoto))
            },
            r([d(cc.Label)], e.prototype, "label", void 0),
            r([h], e)
    }
        (cc.Component);
n.default = g;