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
var a = t("ChapterView"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property,
    u = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.chapterView = null,
                e
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onDisable = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onTouchStart = function (t) {
                1 == t.getTouches().length && this.chapterView.stopMove()
            },
            e.prototype.onTouchMove = function (t) {
                var e = t.getTouches();
                1 == e.length && (this.moveDelta = e[0].getDelta(), this.chapterView.setTransform(this.moveDelta))
            },
            e.prototype.onTouchEnd = function (t) {
                1 == t.getTouches().length && this.chapterView.startMoveWithInertance(this.moveDelta)
            },
            e.prototype.onTouchCancel = function (t) {
                this.onTouchEnd(t)
            },
            r([l(a.default)], e.prototype, "chapterView", void 0),
            r([s], e)
    }
        (cc.Component);
n.default = u;