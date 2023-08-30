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
    n.TipIco = void 0;
var s,
    l = t("GlobalDefines"),
    u = cc._decorator,
    p = u.ccclass,
    f = u.property;
(function (t) {
    t[t.NetErr = 0] = "NetErr",
        t[t.Error = 1] = "Error",
        t[t.Tip = 2] = "Tip",
        t[t.Loading = 3] = "Loading",
        t[t.Coin = 4] = "Coin",
        t[t.Energy = 5] = "Energy"
})(s = n.TipIco || (n.TipIco = {}));
var h = function (t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.icon_frames = [],
            e.lb_msg = null,
            e.img_icon = null,
            e.lb_num = null,
            e.startTime = 0,
            e.timer = 0,
            e.duration = 2,
            e.iconIndex = 0,
            e
    }

    var n;
    return i(e, t),
        n = e,
        e.preLoad = function () {
            return a(this, void 0, void 0, function () {
                var t;
                return c(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return t = n,
                                [4, n.loadPefab(n.Prefab_Name).catch(function (t) {
                                    throw t
                                })];
                        case 1:
                            return t.prefab = e.sent(),
                                [2]
                    }
                })
            })
        },
        e.showNum = function (t, e, n, o) {
            this._show(t, e, n, o + "")
        },
        e.show = function (t, e, n) {
            void 0 === n && (n = s.Tip),
                this._show(t, e, n, void 0, 2)
        },
        e._show = function (t, e, o, i, r) {
            return void 0 === r && (r = 2),
                a(this, void 0, void 0, function () {
                    var a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return this.prefab ? [3, 2] : [4, this.preLoad()];
                            case 1:
                                c.sent(),
                                    c.label = 2;
                            case 2:
                                return (a = cc.instantiate(n.prefab)).getComponent(n)._show(e, o, i, r),
                                    a.parent = t,
                                    [2, a]
                        }
                    })
                })
        },
        e.loadPefab = function (t, e) {
            return void 0 === e && (e = !1),
                a(this, void 0, Promise, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n, o) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    i,
                                    r = this;
                                return c(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            e = function () {
                                                return a(r, void 0, void 0, function () {
                                                    return c(this, function () {
                                                        return [2, new Promise(function (e, n) {
                                                            var o = setTimeout(function () {
                                                                n("Pefab out of time" + t)
                                                            }, 1e4);
                                                            cc.resources.load(t, function (t, i) {
                                                                clearTimeout(o),
                                                                    t ? n(t) : e(i)
                                                            })
                                                        })]
                                                    })
                                                })
                                            },
                                                i = 3,
                                                s.label = 1;
                                        case 1:
                                            return i > 0 ? [4, e().then(function (t) {
                                                i = 0,
                                                    n(t)
                                            }).catch(function (t) {
                                                --i <= 0 && o(t)
                                            })] : [3, 3];
                                        case 2:
                                            return s.sent(),
                                                [3, 1];
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })]
                    })
                })
        },
        e.prototype._show = function (t, e, n, o) {
            void 0 === o && (o = 2),
                this.iconIndex = e,
                this.startTime = (new Date).getTime(),
                e < 0 ? (this.img_icon.node.active = !1, this.node.width = 354) : (this.img_icon.node.active = !0, this.img_icon.spriteFrame = this.icon_frames[e], this.node.width = 400),
                n ? (this.lb_num.node.active = !0, this.lb_num.string = n, this.node.height = 154) : (this.lb_num.node.active = !1, this.node.height = 84),
                this.duration = o,
                this.lb_msg.string = t,
                this.node.y = 156 - l.GlobalDefines.Design_Height / 2,
                this.node.opacity = 0
        },
        e.prototype.onLoad = function () {
            var t = this;
            cc.tween(this.node).by(.3, {
                y: 50,
                opacity: 255
            }, {
                easing: cc.easing.sineOut
            }).start(),
                this.timer = setTimeout(function () {
                    cc.tween(t.node).by(.3, {
                        y: 50,
                        opacity: -255
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        t.node.removeFromParent(),
                            t.node.destroy()
                    }).start()
                }, 1e3 * this.duration)
        },
        e.prototype.onDestroy = function () {
            clearTimeout(this.timer)
        },
        e.Prefab_Name = "prefab/common/toast/toast",
        e.prefab = null,
        r([f([cc.SpriteFrame])], e.prototype, "icon_frames", void 0),
        r([f(cc.Label)], e.prototype, "lb_msg", void 0),
        r([f(cc.Sprite)], e.prototype, "img_icon", void 0),
        r([f(cc.Label)], e.prototype, "lb_num", void 0),
        n = r([p], e)
}
(cc.Component);
n.default = h;