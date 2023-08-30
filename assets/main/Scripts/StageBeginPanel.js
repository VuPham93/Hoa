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
    l = t("SwitchNode"),
    u = t("GlobalDefines"),
    p = t("Utils"),
    f = t("GameUtils"),
    h = t("LevelData"),
    d = cc._decorator,
    g = d.ccclass,
    y = d.property,
    _ = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.lb_stage = null,
                e.switch_mode = null,
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
                                            return [4, p.Utils.loadPefab(this.Prefab_Name)];
                                        case 1:
                                            return e = r.sent(),
                                                (i = cc.instantiate(e)).getComponent(n).init(t, o),
                                                f.GameUtils.popView(i),
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
                    this.lb_stage.string = "Màn " + this.battleLogic.levelData.lId,
                    this.switch_mode.showIndex = h.Game_Mode[this.battleLogic.levelData.properties.game_mode],
                    this.gp_content.height = 0,
                    this.lb_stage.node.parent.scale = 0,
                    this.switch_mode.node.x = -u.GlobalDefines.ScreenWidth
            },
            e.prototype.onLoad = function () {
                this.aniShow()
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    this.next && this.next()
            },
            e.prototype.aniShow = function () {
                var t = this;
                cc.tween(this.node).call(function () {
                    cc.tween(t.gp_content).to(.3, {
                        height: 286
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
                }).delay(.2).call(function () {
                    cc.tween(t.lb_stage.node.parent).to(.2, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).start()
                }).delay(.15).call(function () {
                    cc.tween(t.switch_mode.node).to(.3, {
                        x: 0
                    }, {
                        easing: cc.easing.backOut
                    }).start()
                }).delay(2).call(function () {
                    var e = t.switch_mode.node.children[t.switch_mode.showIndex].children[1];
                    cc.tween(e).to(.3, {
                        opacity: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).start()
                }).delay(.4).call(function () {
                    t.aniModeIcon(function () {
                        t.close()
                    })
                }).delay(.5).call(function () {
                    cc.tween(t.gp_content).to(.2, {
                        opacity: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).start()
                }).start()
            },
            e.prototype.aniModeIcon = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        u;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return e = this.battleLogic.battleUI.gameModeBar,
                                    n = this.switch_mode.node.children[this.switch_mode.showIndex].children[0],
                                    (o = new cc.Node).position = n.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    f.GameUtils.addEffectAR(o),
                                    n.active = !0,
                                    n.position = cc.v2(0, 0),
                                    n.parent = o,
                                    i = e.switch_mode.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    r = f.GameUtils.effectLayer.convertToNodeSpaceAR(i),
                                    a = r.y - o.y,
                                    s = [],
                                    l = new Promise(function (t) {
                                        cc.tween(n).to(.6, {
                                            y: a,
                                            scale: .5
                                        }, {
                                            easing: cc.easing.backIn
                                        }).call(function () {
                                            f.GameUtils.playSFX("ding"),
                                                n.getComponent(cc.Sprite).dstBlendFactor = cc.macro.BlendFactor.ONE
                                        }).to(.3, {
                                            opacity: 0
                                        }, {
                                            easing: cc.easing.sineOut
                                        }).call(function () {
                                            t()
                                        }).start()
                                    }),
                                    s.push(l),
                                    u = new Promise(function (t) {
                                        cc.tween(o).to(.6, {
                                            x: r.x
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).call(function () {
                                            f.GameUtils.addEffBoom(i)
                                        }).call(function () {
                                            cc.tween(e.switch_mode.node).to(.2, {
                                                scale: 1.5
                                            }, {
                                                easing: cc.easing.sineOut
                                            }).to(.2, {
                                                scale: 1
                                            }, {
                                                easing: cc.easing.backOut
                                            }).start()
                                        }).call(function () {
                                            t()
                                        }).start()
                                    }),
                                    s.push(u),
                                    [4, Promise.all(s)];
                            case 1:
                                return c.sent(),
                                    p.Utils.removeNode(o),
                                    t && t(),
                                    [2]
                        }
                    })
                })
            },
            e.Prefab_Name = "prefab/game/battle/ui/stage_begin_panel",
            r([y(cc.Node)], e.prototype, "gp_content", void 0),
            r([y(cc.Label)], e.prototype, "lb_stage", void 0),
            r([y(l.default)], e.prototype, "switch_mode", void 0),
            n = r([g], e)
    }
        (s.default);
n.default = _;