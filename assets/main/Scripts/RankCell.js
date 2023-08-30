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
    l = t("RankUtils"),
    u = cc._decorator,
    p = u.ccclass,
    f = u.property,
    h = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_back = null,
                e.switch_mesh = null,
                e.switch_idx = null,
                e.node_frame = null,
                e.node_avatar = null,
                e.lb_name = null,
                e.lb_idx = null,
                e.lb_stage = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.create = function (t) {
                return a(this, void 0, Promise, function () {
                    var e,
                        o;
                    return c(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, l.RankUtils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return e = i.sent(),
                                    (o = cc.instantiate(e)).position = cc.v2(0, 0),
                                    o.getComponent(n).refreshView(t),
                                    [2, o]
                        }
                    })
                })
            },
            e.prototype.refreshView = function (t) {
                this.data = t,
                    this.switch_back.showIndex = t.itsMe ? 1 : 0,
                    this.switch_mesh.showIndex = t.itsMe ? 1 : 0,
                    this.switch_idx.showIndex = Math.min(3, t.idx),
                    this.lb_idx.string = t.idx + 1 + "",
                    this.lb_name.string = t.itsMe ? "Tôi" : l.RankUtils.solveString(t.name, 12) || "Ẩn danh",
                    this.lb_stage.string = ~~t.score + "★",
                    l.RankUtils.updateNodeSpriteFrame(t.avatar, this.node_avatar, !0)
            },
            e.Prefab_Name = "prefab/common/rank/rank_cell",
            r([f(cc.Node)], e.prototype, "gp_content", void 0),
            r([f(s.default)], e.prototype, "switch_back", void 0),
            r([f(s.default)], e.prototype, "switch_mesh", void 0),
            r([f(s.default)], e.prototype, "switch_idx", void 0),
            r([f(cc.Node)], e.prototype, "node_frame", void 0),
            r([f(cc.Node)], e.prototype, "node_avatar", void 0),
            r([f(cc.Label)], e.prototype, "lb_name", void 0),
            r([f(cc.Label)], e.prototype, "lb_idx", void 0),
            r([f(cc.Label)], e.prototype, "lb_stage", void 0),
            n = r([p], e)
    }
        (cc.Component);
n.default = h;