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
    u = t("logger"),
    p = t("Utils"),
    f = t("GameUtils"),
    h = t("BattleEvents"),
    d = t("ComponentRunnerBase"),
    g = t("EffectChip"),
    y = t("RollingStoneBus"),
    _ = cc._decorator,
    m = _.ccclass,
    v = _.property,
    b = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_strength = null,
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
            e.prototype.refreshStrength = function (t, e) {
                this.lb_test.string = this.data.strength + "",
                    this.switch_strength.showIndex = e - 1
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
            e.prototype._remove = function () {
                p.Utils.removeNode(this.node)
            },
            e.prototype.remove = function (e) {
                this.createEffectHurt(),
                    t.prototype.remove.call(this, e)
            },
            e.prototype.onEventOnRunnerBeHurt = function (t) {
                var e,
                    n = t.opt;
                if (n.id == (null === (e = this.component) || void 0 === e ? void 0 : e.id)) {
                    u.Logger.debug("[ComponentRollingStong onEventOnRunnerBehurt] opt:", n);
                    var o = this.getTile(),
                        i = o;
                    y.default.Show(i, n, o.mapView.busLayer.node)
                }
            },
            e.prototype.onShovel = function (t, e, n, o) {
                var i = this;
                e.once(cc.Animation.EventType.FINISHED, function () {
                    o && o()
                }, !0),
                    e.play("ani_shovel_2"),
                    setTimeout(function () {
                        f.GameUtils.playOGG("booster_shovel_hit"),
                            i.remove(t),
                            cc.tween(n).to(.3, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start()
                    }, 1e3)
            },
            e.prototype.onNear = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.onRun = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.createEffectHurt = function () {
                var t = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                g.default.show(this.frames_chips, t, 5)
            },
            r([v(cc.Node)], e.prototype, "gp_content", void 0),
            r([v(s.default)], e.prototype, "switch_strength", void 0),
            r([v(cc.Label)], e.prototype, "lb_test", void 0),
            r([v([cc.SpriteFrame])], e.prototype, "frames_chips", void 0),
            r([m], e)
    }
        (d.default);
n.default = b;