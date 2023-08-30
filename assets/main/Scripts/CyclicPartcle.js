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
    s = (a.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.timer = 0,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.particle = this.node.getComponent(cc.ParticleSystem),
                    this.particle && this.particle.duration < 0 && (this.particle = void 0)
            },
            e.prototype.onEnable = function () {
                this.particle && (this.timer = 0, this.particle.resetSystem())
            },
            e.prototype.update = function (t) {
                this.particle && (this.timer >= 2 * this.particle.life && (this.timer = 0, this.particle.resetSystem()), this.timer += t)
            },
            e.prototype.onDisable = function () {
                this.particle && this.particle.stopSystem()
            },
            r([c], e)
    }
        (cc.Component));
n.default = s;