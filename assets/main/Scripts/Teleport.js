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
var a = t("TeleportUtils"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property,
    u = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.frame_effect = null,
                e.timer = 0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e) {
                this.pid = t,
                    this.isDirIn = e
            },
            e.prototype.update = function () {
                this.isDirIn ? (this.timer % 24 == 0 && a.default.effectIn2(this.frame_effect, this.node), this.timer % 12 == 0 && a.default.effectIn(this.frame_effect, this.node)) : this.timer % 12 == 0 && a.default.effectOut(this.frame_effect, this.node),
                    this.timer++
            },
            r([l(cc.SpriteFrame)], e.prototype, "frame_effect", void 0),
            r([s], e)
    }
        (cc.Component);
n.default = u;