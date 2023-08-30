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
var s = t("SceneLoadingUI"),
    l = t("GlobalDefines"),
    u = t("DataManager"),
    p = t("GameManager"),
    f = t("NetworkManager"),
    PlatformManager = t("PlatformManager"),
    d = t("PlatformUtil"),
    g = t("SceneManager"),
    y = t("logger"),
    _ = t("Utils"),
    m = t("StageScene"),
    v = t("BattleSceneLoading"),
    b = t("EffectBudBoomLoading"),
    w = t("ChapterScene"),
    S = t("CommonUtils"),
    C = t("GameConfig"),
    O = cc._decorator,
    E = O.ccclass,
    T = O.property,
    k = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_ver = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.GetType = function () {
                return g.SceneType.Loading
            },
            e.prototype.startLoading = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this.lb_ver.string = "v" + C.GameConfig.VER_RELEASE + (C.GameConfig.isDebug ? " Bản thử nghiệm" : ""),
                                    p.default.instance.isInited = !1,
                                    g.sm.curScene = this,
                                    [4, this.initScene()];
                            case 1:
                                return t.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.getNode = function () {
                return this.node
            },
            e.prototype.login = function () {
                return a(this, void 0, void 0, function () {
                    var t = this;
                    return c(this, function () {
                        return [2, new Promise(function (e) {
                            return a(t, void 0, void 0, function () {
                                var t,
                                    n;
                                return c(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            o.trys.push([0, 4, , 5]),
                                                t = f.default.TIMES_RETRY,
                                                o.label = 1;
                                        case 1:
                                            return t > 0 ? [4, PlatformManager.pm.weakLogin(p.default.instance.entryData.query).then(function (n) {
                                                t = 0,
                                                    u.dm.loginRes = n,
                                                    e(l.LoadStatus.Success)
                                            }).catch(function (e) {
                                                if (--t <= 0)
                                                    throw e
                                            })] : [3, 3];
                                        case 2:
                                            return o.sent(),
                                                [3, 1];
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            return n = o.sent(),
                                                y.Logger.debug("[Loading ladScene] 登录异常：", n),
                                                [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.loadRes = function () {
                return a(this, void 0, void 0, function () {
                    var t = this;
                    return c(this, function () {
                        return [2, new Promise(function (e) {
                            return a(t, void 0, void 0, function () {
                                return c(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, s.default.preLoad()];
                                        case 1:
                                            return t.sent(),
                                                s.default.show(),
                                                [4, p.default.instance.initGame()];
                                        case 2:
                                            return t.sent(),
                                                e(l.LoadStatus.Success),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.onShareIn = function () {
                return a(this, void 0, Promise, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.initScene = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o = this;
                    return c(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if (p.default.instance.isInited = !1, !d.PlatformUtil.NEED_LOAD_GAMESETTING)
                                    return [3, 4];
                                t = l.LoadStatus.Doing,
                                    i.label = 1;
                            case 1:
                                return [4, u.dm.gamesetting.loadGameSetting().then(function (e) {
                                    t = e
                                })];
                            case 2:
                                i.sent(),
                                    i.label = 3;
                            case 3:
                                if (t == l.LoadStatus.Doing)
                                    return [3, 1];
                                i.label = 4;
                            case 4:
                                if (u.dm.gamesetting.reviewing && (this.lb_ver.node.color = cc.Color.YELLOW), y.Logger.debug("PlatformUtil.NEED_LOGIN"), !d.PlatformUtil.NEED_LOGIN)
                                    return [3, 9];
                                e = l.LoadStatus.Doing,
                                    i.label = 5;
                            case 5:
                                return [4, this.login().then(function (t) {
                                    e = t
                                })];
                            case 6:
                                i.sent(),
                                    i.label = 7;
                            case 7:
                                if (e == l.LoadStatus.Doing)
                                    return [3, 5];
                                i.label = 8;
                            case 8:
                                if (e == l.LoadStatus.GameOut)
                                    return [2];
                                i.label = 9;
                            case 9:
                                n = l.LoadStatus.Doing,
                                    i.label = 10;
                            case 10:
                                return [4, this.loadRes().then(function (t) {
                                    n = t,
                                        S.CommonUtils.GameLogin(!1, void 0)
                                })];
                            case 11:
                                i.sent(),
                                    i.label = 12;
                            case 12:
                                if (n == l.LoadStatus.Doing)
                                    return [3, 10];
                                i.label = 13;
                            case 13:
                                return n == l.LoadStatus.GameOut ? [2] : (u.dm.sign.timeGameStart = _.Utils.getCurTime(), y.Logger.debug("loading end"), [4, this.onShareIn()]);
                            case 14:
                                return i.sent(),
                                    setTimeout(function () {
                                        return a(o, void 0, void 0, function () {
                                            return c(this, function (t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return S.CommonUtils.ShowX(u.dm.adids.XAdInfo.GameEnter.xid),
                                                            [4, b.default.TryPreload()];
                                                    case 1:
                                                        return t.sent(),
                                                            [4, v.default.show(cc.v2(l.GlobalDefines.ScreenWidth / 2, l.GlobalDefines.ScreenHeight / 2))];
                                                    case 2:
                                                        return t.sent(),
                                                            0 == u.dm.player.level && u.dm.player.energy > 0 ? (u.dm.player.energy -= 1, g.sm.switchScene(m.default, void 0, !0), [4, v.default.close(g.SceneType.Stage)]) : [3, 4];
                                                    case 3:
                                                        return t.sent(),
                                                            [3, 6];
                                                    case 4:
                                                        return g.sm.switchScene(w.default, void 0, !0),
                                                            [4, v.default.close(g.SceneType.Chapter)];
                                                    case 5:
                                                        t.sent(),
                                                            t.label = 6;
                                                    case 6:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }, 0),
                                    p.default.instance.isInited = !0,
                                    [2]
                        }
                    })
                })
            },
            e.prototype.getType = function () {
                return n.GetType()
            },
            e.prototype.removeScene = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.Prefab_Name = "prefab/game/scene/loading_scene",
            r([T(cc.Label)], e.prototype, "lb_ver", void 0),
            n = r([E], e)
    }
        (g.GameScene);
n.default = k;