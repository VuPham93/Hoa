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
}),
    n.EventGlobalMove = n.EventGlobalTouch = void 0;
var a = t("G"),
    c = function (t) {
        function e(n) {
            var o = t.call(this, e.NAME, !0) || this;
            return o.eventTouch = n,
                o
        }
        return i(e, t),
            e.NAME = "EventGlobalTouch",
            e
    }
        (cc.Event.EventCustom);
n.EventGlobalTouch = c;
var s = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.eventTouch = n,
            o
    }
    return i(e, t),
        e.NAME = "EventGlobalMove",
        e
}
    (cc.Event.EventCustom);
n.EventGlobalMove = s;
var l = cc._decorator,
    u = l.ccclass,
    p = (l.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !1),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchStart, this, !1)
            },
            e.prototype.onDisable = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !1),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !1)
            },
            e.prototype.onTouchStart = function (t) {
                a.GlobalEvent.dispatchEvent(new c(t))
            },
            e.prototype.onTouchMove = function (t) {
                a.GlobalEvent.dispatchEvent(new c(t))
            },
            r([u], e)
    }
        (cc.Component));
n.default = p;