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
}),
    n.BeeFlying_Type = void 0;
var s,
    l = t("AudioManager"),
    u = t("GlobalDefines"),
    p = t("G"),
    f = t("logger"),
    h = t("Utils"),
    d = t("UIManager"),
    g = t("BattleConfig"),
    y = t("GameUtils"),
    _ = t("BattleEvents"),
    m = t("ComponentInEffect"),
    v = t("TileData"),
    b = t("ScoreToast");
(function (t) {
    t[t.Hover = 1] = "Hover",
        t[t.GoAway = 2] = "GoAway"
})(s = n.BeeFlying_Type || (n.BeeFlying_Type = {}));
var w = cc._decorator,
    S = w.ccclass,
    C = (w.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.Hover = function (t, e, o) {
                var i = new cc.Node("from_" + t.tileData.key),
                    r = t.mapView.levelData.componentSeeds[v.Tile_Component_Type.honey_bee].layer + 2;
                t.gp_layer[r].children[0].parent = i,
                    i.addComponent(n).init(t.mapView, e, o, s.Hover);
                var a = d.ui.getLayer(d.UILayer.Effect2),
                    c = t.node.convertToWorldSpaceAR(cc.v2(0, 0));
                i.position = a.convertToNodeSpaceAR(c),
                    a.addChild(i)
            },
            e.GoAway = function (t) {
                var e = t.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = new cc.Node("bee_goaway");
                t.node.position = cc.v2(0, 0),
                    t.node.parent = o,
                    o.addComponent(n).init(void 0, t.data, void 0, s.GoAway);
                var i = d.ui.getLayer(d.UILayer.Effect2);
                o.position = i.convertToNodeSpaceAR(e),
                    i.addChild(o)
            },
            e.prototype.init = function (t, e, n, o) {
                this.mapView = t,
                    this.cptData = e,
                    this.keyCenter = n,
                    this.type = o,
                    this.beeNode = this.node.children[0],
                    this.ani_bee = this.beeNode.getComponentInChildren(cc.Animation)
            },
            e.prototype.onLoad = function () {
                var t = this;
                this.takeOff(function () {
                    t.type == s.GoAway || t.cptData.strength >= t.cptData.maxStrength ? t.goAway() : y.GameUtils.playSFX("honey_bee/beeblocker_hover_loop_1")
                })
            },
            e.prototype.onEnable = function () {
                p.GlobalEvent.on(_.EventOnStageCompleted.NAME, this.onEventOnStageCompleted, this)
            },
            e.prototype.onDisable = function () {
                l.sd.stopSFX(this.audioId_hover),
                    p.GlobalEvent.off(_.EventOnStageCompleted.NAME, this.onEventOnStageCompleted, this)
            },
            e.prototype.onEventOnStageCompleted = function () {
                this.goAway()
            },
            e.prototype.takeOff = function (t) {
                var e;
                this.ani_bee.play("bee_1_fly");
                var n = null === (e = this.mapView) || void 0 === e ? void 0 : e.tiles[this.keyCenter];
                if (n) {
                    y.GameUtils.playSFX("honey_bee/beeblocker_hit");
                    var o = n.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                        i = d.ui.getLayer(d.UILayer.Effect2).convertToNodeSpaceAR(o),
                        r = this.node.position.sub(i).normalize(),
                        a = this.node.position,
                        c = .9 * g.BattleConfig.Tile_Height,
                        s = this.node.position.add(r.multiply(cc.v2(c, c)));
                    cc.tween(this.node).to(.2, {
                        position: s
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.5, {
                        position: a,
                        scale: 1.2
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        t && t()
                    }).start()
                } else
                    y.GameUtils.playSFX("honey_bee/beeblocker_takeoff_1"), cc.tween(this.beeNode).delay(h.Utils.randomFloat(0, .6)).to(.5, {
                        scale: .6,
                        y: -50
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.5, {
                        scale: 1.2,
                        y: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        t && t()
                    }).start()
            },
            e.prototype.move = function () {
                var t = this;
                return new Promise(function (e) {
                    if (t.cptData.strength >= t.cptData.maxStrength)
                        e();
                    else {
                        var n = [];
                        for (var o in t.mapView.levelData.tiles) {
                            var i = t.mapView.levelData.tiles[o];
                            if (i.components.checkMaskTrue(t.cptData.checkIn)) {
                                if (!i.components.bud)
                                    continue;
                                n.push(i)
                            }
                        }
                        if (0 == n.length)
                            return t.goAway(), void e();
                        y.GameUtils.playSFX("honey_bee/beeblocker_hover_loop_1");
                        var r = n[h.Utils.randomInt(0, n.length)],
                            s = t.mapView.tiles[r.key];
                        s.tileData.components.push(t.cptData);
                        var l = s.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                            u = d.ui.getLayer(d.UILayer.Effect2).convertToNodeSpaceAR(l),
                            p = u.sub(t.node.position).len(),
                            f = h.Utils.randomFloat(1.5, 1.7),
                            g = h.Utils.randomFloat(0, .2),
                            _ = f - g,
                            m = t.node.position.x > u.x ? 1 : -1;
                        cc.tween(t.beeNode).delay(g).call(function () {
                            cc.tween(t.beeNode.children[0]).to(.2, {
                                angle: 15 * m
                            }, {
                                easing: cc.easing.sineInOut
                            }).start()
                        }).to(.3 * _, {
                            x: .3 * p * m
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            cc.tween(t.beeNode.children[0]).to(.2, {
                                angle: 15 * -m
                            }, {
                                easing: cc.easing.sineInOut
                            }).start()
                        }).to(.4 * _, {
                            x: .2 * -p * m
                        }, {
                            easing: cc.easing.sineInOut
                        }).call(function () {
                            cc.tween(t.beeNode.children[0]).to(.2, {
                                angle: 0
                            }, {
                                easing: cc.easing.sineInOut
                            }).start()
                        }).to(.3 * _, {
                            x: 0,
                            angle: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).start(),
                            cc.tween(t.node).delay(g).to(_, {
                                position: u
                            }, {
                                easing: cc.easing.sineInOut
                            }).call(function () {
                                return a(t, void 0, void 0, function () {
                                    return c(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, this.sitdown(s)];
                                            case 1:
                                                return t.sent(),
                                                    this.close(),
                                                    e(),
                                                    [2]
                                        }
                                    })
                                })
                            }).start()
                    }
                })
            },
            e.prototype.sitdown = function (t) {
                var e = this;
                return new Promise(function (n) {
                    cc.tween(e.beeNode).by(.15, {
                        scale: .1,
                        y: 20
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        y.GameUtils.playSFX("honey_bee/beeblocker_land_1")
                    }).to(.3, {
                        scale: .8,
                        y: 0
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        y.GameUtils.playSFX("merge_buds", ".mp3", .3);
                        var e = t.cptBudbase.component;
                        y.GameUtils.createEffectClear(t.node.convertToWorldSpaceAR(cc.v2(0, 0)), e.color, 1.5);
                        var n = Math.min(3, e.maxStrength - e.strength - 1);
                        n = Math.max(0, n);
                        var o = {
                            key: t.tileData.key,
                            color: e.color,
                            oldStrength: e.strength,
                            strength: e.strength + n
                        };
                        e.addStrength(n),
                            f.Logger.debug("[BeeFlying sitdown] opt:", o),
                            t.cptBudbase.grow(o)
                    }).delay(.75).call(function () {
                        e.ani_bee.play("bee_1_idle_1"),
                            e.beeNode.position = cc.v2(0, 0),
                            e.beeNode.parent = t.gp_layer[e.cptData.seed.layer + 2],
                            n()
                    }).start()
                })
            },
            e.prototype.goAway = function () {
                var t = this,
                    e = this.cptData.seed.score;
                e > 0 && (p.GlobalEvent.dispatchEvent(new _.EventOnAddScore(e)), b.default.show(e, this.node.convertToWorldSpaceAR(cc.v2(0, 0)))),
                    l.sd.stopSFX(this.audioId_hover),
                    this.audioId_hover = void 0,
                    y.GameUtils.playSFX("honey_bee/beeblocker_hit");
                var n = this.node.x > 0 ? 1 : -1;
                cc.tween(this.beeNode).to(.3, {
                    y: -50
                }, {
                    easing: cc.easing.sineOut
                }).to(.3, {
                    y: 0
                }, {
                    easing: cc.easing.sineIn
                }).start(),
                    cc.tween(this.node).by(.6, {
                        x: n * u.GlobalDefines.ScreenWidth * 3 / 4,
                        y: 50,
                        angle: 45 * n
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.close()
                    }).start()
            },
            e.prototype.close = function () {
                this.cptData = void 0,
                    this.mapView = void 0,
                    this.beeNode = void 0,
                    h.Utils.removeNode(this.node)
            },
            n = r([S], e)
    }
        (m.default));
n.default = C;