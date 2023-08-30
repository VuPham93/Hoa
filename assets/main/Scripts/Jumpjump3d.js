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
    n.EventOnBoom = void 0;
var s = t("GameUtils"),
    l = t("Utils"),
    u = t("G"),
    p = function (t) {
        function e(n) {
            var o = t.call(this, e.NAME, !0) || this;
            return o.tType = n,
                o
        }
        return i(e, t),
            e.NAME = "EventOnBoom",
            e
    }
        (cc.Event.EventCustom);
n.EventOnBoom = p;
var f = cc._decorator,
    h = f.ccclass,
    d = (f.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.dx = 0,
                e.dy = 0,
                e.dz = 170,
                e.rate = .45,
                e.groundLine = 0,
                e.scale = 1,
                e.icon = null,
                e.isFading = !1,
                e.curStatus = 0,
                e.nextStatus = 0,
                e.tWPos = void 0,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.createBySpr = function (t, e, n, o, i, r, s) {
                return a(this, void 0, void 0, function () {
                    var a,
                        l;
                    return c(this, function () {
                        return a = new cc.Node,
                            (l = a.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.RAW,
                            l.spriteFrame = e,
                            l.node.y = l.node.height / 2,
                            this._create(t, a, n, o, i, r, s),
                            [2]
                    })
                })
            },
            e.createByNode = function (t, e, n, o, i, r) {
                return a(this, void 0, void 0, function () {
                    var a;
                    return c(this, function () {
                        return (a = cc.instantiate(t)).active = !0,
                            this._create(void 0, a, e, n, o, i, r),
                            [2]
                    })
                })
            },
            e._create = function (t, e, o, i, r, u, p) {
                return a(this, void 0, void 0, function () {
                    var a,
                        f,
                        h,
                        d;
                    return c(this, function () {
                        return a = new cc.Node,
                            (f = new cc.Node).y = i,
                            f.scaleY = .2,
                            f.scaleX = .3,
                            f.color = cc.Color.BLACK,
                            h = f.addComponent(cc.Sprite),
                            t ? (h.spriteFrame = t, f.opacity = 90) : f.opacity = 0,
                            a.addChild(f),
                            a.addChild(e),
                            d = a.addComponent(n),
                            a.position = o,
                            d.groundLine = i,
                            d.scale = null == r ? l.Utils.randomFloat(.8, 1.2) : r,
                            d.tWPos = u,
                            d.tType = p,
                            s.GameUtils.addEffectAR(a),
                            [2]
                    })
                })
            },
            e.prototype.onLoad = function () {
                var t = this;
                this.dz = l.Utils.randomIntInclusive(this.dz / 2, this.dz);
                var e = this.dz / this.rate;
                this.dx = l.Utils.randomIntInclusive(-e, e),
                    this.dy = .6 * l.Utils.randomIntInclusive(-e, e),
                    this.node.scale = this.scale,
                    this.icon = this.node.children[1];
                var n = l.Utils.randomFloat(.15, .25),
                    o = l.Utils.randomFloat(.2, .4);
                cc.tween(this.node).by(o, {
                    x: this.dx,
                    y: this.dy
                }, {
                    easing: cc.easing.sineOut
                }).delay(n).call(function () {
                    if (t.tWPos) {
                        var e = t.node.parent.convertToNodeSpaceAR(t.tWPos),
                            n = t.node.scale;
                        cc.tween(t.node).delay(.3).to(.4, {
                            position: e,
                            scale: .8 * n
                        }).call(function () {
                            u.GlobalEvent.dispatchEvent(new p(t.tType)),
                                t.close()
                        }).start()
                    } else
                        cc.tween(t.node).to(.15, {
                            opacity: 0
                        }).call(function () {
                            t.close()
                        }).start()
                }).start()
            },
            e.prototype.jump = function (t, e) {
                var n = l.Utils.randomFloat(.13, .19),
                    o = Math.max(0, t - 2 * n);
                cc.tween(this.icon).to(n, {
                    y: this.dz,
                    angle: 95 * e,
                    scale: 1.5
                }, {
                    easing: cc.easing.sineOut
                }).to(n, {
                    y: this.groundLine,
                    angle: 185 * e,
                    scale: 1.3
                }, {
                    easing: cc.easing.sineIn
                }).to(o, {
                    angle: 0
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            e.prototype.close = function () {
                l.Utils.removeNode(this.node)
            },
            n = r([h], e)
    }
        (cc.Component));
n.default = d;