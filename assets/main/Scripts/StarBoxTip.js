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
var a = t("G"),
    c = t("GlobalTouch"),
    s = t("Utils"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.tipShowing = !1,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                var t = this;
                this.gp_content.active = !0,
                    this.gp_content.scale = 0,
                    cc.tween(this.gp_content).to(.3, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineInOut
                    }).call(function () {
                        t.tipShowing = !0,
                            t._timeout = setTimeout(function () {
                                t.aniTipHide()
                            }, 3e3)
                    }).start()
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(c.EventGlobalTouch.NAME, this.onEventGlobalTouch, this)
            },
            e.prototype.onDisable = function () {
                clearTimeout(this._timeout),
                    a.GlobalEvent.off(c.EventGlobalTouch.NAME, this.onEventGlobalTouch, this)
            },
            e.prototype.onEventGlobalTouch = function () {
                s.Utils.removeNode(this.node)
            },
            e.prototype.aniTipHide = function () {
                var t = this;
                this.gp_content.active = !0,
                    this.gp_content.scale = 1,
                    cc.tween(this.gp_content).to(.2, {
                        scale: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.tipShowing = !1
                    }).start()
            },
            r([p(cc.Node)], e.prototype, "gp_content", void 0),
            r([u], e)
    }
        (cc.Component);
n.default = f;