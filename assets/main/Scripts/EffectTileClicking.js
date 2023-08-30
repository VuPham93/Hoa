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
    });
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.EffectTileClicking = void 0;
var r = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return i(e, t),
        e.Show = function (t, e) {
            e.gp_content.scale = 1.2
        },
        e.Close = function (t, e) {
            cc.tween(e.gp_content).to(.1, {
                scale: 1
            }, {
                easing: cc.easing.backOut
            }).start()
        },
        e
}
    (Object);
n.EffectTileClicking = r;