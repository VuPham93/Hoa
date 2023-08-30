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
var s = t("Shakeshake"),
    l = t("G"),
    u = t("logger"),
    p = t("Utils"),
    f = t("BattleConfig"),
    h = t("GameUtils"),
    d = t("BattleEvents"),
    g = t("ComponentBase"),
    y = t("ComponentBee"),
    _ = t("ComponentBudBase"),
    m = t("ComponentCrow"),
    v = t("ComponentMushroom"),
    b = t("ComponentProtectBase"),
    w = t("ComponentRunnerBase"),
    S = t("ComponentSnail"),
    C = t("LevelData"),
    O = t("TileData"),
    E = t("PathNode"),
    T = t("TeleportLandBus"),
    k = cc._decorator,
    P = k.ccclass,
    D = k.property,
    G = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.node_bigboom = null,
                e.slot_drop = null,
                e.gp_drop = null,
                e.lb_test = null,
                e.gp_layer = [],
                e.prefabs_components = [],
                e.neighbors = [],
                e._placeholder_droping = !1,
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "droper", {
                get: function () {
                    return this.gp_drop.children[0]
                },
                set: function (t) {
                    this.gp_drop.childrenCount > 0 && (u.Logger.warn("[Tile set droper] 这里有一个不应该存在的对像！key:", this.tileData.key), p.Utils.removeAllChildren(this.gp_drop)),
                        t.parent = this.gp_drop
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "nodebigboom", {
                get: function () {
                    if (0 == this.gp_content.childrenCount) {
                        var t = new cc.Node("gp_bigboom");
                        t.parent = this.gp_content,
                            t.addChild(new cc.Node("layer_m2")),
                            t.addChild(new cc.Node("layer_m1"));
                        var e = new cc.Node("slot_drop");
                        e.addChild(new cc.Node("gp_drop")),
                            t.addChild(e),
                            t.addChild(new cc.Node("layer_1")),
                            t.addChild(new cc.Node("layer_2")),
                            t.addChild(new cc.Node("layer_3")),
                            t.addChild(new cc.Node("layer_4")),
                            this.refreshNodebigboom(t)
                    }
                    return this.gp_content.children[0]
                },
                set: function (t) {
                    t ? (this.gp_content.childrenCount > 0 && p.Utils.removeAllChildren(this.gp_content), t.parent = this.gp_content, this.refreshNodebigboom(t)) : u.Logger.warn("[Tile set nodebigboom] value is null", this.tileData.key)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "cptBudbase", {
                get: function () {
                    return this.getCptByType(_.default)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.getCptByType = function (t) {
                return this.gp_content.getComponentInChildren(t)
            },
            Object.defineProperty(e.prototype, "allComponents", {
                get: function () {
                    var t = this.gp_content.getComponentsInChildren(g.default);
                    return t.concat(this.walls.getComponentsInChildren(g.default))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "cptBlastProtected", {
                get: function () {
                    return this.getCptByType(b.default)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "placeholder_droping", {
                get: function () {
                    return this._placeholder_droping
                },
                set: function (t) {
                    this._placeholder_droping = t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (t, e, n, o) {
                this.tileData = t,
                    this.mapView = e,
                    this.ground = n,
                    this.walls = o,
                    this.lb_test.string = this.tileData.key,
                    this.initCompontents(t.components.components)
            },
            e.prototype.initCompontents = function (t) {
                for (var e in t) {
                    var n = t[e];
                    if (n) {
                        var o = n.type,
                            i = O.Tile_Component_Type_Index[o],
                            r = this.prefabs_components[i],
                            a = cc.instantiate(r);
                        a.name = o;
                        var c = a.getComponent(g.default);
                        c.init(n),
                            o.startsWith("wall") ? (a.parent = this.walls.getChildByName(o), c._tile = this) : a.parent = this.gp_layer[n.seed.layer + 2]
                    }
                }
                this.setProtectBaseAndBudbase()
            },
            e.prototype.refreshNodebigboom = function (t) {
                this.node_bigboom = t,
                    this.slot_drop = t.getChildByName("slot_drop"),
                    this.gp_drop = this.slot_drop.getChildByName("gp_drop"),
                    this.gp_layer = [t.getChildByName("layer_m2"), t.getChildByName("layer_m1"), this.gp_drop, t.getChildByName("layer_1"), t.getChildByName("layer_2"), t.getChildByName("layer_3"), t.getChildByName("layer_4")]
            },
            e.prototype.setProtectBaseAndBudbase = function () {
                var t = this.cptBudbase;
                t && (this.cptBlastProtected ? cc.tween(t.node).to(.2, {
                    scale: .8
                }, {
                    easing: cc.easing.sineOut
                }).start() : cc.tween(t.node).to(.2, {
                    scale: 1
                }, {
                    easing: cc.easing.sineOut
                }).start())
            },
            e.prototype.getComptNode = function (t) {
                for (var e = 0; e < this.gp_layer.length; e++)
                    for (var n = this.gp_layer[e], o = 0; o < n.childrenCount; o++) {
                        var i = n.children[o];
                        if (i.name == t)
                            return i
                    }
            },
            e.prototype.clearComponents = function () {
                for (var t = this.allComponents, e = t.length - 1; e >= 0; e--)
                    p.Utils.removeNode(t[e].node)
            },
            e.prototype.onEnable = function () {
                this.gp_content.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                    l.GlobalEvent.on(d.EventOnFlowerStatusStrengthChanged.NAME, this.onEventOnFlowerStatusStrengthChanged, this)
            },
            e.prototype.onDisable = function () {
                this.gp_content.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0),
                    l.GlobalEvent.off(d.EventOnFlowerStatusStrengthChanged.NAME, this.onEventOnFlowerStatusStrengthChanged, this),
                    this.mapView = void 0
            },
            e.prototype.onTouchStart = function (t) {
                if (0 != this.mapView.levelData.steps && 1 == t.getTouches().length) {
                    for (var e = this.allComponents, n = 0; n < e.length; n++)
                        e[n].onClicked();
                    this.mapView.onEventOnTileTouchStart(this.tileData)
                }
            },
            e.prototype.onTouchMove = function (t) {
                if (0 != this.mapView.levelData.steps && 1 == t.getTouches().length) {
                    var e = this.gp_content.convertToWorldSpaceAR(cc.v2(0, 0)).sub(t.getLocation()).len();
                    this.mapView.onTileTouchMove(e <= this.gp_content.width / 2)
                }
            },
            e.prototype.onTouchEnd = function (t) {
                if (0 != this.mapView.levelData.steps && 1 == t.getTouches().length) {
                    l.GlobalEvent.dispatchEvent(new d.EventOnTileTouchEnd(this.tileData));
                    for (var e = this.allComponents, n = 0; n < e.length; n++)
                        e[n].onTouchEnd()
                }
            },
            e.prototype.onTouchCancel = function (t) {
                0 != this.mapView.levelData.steps && 1 == t.getTouches().length && l.GlobalEvent.dispatchEvent(new d.EventOnTileTouchCancel)
            },
            e.prototype.onTouchStartResponse = function (t) {
                var e,
                    n;
                this.alphaOnLine(),
                    t >= f.BattleConfig.Strength_Boom2 && s.default.begin(this.gp_drop, 0),
                    p.Utils.removeNode(null === (e = this.pathNode) || void 0 === e ? void 0 : e.node),
                    this.pathNode = void 0;
                var o = -1;
                if (this.tileData.clear_boss)
                    for (var i = 0; i < C.Neighbor_Dir.Length; i++)
                        if ((null === (n = this.neighbors[i]) || void 0 === n ? void 0 : n.tileData) == this.tileData.clear_boss) {
                            o = i;
                            break
                        }
                if (this.cptBudbase) {
                    var r = this.cptBudbase.component.color,
                        a = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    this.pathNode = E.default.show(this.mapView.prefab_path, this.mapView.gp_path, a, o, this.tileData.clear_idx, t, r)
                }
            },
            e.prototype.onTouchMoveResponse = function (t) {
                this.pathNode && this.pathNode.onTouchMove(t)
            },
            e.prototype.onTouchCancelResponse = function () {
                var t;
                p.Utils.removeNode(null === (t = this.pathNode) || void 0 === t ? void 0 : t.node),
                    this.pathNode = void 0,
                    this.alphaNormal(),
                    s.default.remove(this.gp_drop)
            },
            e.prototype.onEventOnFlowerStatusStrengthChanged = function (t) {
                0 == t.strength && s.default.remove(this.gp_drop)
            },
            e.prototype.clearBrother = function () {
                var t = this;
                return new Promise(function (e) {
                    return a(t, void 0, void 0, function () {
                        var t,
                            n;
                        return c(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return [4, null === (n = this.pathNode) || void 0 === n ? void 0 : n.remove()];
                                case 1:
                                    return o.sent(),
                                        this.pathNode = void 0,
                                        this.tileData.components.removeBudbase(),
                                        null == (t = this.cptBudbase) || t._remove(),
                                        e(),
                                        [2]
                            }
                        })
                    })
                })
            },
            e.prototype.onDropEnd = function () {
                var t;
                if ((null === (t = this.tileData.groundData.teleport) || void 0 === t ? void 0 : t.type) == O.Teleport_Type.Land_In) {
                    this.tileData.groundData.wall = f.BattleConfig.WallValue.CloseAll;
                    var e = this.tileData.groundData.teleport.pair_id;
                    T.default.TryMove({
                        tileFrom: this,
                        tileTo: this.mapView.tPortLandCtl.getOuter(e)
                    }, this.mapView.busLayer.node),
                        l.GlobalEvent.dispatchEvent(new d.EventOnTeleportLandClose(e))
                } else
                    cc.tween(this.gp_drop).to(.1, {
                        scaleY: .7,
                        scaleX: .9
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        scaleY: 1.1
                    }, {
                        easing: cc.easing.sineIn
                    }).to(.1, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start(), this.setProtectBaseAndBudbase()
            },
            e.prototype.onNear = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r;
                    return c(this, function (a) {
                        switch (a.label) {
                            case 0:
                                if (e = this.getCptByType(w.default))
                                    return e.onNear(t), [2];
                                n = this.tileData.components.blast_protect,
                                    o = this.gp_content.getComponentsInChildren(g.default),
                                    i = o.length - 1,
                                    a.label = 1;
                            case 1:
                                return i >= 0 ? (r = o[i]) instanceof _.default && n && n.seed.absolute_blast_protect ? [3, 3] : [4, r.onNear(t)] : [3, 4];
                            case 2:
                                a.sent(),
                                    r.component.seed.near > 0 && r.component.strength >= r.component.maxStrength && (this.tileData.components.removeByType(r.component.type), r.remove()),
                                    a.label = 3;
                            case 3:
                                return i--,
                                    [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.onSelfBoom = function (t) {
                if (t)
                    for (var e = this.gp_content.getComponentsInChildren(g.default), n = e.length - 1; n >= 0; n--) {
                        var o = e[n],
                            i = t[o.component.type];
                        i && (o.grow({
                            key: void 0,
                            color: -1,
                            oldStrength: i.oldStrength,
                            strength: i.strength
                        }), i.removeRight && (u.Logger.warn("[Tile onSelfBoom] 组件能量满 删除"), o.remove()))
                    }
            },
            e.prototype.onCrowPeck = function (t) {
                return a(this, void 0, Promise, function () {
                    return c(this, function () {
                        return [2, this.getCptByType(m.default).peck(function () {
                            var e = t.tileData.components.blast_protect;
                            if (e) {
                                var n = e.addStrength(1),
                                    o = {
                                        key: t.tileData.key,
                                        oldStrength: e.strength - 1,
                                        strength: e.strength,
                                        removeRight: n,
                                        color: e.color
                                    },
                                    i = t.node.getComponentInChildren(b.default);
                                return i.grow(o),
                                    void (o.removeRight && (i._remove(), t.tileData.components.removeBlastProtect()))
                            }
                            var r = t.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                a = t.tileData.components.color;
                            h.GameUtils.createEffectClear(r, a),
                                t.tileData.components.removeBudbase();
                            var c = t.cptBudbase,
                                s = {
                                    killer: O.Tile_Component_Type.crow
                                };
                            c && c._remove(s)
                        })]
                    })
                })
            },
            e.prototype.onBeeWorking = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return this.getCptByType(y.default).onRoundEnd(void 0),
                            [2]
                    })
                })
            },
            e.prototype.onSnailWorking = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return this.getCptByType(S.default).onRoundEnd(void 0),
                            [2]
                    })
                })
            },
            e.prototype.mushroomTryBoom = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return (e = this.getCptByType(v.default)) ? [4, e.tryBoom(t)] : [3, 2];
                            case 1:
                                n.sent(),
                                    n.label = 2;
                            case 2:
                                return [2, void 0]
                        }
                    })
                })
            },
            e.prototype.alphaOnLine = function () {
                for (var t = this.node.getComponentsInChildren(cc.Sprite), e = 0; e < t.length; e++)
                    t[e].node.opacity = 200
            },
            e.prototype.alphaNormal = function () {
                for (var t = this.node.getComponentsInChildren(cc.Sprite), e = 0; e < t.length; e++)
                    t[e].node.opacity = 255
            },
            r([D(cc.Node)], e.prototype, "gp_content", void 0),
            r([D(cc.Node)], e.prototype, "node_bigboom", void 0),
            r([D(cc.Node)], e.prototype, "slot_drop", void 0),
            r([D(cc.Node)], e.prototype, "gp_drop", void 0),
            r([D(cc.Label)], e.prototype, "lb_test", void 0),
            r([D([cc.Node])], e.prototype, "gp_layer", void 0),
            r([D([cc.Prefab])], e.prototype, "prefabs_components", void 0),
            r([P], e)
    }
        (cc.Component);
n.default = G;