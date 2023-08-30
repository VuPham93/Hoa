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
var a = t("Toast"),
    c = t("GameUtils"),
    s = t("MainBarButton"),
    l = cc._decorator,
    u = l.ccclass,
    p = (l.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    this.title.color = cc.color(245, 171, 122)
            },
            e.prototype.onLoad = function () {
                this.init()
            },
            e.prototype.onSelected = function () {
                t.prototype.onSelected.call(this),
                    cc.tween(this.title).to(.2, {
                        scale: 1.5,
                        color: cc.color(78, 45, 7),
                        y: -56
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.onUnSelected = function () {
                t.prototype.onUnSelected.call(this),
                    cc.tween(this.title).to(.2, {
                        scale: 1,
                        color: cc.color(245, 171, 122),
                        y: -43
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.onBtnClicked = function () {
                c.GameUtils.showToast("Vui lòng chờ bản cập nhật tiếp theo!", a.TipIco.Tip)
            },
            r([u], e)
    }
        (s.default));
n.default = p;