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
var s = t("AniUtil"),
    l = t("GlobalDefines"),
    u = t("RewardUtils"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.node_light = null,
                e.slot_ico = null,
                e.lb_num = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.option = t,
                    t.ico ? this.icoClone = cc.instantiate(this.option.ico) : this.icoClone = u.RewardUtils.createIcoNode(t.type, 1),
                    this.icoClone.parent = this.slot_ico,
                    this.icoClone.active = !1,
                    this.gp_content.active = !1,
                    this.refreshNum()
            },
            e.prototype.refreshNum = function () {
                this.option.count > 0 ? (this.lb_num.node.active = !0, this.lb_num.string = "+" + this.option.count + (this.option.suffix || "")) : this.lb_num.node.active = !1
            },
            e.prototype.aniShow = function () {
                return a(this, void 0, void 0, function () {
                    var t = this;
                    return c(this, function () {
                        return setTimeout(function () {
                            var e;
                            e = t.option.ico ? t.option.wpos || t.option.ico.convertToWorldSpaceAR(cc.v2(0, 0)) : cc.v2(l.GlobalDefines.ScreenWidth / 2, l.GlobalDefines.ScreenHeight / 2),
                                t.gp_content.position = t.node.convertToNodeSpaceAR(e),
                                t.icoClone.active = !0,
                                t.icoClone.position = cc.v2(0, 0);
                            var n = t.node.convertToWorldSpaceAR(cc.v2(0, 0));
                            if (s.AniUtil.JumpTo2(t.gp_content, n, 300, .5, 1, !0, function () {
                                t.gp_content.active = !0,
                                    t.gp_content.position = cc.v2(0, 0),
                                    cc.tween(t.node_light).to(.2, {
                                        scale: 0
                                    }, {
                                        easing: cc.easing.sineIn
                                    }).start()
                            }), t.gp_content.active = !1, t.option.ico && cc.isValid(t.option.ico) && t.option.ico.active) {
                                var o = t.option.ico.scale;
                                cc.tween(t.option.ico).to(.1, {
                                    scale: .5 * o
                                }, {
                                    easing: cc.easing.sineOut
                                }).to(.1, {
                                    scale: 1.1 * o
                                }, {
                                    easing: cc.easing.sineInOut
                                }).to(.1, {
                                    scale: 1 * o
                                }, {
                                    easing: cc.easing.sineOut
                                }).start()
                            }
                        }, 200),
                            [2]
                    })
                })
            },
            e.prototype.rewardsDataClose = function () {
                u.RewardUtils.rewardsDataClose(this.option)
            },
            e.prototype.onCollection = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, u.RewardUtils.onCollection(this.option, this.slot_ico)];
                            case 1:
                                return t.sent(),
                                    cc.tween(this.gp_content).to(.2, {
                                        scale: 0
                                    }, {
                                        easing: cc.easing.sineIn
                                    }).start(),
                                    [2]
                        }
                    })
                })
            },
            r([h(cc.Node)], e.prototype, "gp_content", void 0),
            r([h(cc.Node)], e.prototype, "node_light", void 0),
            r([h(cc.Node)], e.prototype, "slot_ico", void 0),
            r([h(cc.Label)], e.prototype, "lb_num", void 0),
            r([f], e)
    }
        (cc.Component);
n.default = d;