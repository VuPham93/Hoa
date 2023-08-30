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
var s = t("AudioManager"),
    l = t("DataManager"),
    u = t("G"),
    p = t("GlobalEvents"),
    f = t("SceneManager"),
    h = t("logger"),
    d = t("RedDotManager"),
    g = t("TopResView"),
    y = t("CommonUtils"),
    _ = t("BattleConfig"),
    m = t("BattleEvents"),
    v = t("BattleLogic"),
    b = t("EffectBudBigBoom"),
    w = t("EffectBudBoom"),
    S = t("EffectBudBoomLoading"),
    C = t("ScoreToast"),
    O = t("StageCompletePanel"),
    E = cc._decorator,
    T = E.ccclass,
    k = E.property,
    P = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_banner = null,
                e.battleLogic = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.GetType = function () {
                return f.SceneType.Stage
            },
            e.prototype.getType = function () {
                return n.GetType()
            },
            e.prototype.getNode = function () {
                return this.node
            },
            e.prototype.initScene = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r;
                    return c(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return u.GlobalEvent.dispatchEvent(new m.EventOnBattleEnter),
                                    this.battleLogic = this.node.getComponentInChildren(v.default),
                                    g.topres.aniShowBattle(),
                                    w.default.Preload(),
                                    b.default.Preload(),
                                    S.default.TryPreload(),
                                    C.default.Preload(),
                                    O.default.Preload(),
                                    l.dm.stage.newStarNum = void 0,
                                    e = t ? t.level : l.dm.player.level + 1,
                                    l.dm.player.curLevel = e,
                                    [4, this.battleLogic.refreshLevel(e)];
                            case 1:
                                for (a.sent(), d.red.dispatchAll(), i = 1; i <= 29; i++)
                                    s.sd.preloadAudioClip("blossom_pop_" + i);
                                for (n in this.battleLogic.levelData.comptNum)
                                    if (this.battleLogic.levelData.comptNum[n] > 0) {
                                        if (!(o = _.BattleConfig.Sounds_Preload[n]))
                                            continue;
                                        for (i = 0; i < o.length; i++)
                                            r = o[i], s.sd.preloadAudioClip(r), h.Logger.debug("[StageScene initScene] sounds pareload:", r)
                                    }
                                return [2]
                        }
                    })
                })
            },
            e.prototype.removeScene = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return u.GlobalEvent.dispatchEvent(new m.EventOnBattleOut),
                            [2]
                    })
                })
            },
            e.prototype.onEnable = function () {
                u.GlobalEvent.on(m.EventOnBattleStart.NAME, this.onEventOnBattleStart, this),
                    u.GlobalEvent.on(p.EventOnShow.NAME, this.onEventWXOnShow, this)
            },
            e.prototype.onDisable = function () {
                u.GlobalEvent.off(m.EventOnBattleStart.NAME, this.onEventOnBattleStart, this),
                    u.GlobalEvent.off(p.EventOnShow.NAME, this.onEventWXOnShow, this)
            },
            e.prototype.onEventOnBattleStart = function () {
                setTimeout(function () {
                    s.sd.playBGM("sounds/silence", !0)
                }, 2e3)
            },
            e.prototype.onEventWXOnShow = function () {
                y.CommonUtils.ShowX()
            },
            e.Prefab_Name = "prefab/game/scene/stage_battle_scene",
            r([k(cc.Node)], e.prototype, "gp_banner", void 0),
            n = r([T], e)
    }
        (f.GameScene);
n.default = P;