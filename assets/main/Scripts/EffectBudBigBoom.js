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
var s = t("G"),
    l = t("GameManager"),
    u = t("Utils"),
    p = t("UIManager"),
    f = t("BattleConfig"),
    h = t("GameUtils"),
    d = t("BattleEvents"),
    g = t("ComponentBudBase"),
    y = t("ComponentWaterBucket"),
    _ = cc._decorator,
    m = _.ccclass,
    v = _.property,
    b = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.prefab_eff_wave = null,
                e.prefab_eff_petal = null,
                e.prefab_levelup = null,
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
                                    [4, u.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Boom = function (t, e, o, i, r) {
                return a(this, void 0, void 0, function () {
                    var s = this;
                    return c(this, function () {
                        return [2, new Promise(function (l) {
                            return a(s, void 0, void 0, function () {
                                var a;
                                return c(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return this.prefab ? [3, 2] : [4, this.Preload()];
                                        case 1:
                                            c.sent(),
                                                c.label = 2;
                                        case 2:
                                            return (a = cc.instantiate(this.prefab)).position = o,
                                                a.getComponent(n).init(t, e, i, r, l),
                                                h.GameUtils.addEffectAR(a),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e, n, o, i) {
                this.tileFrom = t,
                    this.color = e,
                    this.rings = n,
                    this.optGroup = o,
                    this.next = i
            },
            e.prototype.onLoad = function () {
                var t = this,
                    e = [];
                this.tileFrom.ground.onBigboom(0);
                var n = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = h.GameUtils.effectLayer.convertToNodeSpaceAR(n),
                    i = this.color;
                h.GameUtils.CreatePetalBoom(o, i, 15, !0);
                var r = new Promise(function (e) {
                    var n = cc.instantiate(t.prefab_eff_wave);
                    n.position = cc.v2(0, 0),
                        n.parent = t.node,
                        setTimeout(function () {
                            e()
                        }, 300)
                });
                e.push(r),
                    r = new Promise(function (e) {
                        var n = cc.instantiate(t.prefab_eff_petal);
                        n.position = cc.v2(0, 0),
                            n.parent = t.node,
                            n.getComponentInChildren(cc.ParticleSystem).spriteFrame = l.default.instance.resList.frames_color_points[t.color - 1],
                            setTimeout(function () {
                                e()
                            }, 800)
                    }),
                    e.push(r);
                var _ = cc.instantiate(this.prefab_levelup);
                _.scale = .8,
                    _.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function () {
                        u.Utils.removeNode(_)
                    }, this);
                var m = p.ui.getLayer(p.UILayer.Effect2);
                _.position = m.convertToNodeSpaceAR(n),
                    _.parent = m;
                for (var v = function (n) {
                    var o = b.rings[n + ""];
                    if (!o)
                        return "continue";
                    for (var i = function (i) {
                        var r = o[i];
                        r.ground.onBigboom(n);
                        var l = new Promise(function (e) {
                            return a(t, void 0, void 0, function () {
                                var t,
                                    o,
                                    i,
                                    a,
                                    l,
                                    _,
                                    m,
                                    v,
                                    b,
                                    w,
                                    S,
                                    C,
                                    O = this;
                                return c(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return (t = this.optGroup.find(function (t) {
                                                return t.key == r.tileData.key
                                            })) ? (o = 1 == n ? f.BattleConfig.WallBeHurtDict.Boom : f.BattleConfig.WallBeHurtDict.BigBoom, s.GlobalEvent.dispatchEvent(new d.EventOnWallsBeHurt(this.tileFrom, 3, o)), t.runner ? (s.GlobalEvent.dispatchEvent(new d.EventOnRunnerBeHurt(t.runner)), e(), [2]) : t.removeRight ? (r.cptBudbase.remove(), e(), [2]) : (t.blast_protect && (r.cptBlastProtected.grow({
                                                key: void 0,
                                                color: -1,
                                                oldStrength: t.blast_protect.oldStrength,
                                                strength: t.blast_protect.strength
                                            }), t.blast_protect.removeRight && (t.blast_protect = void 0, r.cptBlastProtected.remove())), t.water_bucket ? [4, (i = r.getCptByType(y.default)).grow({
                                                key: void 0,
                                                color: -1,
                                                oldStrength: 1,
                                                strength: 4
                                            })] : [3, 2])) : (e(), [2]);
                                        case 1:
                                            c.sent(),
                                                i.onWaterFlow(t.water_bucket),
                                                i.remove(),
                                                c.label = 2;
                                        case 2:
                                            return a = r.node_bigboom.convertToWorldSpaceAR(cc.v2(0, 0)),
                                                (l = cc.instantiate(r.node_bigboom)).position = a,
                                                h.GameUtils.addEffectAR(l),
                                                r.node_bigboom.active = !1,
                                                _ = l.position.sub(this.node.position),
                                                m = _.normalize(),
                                                v = l.position,
                                                b = f.BattleConfig.Tile_Height * (1 == n ? .9 : .5),
                                                w = l.position.add(m.multiply(cc.v2(b, b))),
                                                S = 1 == n ? .6 : .3,
                                                C = void 0,
                                                !t.blast_protect && (null == r ? void 0 : r.cptBudbase) && ((C = l.getComponentInChildren(g.default)).component = r.cptBudbase.component),
                                                cc.tween(l).to(.2, {
                                                    position: w,
                                                    scale: S
                                                }, {
                                                    easing: cc.easing.quintIn
                                                }).call(function () {
                                                    C && C.refreshStrength(t.color, t.strength, void 0)
                                                }).delay(.1).to(.3, {
                                                    position: v,
                                                    scale: 1
                                                }, {
                                                    easing: cc.easing.backOut
                                                }).call(function () {
                                                    var e = cc.instantiate(O.prefab_levelup);
                                                    e.scale = .8,
                                                        e.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function () {
                                                            u.Utils.removeNode(e)
                                                        }, O);
                                                    var n = p.ui.getLayer(p.UILayer.Effect2);
                                                    e.position = n.convertToNodeSpaceAR(a),
                                                        e.parent = n,
                                                        r.node_bigboom.active = !0,
                                                        C && r.cptBudbase.refreshStrength(t.color, t.strength, void 0)
                                                }).delay(.1).call(function () {
                                                    u.Utils.removeNode(l),
                                                        e()
                                                }).start(),
                                                [2]
                                    }
                                })
                            })
                        });
                        e.push(l)
                    }, r = 0; r < o.length; r++)
                        i(r)
                }, b = this, w = 1; w <= 2; w++)v(w);
                Promise.all(e).then(function () {
                    u.Utils.removeNode(t.node)
                })
            },
            e.prototype.onDisable = function () {
                for (var t = this.node.getComponentsInChildren(cc.ParticleSystem), e = t.length - 1; e >= 0; e--)
                    t[e].stopSystem();
                this.next && this.next()
            },
            e.Prefab_Name = "prefab/game/battle/effect_bud_boom_big",
            e.prefab = null,
            r([v(cc.Node)], e.prototype, "gp_content", void 0),
            r([v(cc.Prefab)], e.prototype, "prefab_eff_wave", void 0),
            r([v(cc.Prefab)], e.prototype, "prefab_eff_petal", void 0),
            r([v(cc.Prefab)], e.prototype, "prefab_levelup", void 0),
            n = r([m], e)
    }
        (cc.Component);
n.default = b;