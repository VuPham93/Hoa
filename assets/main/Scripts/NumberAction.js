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
var a = t("Utils"),
    c = cc._decorator,
    s = c.ccclass,
    l = (c.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.label = null,
                e.targetNumber = 0,
                e.startNum = 0,
                e.startTime = 0,
                e.duration = 0,
                e.playing = !1,
                e.colorBackup = null,
                e.scaleBackup = null,
                e.targetColor = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.prototype.onLoad = function () { },
            e.numberTo = function (t, e, o, i) {
                void 0 === o && (o = 300),
                    t.getComponent(cc.Label) && (t.removeComponent(n), t.addComponent(n).numberTo(e, o, i))
            },
            e.prototype.numberTo = function (t, e, n) {
                void 0 === e && (e = 300),
                    this.label || (this.label = this.node.getComponent(cc.Label), this.colorBackup = this.label.node.color, this.scaleBackup = cc.v2(this.label.node.scaleX, this.label.node.scaleY)),
                    t != ~~this.label.string && (this.targetNumber = t, this.duration = e, this.startNum = a.Utils.isNum(this.label.string) ? Number(this.label.string) : 0, this.startTime = (new Date).getTime(), this.playing = !0, n && (this.targetColor = n, this.label.node.color = n, this.label.node.scaleX = 1.2 * this.scaleBackup.x, this.label.node.scaleY = 1.2 * this.scaleBackup.y))
            },
            e.prototype.checkColor = function (t, e) {
                return t.getA() == e.getA() && t.getB() == e.getB() && t.getG() == e.getG() && t.getR() == e.getR() && void 0
            },
            e.prototype.update = function () {
                if (this.label && this.playing) {
                    var t = (new Date).getTime();
                    if (t >= this.startTime + this.duration)
                        return this.label.node.color = this.colorBackup, this.label.string = "" + this.targetNumber, this.label.node.scaleX = this.scaleBackup.x, this.label.node.scaleY = this.scaleBackup.y, void (this.playing = !1);
                    this.targetColor && (this.label.node.color = this.targetColor);
                    var e = (t - this.startTime) / this.duration,
                        n = this.startNum + (this.targetNumber - this.startNum) * e;
                    this.label.string = "" + Math.floor(n)
                }
            },
            n = r([s], e)
    }
        (cc.Component));
n.default = l;