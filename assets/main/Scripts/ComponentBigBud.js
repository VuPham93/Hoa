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
var s = t("NumberAction"),
    l = t("Shakeshake"),
    u = t("Utils"),
    p = t("GameUtils"),
    f = t("ComponentBudBase"),
    h = cc._decorator,
    d = h.ccclass,
    g = h.property,
    y = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.node_spr = null,
                e.lb_strength = null,
                e.prefab_eff_ready = null,
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
                t.prototype.init.call(this, e);
                var o = "images/tiles/bb_" + this.data.color;
                u.Utils.updateNodeSpriteFrame(o, this.node_spr, !1, function () {
                    n.node.scale = 0,
                        cc.tween(n.node).to(.15, {
                            scale: 1
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                }),
                    this.lb_strength.string = this.data.maxStrength + "",
                    this.refreshStrength(this.data.color, this.data.strength, void 0)
            },
            e.prototype.refreshStrength = function (t, e) {
                this.strengthShow = Math.max(0, this.data.maxStrength - e),
                    this.strengthShow = Math.min(this.strengthShow, ~~this.lb_strength.string),
                    s.default.numberTo(this.lb_strength.node, this.strengthShow)
            },
            e.prototype.grow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n = this;
                    return c(this, function (o) {
                        switch (o.label) {
                            case 0:
                                return e = this.data.maxStrength - this.strengthShow,
                                    this.refreshStrength(this.data.color, Math.max(t.strength, e), void 0),
                                    cc.tween(this.lb_strength.node).to(.1, {
                                        scale: 1.1
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).to(.1, {
                                        scale: 1
                                    }, {
                                        easing: cc.easing.backOut
                                    }).start(),
                                    t.strength >= this.data.maxStrength ? (p.GameUtils.playSFX("ringing"), 1 != t.index ? [3, 2] : [4, new Promise(function (t) {
                                        cc.tween(n.node).to(.3, {
                                            scale: .6
                                        }, {
                                            easing: cc.easing.sineOut
                                        }).call(function () {
                                            t()
                                        }).start()
                                    })]) : [3, 3];
                            case 1:
                                o.sent(),
                                    o.label = 2;
                            case 2:
                                return [3, 5];
                            case 3:
                                return [4, new Promise(function (t) {
                                    cc.tween(n.node).to(.15, {
                                        scale: .8
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).to(.15, {
                                        scale: 1
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).call(function () {
                                        t()
                                    }).start()
                                })];
                            case 4:
                                o.sent(),
                                    o.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.aniBigBoomCenter = function () {
                return a(this, void 0, void 0, function () {
                    var t = this;
                    return c(this, function () {
                        return [2, new Promise(function (e) {
                            var n = new cc.Node("big_boom_center");
                            n.position = t.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                                t.lb_strength.string = "0";
                            var o = cc.instantiate(t.node);
                            o.position = cc.v2(0, 0),
                                o.parent = n,
                                p.GameUtils.addEffectAR(n);
                            var i = cc.instantiate(t.prefab_eff_ready);
                            i.position = cc.v2(0, 0),
                                i.parent = n,
                                l.default.begin(o, 0),
                                setTimeout(function () {
                                    e()
                                }, 100);
                            var r = t.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            p.GameUtils.effectLayer.convertToNodeSpaceAR(r),
                                t.data.color,
                                cc.tween(n).call(function () {
                                    l.default.begin(n)
                                }).delay(.4).call(function () {
                                    u.Utils.removeNode(i)
                                }).call(function () {
                                    u.Utils.removeNode(n)
                                }).start(),
                                t.node.active = !1
                        })]
                    })
                })
            },
            r([g(cc.Node)], e.prototype, "gp_content", void 0),
            r([g(cc.Node)], e.prototype, "node_spr", void 0),
            r([g(cc.Label)], e.prototype, "lb_strength", void 0),
            r([g(cc.Prefab)], e.prototype, "prefab_eff_ready", void 0),
            r([d], e)
    }
        (f.default);
n.default = y;