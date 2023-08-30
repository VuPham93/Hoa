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
var a = t("G"),
    c = t("RedDotManager"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.content = null,
                e.isRoom = !1,
                e.isStyle = !1,
                e.isWheel = !1,
                e.mark = 0,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.content.active = !1,
                    this.initMark()
            },
            e.prototype.initMark = function () {
                this.mark = 0
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(c.EventRedDotChanged.NAME, this.onEventRedDotChanged, this),
                    this.content.active = c.red.getDotNum(this.mark) > 0
            },
            e.prototype.onDisable = function () {
                a.GlobalEvent.off(c.EventRedDotChanged.NAME, this.onEventRedDotChanged, this)
            },
            e.prototype.onEventRedDotChanged = function (t) {
                if (0 != (1 << t.dotType & this.mark)) {
                    var e = c.red.getDotNum(this.mark);
                    this.content.active = e > 0;
                    var n = this.content.getComponentInChildren(cc.Label);
                    n && (n.string = e + "")
                }
            },
            r([u(cc.Node)], e.prototype, "content", void 0),
            r([u(cc.Boolean)], e.prototype, "isRoom", void 0),
            r([u(cc.Boolean)], e.prototype, "isStyle", void 0),
            r([u(cc.Boolean)], e.prototype, "isWheel", void 0),
            r([l], e)
    }
        (cc.Component);
n.default = p;