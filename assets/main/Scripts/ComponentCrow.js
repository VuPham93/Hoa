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
    l = t("Utils"),
    u = t("BattleConfig"),
    p = t("GameUtils"),
    f = t("BattleEvents"),
    h = t("ComponentBudBase"),
    d = t("LevelData"),
    g = t("ScoreToast"),
    y = cc._decorator,
    _ = y.ccclass,
    m = y.property,
    v = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.ani_crow = null,
                e.list_destructible = [],
                e.lb_test = null,
                e.frames_chips = [],
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
                switch (t.prototype.init.call(this, e), this.refreshStrength(this.data.color, this.data.strength, function () { }), e.direction) {
                    case d.Neighbor_Dir.NW:
                        this.node.angle = 60;
                        break;
                    case d.Neighbor_Dir.NE:
                        this.node.angle = -60;
                        break;
                    case d.Neighbor_Dir.N:
                        this.node.angle = 0
                }
                this.ani_crow.node.scale = .8,
                    this.ani_crow.play("cr_1_idel")
            },
            e.prototype.refreshStrength = function () {
                var t = this;
                this.lb_test.string = this.data.strength + "",
                    this.ani_crow.once(cc.Animation.EventType.FINISHED, function () {
                        t.ani_crow.play("cr_1_idel")
                    }
                        .bind(this), !0),
                    this.ani_crow.play("cr_1_hurt"),
                    this.createEffectHurt()
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return c(this, function () {
                        return t.strength <= 3 && p.GameUtils.playSFX("crow/bird_hit", ".mp3", .5),
                            e = Math.min(this.data.maxStrength, t.strength) - 2,
                            this.list_destructible[e].active = !1,
                            this.refreshStrength(this.data.color, t.strength, void 0),
                            [2]
                    })
                })
            },
            e.prototype.remove = function (t) {
                var e = this,
                    n = this.component,
                    o = n.seed.score,
                    i = this.getTile();
                o > 0 && i && (i.mapView.levelData.score += o, g.default.show(o, i.node.convertToWorldSpaceAR(cc.v2(0, 0))));
                var r = t || this.getTile().tileData.key,
                    a = n.type,
                    c = n.color;
                s.GlobalEvent.dispatchEvent(new f.EventOnComponentDelete(r, a, c)),
                    p.GameUtils.playSFX("crow/bird_fly"),
                    this.createEffectHurt(),
                    this.ani_crow.play("cr_1_fly");
                var u = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                this.node.position = u,
                    p.GameUtils.addEffectAR(this.node),
                    cc.tween(this.gp_content).to(2, {
                        y: 2e3
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        l.Utils.removeNode(e.gp_content)
                    }).start();
                var h = this.node.angle > 0 ? 1 : -1;
                cc.tween(this.ani_crow.node).delay(.5).by(1.5, {
                    angle: 30 * h,
                    x: -200 * h
                }).start()
            },
            e.prototype.aniBigBoomCenter = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.peck = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    o = this;
                                return c(this, function () {
                                    return e = l.Utils.randomInt(0, 500),
                                        setTimeout(function () {
                                            p.GameUtils.playOGG("crow/bird_pick"),
                                                o.ani_crow.once(cc.Animation.EventType.FINISHED, function () {
                                                    o.ani_crow.play("cr_1_idel"),
                                                        t && t(),
                                                        n()
                                                }
                                                    .bind(o), !0),
                                                o.ani_crow.play("cr_1_peck")
                                        }, e),
                                        [2]
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.onShovel = function (t, e, n, o) {
                var i = this;
                e.once(cc.Animation.EventType.FINISHED, function () {
                    o && o()
                }, !0),
                    e.play("ani_shovel_3"),
                    setTimeout(function () {
                        p.GameUtils.playOGG("booster_shovel_wack"),
                            i.remove(t),
                            cc.tween(n).to(.3, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()
                    }, 800)
            },
            e.prototype.createEffectHurt = function () {
                for (var t = l.Utils.randomInt(128, 255), e = this.node.convertToWorldSpaceAR(cc.v2(0, 0)), n = p.GameUtils.effectLayer.convertToNodeSpaceAR(e), o = function () {
                    var e = new cc.Node;
                    e.addComponent(cc.Sprite).spriteFrame = i.frames_chips[l.Utils.randomInt(0, i.frames_chips.length)];
                    var o = u.BattleConfig.Tile_Height * l.Utils.randomFloat(.4, .6),
                        r = l.Utils.randomInt(0, 360),
                        a = l.Utils.angleToRadian(r),
                        c = cc.v2(n.x + o * Math.cos(a), n.y + o * Math.sin(a)),
                        s = c.sub(n).normalize();
                    e.angle = l.Utils.randomInt(0, 360),
                        e.position = n,
                        e.scale = .5,
                        e.opacity = t,
                        e.parent = p.GameUtils.effectLayer;
                    var f = s.x * u.BattleConfig.Tile_Height * .5,
                        h = -u.BattleConfig.Tile_Height,
                        d = l.Utils.randomFloat(.6, 1);
                    cc.tween(e).delay(.15).to(.3, {
                        position: c,
                        scale: d
                    }, {
                        easing: cc.easing.quartOut
                    }).by(2, {
                        x: f,
                        y: h,
                        opacity: -t,
                        scale: -d
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        l.Utils.removeNode(e)
                    }).start()
                }, i = this, r = 0; r < 6; r++)
                    o()
            },
            r([m(cc.Node)], e.prototype, "gp_content", void 0),
            r([m(cc.Animation)], e.prototype, "ani_crow", void 0),
            r([m([cc.Node])], e.prototype, "list_destructible", void 0),
            r([m(cc.Label)], e.prototype, "lb_test", void 0),
            r([m([cc.SpriteFrame])], e.prototype, "frames_chips", void 0),
            r([_], e)
    }
        (h.default);
n.default = v;