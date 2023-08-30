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
var s = t("DataManager"),
    l = t("CellFactory"),
    u = t("SwitchNode"),
    p = t("RankCell"),
    f = t("RankUtils"),
    h = cc._decorator,
    d = h.ccclass,
    g = h.property,
    y = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_nodata = null,
                e.scrollview = null,
                e.slot_me = null,
                e.switch_logined = null,
                e.switch_myidx = null,
                e.lb_myidx = null,
                e.node_myavatar = null,
                e.lb_myname = null,
                e.lb_mystage = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.opt = t,
                    this.refreshView()
            },
            e.prototype.onLoad = function () {
                this.switch_logined.showIndex = 0
            },
            e.prototype.refreshView = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i;
                    return c(this, function () {
                        if (this.switch_logined.showIndex = 1, t = this.opt.rankData) {
                            for (this.node_nodata.active = !1, this.slot_me.active = !0, this.scrollview.content.removeAllChildren(), t.sort(function (t, e) {
                                return e.score - t.score
                            }), e = 0; e < t.length; e++)
                                (n = t[e]).idx = e, o = l.default.createVCell(n, e, 640, 122, p.default), this.scrollview.content.addChild(o);
                            this.scrollview.content.height = 122 * t.length,
                                i = 1 - 0 / (this.scrollview.content.height - this.scrollview.node.height),
                                this.scrollview.scrollTo(cc.v2(0, i), 1),
                                this.switch_myidx.showIndex = Math.min(3, t.myRank),
                                this.lb_myidx.string = t.myRank + 1 + "",
                                f.RankUtils.updateNodeSpriteFrame(this.opt.myInfo.avatar || s.dm.player.avatar, this.node_myavatar, !0),
                                this.lb_myname.string = f.RankUtils.solveString(this.opt.myInfo.name, 12),
                                this.lb_mystage.string = ~~this.opt.myInfo.stage + "★"
                        } else
                            this.node_nodata.active = !0, this.slot_me.active = !1;
                        return [2]
                    })
                })
            },
            e.prototype.onBtnLoginClicked = function () { },
            r([g(cc.Node)], e.prototype, "node_nodata", void 0),
            r([g(cc.ScrollView)], e.prototype, "scrollview", void 0),
            r([g(cc.Node)], e.prototype, "slot_me", void 0),
            r([g(u.default)], e.prototype, "switch_logined", void 0),
            r([g(u.default)], e.prototype, "switch_myidx", void 0),
            r([g(cc.Label)], e.prototype, "lb_myidx", void 0),
            r([g(cc.Node)], e.prototype, "node_myavatar", void 0),
            r([g(cc.Label)], e.prototype, "lb_myname", void 0),
            r([g(cc.Label)], e.prototype, "lb_mystage", void 0),
            r([d], e)
    }
        (cc.Component);
n.default = y;