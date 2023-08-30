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
    n.DotBase = n.red = n.RedDotManager = n.EventRedDotChanged = n.RedDotType = void 0;
var r,
    a = t("G");
(function (t) {
    t[t.count = 0] = "count"
})(r = n.RedDotType || (n.RedDotType = {}));
var c = function (t) {
    function e() {
        var n = t.call(this, e.NAME, !0) || this;
        return n.dotType = 0,
            n
    }
    return i(e, t),
        e.NAME = "EventRedDotChanged",
        e
}
    (cc.Event.EventCustom);
n.EventRedDotChanged = c;
var s = function () {
    function t() {
        this.all = {}
    }
    return Object.defineProperty(t, "instance", {
        get: function () {
            return this._instance || (this._instance = new t)
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.onInit = function () {
            for (var t = 0; t < r.count; t++)
                this.createDot(t)
        },
        t.prototype.createDot = function () { },
        t.prototype.dispatchAll = function () {
            for (var t in this.all) {
                var e = this.all[t];
                e.refresh(),
                    e.dispatch()
            }
        },
        t.prototype.dispatchMask = function (t) {
            for (var e = 0; e < t.length; e++) {
                var n = this.all[t[e]];
                n.refresh(),
                    n.dispatch()
            }
        },
        t.prototype.getDotNum = function (t) {
            var e = 0;
            for (var n in this.all) {
                var o = this.all[n];
                0 != (1 << o.dotType & t) && (e += o.num)
            }
            return e
        },
        t.prototype.addNum = function (t, e) {
            var n = this.all["" + t];
            n && n.addNum(e)
        },
        t.prototype.clearDotNum = function (t) {
            var e = this.all["" + t];
            e && e.clear()
        },
        t.prototype.refreshDot = function (t) {
            var e = this.all["" + t];
            e && e.refresh()
        },
        t
}
    ();
n.RedDotManager = s,
    n.red = s.instance;
var l = function () {
    function t(t) {
        this.dotType = 0,
            this._num = 0,
            this.dotType = t
    }
    return Object.defineProperty(t.prototype, "num", {
        get: function () {
            return this._num
        },
        set: function (t) {
            this._num = t,
                this.dispatch()
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.dispatch = function () {
            var t = new c;
            t.dotType = this.dotType,
                a.GlobalEvent.dispatchEvent(t)
        },
        t.prototype.addNum = function (t) {
            t <= 0 || (this.num = this._num + t)
        },
        t.prototype.clear = function () {
            this.num = 0
        },
        t.prototype.refresh = function () { },
        t
}
    ();
n.DotBase = l;