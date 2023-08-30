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
            return e.icon = null,
                e.timeOut = -1,
                e
        }
        return i(e, t),
            e.prototype.show = function (t) {
                void 0 === t && (t = !1),
                    this.showIco = t,
                    this.node.active = !0
            },
            e.prototype.hide = function () {
                this.node.active = !1
            },
            Object.defineProperty(e.prototype, "isLoading", {
                get: function () {
                    return this.node.active
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onEnable = function () {
                var t = this;
                this.icon.active = !1,
                    this.showIco && (this.timeOut = setTimeout(function () {
                        t.icon.active = !0
                    }, 3e3))
            },
            e.prototype.onDisable = function () {
                clearTimeout(this.timeOut)
            },
            r([s(cc.Node)], e.prototype, "icon", void 0),
            r([c], e)
    }
        (cc.Component);
n.default = l;