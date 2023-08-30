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
var s = t("UIManager"),
    l = t("Utils"),
    u = t("GlobalDefines"),
    p = cc._decorator,
    f = p.ccclass,
    h = (p.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.spdx = 6,
                e.spdy = 18,
                e.groundNum = 0,
                e.groundLine = 0,
                e.scale = 1,
                e.isFading = !1,
                e.curStatus = 0,
                e.nextStatus = 0,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.create = function (t, e, o, i) {
                return void 0 === i && (i = 1),
                    a(this, void 0, void 0, function () {
                        var r,
                            a,
                            l,
                            u;
                        return c(this, function () {
                            return r = new cc.Node,
                                a = new cc.Node,
                                r.addChild(a),
                                (l = a.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.RAW,
                                l.spriteFrame = t,
                                l.node.y = l.node.height / 2,
                                u = r.addComponent(n),
                                r.position = e,
                                u.scale = i,
                                u.initNPos = s.ui.getLayer(s.UILayer.Effect).convertToNodeSpaceAR(cc.v2(r.x, r.y)),
                                u.groundLine = u.initNPos.y + o,
                                s.ui.addEffectAR(r),
                                [2]
                        })
                    })
            },
            e.prototype.onLoad = function () {
                this.spdx = l.Utils.randomIntInclusive(-this.spdx, this.spdx),
                    this.spdy = l.Utils.randomIntInclusive(this.spdy - 10, this.spdy),
                    this.node.scale = this.scale
            },
            e.prototype.close = function () {
                l.Utils.removeNode(this.node)
            },
            e.prototype.update = function () {
                if (-1 != this.nextStatus)
                    switch (this.curStatus = this.nextStatus, this.nextStatus = -1, this.curStatus) {
                        case 0:
                            this.spdx = l.Utils.randomIntInclusive(-this.spdx, this.spdx),
                                this.spdy = l.Utils.randomIntInclusive(0, this.spdy);
                            break;
                        case 1:
                            this.node.y = this.groundLine,
                                this.spdy = Math.abs(this.spdy) * l.Utils.randomFloat(.4, .6);
                            break;
                        case 2:
                            this.close()
                    }
                switch (this.curStatus) {
                    case 0:
                        this.node.y < this.groundLine && (this.nextStatus = 1),
                            this.spdy -= .6,
                            this.node.x += this.spdx,
                            this.node.y += this.spdy;
                        break;
                    case 1:
                        this.node.y < -u.GlobalDefines.ScreenHeight / 2 && (this.nextStatus = 2),
                            this.spdy -= .6,
                            this.node.x += this.spdx,
                            this.node.y += this.spdy
                }
            },
            n = r([f], e)
    }
        (cc.Component));
n.default = h;