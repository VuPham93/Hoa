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
            return e.ani = !1,
                e._showIndex = 0,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                if (this.ani)
                    for (var t = 0; t < this.node.childrenCount; t++)
                        this.node.children[t].active = !1
            },
            Object.defineProperty(e.prototype, "showIndex", {
                get: function () {
                    return this._showIndex
                },
                set: function (t) {
                    if (this.ani)
                        for (var e = function (e) {
                            var o = n.node.children[e];
                            o.active ? e != t && (o.stopAllActions(), cc.tween(o).to(.2, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).call(function () {
                                o.active = !1
                            }).start()) : e == t && (o.stopAllActions(), o.active = !0, o.scale = 0, cc.tween(o).to(.2, {
                                scale: 1
                            }, {
                                easing: cc.easing.sineInOut
                            }).start())
                        }, n = this, o = 0; o < this.node.childrenCount; o++)
                            e(o);
                    else
                        for (o = 0; o < this.node.childrenCount; o++)
                            this.node.children[o].active = o == t;
                    this._showIndex = t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curNode", {
                get: function () {
                    return this.node.children[this._showIndex]
                },
                enumerable: !1,
                configurable: !0
            }),
            r([s(cc.Boolean)], e.prototype, "ani", void 0),
            r([c], e)
    }
        (cc.Component);
n.default = l;