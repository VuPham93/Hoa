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
    n.EventOnGameBtnGetItem = n.EventCloseYDX = n.EventOnPanelClosed = n.EventOnPanelPop = n.EventRedDotChanged = n.EventOnTaskCompleted = n.EventOnCoinChange = n.EventOnDataChange = n.EventOnSwitchScene = n.EventOnHide = n.EventOnShow = void 0;
var r = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.res = void 0,
            n
    }
    return i(e, t),
        e.NAME = "EventOnShow",
        e
}
    (cc.Event.EventCustom);
n.EventOnShow = r;
var a = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnHide",
        e
}
    (cc.Event.EventCustom);
n.EventOnHide = a;
var c = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnSwitchScene",
        e
}
    (cc.Event.EventCustom);
n.EventOnSwitchScene = c;
var s = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.obj = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnDataChange",
        e
}
    (cc.Event.EventCustom);
n.EventOnDataChange = s;
var l = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnCoinChange",
        e
}
    (cc.Event.EventCustom);
n.EventOnCoinChange = l;
var u = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.taskId = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnTaskCompleted",
        e
}
    (cc.Event.EventCustom);
n.EventOnTaskCompleted = u;
var p = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.dotType = 0,
            o.dotType = n,
            o
    }
    return i(e, t),
        e.NAME = "EventRedDotChanged",
        e
}
    (cc.Event.EventCustom);
n.EventRedDotChanged = p;
var f = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnPanelPop",
        e
}
    (cc.Event.EventCustom);
n.EventOnPanelPop = f;
var h = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnPanelClosed",
        e
}
    (cc.Event.EventCustom);
n.EventOnPanelClosed = h;
var d = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventCloseYDX",
        e
}
    (cc.Event.EventCustom);
n.EventCloseYDX = d;
var g = function (t) {
    function e(n, o) {
        var i = t.call(this, e.NAME, !0) || this;
        return i.rewardType = n,
            i.ico = o,
            i
    }
    return i(e, t),
        e.NAME = "EventOnGameBtnGetItem",
        e
}
    (cc.Event.EventCustom);
n.EventOnGameBtnGetItem = g;