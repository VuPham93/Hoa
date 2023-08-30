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
    l = t("GameManager"),
    u = t("Utils"),
    p = t("UIManager"),
    f = t("BattleConfig"),
    h = t("GameUtils"),
    d = t("ComponentBudBase"),
    g = t("EffectBudGrow"),
    y = cc._decorator,
    _ = y.ccclass,
    m = y.property,
    v = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_strength = null,
                e.lb_test = null,
                e.prefab_levelup = null,
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
                            scale: 1
                        }, {
                            easing: cc.easing.sineOut
                        }).start()
                    }),
                    this.lb_test.string = this.data.strength + ""
            },
            e.prototype.refreshStrength = function (t, e, n) {
                if (!(e < 0)) {
                    this.clolorShow = t,
                        this.strengthShow = e;
                    var o = Math.min(f.BattleConfig.Strength_Boom1, e) - 1;
                    this.switch_strength.showIndex = o;
                    var i = this.switch_strength.node.children[o],
                        r = o + 1;
                    r = Math.max(1, r),
                        r = Math.min(f.BattleConfig.Strength_Boom1, r),
                        l.default.instance.resList.setFlower(i, t, r, n),
                        this.lb_test.string = r + ""
                }
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return e = this.switch_strength.showIndex,
                                    this.switch_strength.node.active = !1,
                                    this.strengthShow = t.strength,
                                    this.lb_test.string = t.strength + "",
                                    n = this.switch_strength.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    o = {
                                        idx: t.index,
                                        color: this.data.color,
                                        strengthOld: Math.max(t.oldStrength, e + 1),
                                        strength: Math.max(t.strength, e + 1),
                                        wpos: n
                                    },
                                    (i = cc.instantiate(this.prefab_levelup)).scale = .8,
                                    i.getComponent(cc.Animation).once(cc.Animation.EventType.FINISHED, function () {
                                        u.Utils.removeNode(i)
                                    }, this),
                                    r = p.ui.getLayer(p.UILayer.Effect2),
                                    i.position = r.convertToNodeSpaceAR(n),
                                    i.parent = r,
                                    [4, g.default.Show(o, function (e) {
                                        var n;
                                        cc.isValid(null === (n = a.switch_strength) || void 0 === n ? void 0 : n.node) && (a.switch_strength.node.active = !0, a.switch_strength.node.scale = e.scale, cc.tween(a.switch_strength.node).to(.3, {
                                            scale: 1
                                        }, {
                                            easing: cc.easing.sineOut
                                        }).start(), a.refreshStrength(a.data.color, t.strength, function () { }))
                                    })];
                            case 1:
                                return c.sent(),
                                    [2]
                        }
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
                var e = l.default.instance.resList.frames_color_points[t - 1],
                    n = u.Utils.randomFloat(.6, 1.2),
                    o = u.Utils.randomFloat(2, 2.5),
                    i = o * f.BattleConfig.Tile_Height * .3 + u.Utils.randomInt(20, 40),
                    r = u.Utils.randomInt(200, 255),
                    a = u.Utils.randomInt(-20, 20),
                    c = u.Utils.randomInt(-10, 10),
                    s = h.GameUtils.createNodeByFrame(e, 0, void 0, !0);
                s.opacity = r,
                    s.position = this.node.convertToWorldSpaceAR(cc.v2(a, c)),
                    h.GameUtils.addEffectAR(s),
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
                        u.Utils.removeNode(s)
                    }).start()
            },
            e.prototype.update = function () {
                this.strengthShow >= 9 && (this.timer % 36 == 0 && this.tryShowReadyEffect(this.clolorShow), this.timer++)
            },
            r([m(cc.Node)], e.prototype, "gp_content", void 0),
            r([m(s.default)], e.prototype, "switch_strength", void 0),
            r([m(cc.Label)], e.prototype, "lb_test", void 0),
            r([m(cc.Prefab)], e.prototype, "prefab_levelup", void 0),
            r([_], e)
    }
        (d.default);
n.default = v;