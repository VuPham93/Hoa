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
var s = t("BasePanel"),
    l = t("NumberAction"),
    u = t("SwitchNode"),
    p = t("DataManager"),
    f = t("SceneManager"),
    h = t("AniUtil"),
    d = t("Utils"),
    g = t("ChapterScene"),
    y = t("UIManager"),
    _ = t("CommonUtils"),
    m = t("GameUtils"),
    v = t("StageScene"),
    b = t("BattleSceneLoading"),
    w = cc._decorator,
    S = w.ccclass,
    C = w.property,
    O = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.gp_layout = null,
                e.gp_score = null,
                e.lb_score = null,
                e.gp_words = null,
                e.ani_player = null,
                e.btn_ok = null,
                e.btn_close = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.Preload = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = this,
                                    [4, d.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return c(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return this.prefab ? [3, 2] : [4, this.Preload()];
                            case 1:
                                o.sent(),
                                    o.label = 2;
                            case 2:
                                return (e = cc.instantiate(this.prefab)).getComponent(n).init(t),
                                    m.GameUtils.popView(e),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (t) {
                this.levelData = t,
                    p.dm.player.clearPrefabItem();
                var e = this.levelData.starNum,
                    n = p.dm.stage.getStageStar(this.levelData.lId);
                e > n && (p.dm.stage.setStageStar(this.levelData.lId, this.levelData.starNum), p.dm.starChallenge.tryAddMyNewStar(e - n)),
                    p.dm.stage.justFailed = !1,
                    h.AniUtil.aniWillShow(this.gp_content);
                for (var o = 0; o < this.gp_layout.childrenCount; o++)
                    h.AniUtil.aniWillShow(this.gp_layout.children[o]);
                this.btn_close.active = !1
            },
            e.prototype.onLoad = function () {
                m.GameUtils.playOGG("level_completed_win"),
                    this.aniShow(),
                    _.CommonUtils.ShowX(p.dm.adids.XAdInfo.StageWin.xid)
            },
            e.prototype.aniShow = function () {
                var t = this;
                cc.tween(this.node).delay(.2).call(function () {
                    h.AniUtil.aniShow(t.gp_content)
                }).delay(.25).call(function () {
                    h.AniUtil.aniShow(t.gp_score)
                }).delay(.15).call(function () {
                    l.default.numberTo(t.lb_score.node, t.levelData.score)
                }).delay(.15).call(function () {
                    h.AniUtil.aniShow(t.ani_player.node)
                }).delay(.15).call(function () {
                    t.ani_player.play()
                }).delay(2).call(function () {
                    h.AniUtil.aniShow(t.gp_words)
                }).delay(.15).call(function () {
                    h.AniUtil.aniShow(t.btn_ok)
                }).delay(.15).call(function () {
                    return a(t, void 0, void 0, function () {
                        var t,
                            e,
                            n;
                        return c(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.aniWords()];
                                case 1:
                                    return o.sent(),
                                        [4, d.Utils.waiting(200)];
                                case 2:
                                    return o.sent(),
                                        p.dm.stage.newStarNum && ((t = cc.instantiate(this.gp_words)).name = "new_star", e = this.gp_words.convertToWorldSpaceAR(cc.v2(0, 0)), n = y.ui.getLayer(y.UILayer.Effect2), t.position = n.convertToNodeSpaceAR(e), t.parent = n),
                                        this.btn_close.active = !0,
                                        h.AniUtil.aniShow(this.btn_close),
                                        h.AniUtil.aniShaking(this.btn_close.children[0]),
                                        [2]
                            }
                        })
                    })
                }).start()
            },
            e.prototype.aniWords = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (!cc.isValid(this.node))
                                    return [2];
                                t = 0,
                                    e.label = 1;
                            case 1:
                                return t < 3 ? t < this.levelData.starNum ? (m.GameUtils.playSFX("star_reward"), this.aniFlip(this.gp_words.children[t].getComponent(u.default), t), [4, d.Utils.waiting(200)]) : [3, 3] : [3, 4];
                            case 2:
                                e.sent(),
                                    e.label = 3;
                            case 3:
                                return t++,
                                    [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.aniFlip = function (t) {
                cc.tween(t.node).to(.2, {
                    scaleX: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    t.showIndex = 0
                }).to(.2, {
                    scaleX: 1
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            e.prototype.onBtnCloseClicked = function () {
                d.Utils.btnLock() || (m.GameUtils.playSoundBtnClicked(), this.btn_ok.getComponent(cc.Button).interactable = !1, p.dm.player.energy += 1, f.sm.switchScene(g.default, {
                    curLevel: this.levelData.lId + 1
                }))
            },
            e.prototype.onBtnOkClicked = function () {
                d.Utils.btnLock() || (m.GameUtils.playSoundBtnClicked(), this.btn_close.getComponent(cc.Button).interactable = !1, p.dm.dailyTask.curSeed && p.dm.dailyTask.newItemNum > 0 && (p.dm.dailyTask.curNum += p.dm.dailyTask.newItemNum, p.dm.dailyTask.newItemNum = 0), this.gotoLevel(this.btn_ok.convertToWorldSpaceAR(cc.v2(0, 0))))
            },
            e.prototype.gotoLevel = function (t) {
                return a(this, void 0, void 0, function () {
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, b.default.show(t)];
                            case 1:
                                return e.sent(),
                                    f.sm.switchScene(v.default, {
                                        level: this.levelData.lId + 1
                                    }, !1),
                                    [4, b.default.close()];
                            case 2:
                                return e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Prefab_Name = "prefab/game/battle/ui/stage_win_panel",
            e.prefab = null,
            r([C(cc.Node)], e.prototype, "gp_content", void 0),
            r([C(cc.Node)], e.prototype, "gp_layout", void 0),
            r([C(cc.Node)], e.prototype, "gp_score", void 0),
            r([C(cc.Label)], e.prototype, "lb_score", void 0),
            r([C(cc.Node)], e.prototype, "gp_words", void 0),
            r([C(cc.Animation)], e.prototype, "ani_player", void 0),
            r([C(cc.Node)], e.prototype, "btn_ok", void 0),
            r([C(cc.Node)], e.prototype, "btn_close", void 0),
            n = r([S], e)
    }
        (s.default);
n.default = O;