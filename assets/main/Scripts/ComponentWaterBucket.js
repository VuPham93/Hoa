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
    l = t("Utils"),
    u = t("UIManager"),
    p = t("GameUtils"),
    f = t("ComponentBudBase"),
    h = t("Tile"),
    d = t("ScoreToast"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_strength = null,
                e.lb_test = null,
                e.prefab_boom = null,
                e.frame_water = null,
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
                    this.refreshStrength(this.data.color, this.data.strength, void 0)
            },
            e.prototype.refreshStrength = function (t, e, n) {
                this.lb_test.string = e + "",
                    this.switch_strength.showIndex = e - 1,
                    n && n()
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            var o = Math.max(e.switch_strength.showIndex + 1, t.strength);
                            if (2 == t.strength ? p.GameUtils.playOGG("pot/ceramic_break_1") : 3 == t.strength && p.GameUtils.playOGG("pot/ceramic_break_2"), e.refreshStrength(e.data.color, o, void 0), t.strength <= 3)
                                cc.tween(e.switch_strength.node).to(.2, {
                                    scale: .8
                                }, {
                                    easing: cc.easing.sineOut
                                }).to(.2, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.backOut
                                }).start(), n();
                            else {
                                p.GameUtils.playOGG("pot/ceramic_break_3");
                                var i = e.component.seed.score;
                                i > 0 && (e.getTile().mapView.levelData.score += i, d.default.show(i, e.node.convertToWorldSpaceAR(cc.v2(0, 0))));
                                var r = cc.instantiate(e.prefab_boom);
                                r.position = e.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    u.ui.addEffectAR(r, !0),
                                    setTimeout(function () {
                                        n()
                                    }, 500),
                                    setTimeout(function () {
                                        l.Utils.removeNode(r)
                                    }, 1e3)
                            }
                        })]
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
            e.prototype.onShovel = function (t, e, n, o) {
                var i = this;
                e.once(cc.Animation.EventType.FINISHED, function () {
                    o && o()
                }, !0),
                    e.play("ani_shovel_2"),
                    setTimeout(function () {
                        p.GameUtils.playOGG("booster_shovel_hit"),
                            i.remove(t),
                            cc.tween(n).to(.3, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()
                    }, 1e3)
            },
            e.prototype.onNear = function (e) {
                return a(this, void 0, void 0, function () {
                    var n;
                    return c(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return [4, t.prototype.onNear.call(this, e)];
                            case 1:
                                return o.sent(),
                                    this.getTile() ? this.component.strength >= this.component.maxStrength ? (n = this.data.waterFlow(e.tileData), [4, this.onWaterFlow(n)]) : [3, 3] : [2];
                            case 2:
                                o.sent(),
                                    o.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.onWaterFlow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        s,
                        u,
                        p,
                        f,
                        d = this;
                    return c(this, function (g) {
                        switch (g.label) {
                            case 0:
                                for (e = this.getTile(), n = [], f = 0; f < t.length; f++)
                                    o = t[f], i = o.key, r = e.mapView.tiles[i], (s = new cc.Node("water_flow")).scale = 0, s.addComponent(cc.Sprite).spriteFrame = this.frame_water, r.gp_content.insertChild(s, 0), n.push(r);
                                for (u = [], p = function (e) {
                                    var o = e,
                                        i = t[e],
                                        r = n[e].getComponent(h.default),
                                        s = r.cptBudbase,
                                        p = r.gp_content.children[0];
                                    u.push(new Promise(function (t) {
                                        return a(d, void 0, void 0, function () {
                                            return c(this, function () {
                                                return cc.tween(p).delay(.2 * o).to(.25, {
                                                    scale: 1
                                                }, {
                                                    easing: cc.easing.backOut
                                                }).call(function () {
                                                    var t = i.strength - i.oldStrength;
                                                    s && s.node && 0 != t && s.grow(i)
                                                }).delay(.3).to(.2, {
                                                    scale: 0
                                                }, {
                                                    easing: cc.easing.sineIn
                                                }).call(function () {
                                                    l.Utils.removeNode(p),
                                                        t()
                                                }).start(),
                                                    [2]
                                            })
                                        })
                                    }))
                                }, f = 0; f < n.length; f++)
                                    p(f);
                                return [4, Promise.all(u)];
                            case 1:
                                return g.sent(),
                                    [2]
                        }
                    })
                })
            },
            r([_(cc.Node)], e.prototype, "gp_content", void 0),
            r([_(s.default)], e.prototype, "switch_strength", void 0),
            r([_(cc.Label)], e.prototype, "lb_test", void 0),
            r([_(cc.Prefab)], e.prototype, "prefab_boom", void 0),
            r([_(cc.SpriteFrame)], e.prototype, "frame_water", void 0),
            r([y], e)
    }
        (f.default);
n.default = m;