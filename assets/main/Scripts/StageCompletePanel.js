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
    l = t("Utils"),
    u = t("BattleConfig"),
    p = t("GameUtils"),
    f = t("TileData"),
    h = t("MapView"),
    d = t("ScoreToast"),
    g = t("StageWinPanel"),
    y = cc._decorator,
    _ = y.ccclass,
    m = y.property,
    v = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.prefab_effect_water = null,
                e.prefab_effect_close = null,
                e.idxStepToScore = 0,
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
                                    [4, l.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            return a(e, void 0, void 0, function () {
                                var e;
                                return c(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            return this.prefab ? [3, 2] : [4, this.Preload()];
                                        case 1:
                                            i.sent(),
                                                i.label = 2;
                                        case 2:
                                            return (e = cc.instantiate(this.prefab)).getComponent(n).init(t, o),
                                                p.GameUtils.popView(e),
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
                    this.next = e
            },
            e.prototype.onLoad = function () {
                p.GameUtils.playSFX("final_flower"),
                    this.waterClose(),
                    g.default.Preload()
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    this.next && this.next()
            },
            e.prototype.waterClose = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.battleLogic.levelData.steps > 0 ? 0 != (t = this.findStartTiles()).length ? [3, 2] : [4, this.stepToScore(++this.idxStepToScore)] : [3, 5];
                            case 1:
                                return e.sent(),
                                    [3, 4];
                            case 2:
                                return [4, this.onWaterClose(t)];
                            case 3:
                                e.sent(),
                                    e.label = 4;
                            case 4:
                                return [3, 0];
                            case 5:
                                return [4, l.Utils.waiting(800)];
                            case 6:
                                return e.sent(),
                                    this.close(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.stepToScore = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            var o = e.battleLogic.battleUI.stepBar.lb_num.node,
                                i = e.battleLogic.battleUI.scoreBar.lb_score.node;
                            e.battleLogic.levelData.steps--;
                            var r = new cc.Node("lbEff"),
                                a = r.addComponent(cc.Label);
                            a.string = "+" + u.BattleConfig.Score.BigBoom * t,
                                a.lineHeight = 58,
                                a.fontSize = 50,
                                a.enableBold = !0;
                            var c = r.addComponent(cc.LabelOutline);
                            c.width = 4,
                                c.color = cc.color(61, 44, 0);
                            var s = o.convertToWorldSpaceAR(cc.v2(0, 0));
                            r.position = s,
                                p.GameUtils.addEffectAR(r);
                            var f = i.convertToWorldSpaceAR(cc.v2(0, 0)),
                                h = p.GameUtils.effectLayer.convertToNodeSpaceAR(f),
                                d = r.position.add(h).divide(2).add(cc.v2(0, -300));
                            r.scale = 0,
                                p.GameUtils.playSFX("blossom_pop_" + t),
                                cc.tween(r).to(.3, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.sineOut
                                }).call(function () {
                                    n()
                                }).start(),
                                cc.tween(r).bezierTo(.8, r.position, d, h).call(function () {
                                    cc.isValid(e.node) && (e.battleLogic.levelData.score += u.BattleConfig.Score.BigBoom * t, r.opacity = 0, p.GameUtils.playSFX("ding"), cc.tween(i).to(.2, {
                                        scale: 1.2
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).to(.2, {
                                        scale: 1
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start())
                                }).delay(.2).call(function () {
                                    l.Utils.removeNode(r)
                                }).start()
                        })]
                    })
                })
            },
            e.prototype.findStartTiles = function () {
                var t = this.battleLogic.getComponentInChildren(h.default),
                    e = [];
                for (var n in t.tiles) {
                    var o = t.tiles[n];
                    o && (o.tileData.components.getComponent(f.Tile_Component_Type.bud) || o.tileData.components.getComponent(f.Tile_Component_Type.big_bud)) && e.push(o)
                }
                if (0 == e.length)
                    return [];
                if (1 == e.length)
                    return [e[0]];
                var i = [],
                    r = 18,
                    a = Math.ceil(e.length / r);
                a = Math.min(a, t.levelData.steps),
                    r = Math.floor(e.length / a);
                for (var c = 0; c < a; c++) {
                    var s = c * r,
                        u = Math.min(s + r, e.length);
                    i.push(e[l.Utils.randomInt(s, u)])
                }
                return i
            },
            e.prototype.onWaterClose = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        f,
                        g,
                        y,
                        _,
                        m,
                        v,
                        b,
                        w,
                        S = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (this.battleLogic.levelData.steps -= t.length, e = this.battleLogic.getComponentInChildren(h.default), n = [], o = this.battleLogic.battleUI.stepBar, i = function (e) {
                                    var i = new Promise(function (n) {
                                        var i = cc.instantiate(S.prefab_effect_close);
                                        i.position = o.ico_step.convertToWorldSpaceAR(cc.v2(0, 0)),
                                            p.GameUtils.addEffectAR(i);
                                        var r = t[e].node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                            a = p.GameUtils.effectLayer.convertToNodeSpaceAR(r);
                                        cc.tween(i).to(1, {
                                            position: a
                                        }, {
                                            easing: cc.easing.sineIn
                                        }).call(function () {
                                            i.position = cc.v2(0, 0),
                                                i.parent = t[e].cptBudbase.node;
                                            var o = cc.instantiate(S.prefab_effect_water);
                                            o.position = r,
                                                o.active = !0,
                                                p.GameUtils.addEffectAR(o),
                                                n()
                                        }).start()
                                    });
                                    n.push(i)
                                }, w = 0; w < t.length; w++)
                                    i(w);
                                return cc.tween(o.node).to(.2, {
                                    scale: .5
                                }, {
                                    easing: cc.easing.sineOut
                                }).to(.2, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.backOut
                                }).start(),
                                    [4, Promise.all(n)];
                            case 1:
                                for (c.sent(), n = [], r = 0; r < t.length; r++)
                                    for (w = 0; w < t[r].neighbors.length; w++)
                                        (a = t[r].neighbors[w]) && (v = a.onNear(t[r]), n.push(v));
                                return [4, Promise.all(n)];
                            case 2:
                                for (c.sent(), s = [], w = 0; w < t.length; w++)
                                    l = t[w], f = l.cptBudbase, g = f.component.strength, y = u.BattleConfig.Strength_Boom2, _ = (y + g) * u.BattleConfig.Score.Strength, e.levelData.score += _, d.default.show(_, l.node.convertToWorldSpaceAR(cc.v2(0, 0))), m = {
                                        key: l.tileData.key,
                                        color: l.tileData.components.color,
                                        oldStrength: g,
                                        strength: g + y
                                    },
                                        v = l.cptBudbase.grow(m),
                                        s.push(v),
                                        l.tileData.components.budbase.addStrength(y);
                                return [4, Promise.all(s)];
                            case 3:
                                for (c.sent(), e.levelData.growAction = [], b = [], w = 0; w < t.length; w++)
                                    b.push(t[w].tileData);
                                return e.levelData.addStrength(b),
                                    [4, e.addStrengthShow()];
                            case 4:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Prefab_Name = "prefab/game/battle/ui/stage_complete_panel",
            e.prefab = null,
            r([m(cc.Node)], e.prototype, "prefab_effect_water", void 0),
            r([m(cc.Prefab)], e.prototype, "prefab_effect_close", void 0),
            n = r([_], e)
    }
        (s.default);
n.default = v;