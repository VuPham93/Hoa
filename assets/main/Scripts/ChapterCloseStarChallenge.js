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
    },
    a = this && this.__awaiter || function (t, e, n, o) {
        return new (n || (n = Promise))(function (i, r) {
            function a(t) {
                try {
                    s(o.next(t))
                } catch (e) {
                    r(e)
                }
            }
            function c(t) {
                try {
                    s(o.throw(t))
                } catch (e) {
                    r(e)
                }
            }
            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                    t(e)
                })).then(a, c)
            }
            s((o = o.apply(t, e || [])).next())
        })
    },
    c = this && this.__generator || function (t, e) {
        var n,
            o,
            i,
            r,
            a = {
                label: 0,
                sent: function () {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
        return r = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
            "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                return this
            }),
            r;
        function c(t) {
            return function (e) {
                return s([t, e])
            }
        }
        function s(r) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return a.label++, {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                                o = r[1],
                                r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(),
                                a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1],
                                    i = r;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                    a.ops.push(r);
                                break
                            }
                            i[2] && a.ops.pop(),
                                a.trys.pop();
                            continue
                    }
                    r = e.call(t, a)
                } catch (c) {
                    r = [6, c],
                        o = 0
                } finally {
                    n = i = 0
                }
            if (5 & r[0])
                throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
    };
Object.defineProperty(n, "__esModule", {
    value: !0
});
var s = t("GlobalDefines"),
    l = t("DataManager"),
    u = t("Jumpjump3d"),
    p = t("AniUtil"),
    f = t("logger"),
    h = t("Utils"),
    d = t("GameUtils"),
    g = t("StarChallengeConfig"),
    y = t("StarChallengePanel"),
    _ = t("ChapterCloseController"),
    m = cc._decorator,
    v = m.ccclass,
    b = (m.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.logic = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    o,
                                    i,
                                    r,
                                    a,
                                    _,
                                    m,
                                    v,
                                    b,
                                    w;
                                return c(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return e = ~~(null === (w = l.dm.starChallenge.roleMe) || void 0 === w ? void 0 : w.starNewNum),
                                                l.dm.starChallenge.starClose(),
                                                (o = g.StarChallengeConfig.curStatus) != g.Star_Challenge_Status.Desc ? [3, 4] : l.dm.starChallenge.show_panel ? [3, 2] : (i = t.chapterUI.starChallengeView.gp_content, [4, y.default.show(i)]);
                                        case 1:
                                            return c.sent(),
                                                l.dm.starChallenge.show_panel = !0,
                                                n(),
                                                [3, 3];
                                        case 2:
                                            n(),
                                                c.label = 3;
                                        case 3:
                                            return [3, 9];
                                        case 4:
                                            if (o != g.Star_Challenge_Status.Ing)
                                                return [3, 8];
                                            if (r = t.chapterUI.starChallengeView, a = r.ico_star, !(e > 0))
                                                return [3, 6];
                                            for (d.GameUtils.playSFX("blossom_pop_" + (this.index + 1)), f.Logger.debug("[ChapterCloseStarChallenge logic] starNewNum:", e), _ = cc.v2(s.GlobalDefines.ScreenWidth / 2, s.GlobalDefines.ScreenHeight / 2), m = r.node.convertToWorldSpaceAR(cc.v2(0, 0)), v = d.GameUtils.effectLayer.convertToNodeSpaceAR(_), d.GameUtils.CreatePetalBoom(v, 2, 10, !0), d.GameUtils.addEffBoom(_), b = 0; b < e; b++)
                                                u.default.createByNode(a, _, 0, 1, m, -1);
                                            return [4, h.Utils.waiting(1300)];
                                        case 5:
                                            return c.sent(),
                                                p.AniUtil.aniDou(r.node),
                                                n(),
                                                [3, 7];
                                        case 6:
                                            n(),
                                                c.label = 7;
                                        case 7:
                                            return [3, 9];
                                        case 8:
                                            g.Star_Challenge_Status.Award,
                                                n(),
                                                c.label = 9;
                                        case 9:
                                            return [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            r([v], e)
    }
        (_.default));
n.default = b;