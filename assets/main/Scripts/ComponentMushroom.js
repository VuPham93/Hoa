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
var s = t("AudioManager"),
    l = t("SwitchNode"),
    u = t("Shakeshake"),
    p = t("GameManager"),
    f = t("logger"),
    h = t("Utils"),
    d = t("UIManager"),
    g = t("BattleConfig"),
    y = t("GameUtils"),
    _ = t("ComponentBudBase"),
    m = t("ScoreToast"),
    v = cc._decorator,
    b = v.ccclass,
    w = v.property,
    S = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_strength = null,
                e.lb_test = null,
                e.shaking = !1,
                e.timer = 0,
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
                var n = this;
                t.prototype.init.call(this, e),
                    this.switch_strength.node.scale = 0,
                    this.refreshStrength(this.data.color, this.data.strength, function () {
                        cc.tween(n.switch_strength.node).to(.15, {
                            scaleX: 1,
                            scaleY: 1.2
                        }, {
                            easing: cc.easing.sineOut
                        }).to(.15, {
                            scaleX: 1.4,
                            scaleY: .8
                        }, {
                            easing: cc.easing.sineOut
                        }).to(.15, {
                            scale: 1
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                    }),
                    this.lb_test.string = this.data.strength + ""
            },
            e.prototype.refreshStrength = function (t, e, n) {
                var o = this;
                if (!(e < 0)) {
                    this.clolorShow = t,
                        this.strengthShow = e;
                    var i = 5 == e ? 1 : 0;
                    this.switch_strength.showIndex = i;
                    var r = this.switch_strength.node.children[i],
                        a = i + 1;
                    if (a = Math.max(1, a), p.default.instance.resList.setMushroom(r, t, a, n), this.lb_test.string = e + "", 5 == e) {
                        var c = this.getTile();
                        if (c) {
                            c.tileData.components.removeByType(this.data.type);
                            var s = h.Utils.randomInt(0, 300);
                            setTimeout(function () {
                                var t = o.component.seed.score;
                                t > 0 && (c.mapView.levelData.score += t, m.default.show(t, o.node.convertToWorldSpaceAR(cc.v2(0, 0)))),
                                    o._remove()
                            }, s)
                        }
                    }
                }
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return this.shaking ? [2] : (this.lb_test.string = t.strength + "", this.refreshStrength(this.data.color, t.strength, void 0), t.strength >= this.data.seed.max_level && (this.shaking = !0, s.sd.stopSFX(this.audioId), this.audioId = void 0, s.sd.playSFX("sounds/exploding_mushroom/exploding_mushroom_pollinated", 1, ".mp3", !1, !1, function (t) {
                            e.audioId = t,
                                f.Logger.debug("[ComponentMushroom tryBoom] >>>>播放循环音效exploding_mushroom_pollinated", e.audioId)
                        }), u.default.begin(this.switch_strength.node, -1)), [2])
                    })
                })
            },
            e.prototype.aniBigBoomCenter = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.tryShowReadyEffect = function (t) {
                var e = p.default.instance.resList.frames_color_points[t - 1],
                    n = h.Utils.randomFloat(.6, 1.2),
                    o = h.Utils.randomFloat(2, 2.5),
                    i = o * g.BattleConfig.Tile_Height * .3 + h.Utils.randomInt(20, 40),
                    r = h.Utils.randomInt(200, 255),
                    a = h.Utils.randomInt(-20, 20),
                    c = h.Utils.randomInt(-10, 10),
                    s = y.GameUtils.createNodeByFrame(e, 0, void 0, !0);
                s.opacity = r,
                    s.position = this.node.convertToWorldSpaceAR(cc.v2(a, c)),
                    y.GameUtils.addEffectAR(s),
                    cc.tween(s).to(.3, {
                        scale: n
                    }, {
                        easing: cc.easing.sineIn
                    }).by(o, {
                        x: .5 * a,
                        y: i,
                        opacity: -r
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        h.Utils.removeNode(s)
                    }).start()
            },
            e.prototype.update = function () {
                this.data && this.strengthShow >= this.data.seed.max_level && (this.timer % 36 == 0 && this.tryShowReadyEffect(this.clolorShow), this.timer++)
            },
            e.prototype._remove = function () {
                var t = cc.instantiate(this.node),
                    e = t.getComponentInChildren(l.default);
                e.showIndex = 1;
                var n = e.node.children[1];
                p.default.instance.resList.setMushroom(n, this.clolorShow, 2, void 0),
                    t.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    d.ui.addEffectAR(t, !0),
                    y.GameUtils.playSFX("exploding_mushroom/exploding_mushroom_destroy"),
                    cc.tween(t).to(.1, {
                        scaleX: .5,
                        scaleY: 1.3
                    }, {
                        easing: cc.easing.sineIn
                    }).to(.1, {
                        scaleY: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        h.Utils.removeNode(t)
                    }).start(),
                    h.Utils.removeNode(this.node)
            },
            e.prototype.tryBoom = function (t) {
                return a(this, void 0, Promise, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            for (var o = 300, i = 0; i < t; i++)
                                o *= .95;
                            o = Math.max(o, 100),
                                setTimeout(function () {
                                    n()
                                }, o),
                                cc.tween(e.gp_content).call(function () {
                                    f.Logger.debug("[ComponentMushroom tryBoom] <<<<关闭循环音效exploding_mushroom_pollinated", e.audioId),
                                        s.sd.stopSFX(e.audioId),
                                        e.audioId = void 0,
                                        y.GameUtils.playSFX("exploding_mushroom/exploding_mushroom_explode_1", ".mp3", .5)
                                }).to(.2, {
                                    scale: 1.5,
                                    opacity: 0
                                }, {
                                    easing: cc.easing.sineIn
                                }).call(function () {
                                    h.Utils.removeNode(e.node)
                                }).start()
                        })]
                    })
                })
            },
            r([w(cc.Node)], e.prototype, "gp_content", void 0),
            r([w(l.default)], e.prototype, "switch_strength", void 0),
            r([w(cc.Label)], e.prototype, "lb_test", void 0),
            r([b], e)
    }
        (_.default);
n.default = S;