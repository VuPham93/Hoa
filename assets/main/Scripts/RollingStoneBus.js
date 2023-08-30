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
var s = t("FrameAni"),
    l = t("G"),
    u = t("Utils"),
    p = t("BattleConfig"),
    f = t("BattleEvents"),
    h = t("ComponentBase"),
    d = t("ComponentRollingStone"),
    g = t("LevelData"),
    y = t("TileData"),
    _ = t("EffectChip"),
    m = t("ScoreToast"),
    v = cc._decorator,
    b = v.ccclass,
    w = (v.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.Show = function (t, e, o) {
                var i = new cc.Node("from_" + t.tileData.key),
                    r = t.mapView.levelData.componentSeeds[y.Tile_Component_Type.rolling_stone].layer + 2;
                t.gp_layer[r].children[0].parent = i,
                    i.position = t.node.position,
                    i.addComponent(n).init(t, e, o),
                    o.addChild(i)
            },
            e.prototype.init = function (t, e, n) {
                this.tileFrom = t,
                    this.mapView = this.tileFrom.mapView,
                    this.opt = e,
                    this.gp_bus = n
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.mapView = void 0,
                    this.gp_bus = void 0
            },
            e.prototype.onLoad = function () {
                this.letsMove()
            },
            e.prototype.letsMove = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                e = 0,
                                    n.label = 1;
                            case 1:
                                return e < this.opt.steps.length ? [4, this.doStep(e)] : [3, 4];
                            case 2:
                                t = n.sent(),
                                    n.label = 3;
                            case 3:
                                return e++,
                                    [3, 1];
                            case 4:
                                return t && this.moveStop(this.mapView.tiles[t]),
                                    u.Utils.removeNode(this.node),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.doStep = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        o,
                        i,
                        r,
                        a,
                        s = this;
                    return c(this, function (u) {
                        switch (u.label) {
                            case 0:
                                if (!(e = this.opt.steps[t]))
                                    return [2];
                                e.sort(function (t, e) {
                                    return t.strength - e.strength
                                }),
                                    i = function (t) {
                                        var i,
                                            a,
                                            u,
                                            p;
                                        return c(this, function (c) {
                                            switch (c.label) {
                                                case 0:
                                                    return i = e[t],
                                                        a = i.destructions,
                                                        i.isCrachWallOut ? [4, r.moveCrash(i.dir, function () {
                                                            a && l.GlobalEvent.dispatchEvent(new f.EventOnWallBeHurt(a.id, a.oldStrength, a.strength))
                                                        })] : [3, 2];
                                                case 1:
                                                    return c.sent(),
                                                        [3, 15];
                                                case 2:
                                                    return i.isCrachWallIn ? [4, r.moveCrash(i.dir, function () {
                                                        a && l.GlobalEvent.dispatchEvent(new f.EventOnWallBeHurt(a.id, a.oldStrength, a.strength))
                                                    })] : [3, 4];
                                                case 3:
                                                    return c.sent(),
                                                        [3, 15];
                                                case 4:
                                                    return i.isFallIntoWater ? [4, r.fallIntoWater(i.key_stay)] : [3, 6];
                                                case 5:
                                                    return c.sent(),
                                                        [3, 15];
                                                case 6:
                                                    return i.crashStone ? [4, r.moveCrash(i.dir, function () {
                                                        var t = s.mapView.tiles[i.key];
                                                        n.Show(t, i.crashStone, s.gp_bus),
                                                            s.tileFrom = s.mapView.tiles[i.key_stay]
                                                    })] : [3, 8];
                                                case 7:
                                                    return c.sent(),
                                                        [3, 15];
                                                case 8:
                                                    return a ? (u = r.mapView.tiles[i.key], p = u.cptBudbase, i.key_stay != i.key && p && cc.isValid(p) ? [4, r.moveCrash(i.dir, function () {
                                                        if (p && cc.isValid(p)) {
                                                            var t = {
                                                                key: i.key,
                                                                color: p.component.color,
                                                                oldStrength: a.oldStrength,
                                                                strength: a.strength
                                                            };
                                                            p.grow(t)
                                                        }
                                                    })] : [3, 10]) : [3, 13];
                                                case 9:
                                                    return c.sent(),
                                                        [3, 12];
                                                case 10:
                                                    return p && (p.node.opacity = 0),
                                                        [4, r.move(i.key_stay)];
                                                case 11:
                                                    c.sent(),
                                                        c.label = 12;
                                                case 12:
                                                    return p && cc.isValid(p) && p.component.strength >= p.component.maxStrength && p.remove(),
                                                        [3, 15];
                                                case 13:
                                                    return [4, r.move(i.key_stay)];
                                                case 14:
                                                    c.sent(),
                                                        c.label = 15;
                                                case 15:
                                                    return i.removeRight ? (o = void 0, r.onRemove(i.isFallIntoWater), [2, "break"]) : (o = i.key_stay, [2])
                                            }
                                        })
                                    },
                                    r = this,
                                    a = 0,
                                    u.label = 1;
                            case 1:
                                return a < e.length ? [5, i(a)] : [3, 4];
                            case 2:
                                if ("break" === u.sent())
                                    return [3, 4];
                                u.label = 3;
                            case 3:
                                return a++,
                                    [3, 1];
                            case 4:
                                return [2, o]
                        }
                    })
                })
            },
            e.prototype.fallIntoWater = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            var o = e.mapView.tiles[t],
                                i = o.node.position;
                            cc.tween(e.node).to(.2, {
                                position: i,
                                scale: .6,
                                opacity: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).call(function () {
                                e.tileFrom = o,
                                    s.default.show("rs_wave", 18, o.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    n()
                            }).start()
                        })]
                    })
                })
            },
            e.prototype.move = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            var o = e.mapView.tiles[t],
                                i = o.node.position;
                            cc.tween(e.node).to(.2, {
                                position: i
                            }).call(function () {
                                e.tileFrom = o,
                                    n()
                            }).start()
                        })]
                    })
                })
            },
            e.prototype.moveCrash = function (t, e) {
                return a(this, void 0, void 0, function () {
                    var n = this;
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            var i = p.Dir_Angle[g.Neighbor_Dir[t]],
                                r = u.Utils.angleToRadian(i),
                                a = p.BattleConfig.Tile_Height / 4,
                                c = cc.v2(n.tileFrom.node.position.x + a * Math.cos(r), n.tileFrom.node.position.y + a * Math.sin(r));
                            cc.tween(n.node).to(.1, {
                                position: c
                            }).call(function () {
                                e && e()
                            }).to(.1, {
                                position: n.tileFrom.node.position
                            }, {
                                easing: cc.easing.sineOut
                            }).call(function () {
                                o()
                            }).start()
                        })]
                    })
                })
            },
            e.prototype.moveStop = function (t) {
                for (var e = t.mapView.levelData.componentSeeds[y.Tile_Component_Type.rolling_stone].layer + 2, n = this.node.children[0], o = t.gp_layer[e], i = o.getComponentsInChildren(h.default), r = 0; r < i.length; r++)
                    i[r]._remove();
                n.parent = o;
                var a = t.getCptByType(d.default),
                    c = {
                        key: t.tileData.key,
                        color: -1,
                        oldStrength: this.opt.oldStrength,
                        strength: a.component.strength
                    };
                a.grow(c),
                    a.data.running = !1
            },
            e.prototype.onRemove = function (t) {
                var e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    n = this.node.children[0].getComponent(d.default);
                t || (_.default.show(n.frames_chips, e, 5), s.default.show("rs_smoke", 11, this.tileFrom.node.convertToWorldSpaceAR(cc.v2(0, 0))));
                var o = n.component.seed.score;
                o > 0 && this.tileFrom && (this.mapView.levelData.score += o, m.default.show(o, e));
                var i = this.tileFrom.tileData.key,
                    r = n.component.type,
                    a = n.component.color;
                l.GlobalEvent.dispatchEvent(new f.EventOnComponentDelete(i, r, a))
            },
            n = r([b], e)
    }
        (cc.Component));
n.default = w;