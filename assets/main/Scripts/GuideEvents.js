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
    n.EventOnGuideClose = n.EventOnGuideShow = void 0;
var r = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnGuideShow",
        e
}
    (cc.Event.EventCustom);
n.EventOnGuideShow = r;
var a = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnGuideClose",
        e
}
    (cc.Event.EventCustom);
n.EventOnGuideClose = a;