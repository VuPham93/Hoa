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
    l = t("SwitchNode"),
    u = t("RankUtils"),
    p = t("WorldView"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_view = null,
                e.btn_back = null,
                e.worldRank = null,
                e.prefab_cell = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        o;
                    return c(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return t.popLayer.getComponentInChildren(n) ? [2] : [4, u.RankUtils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return e = i.sent(),
                                    (o = cc.instantiate(e)).getComponent(n).init(t),
                                    u.RankUtils.PopView(o, t.popLayer),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (t) {
                this.rankOpt = t,
                    this.gp_content.opacity = 0,
                    this.btn_back.active = !1
            },
            e.prototype.start = function () {
                this.initBackBtn(),
                    this.worldRank.init(this.rankOpt.worldData)
            },
            e.prototype.initBackBtn = function () {
                this.btn_back.active = !0,
                    s.AniUtil.aniShaking(this.btn_back.children[0])
            },
            e.prototype.onLoad = function () {
                cc.tween(this.gp_content).to(.3, {
                    opacity: 255
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            e.prototype.onTapbtnClicked = function (t) {
                var e = t.node.getSiblingIndex();
                this.switch_view.showIndex = e
            },
            e.prototype.close = function () {
                this.rankOpt.onClosed && this.rankOpt.onClosed(),
                    this.node.removeFromParent(),
                    this.node.destroy()
            },
            e.prototype.onBtnBackClicked = function () {
                this.close()
            },
            e.Prefab_Name = "prefab/common/rank/rank_panel",
            r([d(cc.Node)], e.prototype, "gp_content", void 0),
            r([d(l.default)], e.prototype, "switch_view", void 0),
            r([d(cc.Node)], e.prototype, "btn_back", void 0),
            r([d(p.default)], e.prototype, "worldRank", void 0),
            r([d(cc.Prefab)], e.prototype, "prefab_cell", void 0),
            n = r([h], e)
    }
        (cc.Component);
n.default = g;