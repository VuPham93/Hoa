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
    d = t("SceneManager"),
    g = t("AniUtil"),
    y = t("Utils"),
    _ = t("ChapterScene"),
    m = t("BundleResourceList"),
    v = t("TopResView"),
    b = t("UIManager"),
    w = t("BattleConfig"),
    S = t("GameUtils"),
    C = t("StageScene"),
    O = t("BattleSceneLoading"),
    E = t("GetItemPanel"),
    T = t("TigerView"),
    k = cc._decorator,
    P = k.ccclass,
    D = k.property,
    G = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.slot_fan = null,
                e.prefabs_fan = [],
                e.gp_title = null,
                e.gp_content = null,
                e.lb_stage = null,
                e.gp_layout = null,
                e.gp_mode = null,
                e.switch_mode = null,
                e.gp_star = null,
                e.gp_btns = null,
                e.btn_close = null,
                e.ico_energy = null,
                e.lb_gamestart = null,
                e.flag_hard = null,
                e.switch_tile = null,
                e.btn_item_free = null,
                e.tiger = null,
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
                                    [4, y.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        o;
                    return c(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return n.working ? [2] : (n.working = !0, e = S.GameUtils.getJsonConfig(m.Idx_Json.level_config)[t - 1], this.prefab ? [3, 2] : [4, this.Preload()]);
                            case 1:
                                i.sent(),
                                    i.label = 2;
                            case 2:
                                return (o = cc.instantiate(this.prefab)).getComponent(n).init(t, e),
                                    S.GameUtils.popView(o),
                                    [2]
                        }
                    })
                })
            },
            Object.defineProperty(e.prototype, "ani_fan", {
                get: function () {
                    return this.slot_fan.getComponentInChildren(cc.Animation)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (t, e) {
                this.lId = t,
                    this.gameMode = e[0],
                    this.isHard = 1 == e[1],
                    this.lb_gamestart.string = t <= w.BattleConfig.Stage.Max_Level_Open ? "Bắt đầu" : "Chờ cập nhật",
                    this.ico_energy.active = t <= w.BattleConfig.Stage.Max_Level_Open,
                    this.lb_stage.string = "Màn " + t,
                    this.switch_mode.showIndex = this.gameMode,
                    g.AniUtil.aniWillShow(this.gp_title),
                    g.AniUtil.aniWillShow(this.gp_content);
                for (var n = 0; n < this.gp_layout.childrenCount; n++)
                    g.AniUtil.aniWillShow(this.gp_layout.children[n]);
                this.btn_close.active = !1;
                var o = this.gp_star.getComponentsInChildren(p.default),
                    i = h.dm.stage.getStageStar(t);
                for (n = 0; n < o.length; n++)
                    o[n].showIndex = n < i ? 0 : 1;
                cc.instantiate(this.prefabs_fan[this.isHard ? 1 : 0]).parent = this.slot_fan,
                    this.flag_hard.active = !1,
                    this.switch_tile.showIndex = this.isHard ? 1 : 0,
                    this.showItemBtn = (this.isHard || h.dm.stage.justFailed) && h.dm.player.prefabItemNum < 1,
                    this.showItemBtn ? this.btn_item_free.active = !0 : this.btn_item_free.active = !1
            },
            e.prototype.onLoad = function () {
                v.topres.aniShowReady(),
                    this.aniShow()
            },
            e.prototype.onDisable = function () {
                n.working = !1,
                    t.prototype.onDisable.call(this),
                    v.topres.aniShowBack()
            },
            e.prototype.aniShow = function () {
                var t = this;
                S.GameUtils.playSFX("merge_buds", ".mp3", .3),
                    cc.tween(this.node).call(function () {
                        g.AniUtil.aniShow(t.gp_content)
                    }).delay(.15).call(function () {
                        g.AniUtil.aniShow(t.gp_title)
                    }).delay(.15).call(function () {
                        g.AniUtil.aniShow(t.gp_mode)
                    }).delay(.15).call(function () {
                        g.AniUtil.aniShow(t.gp_star)
                    }).delay(.15).call(function () {
                        g.AniUtil.aniShow(t.gp_btns, function () {
                            t.showItemBtn && t.tiger.begin()
                        })
                    }).delay(.15).call(function () {
                        t.btn_close.active = !0,
                            g.AniUtil.aniShow(t.btn_close),
                            t.isHard && (t.flag_hard.opacity = 0, t.flag_hard.scale = 3, t.flag_hard.active = !0, cc.tween(t.flag_hard).to(.3, {
                                opacity: 255,
                                scale: 1
                            }, {
                                easing: cc.easing.sineIn
                            }).call(function () {
                                S.GameUtils.playSFX("blossom_pop_29"),
                                    cc.tween(t.gp_content).to(.2, {
                                        scale: .95
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).to(.2, {
                                        scale: 1
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start()
                            }).start())
                    }).start()
            },
            e.prototype.aniClose = function (t) {
                var e = this;
                cc.tween(this.node).call(function () {
                    g.AniUtil.aniHide(e.btn_close, void 0)
                }).delay(.1).call(function () {
                    g.AniUtil.aniHide(e.gp_btns, void 0)
                }).delay(.1).call(function () {
                    g.AniUtil.aniHide(e.gp_star, void 0)
                }).delay(.1).call(function () {
                    g.AniUtil.aniHide(e.gp_mode, void 0)
                }).delay(.1).call(function () {
                    g.AniUtil.aniHide(e.gp_title, void 0)
                }).delay(.1).call(function () {
                    e.flag_hard.active = !1,
                        S.GameUtils.playSFX("merge_buds", ".mp3", .3),
                        e.ani_fan.once(cc.Animation.EventType.FINISHED, t.bind(e), e),
                        e.ani_fan.play("ani_fan_close")
                }).start()
            },
            e.prototype.onBtnCloseClicked = function () {
                y.Utils.btnLock() || (S.GameUtils.playSoundBtnClicked(), this.aniClose(this.close))
            },
            e.prototype.close = function () {
                t.prototype.close.call(this),
                    d.sm.curScene.getType() != d.SceneType.Chapter && d.sm.switchScene(_.default)
            },
            e.prototype.onBtnOkClicked = function () {
                var t = this;
                if (!y.Utils.btnLock())
                    if (S.GameUtils.playSoundBtnClicked(), this.lId > w.BattleConfig.Stage.Max_Level_Open)
                        S.GameUtils.showToast("Hãy theo dõi để biết thêm cấp độ！", f.TipIco.Tip);
                    else if (h.dm.player.energy > 0)
                        h.dm.player.isInfinte || h.dm.player.energy--, this.aniEnergy();
                    else {
                        S.GameUtils.showToast_noEnergy();
                        var e = w.BattleConfig.Option_Item_Get[u.RewardType.Energy];
                        E.default.show(void 0, e, function () {
                            t.init(t.lId, [t.gameMode, t.isHard ? 1 : 0]),
                                t.aniShow()
                        })
                    }
            },
            e.prototype.aniEnergy = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        u = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return b.ui.showLoading(),
                                    t = v.topres.getSubView(w.TopresSubType.Energy),
                                    (e = new cc.Node).position = t.node_icon.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    S.GameUtils.addEffectAR(e),
                                    (n = cc.instantiate(t.node_icon)).active = !0,
                                    n.position = cc.v2(0, 0),
                                    n.parent = e,
                                    o = this.ico_energy.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    i = S.GameUtils.effectLayer.convertToNodeSpaceAR(o),
                                    r = i.y - e.y,
                                    cc.tween(t.node_icon).to(.2, {
                                        scaleY: 1.25,
                                        scaleX: .9,
                                        y: -30
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).to(.2, {
                                        scale: 1,
                                        y: 0
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start(),
                                    a = [],
                                    s = new Promise(function (t) {
                                        cc.tween(n).to(.6, {
                                            y: 1.15 * r,
                                            scale: 2
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).to(.3, {
                                            y: .96 * r,
                                            scale: 1.5
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).to(.1, {
                                            y: r,
                                            scale: 1
                                        }, {
                                            easing: cc.easing.sineIn
                                        }).call(function () {
                                            S.GameUtils.playSFX("ding"),
                                                n.getComponent(cc.Sprite).dstBlendFactor = cc.macro.BlendFactor.ONE
                                        }).to(.5, {
                                            scale: 4,
                                            opacity: 0
                                        }, {
                                            easing: cc.easing.sineOut
                                        }).call(function () {
                                            t()
                                        }).start()
                                    }),
                                    a.push(s),
                                    l = new Promise(function (t) {
                                        cc.tween(e).to(1, {
                                            x: i.x
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).call(function () {
                                            S.GameUtils.addEffBoom(o)
                                        }).call(function () {
                                            cc.tween(u.ico_energy).to(.2, {
                                                scale: 1.5
                                            }, {
                                                easing: cc.easing.sineOut
                                            }).to(.2, {
                                                scale: 1
                                            }, {
                                                easing: cc.easing.backOut
                                            }).start()
                                        }).delay(.5).call(function () {
                                            y.Utils.removeNode(e),
                                                S.GameUtils.playOGG("level_start_jingle"),
                                                t()
                                        }).start()
                                    }),
                                    a.push(l),
                                    [4, Promise.all(a)];
                            case 1:
                                return c.sent(),
                                    [4, this.gotoLevel(o)];
                            case 2:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.gotoLevel = function (t) {
                return a(this, void 0, void 0, function () {
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, O.default.show(t)];
                            case 1:
                                return e.sent(),
                                    d.sm.switchScene(C.default, {
                                        level: this.lId
                                    }, !1),
                                    [4, O.default.close()];
                            case 2:
                                return e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBtnFreeItemClicked = function () {
                var t = this;
                if (!y.Utils.btnLock()) {
                    var e;
                    switch (S.GameUtils.playSoundBtnClicked(), h.dm.stage.randomItemType) {
                        case u.RewardType.Shovel_Prefab:
                            e = h.dm.adids.AdInfo.Shovel;
                            break;
                        case u.RewardType.Kettle_Prefab:
                            e = h.dm.adids.AdInfo.Kettle;
                            break;
                        case u.RewardType.Brush_Prefab:
                            e = h.dm.adids.AdInfo.Brush
                    }
                    S.GameUtils.loadAndShowVideoAd(e, function () {
                        var e = {
                            reward: [{
                                type: h.dm.stage.randomItemType,
                                count: 1,
                                ico: t.tiger.ico
                            }
                            ],
                            next: function () {
                                cc.tween(t.btn_item_free).to(.2, {
                                    scale: 0
                                }, {
                                    easing: cc.easing.sineIn
                                }).start()
                            },
                            needClick: !0,
                            double: !1
                        };
                        l.default.show(e),
                            h.dm.stage.refreshRandomItemType()
                    }, {
                        stage: this.lId
                    })
                }
            },
            e.working = !1,
            e.Prefab_Name = "prefab/game/battle/ui/stage_ready_panel",
            e.prefab = null,
            r([D(cc.Node)], e.prototype, "slot_fan", void 0),
            r([D([cc.Prefab])], e.prototype, "prefabs_fan", void 0),
            r([D(cc.Node)], e.prototype, "gp_title", void 0),
            r([D(cc.Node)], e.prototype, "gp_content", void 0),
            r([D(cc.Label)], e.prototype, "lb_stage", void 0),
            r([D(cc.Node)], e.prototype, "gp_layout", void 0),
            r([D(cc.Node)], e.prototype, "gp_mode", void 0),
            r([D(p.default)], e.prototype, "switch_mode", void 0),
            r([D(cc.Node)], e.prototype, "gp_star", void 0),
            r([D(cc.Node)], e.prototype, "gp_btns", void 0),
            r([D(cc.Node)], e.prototype, "btn_close", void 0),
            r([D(cc.Node)], e.prototype, "ico_energy", void 0),
            r([D(cc.Label)], e.prototype, "lb_gamestart", void 0),
            r([D(cc.Node)], e.prototype, "flag_hard", void 0),
            r([D(p.default)], e.prototype, "switch_tile", void 0),
            r([D(cc.Node)], e.prototype, "btn_item_free", void 0),
            r([D(T.default)], e.prototype, "tiger", void 0),
            n = r([P], e)
    }
        (s.default);
n.default = G;