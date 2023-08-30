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
var a = t("SwitchNode"),
    c = t("DataManager"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.switch_type = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                if (t) {
                    var e = t.typeId - 1;
                    this.switch_type.showIndex = e;
                    var n = this.switch_type.node.children[e].getComponent(a.default);
                    n && (n.showIndex = c.dm.dailyTask.color - 1)
                }
            },
            Object.defineProperty(e.prototype, "icoNode", {
                get: function () {
                    var t = this.switch_type.showIndex,
                        e = this.switch_type.node.children[t],
                        n = e.getComponent(a.default);
                    return n ? n.node.children[n.showIndex] : e
                },
                enumerable: !1,
                configurable: !0
            }),
            r([u(a.default)], e.prototype, "switch_type", void 0),
            r([l], e)
    }
        (cc.Component);
n.default = p;