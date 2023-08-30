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
            return e.timeout = void 0,
                e.standPos = void 0,
                e.range = 2,
                e.cyc = 2,
                e.removed = !1,
                e.timer = 0,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.begin = function (t, e, o, i) {
                void 0 === e && (e = 300),
                    void 0 === o && (o = 2),
                    void 0 === i && (i = 2);
                var r = t.getComponent(n);
                r || (r = t.addComponent(n))._begin(e, o, i)
            },
            e.remove = function (t) {
                t && t.removeComponent(n)
            },
            e.prototype._begin = function (t, e, n) {
                var o = this;
                this.range = e,
                    this.standPos = cc.v2(this.node.position.x, this.node.position.y),
                    this.cyc = n,
                    t > 0 && (this.timeout = setTimeout(function () {
                        o._end()
                    }, t))
            },
            e.prototype._end = function () {
                this.removed = !0
            },
            e.prototype.update = function () {
                if (this.removed)
                    this.node.removeComponent(n);
                else if (this.standPos) {
                    if (this.timer % this.cyc == 0) {
                        var t = a.Utils.randomIntInclusive(-this.range, this.range),
                            e = a.Utils.randomIntInclusive(-this.range, this.range);
                        this.node.position = cc.v2(this.standPos.x + t, this.standPos.y + e)
                    }
                    this.timer++
                }
            },
            e.prototype.onDisable = function () {
                this.removed = !0,
                    cc.isValid(this.node) && this.standPos && (this.node.position = this.standPos),
                    clearTimeout(this.timeout)
            },
            n = r([s], e)
    }
        (cc.Component));
n.default = l;