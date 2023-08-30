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
var s = t("GameManager"),
    l = t("Utils"),
    u = t("UIManager"),
    p = t("BattleConfig"),
    f = cc._decorator,
    h = f.ccclass,
    d = (f.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.Show = function (t, e) {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            var i = new cc.Node;
                            i.position = t.wpos;
                            var r = new cc.Node;
                            r.parent = i,
                                r.addComponent(cc.Sprite),
                                i.addComponent(n).init(t, function (t) {
                                    e && e(t),
                                        o()
                                }),
                                u.ui.addEffectAR(i, !0)
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e) {
                this.opt = t,
                    this.next = e,
                    this.budNode = this.node.children[0]
            },
            e.prototype.onLoad = function () {
                var t = this,
                    e = this.opt.color;
                if (this.opt.strength >= p.BattleConfig.Strength_Boom1) {
                    var n = Math.min(this.opt.strength, p.BattleConfig.Strength_Boom1);
                    s.default.instance.resList.setFlower(this.budNode, e, n, void 0),
                        cc.tween(this.budNode).to(1 == this.opt.idx ? .3 : .1, {
                            scale: .6
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            t.rst = {
                                scale: .6
                            },
                                l.Utils.removeNode(t.node)
                        }).start()
                } else
                    n = Math.min(this.opt.strengthOld, p.BattleConfig.Strength_Boom1), s.default.instance.resList.setFlower(this.budNode, e, n, void 0), cc.tween(this.budNode).delay(.1).to(.1, {
                        scale: 0
                    }, {
                        easing: cc.easing.backIn
                    }).call(function () {
                        var n = Math.min(t.opt.strength, p.BattleConfig.Strength_Boom1);
                        s.default.instance.resList.setFlower(t.budNode, e, n, void 0)
                    }).to(.5, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        t.rst = {
                            scale: t.budNode.scale
                        },
                            l.Utils.removeNode(t.node)
                    }).start()
            },
            e.prototype.onDisable = function () {
                this.next && this.next(this.rst || {
                    scale: .6
                })
            },
            n = r([h], e)
    }
        (cc.Component));
n.default = d;