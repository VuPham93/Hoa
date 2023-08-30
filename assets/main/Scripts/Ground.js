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
var a = t("GroundBase"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property,
    u = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_ground = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e)
            },
            e.prototype.onBigboom = function (t) {
                var e = this,
                    n = 0 == t ? 1500 : 1 == t ? 1200 : 900;
                clearTimeout(this._timeout),
                    this.node_ground.removeAllChildren(),
                    this.node_ground.opacity = 64,
                    this._timeout = setTimeout(function () {
                        cc.tween(e.node_ground).to(.3, {
                            opacity: 255
                        }, {
                            easing: cc.easing.sineIn
                        }).start()
                    }, n)
            },
            e.prototype.onKettle = function (t) {
                var e = this,
                    n = 0 == t ? 2e3 : 1500;
                clearTimeout(this._timeout),
                    this.node_ground.removeAllChildren(),
                    this.node_ground.opacity = 64,
                    this._timeout = setTimeout(function () {
                        cc.tween(e.node_ground).to(.3, {
                            opacity: 255
                        }, {
                            easing: cc.easing.sineIn
                        }).start()
                    }, n)
            },
            r([l(cc.Node)], e.prototype, "node_ground", void 0),
            r([s], e)
    }
        (a.default);
n.default = u;