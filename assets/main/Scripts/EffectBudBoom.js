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
    u = t("GameUtils"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.node_sprite = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.Preload = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = this,
                                    [4, l.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Boom = function (t, e, o, i, r) {
                return a(this, void 0, void 0, function () {
                    var s = this;
                    return c(this, function () {
                        return [2, new Promise(function (l) {
                            return a(s, void 0, void 0, function () {
                                var a,
                                    s,
                                    p;
                                return c(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            if (i)
                                                a = 20;
                                            else
                                                for (a = r ? 200 : 500, s = 0; s < o; s++)
                                                    a = Math.max(20, .85 * a);
                                            return setTimeout(function () {
                                                l()
                                            }, a),
                                                this.prefab ? [3, 2] : [4, this.Preload()];
                                        case 1:
                                            c.sent(),
                                                c.label = 2;
                                        case 2:
                                            return (p = cc.instantiate(this.prefab)).position = e,
                                                p.getComponent(n).init(t, l),
                                                u.GameUtils.addEffectAR(p),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t, e) {
                this.color = t,
                    this.next = e
            },
            e.prototype.onLoad = function () {
                var t = this;
                this.node.scale = 0,
                    this.node_sprite.getComponent(cc.Sprite).spriteFrame = s.default.instance.resList.frames_bigbud[this.color - 1],
                    cc.tween(this.node).to(.15, {
                        scaleX: .3,
                        scaleY: .6
                    }, {
                        easing: cc.easing.sineIn
                    }).to(.15, {
                        scaleX: 1.2,
                        scaleY: .8
                    }, {
                        easing: cc.easing.sineIn
                    }).to(.1, {
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, {
                        easing: cc.easing.sineOut
                    }).delay(.1).to(.2, {
                        scale: 0
                    }, {
                        easing: cc.easing.quintIn
                    }).call(function () {
                        l.Utils.removeNode(t.node)
                    }).start();
                var e = l.Utils.randomInt(6, 15);
                u.GameUtils.CreatePetalBoom(this.node.position, this.color, e, !1)
            },
            e.prototype.onDisable = function () { },
            e.Prefab_Name = "prefab/game/battle/effect_bud_boom",
            e.prefab = null,
            r([h(cc.Node)], e.prototype, "gp_content", void 0),
            r([h(cc.Node)], e.prototype, "node_sprite", void 0),
            n = r([f], e)
    }
        (cc.Component);
n.default = d;