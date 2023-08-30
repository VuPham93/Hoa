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
var a = t("RewardUtils"),
    c = t("G"),
    s = t("GlobalEvents"),
    l = t("AniUtil"),
    u = t("GameUtils"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_flush = null,
                e.type = -1,
                e
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                c.GlobalEvent.on(s.EventOnGameBtnGetItem.NAME, this.onEventOnGameBtnGetItem, this)
            },
            e.prototype.onDisable = function () {
                c.GlobalEvent.off(s.EventOnGameBtnGetItem.NAME, this.onEventOnGameBtnGetItem, this)
            },
            e.prototype.onEventOnGameBtnGetItem = function (t) {
                var e = this;
                if (!(this.type >= 0 && t.rewardType != this.type)) {
                    var n = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    l.AniUtil.JumpTo2(t.ico, n, 300, 2, 1, !0),
                        setTimeout(function () {
                            u.GameUtils.playSFX("ding"),
                                e.aniDou(e.node)
                        }, 600)
                }
            },
            e.prototype.aniDou = function (t) {
                var e = this;
                cc.tween(t).call(function () {
                    e.node_flush.opacity = 255,
                        e.node_flush.active = !0
                }).to(.1, {
                    scaleX: 1.05,
                    scaleY: .9
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    cc.tween(e.node_flush).to(.3, {
                        opacity: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        e.node_flush.active = !1
                    }).start()
                }).to(.1, {
                    scaleX: .95,
                    scaleY: 1.05
                }, {
                    easing: cc.easing.sineOut
                }).to(.1, {
                    scaleX: 1.05,
                    scaleY: .95
                }, {
                    easing: cc.easing.sineOut
                }).to(.1, {
                    scaleX: 1,
                    scaleY: 1
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            r([h(cc.Node)], e.prototype, "node_flush", void 0),
            r([h({
                type: cc.Enum(a.RewardType),
                displayName: "Loại quà"
            })], e.prototype, "type", void 0),
            r([f], e)
    }
    (cc.Component);
n.default = d;