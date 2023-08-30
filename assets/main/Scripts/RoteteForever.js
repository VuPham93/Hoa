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
var a = cc._decorator,
    c = a.ccclass,
    s = a.property,
    l = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.spd = 4,
                e.dir = !0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e) {
                this.spd = t,
                    this.dir = e
            },
            e.prototype.onEnable = function () {
                this.begin()
            },
            e.prototype.begin = function () {
                var t = cc.repeatForever(cc.sequence(cc.rotateTo(this.spd / 2, this.dir ? 180 : -180), cc.rotateTo(this.spd / 2, this.dir ? 360 : -360), cc.rotateTo(0, 0)));
                this.node.runAction(t)
            },
            e.prototype.pause = function () {
                this.node.pauseAllActions()
            },
            e.prototype.resume = function () {
                this.node.resumeAllActions()
            },
            e.prototype.onDisable = function () {
                this.node.stopAllActions()
            },
            r([s(cc.Float)], e.prototype, "spd", void 0),
            r([s(cc.Boolean)], e.prototype, "dir", void 0),
            r([c], e)
    }
        (cc.Component);
n.default = l;