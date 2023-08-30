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
var s = t("SwitchNode"),
    l = t("GlobalDefines"),
    u = t("DataManager"),
    p = t("AniUtil"),
    f = t("Utils"),
    h = t("TopResView"),
    d = t("CommonUtils"),
    g = t("BattleConfig"),
    y = t("GameUtils"),
    _ = t("SignCell"),
    m = cc._decorator,
    v = m.ccclass,
    b = m.property,
    w = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.background = null,
                e.gp_content = null,
                e.gp_cells = null,
                e.switch_status = null,
                e.lb_countdown = null,
                e._ts = [],
                e.next = null,
                e.isAded = !1,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.tryShow = function (t) {
                return a(this, void 0, Promise, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    i;
                                return c(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return u.dm.player.level < g.BattleConfig.Stage.Signin ? (o(), [2]) : y.GameUtils.popLayer.getComponentInChildren(n) ? (o(), [2]) : [4, f.Utils.loadPefab(this.prefab_name)];
                                        case 1:
                                            return (e = r.sent()) ? ((i = cc.instantiate(e)).getComponent(n).init(t, o), y.GameUtils.popView(i), [2]) : (o(), [2])
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e) {
                this.nodeFrom = t,
                    this.next = e,
                    this.background.opacity = 0,
                    this.switch_status.showIndex = u.dm.sign.isTodaySigned ? 1 : 0,
                    p.AniUtil.aniWillShow(this.switch_status.node),
                    p.AniUtil.aniWillShow(this.gp_content);
                for (var n = 0; n < this.gp_cells.childrenCount; n++) {
                    var o = this.gp_cells.children[n];
                    o.getComponent(_.default).init(n + 1),
                        p.AniUtil.aniWillShow(o)
                }
                this.refreshCountDown()
            },
            e.prototype.onEnable = function () {
                this._interval = setInterval(this.refreshCountDown.bind(this), 1e3),
                    h.topres.aniShowHome()
            },
            e.prototype.refreshCountDown = function () {
                var t = f.Utils.getCurTime(),
                    e = f.Utils.getDayBeginTime(1e3 * t) / 1e3 + l.GlobalDefines.Second_Day - t;
                this.lb_countdown.string = this.formatTimeExt(e)
            },
            e.prototype.formatTimeExt = function (t) {
                if (~~t <= 0)
                    return "00 giờ 00 phút";
                var e = Math.floor(t / 3600).toString(),
                    n = (Math.floor(t % 3600 % 60).toString(), [e, Math.floor(t % 3600 / 60)].map(function (t) {
                        return ("" + t)[1] ? t : "0" + t
                    }));
                return n[0] + " giờ " + n[1] + " phút "
            },
            e.prototype.onLoad = function () {
                var t = this,
                    e = function () {
                        for (var e = 0, n = function () {
                            var n = e,
                                o = setTimeout(function () {
                                    p.AniUtil.aniShow(t.gp_cells.children[n])
                                }, 50 * e);
                            t._ts.push(o)
                        }; e < t.gp_cells.childrenCount; e++)
                            n();
                        var o = setTimeout(function () {
                            p.AniUtil.aniShow(t.switch_status.node)
                        }, 50 * e);
                        t._ts.push(o)
                    };
                cc.tween(this.background).to(.3, {
                    opacity: 200
                }, {
                    easing: cc.easing.sineOut
                }).start(),
                    this.nodeFrom ? this.aniShow(e.bind(this)) : p.AniUtil.aniShow(this.gp_content, e.bind(this))
            },
            e.prototype.aniShow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s;
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
                                    (e = new cc.Node("effDrum")).position = this.nodeFrom.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    (n = cc.instantiate(this.gp_content)).active = !0,
                                    n.position = cc.v2(0, 0),
                                    n.scale = .1,
                                    n.opacity = 255,
                                    n.parent = e,
                                    y.GameUtils.addEffectAR(e),
                                    o = e.position,
                                    i = cc.v2(0, 0),
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
                                            y.GameUtils.playSFX("star_reward"),
                                                t()
                                        }).start()
                                    }),
                                    a.push(s),
                                    s = new Promise(function (t) {
                                        cc.tween(n).to(.3, {
                                            x: r.x - o.x,
                                            scaleY: .4,
                                            scaleX: 0
                                        }, {
                                            easing: cc.easing.quadIn
                                        }).to(.3, {
                                            x: i.x - o.x,
                                            scaleX: 1,
                                            scaleY: 1
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
                                    this.gp_content.position = cc.v2(0, 0),
                                    this.gp_content.scale = 1,
                                    this.gp_content.opacity = 255,
                                    this.gp_content.active = !0,
                                    f.Utils.removeNode(e),
                                    t && t(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.close = function () {
                this.isAded || d.CommonUtils.ShowX(u.dm.adids.XAdInfo.SigningX.xid),
                    this.next && this.next(),
                    f.Utils.removeNode(this.node)
            },
            e.prototype.onBtnNormalClicked = function () {
                f.Utils.btnLock() || (y.GameUtils.playSoundBtnClicked(), this.sign(1))
            },
            e.prototype.onBtnADClicked = function () {
                var t = this;
                f.Utils.btnLock() || (y.GameUtils.playSoundBtnClicked(), y.GameUtils.loadAndShowVideoAd(u.dm.adids.AdInfo.Signing, function () {
                    t.isAded = !0,
                        t.sign(2)
                }, {
                    stage: u.dm.player.level,
                    day: u.dm.sign.curDayNum
                }))
            },
            e.prototype.onBtnCloseClicked = function () {
                f.Utils.btnLock() || (y.GameUtils.playSoundBtnClicked(), this.close())
            },
            e.prototype.sign = function (t) {
                var e = this,
                    n = u.dm.sign.curDayNum;
                u.dm.sign.onSign();
                var o = n - 1;
                this.gp_cells.children[o].getComponent(_.default).refreshStatus(),
                    this.aniCollect(t),
                    cc.tween(this.switch_status.node).to(.2, {
                        scale: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        e.switch_status.showIndex = 1
                    }).to(.2, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).start()
            },
            e.prototype.aniCollect = function (t) {
                var e = u.dm.sign.curDayNum - 1;
                this.gp_cells.children[e].getComponent(_.default).onCollect(t)
            },
            e.prototype.onDisable = function () {
                h.topres.aniShowBack(),
                    clearInterval(this._interval);
                for (var t = 0; t < this._ts.length; t++)
                    clearTimeout(this._ts[t]);
                this._ts = void 0
            },
            e.prefab_name = "prefab/game/signing/signing_panel",
            r([b(cc.Node)], e.prototype, "background", void 0),
            r([b(cc.Node)], e.prototype, "gp_content", void 0),
            r([b(cc.Node)], e.prototype, "gp_cells", void 0),
            r([b(s.default)], e.prototype, "switch_status", void 0),
            r([b(cc.Label)], e.prototype, "lb_countdown", void 0),
            n = r([v], e)
    }
        (cc.Component);
n.default = w;