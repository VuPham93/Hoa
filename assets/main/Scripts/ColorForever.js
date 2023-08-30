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
            return e.duration = 1,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e) {
                this.remove(t),
                    t.addComponent(n).init(e)
            },
            e.remove = function (t) {
                t.removeComponent(n)
            },
            e.tryReplay = function (t) {
                var e = t.getComponent(n);
                return !!e && (e.play(), !0)
            },
            e.prototype.init = function (t) {
                this.toColor = t
            },
            e.prototype.start = function () {
                this.play()
            },
            e.prototype.play = function () {
                this.node.color = cc.color(255, 255, 255),
                    this.colorBackup = this.node.color;
                var t = cc.repeatForever(cc.sequence(cc.tintTo(this.duration, this.toColor.r, this.toColor.g, this.toColor.b), cc.tintTo(this.duration, 255, 255, 255)));
                this.node.runAction(t)
            },
            e.prototype.onDisable = function () {
                this.node.stopAllActions(),
                    this.node.color = this.colorBackup || cc.Color.WHITE
            },
            r([s(cc.Float)], e.prototype, "duration", void 0),
            n = r([c], e)
    }
        (cc.Component);
n.default = l;