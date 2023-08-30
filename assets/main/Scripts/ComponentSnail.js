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
    l = t("G"),
    u = t("Utils"),
    p = t("BattleConfig"),
    f = t("GameUtils"),
    h = t("BattleEvents"),
    d = t("ComponentRunnerBase"),
    g = t("ComponentSlime"),
    y = t("TileData"),
    _ = t("SnailBus"),
    m = cc._decorator,
    v = m.ccclass,
    b = m.property,
    w = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_body = null,
                e.switch_normal = null,
                e.lb_test = null,
                e.frames_chips = [],
                e.audioId = void 0,
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this.component
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e),
                    this.refreshStrength(this.data.color, this.data.strength, function () { })
            },
            e.prototype.onEnable = function () {
                l.GlobalEvent.on(h.EventOnRunnerBeHurt.NAME, this.onEventOnRunnerBeHurt, this)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    l.GlobalEvent.off(h.EventOnRunnerBeHurt.NAME, this.onEventOnRunnerBeHurt, this)
            },
            e.prototype.refreshStrength = function () {
                this.lb_test.string = this.data.strength + "",
                    this.data.curState == y.Snail_State.shaking ? this.switch_body.showIndex = 1 : (this.switch_normal.showIndex = this.data.dir, this.switch_body.showIndex = 0)
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return f.GameUtils.playOGG("pile_of_leaves/leaves_move"),
                            this.refreshStrength(this.data.color, t.strength, void 0),
                            [2]
                    })
                })
            },
            e.prototype.remove = function () {
                for (var t = function () {
                    var t = new cc.Node;
                    t.addComponent(cc.Sprite).spriteFrame = e.frames_chips[u.Utils.randomInt(0, e.frames_chips.length)];
                    var n = u.Utils.randomInt(-30, 30),
                        o = u.Utils.randomInt(-20, 20),
                        i = n < 0 ? 30 : -30;
                    t.position = e.node.convertToWorldSpaceAR(cc.v2(n, o)),
                        f.GameUtils.addEffectAR(t),
                        cc.tween(t).by(2, {
                            y: -p.BattleConfig.Tile_Height * u.Utils.randomFloat(.8, 1.2),
                            x: 1.8 * n,
                            angle: i,
                            opacity: -255
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            u.Utils.removeNode(t)
                        }).start()
                }, e = this, n = 0; n < 3; n++)
                    t()
            },
            e.prototype.onEventOnRunnerBeHurt = function (t) {
                var e;
                if (t.opt.id == (null === (e = this.component) || void 0 === e ? void 0 : e.id)) {
                    f.GameUtils.playSFX("snail/snail_hit");
                    var n = this.getTile();
                    if ("shaking" != t.opt.keyTo)
                        if (n) {
                            var o = n,
                                i = n.mapView.tiles[t.opt.keyTo];
                            _.default.Show(o, i, n.mapView.busLayer.node)
                        } else {
                            var r = this.node.parent.getComponent(_.default),
                                a = r.tileTo.mapView.tiles[t.opt.keyTo];
                            r.changeWay(a)
                        }
                    else if (this.refreshStrength(this.data.color, t.opt.addStrength, void 0), f.GameUtils.playSFX("snail/snail_stunned"), t.opt.keyBoom && n) {
                        var c = n.mapView.tiles[t.opt.keyBoom],
                            s = n.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                            l = c.node.convertToNodeSpaceAR(s).normalize(),
                            u = this.gp_content.position,
                            h = .2 * p.BattleConfig.Tile_Height,
                            d = this.gp_content.position.add(l.multiply(cc.v2(h, h)));
                        cc.tween(this.gp_content).to(.15, {
                            position: d
                        }, {
                            easing: cc.easing.sineOut
                        }).to(.3, {
                            position: u
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                    }
                }
            },
            e.prototype.onRoundEnd = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.data.curState != y.Snail_State.shaking ? [3, 1] : (++this.data.roundNum, this.data.roundNum >= 2 && (this.switch_body.showIndex = 0, this.switch_normal.showIndex = this.data.dir, this.data.curState = y.Snail_State.idel), [3, 4]);
                            case 1:
                                return this.data.curState != y.Snail_State.idel ? [3, 4] : (t = this.findNextTile()) < 0 ? [2] : (this.switch_normal.showIndex = t, this.data.dir != t ? [3, 3] : [4, this.moveToNextTile()]);
                            case 2:
                                return e.sent(),
                                    [3, 4];
                            case 3:
                                this.data.dir = t,
                                    e.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.createSlime = function () {
                var t = this.getTile(),
                    e = t.mapView.levelData.componentSeeds[y.Tile_Component_Type.slime],
                    n = y.Tile_Component.Create(y.Tile_Component_Type.slime, {
                        health: 3
                    }, e);
                this.data.container.push(n);
                var o = {};
                o[y.Tile_Component_Type.slime] = n,
                    t.initCompontents(o)
            },
            e.prototype.moveToNextTile = function () {
                return a(this, void 0, void 0, function () {
                    var t = this;
                    return c(this, function () {
                        return [2, new Promise(function (e) {
                            var n = t.getTile();
                            if (n) {
                                var o = n.neighbors[t.data.dir];
                                if (o) {
                                    var i = t.data.container.getComponent(y.Tile_Component_Type.slime);
                                    i ? i.strength > 1 && (t.data.container.pull(y.Tile_Component_Type.slime), n.getCptByType(g.default)._remove(), t.createSlime()) : t.createSlime();
                                    var r = t.data.container.pull(t.data.type);
                                    o.tileData.components.push(r[0]);
                                    var a = t.data.seed.layer + 2,
                                        c = t.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                    t.node.position = o.gp_layer[a].convertToNodeSpaceAR(c),
                                        t.node.parent = o.gp_layer[a],
                                        f.GameUtils.playSFX("snail/snail_move_" + u.Utils.randomIntInclusive(1, 3)),
                                        cc.tween(t.node).to(.6, {
                                            position: cc.v2(0, 0)
                                        }, {
                                            easing: cc.easing.sineInOut
                                        }).call(function () {
                                            e()
                                        }).start()
                                } else
                                    e()
                            } else
                                e()
                        })]
                    })
                })
            },
            e.prototype.findNextTile = function () {
                var t = this.getTile(),
                    e = this.data.dir,
                    n = t.neighbors[e];
                if (n && n.tileData.components.getIsLivableSnail(t.tileData))
                    return e;
                for (var o = u.Utils.shuffle([0, 1, 2, 3, 4, 5]), i = 0; i < o.length; i++) {
                    var r = o[i];
                    if ((a = t.neighbors[r]) && !a.tileData.components.budbase && a.tileData.components.getIsLivableSnail(t.tileData))
                        return r
                }
                for (i = 0; i < o.length; i++) {
                    var a;
                    if (r = o[i], (a = t.neighbors[r]) && a.tileData.components.getIsLivableSnail(t.tileData))
                        return r
                }
                return -1
            },
            e.prototype.onShovel = function (t, e, n, o) {
                var i = this,
                    r = cc.instantiate(this.node);
                r.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    f.GameUtils.addEffectAR(r),
                    this.node.opacity = 0,
                    e.once(cc.Animation.EventType.FINISHED, function () {
                        o && o()
                    }, !0),
                    e.play("ani_shovel_1"),
                    setTimeout(function () {
                        f.GameUtils.playOGG("booster_shovel_dig"),
                            i.remove(),
                            u.Utils.removeNode(i.node),
                            cc.tween(r).by(.5, {
                                y: p.BattleConfig.Tile_Height,
                                opacity: -255,
                                scale: 1
                            }, {
                                easing: cc.easing.sineIn
                            }).call(function () {
                                u.Utils.removeNode(r)
                            }).start(),
                            cc.tween(n).to(.3, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()
                    }, 600)
            },
            r([b(cc.Node)], e.prototype, "gp_content", void 0),
            r([b(s.default)], e.prototype, "switch_body", void 0),
            r([b(s.default)], e.prototype, "switch_normal", void 0),
            r([b(cc.Label)], e.prototype, "lb_test", void 0),
            r([b([cc.SpriteFrame])], e.prototype, "frames_chips", void 0),
            r([v], e)
    }
        (d.default);
n.default = w;