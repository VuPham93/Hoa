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
var a = t("Shakeshake"),
    c = t("SpriteToHome"),
    s = t("AniUtil"),
    l = t("Utils"),
    u = t("BattleConfig"),
    p = t("GameUtils"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = -1,
                e.node_icon = null,
                e.node_icon_flush = null,
                e
        }
        return i(e, t),
            e.prototype.onShow = function () { },
            e.prototype.onHide = function () { },
            e.prototype.createIco = function () { },
            e.prototype.jumpFrom = function (t, e) {
                var n = this;
                void 0 === e && (e = 10),
                    (e = Math.min(e, 10)) >= 2 && (e = l.Utils.randomIntInclusive(Math.floor(e / 2), e)),
                    s.AniUtil.createEffectSpriteHome(t, this.node_icon, [this.node_icon.getComponent(cc.Sprite).spriteFrame], function () {
                        var t = cc.instantiate(n.node_icon_flush);
                        t.position = n.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                            p.GameUtils.addEffectAR(t),
                            t.active = !0,
                            t.opacity = 255,
                            cc.tween(t).to(.6, {
                                opacity: 0
                            }, {
                                easing: cc.easing.sineOut
                            }).call(function () {
                                l.Utils.removeNode(t)
                            }).start(),
                            a.default.begin(n.node)
                    }, e, this.node_icon.scaleX)
            },
            e.prototype.nodeJumpFrom = function (t, e) {
                var n = this;
                if (void 0 === e && (e = 10), t && cc.isValid(t)) {
                    (e = Math.min(e, 10)) >= 2 && (e = l.Utils.randomIntInclusive(Math.floor(e / 2), e));
                    for (var o = t.convertToWorldSpaceAR(cc.v2(0, 0)), i = this.node_icon.convertToWorldSpaceAR(cc.v2(0, 0)), r = [], s = 0; s < e; s++) {
                        var u = cc.instantiate(t);
                        u.active = !0,
                            u.position = o,
                            p.GameUtils.addEffectAR(u),
                            r.push(u)
                    }
                    var f = function (t) {
                        var e = r[t];
                        setTimeout(function () {
                            c.default.createNode(e, o, i, !1, function () {
                                var t = cc.instantiate(n.node_icon_flush);
                                t.position = n.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    p.GameUtils.addEffectAR(t),
                                    t.active = !0,
                                    t.opacity = 255,
                                    cc.tween(t).to(.6, {
                                        opacity: 0
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).call(function () {
                                        l.Utils.removeNode(t)
                                    }).start(),
                                    a.default.begin(n.node)
                            }, .7)
                        }, 200 * t)
                    };
                    for (s = 0; s < r.length; s++)
                        f(s)
                }
            },
            r([d({
                type: cc.Enum(u.TopresSubType),
                serializable: !0,
                displayName: "类型"
            })], e.prototype, "type", void 0),
            r([d(cc.Node)], e.prototype, "node_icon", void 0),
            r([d(cc.Node)], e.prototype, "node_icon_flush", void 0),
            r([h], e)
    }
        (cc.Component);
n.default = g;