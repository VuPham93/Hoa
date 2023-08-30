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
    u = t("StarChallengeEvents"),
    p = cc._decorator,
    f = p.ccclass,
    h = (p.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.onBtnCloseClicked = function () {
                s.Utils.btnLock() || (l.GameUtils.playSoundBtnClicked(), c.GlobalEvent.dispatchEvent(new u.EventOnChallengeDescClose))
            },
            e.prototype.onBtnStartClicked = function () {
                s.Utils.btnLock() || (l.GameUtils.playSoundBtnClicked(), a.dm.starChallenge.onMatchStart(), c.GlobalEvent.dispatchEvent(new u.EventOnChallengeJoinMatch))
            },
            r([f], e)
    }
        (cc.Component));
n.default = h;