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
    c = t("Utils"),
    s = t("GuideEvents"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.curUpcontainer = null,
                e.background = null,
                e.slot_dialog = null,
                e.hand = null,
                e.curStatus = -1,
                e.nextStatus = -1,
                e.actorNode = [],
                e.next = void 0,
                e.masterLi = void 0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e) {
                this.gtData = t,
                    this.next = e
            },
            e.prototype.onLoad = function () {
                a.GlobalEvent.dispatchEvent(new s.EventOnGuideShow),
                    this.background.opacity = 0
            },
            e.prototype.close = function () {
                this.next && this.next(),
                    c.Utils.removeNode(this.node),
                    a.GlobalEvent.dispatchEvent(new s.EventOnGuideClose)
            },
            r([p(cc.Node)], e.prototype, "curUpcontainer", void 0),
            r([p(cc.Node)], e.prototype, "background", void 0),
            r([p(cc.Node)], e.prototype, "slot_dialog", void 0),
            r([p(cc.Node)], e.prototype, "hand", void 0),
            r([u], e)
    }
        (cc.Component);
n.default = f;