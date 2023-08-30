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
var s = t("GlobalDefines"),
    l = t("Utils"),
    u = t("GameUtils"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_head = null,
                e.node_dialog = null,
                e.lb_title = null,
                e.lb_dialog = null,
                e.btn_continue = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t) {
                return a(this, void 0, Promise, function () {
                    var e,
                        o,
                        i;
                    return c(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, l.Utils.loadPefab(this.prefab_name)];
                            case 1:
                                return (e = r.sent()) ? (o = cc.instantiate(e), (i = o.getComponent(n)).refresh(t.context, t.title, t.showBtn, t.next), [2, i]) : [2]
                        }
                    })
                })
            },
            e.prototype.refresh = function (t, e, n, o) {
                this.lb_dialog.string = t,
                    e ? (this.lb_title.node.active = !0, this.lb_title.string = e) : this.lb_title.node.active = !1,
                    this.showBtn = n,
                    this.next = o,
                    this.node_head.active = !1,
                    this.node_dialog.opacity = 0,
                    this.btn_continue.active = !1
            },
            e.prototype.aniShow = function (t) {
                var e = this;
                cc.tween(this.node).call(function () {
                    e.node_head.x = -574,
                        e.node_head.active = !0,
                        cc.tween(e.node_head).to(.3, {
                            x: -234
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                }).delay(.5).call(function () {
                    e.node_dialog.scale = 0,
                        e.node_dialog.angle = 15,
                        e.node_dialog.opacity = 255,
                        cc.tween(e.node_dialog).to(.3, {
                            scale: 1,
                            angle: 0
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                }).delay(.3).call(function () {
                    t && t()
                }).start()
            },
            e.prototype.aniShowBtn = function (t) {
                this.btn_continue.y = 100,
                    this.btn_continue.active = !0,
                    cc.tween(this.btn_continue).to(.2, {
                        y: -74
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        t && t()
                    }).start()
            },
            e.prototype.onBtnNextClicked = function () {
                l.Utils.btnLock() || (u.GameUtils.playSoundBtnClicked(), this.close())
            },
            e.prototype.setPosOnScreenBottom = function (t) {
                this.node.position = t.convertToNodeSpaceAR(cc.v2(s.GlobalDefines.ScreenWidth / 2, 0))
            },
            e.prototype.close = function () {
                this.next && this.next(),
                    l.Utils.removeNode(this.node)
            },
            e.prefab_name = "prefab/game/guide/masterli",
            r([h(cc.Node)], e.prototype, "node_head", void 0),
            r([h(cc.Node)], e.prototype, "node_dialog", void 0),
            r([h(cc.Label)], e.prototype, "lb_title", void 0),
            r([h(cc.Label)], e.prototype, "lb_dialog", void 0),
            r([h(cc.Node)], e.prototype, "btn_continue", void 0),
            n = r([f], e)
    }
        (cc.Component);
n.default = d;