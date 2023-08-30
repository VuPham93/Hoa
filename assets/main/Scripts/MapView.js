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
var s = t("DataManager"),
    l = t("G"),
    u = t("PlatformManager"),
    p = t("SceneManager"),
    f = t("logger"),
    h = t("Utils"),
    d = t("GuideManager"),
    g = t("UIManager"),
    y = t("BattleConfig"),
    _ = t("GameConfig"),
    m = t("GameUtils"),
    v = t("SignPanel"),
    b = t("BattleCompBase"),
    w = t("BattleEvents"),
    S = t("BeeFlying"),
    C = t("CarrierBase"),
    O = t("ComponentBud"),
    E = t("ComponentInEffect"),
    T = t("ComponentWaterBucket"),
    k = t("TileData"),
    P = t("DropBus"),
    D = t("DropBusLayer"),
    G = t("EffectBudBigBoom"),
    B = t("EffectBudBoom"),
    U = t("EffectTileClicking"),
    R = t("GroundBase"),
    M = t("ShuffleBus"),
    x = t("StageScene"),
    I = t("Stream"),
    N = t("StreamBus"),
    A = t("TeleportLandController"),
    j = t("TeleportWaterController"),
    L = t("Tile"),
    F = t("TipController"),
    V = t("ScoreToast"),
    W = t("SloganToast"),
    H = t("StageCompletePanel"),
    K = t("StageFailPanel"),
    Y = t("StageReadyPanel"),
    X = t("StageWinPanel"),
    J = cc._decorator,
    z = J.ccclass,
    q = J.property,
    Z = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_layers = null,
                e.gp_wall = null,
                e.gp_stream = null,
                e.gp_path = null,
                e.gp_tiles = null,
                e.gp_effects = null,
                e.prefab_tile = null,
                e.ground_prefabs = [],
                e.carrier_prefabs = [],
                e.ground_list = [],
                e.gp_carrier = null,
                e.prefab_path = null,
                e.prefab_stream = null,
                e.prefabs_teleport = [],
                e.busLayer = null,
                e.tipCtl = null,
                e.node_test = null,
                e.tiles = {},
                e.tDatasTouch = [],
                e.tPortWaterCtl = void 0,
                e.tPortLandCtl = void 0,
                e
        }
        return i(e, t),
            e.prototype.onTestBtnClicked = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o;
                    return c(this, function () {
                        for (t in this.levelData.tiles)
                            for (n in (e = this.levelData.tiles[t]).components.components)
                                (o = e.components.components[n]).type == k.Tile_Component_Type.pile_of_leaves && f.Logger.debug("[Mapview onTestBtnClicked] pileofleaves_", e.key, "id:", o.id);
                        return [2]
                    })
                })
            },
            e.prototype.onTestStageNumInput = function (t) {
                var e = parseInt(t.string);
                s.dm.player.level = e - 1,
                    p.sm.switchScene(x.default, void 0, !1)
            },
            e.prototype.onTestStageNext = function () {
                s.dm.player.level = s.dm.player.level + 1,
                    p.sm.switchScene(x.default, void 0, !1)
            },
            e.prototype.onLoad = function () {
                this.node_test.active = _.GameConfig.isDebug
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    l.GlobalEvent.on(w.EventOnTileTouchEnd.NAME, this.onEventOnTileTouchEnd, this),
                    l.GlobalEvent.on(w.EventOnTileTouchCancel.NAME, this.onEventOnTileTouchCancel, this),
                    l.GlobalEvent.on(w.EventOnMolehillBeHurt.NAME, this.onEventOnMolehillBeHurt, this),
                    l.GlobalEvent.on(w.EventOnCrowBeHurt.NAME, this.onEventOnCrowBeHurt, this),
                    l.GlobalEvent.on(w.EventOnAddScore.NAME, this.onEventOnAddScore, this)
            },
            e.prototype.onDisable = function () {
                for (var e = g.ui.getLayer(g.UILayer.Effect2).getComponentsInChildren(E.default), n = e.length - 1; n >= 0; n--)
                    e[n].remove();
                for (var o in this.tipCtl = void 0, t.prototype.onDisable.call(this), this.tiles)
                    this.tiles[o].neighbors = [];
                this.battleLogic = void 0,
                    l.GlobalEvent.off(w.EventOnTileTouchEnd.NAME, this.onEventOnTileTouchEnd, this),
                    l.GlobalEvent.off(w.EventOnTileTouchCancel.NAME, this.onEventOnTileTouchCancel, this),
                    l.GlobalEvent.off(w.EventOnMolehillBeHurt.NAME, this.onEventOnMolehillBeHurt, this),
                    l.GlobalEvent.off(w.EventOnCrowBeHurt.NAME, this.onEventOnCrowBeHurt, this),
                    l.GlobalEvent.off(w.EventOnAddScore.NAME, this.onEventOnAddScore, this)
            },
            e.prototype.refreshView = function () {
                var t,
                    e = this;
                u.pm.trackEventPost(u.TRACK_EVENT_NAME.STAGE_IN, {
                    stage: this.levelData.lId
                }),
                    s.dm.guide.clearTempList(),
                    this.tipCtl.init(this),
                    h.Utils.removeAllChildren(this.gp_tiles);
                var n = this.levelData.mapSize.width,
                    o = this.levelData.mapSize.height;
                this.gp_layers.width = n,
                    this.gp_layers.height = o,
                    this.gp_layers.position = cc.v2(-n / 2, o / 2);
                for (var i = 0; i < this.gp_layers.childrenCount; i++) {
                    var r = this.gp_layers.children[i];
                    r.position = cc.v2(0, 0),
                        r.width = n,
                        r.height = o
                }
                var a = [];
                for (var c in this.levelData.tiles) {
                    var l = this.levelData.tiles[c];
                    a.push(l)
                }
                a.sort(function (t, e) {
                    return t.y != e.y ? e.y - t.y : e.x - t.x
                });
                var p = ["wall_west", "wall_east", "wall_south"];
                for (i = 0; i < a.length; i++) {
                    l = a[i];
                    var f = cc.instantiate(this.prefab_tile);
                    f.name = l.key,
                        f.position = cc.v2(l.x, l.y);
                    var d = f.getComponent(L.default),
                        g = cc.instantiate(this.ground_prefabs[l.groundData.type]);
                    g.position = f.position;
                    var _ = g.getComponent(R.default);
                    if (g.parent = this.ground_list[l.groundData.type], l.carrier) {
                        var m = cc.instantiate(this.carrier_prefabs[l.carrier.type]);
                        d.carrier = m.getComponent(C.default),
                            d.carrier.init(d, l.carrier),
                            m.parent = this.gp_carrier,
                            m.position = d.node.position,
                            l.groundData.wall = y.BattleConfig.WallValue.OpenAll
                    }
                    if (l.stream >= 0) {
                        var v = cc.instantiate(this.prefab_stream),
                            b = v.getComponent(I.default);
                        b.init(l.stream),
                            v.position = f.position,
                            b.node.parent = this.gp_stream
                    }
                    for (var w = new cc.Node("walls_" + l.key), S = 0; S < p.length; S++)
                        new cc.Node(p[S]).parent = w;
                    w.position = f.position,
                        w.parent = this.gp_wall,
                        d.init(l, this, _, w),
                        this.gp_tiles.addChild(f),
                        this.tiles[l.key] = d
                }
                for (var c in this.tiles) {
                    l = (d = this.tiles[c]).tileData;
                    var O = [];
                    for (i = 0; i < l.neighbors.length; i++) {
                        var E = null === (t = l.neighbors[i]) || void 0 === t ? void 0 : t.key;
                        O.push(this.tiles[E])
                    }
                    d.neighbors = O
                }
                for (var c in this.tiles)
                    (d = this.tiles[c]) && d.ground.init({
                        tile: d
                    });
                this.levelData.hasWaterTeleport && (this.tPortWaterCtl = this.node.addComponent(j.default), this.tPortWaterCtl.init(this)),
                    this.levelData.hasLandTeleport && (this.tPortLandCtl = this.node.addComponent(A.default), this.tPortLandCtl.init(this)),
                    setTimeout(function () {
                        e.checkDeadlock()
                    }, 70)
            },
            e.prototype.onEventOnTileTouchStart = function (t, e) {
                if (void 0 === e && (e = !0), t.components.allowClick) {
                    U.EffectTileClicking.Show(this, this.tiles[t.key]),
                        this.tDatasTouch = this.levelData.deeperInvestigation(t);
                    var n = 0,
                        o = 0;
                    t.components.getComponent(k.Tile_Component_Type.big_bud) && (o = 1);
                    for (var i = o; i < this.tDatasTouch.length; i++)
                        n += this.tiles[this.tDatasTouch[i].key].tileData.components.bud_strength;
                    for (i = 0; i < this.tDatasTouch.length; i++)
                        this.tiles[this.tDatasTouch[i].key].onTouchStartResponse(n);
                    return d.gm.checkAndShowBigBoom(t, n),
                        !d.gm.isBigboomGuiding && e && l.GlobalEvent.dispatchEvent(new w.EventOnFlowerStatusStrengthChanged(n, t.components.color)),
                        this.tDatasTouch
                }
                this.tDatasTouch = []
            },
            e.prototype.onTileTouchMove = function (t) {
                for (var e = 0; e < this.tDatasTouch.length; e++)
                    this.tiles[this.tDatasTouch[e].key].onTouchMoveResponse(t)
            },
            e.prototype.onTargetCompleted = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return this.levelData.pausing = !0,
                                    this.levelData.round_score = Number.MAX_SAFE_INTEGER,
                                    this.levelData.lId > s.dm.player.level && (s.dm.player.level = this.levelData.lId, u.pm.SetUserScore({
                                        score: this.levelData.score,
                                        stage: this.levelData.lId
                                    })),
                                    [4, H.default.show(this.battleLogic)];
                            case 1:
                                return t.sent(),
                                    g.ui.hideLoading(),
                                    [4, this.trySignin()];
                            case 2:
                                return t.sent(),
                                    [4, X.default.show(this.levelData)];
                            case 3:
                                return t.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onEventOnTileTouchEnd = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return d.gm.isBigboomGuiding ? [2] : (l.GlobalEvent.dispatchEvent(new w.EventOnFlowerStatusStrengthChanged(0)), (t = this.tDatasTouch).length > 0 && U.EffectTileClicking.Close(this, this.tiles[t[0].key]), t.length >= y.BattleConfig.Min_Num_Group ? (this.levelData.pausing = !0, g.ui.showLoading(!1), this.levelData.round_score = this.levelData.score, this.levelData.molehillBeHurt = !1, this.levelData.crowBeHurt = !1, [4, this.onTileClicked(t)]) : [3, 21]);
                            case 1:
                                return e.sent(),
                                    this.levelData.isCompleted = this.levelData.checkResult(),
                                    this.levelData.isCompleted ? (l.GlobalEvent.dispatchEvent(new w.EventOnStageCompleted(!0)), [4, this.onTargetCompleted()]) : [3, 3];
                            case 2:
                                return e.sent(),
                                    u.pm.trackGameLog(y.TgaEventType.UserSet, u.TRACK_EVENT_NAME.STAGE_WIN, {
                                        stage_max: s.dm.player.level
                                    }),
                                    [3, 20];
                            case 3:
                                return 0 != this.levelData.steps ? [3, 9] : (l.GlobalEvent.dispatchEvent(new w.EventOnStageCompleted(!1)), [4, h.Utils.waiting(500)]);
                            case 4:
                                return e.sent(),
                                    g.ui.hideLoading(),
                                    [4, K.default.show(this.battleLogic)];
                            case 5:
                                return e.sent() ? [3, 8] : (this.levelData.pausing = !1, [4, this.mushroomWorking()]);
                            case 6:
                                return e.sent(),
                                    [4, this.checkDeadlock()];
                            case 7:
                                e.sent(),
                                    e.label = 8;
                            case 8:
                                return [3, 20];
                            case 9:
                                return this.levelData.pausing = !1,
                                    [4, this.LeafWorking()];
                            case 10:
                                return e.sent(),
                                    [4, this.busLayer.waitForSteady()];
                            case 11:
                                return e.sent(),
                                    [4, this.molehillWorking()];
                            case 12:
                                return e.sent(),
                                    [4, this.mushroomWorking()];
                            case 13:
                                return e.sent(),
                                    [4, this.crowWorking()];
                            case 14:
                                return e.sent(),
                                    [4, this.beeWorking()];
                            case 15:
                                return e.sent(),
                                    [4, this.snailWorking()];
                            case 16:
                                return e.sent(),
                                    [4, this.streamWorking()];
                            case 17:
                                return e.sent(),
                                    [4, this.waterTeleportWorking()];
                            case 18:
                                return e.sent(),
                                    [4, this.checkDeadlock()];
                            case 19:
                                e.sent(),
                                    g.ui.hideLoading(),
                                    e.label = 20;
                            case 20:
                                return [3, 22];
                            case 21:
                                this.onEventOnTileTouchCancel(),
                                    e.label = 22;
                            case 22:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.trySignin = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return s.dm.sign.isFristDay ? s.dm.sign.isTodaySigned ? [2] : [4, v.default.tryShow(void 0)] : [2];
                            case 1:
                                return t.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onEventOnTileTouchCancel = function () {
                if (!d.gm.isBigboomGuiding) {
                    this.tDatasTouch.length > 0 && U.EffectTileClicking.Close(this, this.tiles[this.tDatasTouch[0].key]);
                    for (var t = 0; t < this.tDatasTouch.length; t++)
                        this.tiles[this.tDatasTouch[t].key].onTouchCancelResponse();
                    l.GlobalEvent.dispatchEvent(new w.EventOnFlowerStatusStrengthChanged(0))
                }
            },
            e.prototype.checkResult = function () {
                return a(this, void 0, Promise, function () {
                    return c(this, function () {
                        return [2, !1]
                    })
                })
            },
            e.prototype._drop = function () {
                for (var t = 0; t < y.BattleConfig.Map_Tile_Num_H; t++)
                    for (var e = y.BattleConfig.Map_Tile_Num_V - 1; e >= 0; e--) {
                        var n = e + "_" + t,
                            o = this.tiles[n];
                        o && o.tileData.isDrop && P.default.TryDrop(o, this.busLayer.node)
                    }
            },
            e.prototype.update = function () {
                var t;
                this.levelData && (this.levelData.pausing || (this._drop(), null === (t = this.tPortLandCtl) || void 0 === t || t.afterDrop()))
            },
            e.prototype.addStrengthShow = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        u,
                        p,
                        d,
                        g,
                        _,
                        v,
                        b,
                        S,
                        C,
                        O,
                        E,
                        P,
                        D,
                        U,
                        R,
                        M,
                        x,
                        I,
                        N,
                        A,
                        j;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                t = this.levelData.growAction,
                                    e = !1,
                                    n = 0,
                                    c.label = 1;
                            case 1:
                                return n < t.length ? (o = t[n], i = this.tiles[o.key], (r = i.cptBudbase) ? (a = r.component, n > 0 ? [4, r.grow(o)] : [3, 3]) : (f.Logger.warn("[MapView addStrength] 异常：该格无bud组件！"), [3, 14])) : [3, 15];
                            case 2:
                                c.sent(),
                                    c.label = 3;
                            case 3:
                                return s = o.strength,
                                    a.willBigBoom(s) ? (0 == n && (e = !0), u = r.node.convertToWorldSpaceAR(cc.v2(0, 0)), [4, r.aniBigBoomCenter()]) : [3, 6];
                            case 4:
                                for (_ in c.sent(), m.GameUtils.playSFX("bigboom"), p = r.component.type, r.remove(), d = this.levelData.getRing(i.tileData, 2), g = {}, d)
                                    for (v = d[_], b = [], g[_] = b, S = 0; S < v.length; S++)
                                        (C = this.tiles[v[S].key]) && b.push(C);
                                return [4, G.default.Boom(i, o.color, u, g, o.boom)];
                            case 5:
                                return c.sent(),
                                    i.onSelfBoom(o.onSelfBoom),
                                    j = y.BattleConfig.Score.BigBoom + n * y.BattleConfig.Score.BoomCombo,
                                    this.levelData.score += j,
                                    V.default.show(j, i.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    p == k.Tile_Component_Type.bud && l.GlobalEvent.dispatchEvent(new w.EventOnNormalBigBoom(i.tileData.key, k.Tile_Component_Type.big_bud, o.color)),
                                    [3, 14];
                            case 6:
                                return a.willBoom(s) ? [4, r.aniBigBoomCenter()] : [3, 14];
                            case 7:
                                return c.sent(),
                                    m.GameUtils.playSFX("blossom_pop_" + (n % 29 + 1)),
                                    [4, B.default.Boom(o.color, r.node.convertToWorldSpaceAR(cc.v2(0, 0)), n, this.levelData.isCompleted, e)];
                            case 8:
                                c.sent(),
                                    r.remove(),
                                    O = o.boom,
                                    E = 0,
                                    c.label = 9;
                            case 9:
                                if (!(E < O.length))
                                    return [3, 13];
                                if (P = O[E], !(D = this.tiles[P.key]))
                                    return [3, 12];
                                if (l.GlobalEvent.dispatchEvent(new w.EventOnWallsBeHurt(i, 1, y.BattleConfig.WallBeHurtDict.Boom)), P.runner)
                                    return l.GlobalEvent.dispatchEvent(new w.EventOnRunnerBeHurt(P.runner)), [3, 12];
                                if (U = D.cptBudbase, P.blast_protect) {
                                    if ((R = D.cptBlastProtected).grow({
                                        key: void 0,
                                        color: -1,
                                        oldStrength: P.blast_protect.oldStrength,
                                        strength: P.blast_protect.strength
                                    }), P.blast_protect.removeRight && R.remove(), null == U ? void 0 : U.component.seed.accept_blast_protect)
                                        return [3, 12];
                                    if (R.component.seed.absolute_blast_protect)
                                        return [3, 12]
                                }
                                return U ? P.water_bucket ? [4, (M = D.getCptByType(T.default)).grow({
                                    key: void 0,
                                    color: -1,
                                    oldStrength: 1,
                                    strength: 4
                                })] : [3, 11] : [3, 12];
                            case 10:
                                return c.sent(),
                                    M.onWaterFlow(P.water_bucket),
                                    M.remove(),
                                    [3, 12];
                            case 11:
                                x = O[E],
                                    I = x.oldStrength,
                                    N = x.strength,
                                    A = {
                                        key: D.tileData.key,
                                        color: D.tileData.components.color,
                                        oldStrength: I,
                                        strength: N
                                    },
                                    U.grow(A),
                                    x.removeRight && U.remove(),
                                    -1 == x.strength && (f.Logger.debug(x.key, ":remove 针对不能头也不能身，不可操作的 如：草，花盆"), U.remove()),
                                    c.label = 12;
                            case 12:
                                return E++,
                                    [3, 9];
                            case 13:
                                i.onSelfBoom(o.onSelfBoom),
                                    j = y.BattleConfig.Score.BoomBase + n * y.BattleConfig.Score.BoomCombo,
                                    this.levelData.score += j,
                                    V.default.show(j, i.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    c.label = 14;
                            case 14:
                                return n++,
                                    [3, 1];
                            case 15:
                                return [4, h.Utils.waiting(700)];
                            case 16:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onTileClicked = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        u,
                        p,
                        f,
                        d,
                        g,
                        _,
                        v,
                        b;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (this.levelData.steps--, (e = this.tiles[t[0].key]).tileData.isClicked = !0, n = [], o = 0, m.GameUtils.playOGG("merge_buds", ".mp3", .3), a = t.length - 1; a >= 1; a--)
                                    i = this.tiles[t[a].key], o += i.tileData.components.bud_strength, r = i.clearBrother(e), n.push(r);
                                for (a = 0; a < e.neighbors.length; a++)
                                    (s = e.neighbors[a]) && (u = s.onNear(e), n.push(u));
                                return l.GlobalEvent.dispatchEvent(new w.EventOnWallsBeHurt(e, 1, y.BattleConfig.WallBeHurtDict.Near)),
                                    [4, Promise.all(n)];
                            case 1:
                                return c.sent(),
                                    p = e.cptBudbase,
                                    f = p.component.strength,
                                    d = (o + f) * y.BattleConfig.Score.Strength,
                                    this.levelData.score += d,
                                    V.default.show(d, e.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    g = [],
                                    _ = {
                                        key: e.tileData.key,
                                        color: e.tileData.components.color,
                                        oldStrength: f,
                                        strength: f + o,
                                        index: 1
                                    },
                                    v = e.cptBudbase.grow(_),
                                    g.push(v),
                                    [4, h.Utils.waiting(500)];
                            case 2:
                                return c.sent(),
                                    this.levelData.pausing = !1,
                                    b = this.busLayer.waitForSteady(),
                                    g.push(b),
                                    [4, Promise.all(g)];
                            case 3:
                                return c.sent(),
                                    h.Utils.removeNode(e.pathNode.node),
                                    e.pathNode = void 0,
                                    e.alphaNormal(),
                                    this.levelData.pausing = !0,
                                    e.tileData.isClicked = !1,
                                    e.tileData.components.budbase.addStrength(o),
                                    this.levelData.growAction = [],
                                    this.levelData.addStrength([e.tileData]),
                                    [4, this.addStrengthShow()];
                            case 4:
                                return c.sent(),
                                    this.showScoreSlogan(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.showScoreSlogan = function () {
                for (var t = this.levelData.score - this.levelData.round_score, e = y.BattleConfig.Score.SloganConfig, n = e.length, o = 0; o < n; o++)
                    if (t >= e[o]) {
                        var i = n - o;
                        W.default.show(i);
                        break
                    }
            },
            e.prototype.checkDeadlock = function (t) {
                return void 0 === t && (t = 1),
                    a(this, void 0, void 0, function () {
                        var e;
                        return c(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return this.levelData.pausing = !1,
                                        [4, this.busLayer.waitForSteady()];
                                case 1:
                                    return n.sent(),
                                        this.levelData.pausing = !0,
                                        this.levelData.checkDeadlock() ? t >= 4 ? (s.dm.stage.justFailed = !0, Y.default.show(this.levelData.lId), [2]) : (e = this.levelData.shuffle(), [4, this.shuffle(e)]) : [3, 5];
                                case 2:
                                    return n.sent(),
                                        [4, h.Utils.waiting(500)];
                                case 3:
                                    return n.sent(),
                                        [4, this.checkDeadlock(t + 1)];
                                case 4:
                                    return n.sent(),
                                        [3, 6];
                                case 5:
                                    this.levelData.pausing = !1,
                                        n.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
            },
            e.prototype.molehillWorking = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e;
                    return c(this, function () {
                        return this.levelData.molehillBeHurt ? [2] : (t = this.levelData.molehillWorking()) ? ((e = this.tiles[t]).clearComponents(), e.initCompontents(e.tileData.components.components), [2]) : [2]
                    })
                })
            },
            e.prototype.crowWorking = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return this.levelData.crowBeHurt ? [2] : (this.levelData.pausing = !1, [4, this.busLayer.waitForSteady()]);
                            case 1:
                                for (e in c.sent(), this.levelData.pausing = !0, t = [], this.levelData.tiles)
                                    (n = this.levelData.tiles[e]) && (o = n.components.getComponent(k.Tile_Component_Type.crow)) && (i = n.neighbors[o.direction]) && i.components.isEdibleForCrow && (r = this.tiles[e], a = this.tiles[i.key], t.push(r.onCrowPeck(a)));
                                return [4, Promise.all(t)];
                            case 2:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.mushroomWorking = function () {
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
                        u,
                        p,
                        f,
                        d,
                        g,
                        y,
                        _,
                        v,
                        b,
                        w,
                        S,
                        C,
                        E,
                        T,
                        P = this;
                    return c(this, function (D) {
                        switch (D.label) {
                            case 0:
                                return this.levelData.pausing = !1,
                                    [4, this.busLayer.waitForSteady()];
                            case 1:
                                for (o in D.sent(), this.levelData.pausing = !0, t = 0, e = [], n = [], this.levelData.tiles)
                                    n.push(o);
                                i = 0,
                                    D.label = 2;
                            case 2:
                                return i < n.length ? (r = n[i], (a = this.levelData.tiles[r]) && (s = a.components.getComponent(k.Tile_Component_Type.exploding_mushroom)) ? s.strength < s.maxStrength ? [3, 4] : (e.push({
                                    key: r,
                                    color: s.color
                                }), [4, this.tiles[r].mushroomTryBoom(t++)]) : [3, 4]) : [3, 5];
                            case 3:
                                D.sent(),
                                    D.label = 4;
                            case 4:
                                return i++,
                                    [3, 2];
                            case 5:
                                for (l = [], T = 0; T < e.length; T++)
                                    for (u = e[T], p = this.levelData.getRing(this.levelData.tiles[u.key], 4), f = 0, d = 1; d <= 4; d++) {
                                        for (g = p[d + ""], h.Utils.shuffle(g), y = 0; y < g.length && (_ = g[y], v = _.key, !(b = this.levelData.tiles[v]) || b.components.isInoperable || b.groundData.type == k.Ground_Type.Water || b.groundData.teleport || !b.components.bud && 0 != b.components.num || (w = u.color, l.push({
                                            key: v,
                                            color: w
                                        }), b.components.removeByType(k.Tile_Component_Type.bud), S = new k.Tile_Component_Mushroom(k.Tile_Component_Type.exploding_mushroom, {
                                            color: w + ""
                                        }, this.levelData.componentSeeds[k.Tile_Component_Type.exploding_mushroom]), b.components.push(S), !(++f >= 2))); y++);
                                        if (f >= 2)
                                            break
                                    }
                                return [4, h.Utils.waiting(200)];
                            case 6:
                                D.sent(),
                                    C = 300,
                                    E = function (t) {
                                        var e;
                                        return c(this, function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e = l[t],
                                                        [4, new Promise(function (t) {
                                                            var n = P.tiles[e.key],
                                                                o = n.getComptNode(k.Tile_Component_Type.bud);
                                                            o && o.getComponent(O.default)._remove(),
                                                                m.GameUtils.playSFX("exploding_mushroom/exploding_mushroom_appear_1");
                                                            var i = n.tileData.components.getComponent(k.Tile_Component_Type.exploding_mushroom);
                                                            n.initCompontents({
                                                                mushroom: i
                                                            }),
                                                                C = Math.max(.9 * C, 80),
                                                                setTimeout(function () {
                                                                    t()
                                                                }, C)
                                                        })];
                                                case 1:
                                                    return n.sent(),
                                                        [2]
                                            }
                                        })
                                    },
                                    T = 0,
                                    D.label = 7;
                            case 7:
                                return T < l.length ? [5, E(T)] : [3, 10];
                            case 8:
                                D.sent(),
                                    D.label = 9;
                            case 9:
                                return T++,
                                    [3, 7];
                            case 10:
                                for (T = e.length - 1; T >= 0; T--)
                                    this.tiles[e[T].key].tileData.components.removeByType(k.Tile_Component_Type.exploding_mushroom);
                                return this.levelData.pausing = !1,
                                    [2]
                        }
                    })
                })
            },
            e.prototype.beeWorking = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r;
                    return c(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return this.levelData.pausing = !1,
                                    [4, this.busLayer.waitForSteady()];
                            case 1:
                                for (t in a.sent(), this.levelData.tiles)
                                    (e = this.levelData.tiles[t]) && e.components.getComponent(k.Tile_Component_Type.honey_bee) && this.tiles[t].onBeeWorking();
                                for (n = [], o = g.ui.getLayer(g.UILayer.Effect2).getComponentsInChildren(S.default), i = o.length - 1; i >= 0; i--)
                                    f.Logger.debug("[Mapview beeWorking] 呼叫蜜蜂着陆"), r = o[i].move(), n.push(r);
                                return [4, Promise.all(n)];
                            case 2:
                                return a.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.snailWorking = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i;
                    return c(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return this.levelData.pausing = !1,
                                    [4, this.busLayer.waitForSteady()];
                            case 1:
                                for (e in r.sent(), t = [], this.levelData.tiles)
                                    (n = this.levelData.tiles[e]) && n.components.getComponent(k.Tile_Component_Type.snail) && t.push(this.tiles[e]);
                                for (o = [], i = 0; i < t.length; i++)
                                    o.push(t[i].onSnailWorking());
                                return [4, Promise.all(o)];
                            case 2:
                                return r.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.streamWorking = function () {
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
                        u,
                        p,
                        h,
                        d,
                        g;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (g in this.levelData.pausing = !0, t = {}, this.levelData.tiles)
                                    if ((e = this.levelData.tiles[g]) && e.carrier && !(e.stream < 0) && (n = e.neighbors[e.stream]) && (o = this.tiles[n.key], (!(i = this.tiles[e.key]).tileData.carrier || i.tileData.carrier.streaming) && (!o.tileData.carrier || o.tileData.carrier.streaming)))
                                        if ((r = t[o.tileData.key]) && this.tiles[r.tileFrom.tileData.key].tileData.carrier)
                                            f.Logger.debug("[MapView stringWorking] 已经有一个浮木正在前往此格 keyFrom:", i.tileData.key, " keyTo:", o.tileData.key);
                                        else {
                                            if (o.tileData.stream < 0 && o.tileData.carrier && o.tileData.carrier.streaming) {
                                                if (!i.carrier)
                                                    continue;
                                                for (a = i.tileData.stream, s = void 0, l = y.BattleConfig.Dir_Run[a], u = 0; u < l.length; u++)
                                                    if (p = l[u], (h = o.neighbors[p]) && h.tileData.groundData.type == o.tileData.groundData.type) {
                                                        s = h,
                                                            a = p;
                                                        break
                                                    }
                                                t[s.tileData.key] = {
                                                    tileFrom: o,
                                                    tileTo: s,
                                                    carrierFrom: o.carrier,
                                                    carrierData: o.tileData.carrier
                                                }
                                            }
                                            t[o.tileData.key] = {
                                                tileFrom: i,
                                                tileTo: o,
                                                carrierFrom: i.carrier,
                                                carrierData: i.tileData.carrier
                                            }
                                        }
                                for (g in d = [], t)
                                    d.push(t[g]);
                                return [4, this._streamWorking(d)];
                            case 1:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype._streamWorking = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (e = [], i = 0; i < t.length; i++)
                                    r = t[i], n = N.default.TryMove(r, this.busLayer.node, this.gp_carrier), e.push(n);
                                return [4, Promise.all(e)];
                            case 1:
                                for (c.sent(), i = 0; i < t.length; i++)
                                    r = t[i], (o = r.tileFrom).carrier = void 0, o.tileData.carrier = void 0;
                                for (i = 0; i < t.length; i++)
                                    r = t[i], (a = r.tileTo).tileData.carrier = r.carrierData, a.carrier = r.carrierFrom, a.carrier.init(a, r.carrierData);
                                return this.levelData.refreshWallValueOfTile(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.waterTeleportWorking = function () {
                var t;
                return a(this, void 0, void 0, function () {
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return [4, null === (t = this.tPortWaterCtl) || void 0 === t ? void 0 : t.workingOnRoundEnd()];
                            case 1:
                                return e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.LeafWorking = function () {
                var t;
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o;
                    return c(this, function (i) {
                        switch (i.label) {
                            case 0:
                                for (n in e = [], this.tiles)
                                    (o = this.tiles[n]) && (e.push(null === (t = o.carrier) || void 0 === t ? void 0 : t.onRoundEnd()), e.push(o.ground.onRoundEnd()));
                                return [4, Promise.all(e)];
                            case 1:
                                return i.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.shuffle = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (e = [], n = 0; n < t.length; n++)
                                    o = t[n], i = this.tiles[o.keyFrom], r = this.tiles[o.keyTo], a = M.default.show(i, r, this.busLayer.node), e.push(a);
                                return [4, Promise.all(e)];
                            case 1:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onEventOnMolehillBeHurt = function () {
                this.levelData.molehillBeHurt = !0
            },
            e.prototype.onEventOnCrowBeHurt = function () {
                this.levelData.crowBeHurt = !0
            },
            e.prototype.onEventOnAddScore = function (t) {
                this.levelData.score += t.score
            },
            r([q(cc.Node)], e.prototype, "gp_layers", void 0),
            r([q(cc.Node)], e.prototype, "gp_wall", void 0),
            r([q(cc.Node)], e.prototype, "gp_stream", void 0),
            r([q(cc.Node)], e.prototype, "gp_path", void 0),
            r([q(cc.Node)], e.prototype, "gp_tiles", void 0),
            r([q(cc.Node)], e.prototype, "gp_effects", void 0),
            r([q(cc.Prefab)], e.prototype, "prefab_tile", void 0),
            r([q([cc.Prefab])], e.prototype, "ground_prefabs", void 0),
            r([q([cc.Prefab])], e.prototype, "carrier_prefabs", void 0),
            r([q([cc.Node])], e.prototype, "ground_list", void 0),
            r([q(cc.Node)], e.prototype, "gp_carrier", void 0),
            r([q(cc.Prefab)], e.prototype, "prefab_path", void 0),
            r([q(cc.Prefab)], e.prototype, "prefab_stream", void 0),
            r([q([cc.Prefab])], e.prototype, "prefabs_teleport", void 0),
            r([q(D.default)], e.prototype, "busLayer", void 0),
            r([q(F.default)], e.prototype, "tipCtl", void 0),
            r([q(cc.Node)], e.prototype, "node_test", void 0),
            r([z], e)
    }
        (b.default);
n.default = Z;