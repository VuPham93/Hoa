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
    c = t("Utils"),
    s = t("StageReadyPanel"),
    l = t("GameUtils"),
    u = t("MainBarButton"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.btn_game_start = null,
                e.lb_title = null,
                e
        }
        return i(e, t),
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    this.btn_game_start.enabled = !1,
                    this.title.color = cc.color(255, 255, 255)
            },
            e.prototype.onLoad = function () {
                this.init(),
                    this.lb_title.string = "Màn " + (a.dm.player.level + 1)
            },
            e.prototype.onSelected = function () {
                if (!this.title.getComponent(cc.LabelOutline)) {
                    var e = this.title.addComponent(cc.LabelOutline);
                    e.color = cc.color(78, 45, 7),
                        e.width = 4
                }
                t.prototype.onSelected.call(this),
                    this.btn_game_start.enabled = !0,
                    cc.tween(this.title).to(.2, {
                        scale: 1.5,
                        color: cc.color(255, 255, 255),
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
                    }).start(),
                    this.title.removeComponent(cc.LabelOutline),
                    this.btn_game_start.enabled = !1
            },
            e.prototype.onBtnGameStartClicked = function () {
                c.Utils.btnLock() || (l.GameUtils.playSoundBtnClicked(), s.default.show(a.dm.player.level + 1))
            },
            r([h(cc.Button)], e.prototype, "btn_game_start", void 0),
            r([h(cc.Label)], e.prototype, "lb_title", void 0),
            r([f], e)
    }
        (u.default);
n.default = d;