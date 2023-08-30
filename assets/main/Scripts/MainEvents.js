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
    n.EventOnGameBtnGetStyle = n.EventBackgroundChanged = n.EventShowMainBar = n.EventMainScrollEnd = n.EventMainWillPaging = n.EventMainPageDraging = n.EventMainPageChanged = void 0;
var r = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.pageIndex = 0,
            n.now = !1,
            n.sender = null,
            n.param = void 0,
            n
    }
    return i(e, t),
        e.NAME = "EventMainPageChanged",
        e
}
    (cc.Event.EventCustom);
n.EventMainPageChanged = r;
var a = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.dx = 0,
            n
    }
    return i(e, t),
        e.NAME = "EventMainPageDraging",
        e
}
    (cc.Event.EventCustom);
n.EventMainPageDraging = a;
var c = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.curPageIndex = 0,
            o.curPageIndex = n,
            o
    }
    return i(e, t),
        e.NAME = "EventMainWillPaging",
        e
}
    (cc.Event.EventCustom);
n.EventMainWillPaging = c;
var s = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.param = void 0,
            n
    }
    return i(e, t),
        e.NAME = "EventMainScrollEnd",
        e
}
    (cc.Event.EventCustom);
n.EventMainScrollEnd = s;
var l = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.show = void 0,
            n
    }
    return i(e, t),
        e.NAME = "EventShowMainBar",
        e
}
    (cc.Event.EventCustom);
n.EventShowMainBar = l;
var u = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.bid = n,
            o
    }
    return i(e, t),
        e.NAME = "EventBackgroundChanged",
        e
}
    (cc.Event.EventCustom);
n.EventBackgroundChanged = u;
var p = function (t) {
    function e(n, o) {
        var i = t.call(this, e.NAME, !0) || this;
        return i.ico = n,
            i.items = o,
            i
    }
    return i(e, t),
        e.NAME = "EventOnGameBtnGetStyle",
        e
}
    (cc.Event.EventCustom);
n.EventOnGameBtnGetStyle = p;