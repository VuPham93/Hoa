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
    n.EventOnBackgroundChanged = void 0;
var s = t("G"),
    l = t("GlobalEvents"),
    u = t("BattleEvents"),
    p = t("MainEvents"),
    f = function (t) {
        function e(n) {
            var o = t.call(this, e.NAME, !0) || this;
            return o.id = 0,
                o.id = n,
                o
        }
        return i(e, t),
            e.NAME = "EventOnBackgroundChanged",
            e
    }
        (cc.Event.EventCustom);
n.EventOnBackgroundChanged = f;
var h = cc._decorator,
    d = h.ccclass,
    g = h.property,
    y = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.spr_a = null,
                e.spr_b = null,
                e.spr_blur = null,
                e.lastBid = 1,
                e
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                s.GlobalEvent.on(u.EventOnBattleEnter.NAME, this.onEventOnBattleEnter, this),
                    s.GlobalEvent.on(u.EventOnBattleOut.NAME, this.onEventOnBattleOut, this),
                    s.GlobalEvent.on(l.EventOnPanelPop.NAME, this.onEventOnPanelPop, this),
                    s.GlobalEvent.on(l.EventOnPanelClosed.NAME, this.onEventOnPanelClosed, this),
                    s.GlobalEvent.on(p.EventMainPageChanged.NAME, this.onEventMainPageChanged, this),
                    s.GlobalEvent.on(l.EventOnDataChange.NAME, this.onEventOnDataChange, this)
            },
            e.prototype.onDisable = function () {
                s.GlobalEvent.off(u.EventOnBattleEnter.NAME, this.onEventOnBattleEnter, this),
                    s.GlobalEvent.off(u.EventOnBattleOut.NAME, this.onEventOnBattleOut, this),
                    s.GlobalEvent.off(l.EventOnPanelPop.NAME, this.onEventOnPanelPop, this),
                    s.GlobalEvent.off(l.EventOnPanelClosed.NAME, this.onEventOnPanelClosed, this),
                    s.GlobalEvent.off(p.EventMainPageChanged.NAME, this.onEventMainPageChanged, this),
                    s.GlobalEvent.off(l.EventOnDataChange.NAME, this.onEventOnDataChange, this)
            },
            e.prototype.onEventOnDataChange = function () { },
            e.prototype.refreshBg = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype._toBlur = function () { },
            e.prototype._toClear = function () { },
            e.prototype.onEventOnBattleEnter = function () {
                this._toBlur(!0)
            },
            e.prototype.onEventOnBattleOut = function () {
                this._toClear(!0)
            },
            e.prototype.onEventOnPanelPop = function () {
                this._toBlur(!0)
            },
            e.prototype.onEventOnPanelClosed = function () {
                this._toClear(!0)
            },
            e.prototype.onEventMainPageChanged = function () { },
            r([g(cc.Node)], e.prototype, "gp_content", void 0),
            r([g(cc.Sprite)], e.prototype, "spr_a", void 0),
            r([g(cc.Sprite)], e.prototype, "spr_b", void 0),
            r([g(cc.Sprite)], e.prototype, "spr_blur", void 0),
            r([d], e)
    }
        (cc.Component);
n.default = y;