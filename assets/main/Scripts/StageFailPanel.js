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
    l = t("RewardPanel"),
    u = t("RewardUtils"),
    p = t("SwitchNode"),
    f = t("Toast"),
    h = t("DataManager"),
    d = t("Jumpjump3d"),
    g = t("GameManager"),
    y = t("PlatformManager"),
    _ = t("SceneManager"),
    m = t("AniUtil"),
    v = t("Utils"),
    b = t("ChapterScene"),
    w = t("ShareUtil"),
    S = t("TopResView"),
    C = t("UIManager"),
    O = t("CommonUtils"),
    E = t("BattleConfig"),
    T = t("DailyTaskIco"),
    k = t("GameUtils"),
    P = t("LevelData"),
    D = t("TileData"),
    G = t("StageReadyPanel"),
    B = t("TigerView"),
    U = cc._decorator,
    R = U.ccclass,
    M = U.property,
    x = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.gp_layout = null,
                e.switch_mode = null,
                e.ico_step = null,
                e.btn_close = null,
                e.btn_ad = null,
                e.lb_price = null,
                e.gp_role = null,
                e.ani_role = null,
                e.gp_dialog = null,
                e.ico_task = null,
                e.lb_num_dailytask_item = null,
                e.node_bucket = null,
                e.gp_fail_item = null,
                e.tiger = null,
                e.switch_ico = null,
                e.willExit = !1,
                e.timesClosed = 0,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    i;
                                return c(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return k.GameUtils.popLayer.getComponentInChildren(n) ? (o(!1), [2]) : [4, v.Utils.loadPefab(this.Prefab_Name)];
                                        case 1:
                                            return e = r.sent(),
                                                (i = cc.instantiate(e)).getComponent(n).init(t, o),
                                                k.GameUtils.popView(i),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e) {
                this.battleLogic = t,
                    this.next = e,
                    h.dm.stage.justFailed = !0,
                    this.gp_fail_item.active = !1,
                    m.AniUtil.aniWillShow(this.gp_fail_item),
                    m.AniUtil.aniWillShow(this.gp_content);
                for (var n = 0; n < this.gp_layout.childrenCount; n++)
                    m.AniUtil.aniWillShow(this.gp_layout.children[n]);
                m.AniUtil.aniWillShow(this.btn_close),
                    this.btn_close.active = !1,
                    this.initGameMode(),
                    this.btn_ad.active = this.battleLogic.levelData.times_relife_free > 0,
                    this.lb_price.string = this.price + "",
                    this.initRole(),
                    this.refreshCostIco()
            },
            e.prototype.refreshCostIco = function () {
                if (h.dm.player.times_freestep_share > 0) {
                    var t = this.battleLogic.levelData.lId % 2;
                    this.switch_ico.showIndex = t,
                        1 == t && h.dm.player.times_freestep_share--
                } else
                    this.switch_ico.showIndex = 0
            },
            Object.defineProperty(e.prototype, "price", {
                get: function () {
                    for (var t = E.BattleConfig.Price.Relife, e = 0; e < this.battleLogic.levelData.times_relife_coin; e++)
                        t *= E.BattleConfig.Price.RelifeRate;
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.initRole = function () {
                this.gp_role.x = 0,
                    this.gp_dialog.active = !1,
                    h.dm.dailyTask.curSeed && h.dm.dailyTask.newItemNum > 0 && (this.ico_task.init(h.dm.dailyTask.curSeed), this.lb_num_dailytask_item.string = "x" + h.dm.dailyTask.newItemNum)
            },
            e.prototype.initGameMode = function () {
                var t = P.Game_Mode[this.battleLogic.levelData.properties.game_mode];
                switch (this.switch_mode.showIndex = t, t) {
                    case P.Game_Mode.REACH_SCORE_TARGET:
                        var e = this.battleLogic.levelData.properties.star_1 - this.battleLogic.levelData.score;
                        this.switch_mode.node.children[t].getComponentInChildren(cc.Label).string = "Thiếu " + e + " điểm nữa\nlà đủ điểm qua màn rồi!";
                        break;
                    case P.Game_Mode.SPRING_CLEANING:
                        var n = this.battleLogic.levelData.getCurComptNum(D.Tile_Component_Type.weed);
                        this.switch_mode.node.children[t].getComponentInChildren(cc.Label).string = "Thêm " + n + " bụi cỏ nữa\nlà thắng rồi!";
                        break;
                    case P.Game_Mode.COLLECT_FLOWERS:
                        this.switch_mode.node.children[t].getComponentInChildren(cc.Label).string = "Hái thêm " + this.battleLogic.levelData.properties.needNum + " bông hoa nữa\nlà thắng rồi！";
                        break;
                    case P.Game_Mode.REMOVE_ALL_BIG_BUDS:
                        n = this.battleLogic.levelData.getCurComptNum(D.Tile_Component_Type.big_bud),
                            this.switch_mode.node.children[t].getComponentInChildren(cc.Label).string = "Bạn còn thiếu " + n + "nụ hoa nữa\nlà qua màn rồi"
                }
            },
            e.prototype.onLoad = function () {
                k.GameUtils.playOGG("level_completed_fail"),
                    y.pm.trackEventPost(y.TRACK_EVENT_NAME.STAGE_FAIL, {
                        stage: this.battleLogic.levelData.lId
                    }),
                    this.aniShow(),
                    O.CommonUtils.ShowX(h.dm.adids.XAdInfo.StageFail.xid)
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    S.topres.aniShowResult()
            },
            e.prototype.onDisable = function () {
                S.topres.aniShowBack(),
                    t.prototype.onDisable.call(this),
                    this.next && this.next(this.willExit)
            },
            e.prototype.aniShow = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return m.AniUtil.aniShow(this.gp_content),
                                    [4, v.Utils.waiting(150)];
                            case 1:
                                e.sent(),
                                    t = 0,
                                    e.label = 2;
                            case 2:
                                return t < this.gp_layout.childrenCount ? (m.AniUtil.aniShow(this.gp_layout.children[t]), [4, v.Utils.waiting(150)]) : [3, 5];
                            case 3:
                                e.sent(),
                                    e.label = 4;
                            case 4:
                                return t++,
                                    [3, 2];
                            case 5:
                                return this.ani_role.play(),
                                    [4, v.Utils.waiting(100)];
                            case 6:
                                return e.sent(),
                                    this.btn_close.active = !0,
                                    m.AniUtil.aniShow(this.btn_close),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBtnCloseClicked = function () {
                v.Utils.btnLock() || (k.GameUtils.playSoundBtnClicked(), h.dm.dailyTask.curSeed && 0 != h.dm.dailyTask.newItemNum && 0 == this.timesClosed ? (k.GameUtils.playSFX("blossom_pop_28"), this.node_bucket.active = !1, this.gp_dialog.scale = 0, this.gp_dialog.active = !0, cc.tween(this.gp_role).to(.3, {
                    x: 160
                }, {
                    easing: cc.easing.sineOut
                }).start(), cc.tween(this.gp_dialog).to(.3, {
                    scale: 1
                }, {
                    easing: cc.easing.backOut
                }).start(), this.timesClosed++) : this.tryExitToChapter())
            },
            e.prototype._exit = function () {
                h.dm.player.clearPrefabItem(),
                    h.dm.dailyTask.newItemNum = 0,
                    this.willExit = !0,
                    _.sm.switchScene(b.default, {
                        curLevel: this.battleLogic.levelData.lId
                    })
            },
            e.prototype.tryExitToChapter = function () {
                var t = this;
                h.dm.player.clearPrefabItem(),
                    this.itemRdIdx = h.dm.stage.randomItemType,
                    this.gp_content.active = !1,
                    this.gp_fail_item.active = !0,
                    m.AniUtil.aniShow(this.gp_fail_item, function () {
                        t.tiger.begin()
                    })
            },
            e.prototype.onBtnCloseItemClicked = function () {
                v.Utils.btnLock() || (k.GameUtils.playSoundBtnClicked(), this._exit())
            },
            e.prototype.onBtnRestartClicked = function () {
                var t = this;
                if (!v.Utils.btnLock()) {
                    var e;
                    switch (k.GameUtils.playSoundBtnClicked(), this.itemRdIdx) {
                        case u.RewardType.Shovel_Prefab:
                            e = h.dm.adids.AdInfo.Shovel;
                            break;
                        case u.RewardType.Kettle_Prefab:
                            e = h.dm.adids.AdInfo.Kettle;
                            break;
                        case u.RewardType.Brush_Prefab:
                            e = h.dm.adids.AdInfo.Brush
                    }
                    k.GameUtils.loadAndShowVideoAd(e, function () {
                        var e = {
                            reward: [{
                                type: t.itemRdIdx,
                                count: 1,
                                ico: t.tiger.ico
                            }
                            ],
                            next: function () {
                                return a(t, void 0, void 0, function () {
                                    return c(this, function () {
                                        return this.willExit = !0,
                                            G.default.show(h.dm.player.curLevel),
                                            [2]
                                    })
                                })
                            },
                            needClick: !0,
                            double: !1
                        };
                        l.default.show(e),
                            h.dm.stage.refreshRandomItemType()
                    }, {
                        stage: this.battleLogic.levelData.lId
                    })
                }
            },
            e.prototype.onBtnCoinClicked = function () {
                v.Utils.btnLock() || (k.GameUtils.playSoundBtnClicked(), h.dm.player.coin < this.price ? k.GameUtils.showToast_noCoin() : (y.pm.trackEventPost(y.TRACK_EVENT_NAME.STEP_COIN, {
                    stage: this.battleLogic.levelData.lId
                }), h.dm.player.coin -= this.price, this.battleLogic.levelData.steps += E.BattleConfig.Step_Num_Add, this.battleLogic.levelData.times_relife_coin++, this.boomAndClose()))
            },
            e.prototype.onBtnAdClicked = function () {
                var t = this;
                if (!v.Utils.btnLock())
                    if (k.GameUtils.playSoundBtnClicked(), this.battleLogic.levelData.times_relife_free < 1)
                        k.GameUtils.showToast("Số lần hồi sinh miễn phí trong trò chơi này đã được sử dụng hết", f.TipIco.Error);
                    else {
                        var e = function () {
                            t.battleLogic.levelData.steps += E.BattleConfig.Step_Num_Add,
                                t.battleLogic.levelData.times_relife_free--,
                                t.battleLogic.levelData.times_relife_free <= 0 && cc.tween(t.btn_ad).to(.2, {
                                    scale: 0
                                }, {
                                    easing: cc.easing.sineIn
                                }).start(),
                                t.boomAndClose()
                        };
                        0 == this.switch_ico.showIndex ? k.GameUtils.loadAndShowVideoAd(h.dm.adids.AdInfo.Step, function () {
                            y.pm.trackEventPost(y.TRACK_EVENT_NAME.STEP_AD, {
                                stage: t.battleLogic.levelData.lId
                            }),
                                e()
                        }, {
                            stage: this.battleLogic.levelData.lId
                        }) : w.ShareUtil.share([w.ShareUtil.Share_Point_Steps]).then(function () {
                            y.pm.trackEventPost(y.TRACK_EVENT_NAME.STEP_SHARE, {
                                stage: t.battleLogic.levelData.lId
                            }),
                                e()
                        }).catch(function () {
                            k.GameUtils.showToast("Chia sẻ không thành công, vui lòng thử lại", f.TipIco.Error)
                        })
                    }
            },
            e.prototype.boomAndClose = function () {
                var t = this;
                C.ui.showLoading(),
                    cc.tween(this.ico_step).to(.2, {
                        scale: .5
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        t.resBoom(t.ico_step)
                    }).to(.2, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).delay(1.2).call(function () {
                        C.ui.hideLoading(),
                            t.close()
                    }).start()
            },
            e.prototype.resBoom = function (t) {
                k.GameUtils.playSFX("coin");
                var e = this.battleLogic.battleUI.stepBar.ico_step.convertToWorldSpaceAR(cc.v2(0, 0)),
                    n = t.convertToWorldSpaceAR(cc.v2(0, 0));
                k.GameUtils.addEffBoom(n);
                for (var o = [g.default.instance.resList.frames_reward_static[u.RewardType.Step]], i = 0; i < 5; i++) {
                    var r = o[v.Utils.randomInt(0, o.length)];
                    d.default.createBySpr(void 0, r, n, 0, 1, e, u.RewardType.Step)
                }
            },
            e.Prefab_Name = "prefab/game/battle/ui/stage_fail_panel",
            r([M(cc.Node)], e.prototype, "gp_content", void 0),
            r([M(cc.Node)], e.prototype, "gp_layout", void 0),
            r([M(p.default)], e.prototype, "switch_mode", void 0),
            r([M(cc.Node)], e.prototype, "ico_step", void 0),
            r([M(cc.Node)], e.prototype, "btn_close", void 0),
            r([M(cc.Node)], e.prototype, "btn_ad", void 0),
            r([M(cc.Label)], e.prototype, "lb_price", void 0),
            r([M(cc.Node)], e.prototype, "gp_role", void 0),
            r([M(cc.Animation)], e.prototype, "ani_role", void 0),
            r([M(cc.Node)], e.prototype, "gp_dialog", void 0),
            r([M(T.default)], e.prototype, "ico_task", void 0),
            r([M(cc.Label)], e.prototype, "lb_num_dailytask_item", void 0),
            r([M(cc.Node)], e.prototype, "node_bucket", void 0),
            r([M(cc.Node)], e.prototype, "gp_fail_item", void 0),
            r([M(B.default)], e.prototype, "tiger", void 0),
            r([M(p.default)], e.prototype, "switch_ico", void 0),
            n = r([R], e)
    }
        (s.default);
n.default = x;