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
    r = this && this.__awaiter || function (t, e, n, o) {
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
    a = this && this.__generator || function (t, e) {
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
var c = t("GlobalDefines"),
    s = t("SceneManager"),
    l = t("logger"),
    u = t("Utils"),
    p = t("UIManager"),
    f = t("GameUtils"),
    h = t("LevelData"),
    d = t("EffectBudBoomLoading"),
    g = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.show = function (t) {
                return r(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        s;
                    return a(this, function (a) {
                        switch (a.label) {
                            case 0:
                                for (e = [t], s = -100; s < c.GlobalDefines.ScreenHeight + 100; s += 200)
                                    for (n = -100; n < c.GlobalDefines.ScreenWidth + 100; n += 200)
                                        e.push(cc.v2(n + u.Utils.randomInt(-35, 35), s + u.Utils.randomInt(-35, 35)));
                                return l.Logger.debug("[BattleSceneLoading show] len:", e.length),
                                    e.sort(function (e, n) {
                                        var o = e.sub(t).len(),
                                            i = n.sub(t).len();
                                        return Math.abs(o) - Math.abs(i)
                                    }),
                                    o = u.Utils.randomInt(1, h.Tile_Color.Length),
                                    d.default.Boom(o, e[0], !0),
                                    [4, u.Utils.waiting(400)];
                            case 1:
                                for (a.sent(), f.GameUtils.playSFX("leaves_merge"), i = [], r = function (t) {
                                    var n = ++o % 4 + 1,
                                        r = 20 * (t - 1),
                                        a = new Promise(function (o) {
                                            setTimeout(function () {
                                                d.default.Boom(n, e[t], !1),
                                                    o()
                                            }, r)
                                        });
                                    i.push(a)
                                }, s = 1; s < e.length; s++)
                                    r(s);
                                return [4, Promise.all(i)];
                            case 2:
                                return a.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.close = function (t) {
                return void 0 === t && (t = s.SceneType.Stage),
                    r(this, void 0, void 0, function () {
                        var e,
                            n,
                            o,
                            i,
                            r,
                            c;
                        return a(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return p.ui.showLoading(),
                                        [4, new Promise(function (e) {
                                            var n = setInterval(function () {
                                                s.sm.curScene.getType() == t && (clearInterval(n), e())
                                            }, 60)
                                        })];
                                case 1:
                                    for (a.sent(), f.GameUtils.playSFX("leaves_move"), e = p.ui.getLayer(p.UILayer.Effect2), n = [], (o = f.GameUtils.effectLayer.getComponentsInChildren(d.default)).push(e.getComponentInChildren(d.default)), i = o.length, r = 0; r < i; r++)
                                        c = o[r].close(i - r - 1), n.push(c);
                                    return [4, Promise.all(n)];
                                case 2:
                                    return a.sent(),
                                        p.ui.hideLoading(),
                                        [2]
                            }
                        })
                    })
            },
            e
    }
        (Object);
n.default = g;