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
    n.EventMapSetTranform = n.EventOnChapterStageClicked = void 0;
var r = function (t) {
    function e(n, o, i) {
        void 0 === i && (i = !0);
        var r = t.call(this, e.NAME, !0) || this;
        return r.chapterId = n,
            r.stageId = o,
            r.ready = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnChapterStageClicked",
        e
}
    (cc.Event.EventCustom);
n.EventOnChapterStageClicked = r;
var a = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.delta = n,
            o
    }
    return i(e, t),
        e.NAME = "EventMapSetTranform",
        e
}
    (cc.Event.EventCustom);
n.EventMapSetTranform = a;