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
var a = t("DataManager"),
    c = t("G"),
    s = t("Utils"),
    l = t("GameUtils"),
    u = t("ChapterEvents"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_title = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.lb_title.string = "Màn " + (a.dm.player.level + 1)
            },
            e.prototype.onBtnGameStartClicked = function () {
                if (!s.Utils.btnLock()) {
                    l.GameUtils.playSoundBtnClicked();
                    var t = a.dm.player.level + 1,
                        e = l.GameUtils.getChapterId(t),
                        n = l.GameUtils.getStageIdLocal(t);
                    c.GlobalEvent.dispatchEvent(new u.EventOnChapterStageClicked(e, n))
                }
            },
            r([h(cc.Label)], e.prototype, "lb_title", void 0),
            r([f], e)
    }
        (cc.Component);
n.default = d;