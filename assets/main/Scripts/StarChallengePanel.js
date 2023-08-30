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
    f = t("GlobalDefines"),
    h = t("DataManager"),
    d = t("G"),
    g = t("PlatformManager"),
    y = t("AniUtil"),
    _ = t("logger"),
    m = t("Utils"),
    v = t("ChapterEvents"),
    b = t("TopResView"),
    w = t("UIManager"),
    S = t("GameConfig"),
    C = t("GameUtils"),
    O = t("StarChallengeConfig"),
    E = t("StarChallengeEvents"),
    T = cc._decorator,
    k = T.ccclass,
    P = T.property,
    D = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.background = null,
                e.gp_content = null,
                e.node_drum = null,
                e.node_title = null,
                e.switch_status = null,
                e.btn_close = null,
                e.btn_back = null,
                e.justJoin = !1,
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
                                            return C.GameUtils.popLayer.getComponentInChildren(n) ? [2] : [4, m.Utils.loadPefab(this.Prefab_Name)];
                                        case 1:
                                            return e = r.sent(),
                                                (i = cc.instantiate(e)).getComponent(n).init(t, o),
                                                C.GameUtils.popView(i),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e) {
                b.topres.aniHide(),
                    this.nodeFrom = t,
                    this.next = e,
                    this.background.opacity = 0,
                    this.node_title.active = !1,
                    this.switch_status.node.active = !1,
                    this.node_drum.active = !1,
                    this.btn_back.active = !1
            },
            e.prototype.onLoad = function () {
                g.pm.Login();
                this.aniShow();
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this);
                d.GlobalEvent.on(E.EventOnChallengeDescClose.NAME, this.onEventOnChallengeDescClose, this);
                d.GlobalEvent.on(E.EventOnChallengeGoto.NAME, this.onEventOnChallengeGoto, this);
                d.GlobalEvent.on(E.EventOnChallengeJoinMatch.NAME, this.onEventOnChallengeJoinMatch, this);
                d.GlobalEvent.on(E.EventOnChallengeTimeout.NAME, this.onEventOnChallengeTimeout, this);
                this.btn_back.y = w.ui.alignmentToMenu
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this);
                b.topres.aniShowChapter();
                d.GlobalEvent.off(E.EventOnChallengeDescClose.NAME, this.onEventOnChallengeDescClose, this);
                d.GlobalEvent.off(E.EventOnChallengeGoto.NAME, this.onEventOnChallengeGoto, this);
                d.GlobalEvent.off(E.EventOnChallengeJoinMatch.NAME, this.onEventOnChallengeJoinMatch, this);
                d.GlobalEvent.off(E.EventOnChallengeTimeout.NAME, this.onEventOnChallengeTimeout, this);
                this.next && this.next()
            },
            e.prototype.getDrumY = function (t) {
                return t == O.Star_Challenge_Status.Desc ? 88 : f.GlobalDefines.ScreenHeight / 2 - f.GlobalDefines.Design_Height / 2 + 88
            },
            e.prototype.refreshSwitchStatus = function (t) {
                if (this.switch_status.showIndex = t, t != O.Star_Challenge_Status.Desc) {
                    var e = f.GlobalDefines.ScreenHeight - f.GlobalDefines.Design_Height,
                        n = this.switch_status.curNode;
                    n.height = e + 698,
                        n.y = f.GlobalDefines.ScreenHeight / 2 - f.GlobalDefines.Design_Height / 2 + 53
                }
                this.btn_back.active = t != O.Star_Challenge_Status.Desc
            },
            e.prototype.aniShow = function () {
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
                                return cc.tween(this.nodeFrom).to(.2, {
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
                                    t = O.StarChallengeConfig.curStatus,
                                    S.GameConfig.DEBUG_STAR_CHALLENGE && (t = O.Star_Challenge_Status.Desc),
                                    cc.tween(this.background).to(.3, {
                                        opacity: 200
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).start(),
                                    (e = new cc.Node("effDrum")).position = this.nodeFrom.convertToWorldSpaceAR(cc.v2(0, -50)),
                                    (n = cc.instantiate(this.node_drum)).active = !0,
                                    n.position = cc.v2(0, 0),
                                    n.scale = .2,
                                    n.parent = e,
                                    C.GameUtils.addEffectAR(e),
                                    o = e.position,
                                    i = cc.v2(0, this.getDrumY(t)),
                                    r = e.position.add(i).div(2).add(cc.v2(0, -150)),
                                    a = [],
                                    s = new Promise(function (t) {
                                        cc.tween(e).to(.3, {
                                            y: r.y
                                        }, {
                                            easing: cc.easing.sineOut
                                        }).to(.3, {
                                            y: i.y + 150
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).to(.2, {
                                            y: i.y
                                        }, {
                                            easing: cc.easing.sineIn
                                        }).call(function () {
                                            C.GameUtils.playSFX("star_reward"),
                                                t()
                                        }).start()
                                    }),
                                    a.push(s),
                                    s = new Promise(function (t) {
                                        cc.tween(n).to(.3, {
                                            x: r.x - o.x,
                                            scale: .4
                                        }, {
                                            easing: cc.easing.quadIn
                                        }).to(.3, {
                                            x: i.x - o.x,
                                            scale: 1
                                        }, {
                                            easing: cc.easing.quadOut
                                        }).call(function () {
                                            t()
                                        }).start()
                                    }),
                                    a.push(s),
                                    [4, Promise.all(a)];
                            case 1:
                                return c.sent(),
                                    this.node_drum.position = i,
                                    this.node_drum.active = !0,
                                    m.Utils.removeNode(e),
                                    (l = cc.instantiate(this.node_drum)).active = !0,
                                    l.position = this.node_drum.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    l.getComponent(cc.Sprite).dstBlendFactor = cc.macro.BlendFactor.ONE,
                                    l.opacity = 128,
                                    C.GameUtils.addEffectAR(l),
                                    cc.tween(l).to(.3, {
                                        scale: 1.1,
                                        opacity: 0
                                    }, {
                                        easing: cc.easing.sineIn
                                    }).call(function () {
                                        m.Utils.removeNode(l)
                                    }).start(),
                                    this.refreshSwitchStatus(t),
                                    this.switch_status.node.scale = 0,
                                    this.switch_status.node.active = !0,
                                    [4, new Promise(function (t) {
                                        cc.tween(u.switch_status.node).to(.4, {
                                            scale: 1
                                        }, {
                                            easing: cc.easing.backOut
                                        }).call(function () {
                                            t()
                                        }).start()
                                    })];
                            case 2:
                                return c.sent(),
                                    y.AniUtil.aniShow(this.btn_close),
                                    y.AniUtil.aniShaking(this.btn_close.children[0]),
                                    this.node_title.scale = 3,
                                    this.node_title.opacity = 0,
                                    this.node_title.active = !0,
                                    cc.tween(this.node_title).to(.3, {
                                        scale: 1,
                                        opacity: 255
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.close = function () {
                var e = this;
                if (this.justJoin) {
                    b.topres.aniShowChapter();
                    var n = {
                        needClick: !0,
                        double: !1,
                        next: function () {
                            e.goto(),
                                t.prototype.close.call(e)
                        },
                        reward: [{
                            type: u.RewardType.Infinite,
                            count: O.StarChallengeConfig.Energy_Infinite_Cycle,
                            ico: void 0
                        }
                        ]
                    };
                    l.default.show(n)
                } else
                    t.prototype.close.call(this)
            },
            e.prototype.onEventOnChallengeDescClose = function () {
                this.close()
            },
            e.prototype.onEventOnChallengeGoto = function () {
                this.close(),
                    this.justJoin || this.goto()
            },
            e.prototype.goto = function () {
                var t = h.dm.player.level + 1,
                    e = C.GameUtils.getChapterId(t),
                    n = C.GameUtils.getStageIdLocal(t);
                d.GlobalEvent.dispatchEvent(new v.EventOnChapterStageClicked(e, n))
            },
            e.prototype.onEventOnChallengeJoinMatch = function () {
                var t = this;
                this.justJoin = !0,
                    cc.tween(this.switch_status.curNode).to(.3, {
                        scale: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        var e = t.getDrumY(O.Star_Challenge_Status.Ing);
                        cc.tween(t.node_drum).to(.3, {
                            y: e
                        }, {
                            easing: cc.easing.backOut
                        }).call(function () {
                            C.GameUtils.playSFX("star_reward"),
                                t.refreshSwitchStatus(O.Star_Challenge_Status.Ing);
                            var e = t.switch_status.curNode;
                            e.scale = 0,
                                e.active = !0,
                                cc.tween(e).to(.4, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.backOut
                                }).call(function () {
                                    _.Logger.debug("[StarChallengePanel onEventOnChallengeJoinMatch] curNode:", e)
                                }).start()
                        }).start()
                    }).start()
            },
            e.prototype.onEventOnChallengeTimeout = function () {
                this.refreshSwitchStatus(O.StarChallengeConfig.curStatus)
            },
            e.prototype.onBtnBackClicked = function () {
                m.Utils.btnLock() || (C.GameUtils.playSoundBtnClicked(), this.close())
            },
            e.Prefab_Name = "prefab/game/star_challenge/star_challenge_panel",
            r([P(cc.Node)], e.prototype, "background", void 0),
            r([P(cc.Node)], e.prototype, "gp_content", void 0),
            r([P(cc.Node)], e.prototype, "node_drum", void 0),
            r([P(cc.Node)], e.prototype, "node_title", void 0),
            r([P(p.default)], e.prototype, "switch_status", void 0),
            r([P(cc.Node)], e.prototype, "btn_close", void 0),
            r([P(cc.Node)], e.prototype, "btn_back", void 0),
            n = r([k], e)
    }
        (s.default);
n.default = D;