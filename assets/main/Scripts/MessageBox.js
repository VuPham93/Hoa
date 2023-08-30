var t = require;
var e = module;
var n = exports;
var o,
    i,
    r = this && this.__extends || (o = function (t, e) {
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
    a = this && this.__decorate || function (t, e, n, o) {
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
    c = this && this.__awaiter || function (t, e, n, o) {
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
    s = this && this.__generator || function (t, e) {
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
    n.MessageBoxType = n.MessageBoxBtnIndex = void 0,
    function (t) {
        t[t.Ok = 0] = "Ok",
            t[t.OkAd = 1] = "OkAd",
            t[t.OkShare = 2] = "OkShare",
            t[t.Cancel = 3] = "Cancel"
    }
        (n.MessageBoxBtnIndex || (n.MessageBoxBtnIndex = {})),
    function (t) {
        t[t.Ok = 1] = "Ok",
            t[t.OkCancel = 9] = "OkCancel",
            t[t.AdCancel = 10] = "AdCancel",
            t[t.AdOk = 2] = "AdOk",
            t[t.ShareCancel = 12] = "ShareCancel"
    }
        (i = n.MessageBoxType || (n.MessageBoxType = {}));
var l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.lb_title = null,
                e.node_layout = null,
                e.lb_context = null,
                e.gp_context2 = null,
                e.lb_context2 = null,
                e.btns = null,
                e.btn_close = null,
                e.lbs_btnok = [],
                e.lbs_btncancel = [],
                e.cb_ok = void 0,
                e.cb_cancel = void 0,
                e
        }
        var n;
        return r(e, t),
            n = e,
            e.preLoad = function () {
                return c(this, void 0, void 0, function () {
                    var t;
                    return s(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = this,
                                    [4, n.loadPefab(this.Prefab_Name, !0)];
                            case 1:
                                return t.prefab = e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.showOk = function (t) {
                var e = Object.assign(t, {
                    type: i.Ok,
                    txt_btnok: "确定"
                });
                this._show(e)
            },
            e.showOkCancel = function (t) {
                var e = Object.assign(t, {
                    type: i.OkCancel,
                    txt_btnok: "确定",
                    txt_btncancel: "取消"
                });
                this._showOkCancel(e)
            },
            e.showRetryCancel = function (t) {
                var e = Object.assign(t, {
                    type: i.OkCancel,
                    txt_btnok: "重试",
                    txt_btncancel: "取消"
                });
                this._showOkCancel(e)
            },
            e.showAdOkCancel = function (t) {
                var e = Object.assign(t, {
                    type: i.AdCancel
                });
                this._showOkCancel(e)
            },
            e.showAdOk = function (t) {
                var e = Object.assign(t, {
                    type: i.AdOk,
                    txt_btncancel: "",
                    showClose: !0
                });
                this._showOkCancel(e)
            },
            e.showShareOkCancel = function (t) {
                var e = Object.assign(t, {
                    type: i.ShareCancel
                });
                this._showOkCancel(e)
            },
            e._showOkCancel = function (t) {
                t.cb_cancel || (t.cb_cancel = function () { }),
                    this._show(t)
            },
            e._show = function (t) {
                var e = this;
                return new Promise(function (o) {
                    return c(e, void 0, void 0, function () {
                        var e,
                            i,
                            r;
                        return s(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.preLoad()];
                                case 1:
                                    return a.sent(),
                                        e = cc.instantiate(this.prefab).getComponent(n),
                                        (i = t.cb_ok) && (t.cb_ok = function () {
                                            i(),
                                                o()
                                        }),
                                        (r = t.cb_cancel) && (t.cb_cancel = function () {
                                            r(),
                                                o()
                                        }),
                                        e.init(t),
                                        n.PopView(e.node, t.popLayer),
                                        this.prefab = void 0,
                                        [2]
                            }
                        })
                    })
                })
            },
            e.PopView = function (t, e) {
                t.x = 0,
                    t.y = 0,
                    t.width = e.width,
                    t.height = e.height,
                    t.parent = e
            },
            e.loadPefab = function (t, e) {
                return void 0 === e && (e = !1),
                    c(this, void 0, Promise, function () {
                        var e = this;
                        return s(this, function () {
                            return [2, new Promise(function (n, o) {
                                return c(e, void 0, void 0, function () {
                                    var e,
                                        i,
                                        r = this;
                                    return s(this, function (a) {
                                        switch (a.label) {
                                            case 0:
                                                e = function () {
                                                    return c(r, void 0, void 0, function () {
                                                        return s(this, function () {
                                                            return [2, new Promise(function (e, n) {
                                                                var o = setTimeout(function () {
                                                                    n("oadPefab 连接超时" + t)
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
                                                    a.label = 1;
                                            case 1:
                                                return i > 0 ? [4, e().then(function (t) {
                                                    i = 0,
                                                        n(t)
                                                }).catch(function (t) {
                                                    --i <= 0 && o(t)
                                                })] : [3, 3];
                                            case 2:
                                                return a.sent(),
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
            e.prototype.init = function (t) {
                this.lb_title.string = t.title,
                    t.context ? (this.lb_context.node.active = !0, this.lb_context.string = t.context) : this.lb_context.node.active = !1,
                    t.context2 ? (this.gp_context2.active = !0, this.lb_context2.string = t.context2) : this.gp_context2.active = !1,
                    this.cb_ok = t.cb_ok,
                    this.cb_cancel = t.cb_cancel,
                    this.btn_close.active = t.showClose,
                    t.nodeInsert && this.node_layout.insertChild(t.nodeInsert, 1);
                for (var e = 0; e < this.lbs_btnok.length; e++)
                    this.lbs_btnok[e].string = t.txt_btnok;
                if (t.txt_btncancel)
                    for (e = 0; e < this.lbs_btncancel.length; e++)
                        this.lbs_btncancel[e].string = t.txt_btncancel;
                this.setupBtns(t.type),
                    this.gp_content.opacity = 0,
                    this.gp_content.scale = .8
            },
            e.prototype.setupBtns = function (t) {
                for (var e = 0; e < this.btns.childrenCount; e++)
                    this.btns.children[e].active = 0 != (1 << e & t)
            },
            e.prototype.onLoad = function () {
                cc.tween(this.gp_content).to(.3, {
                    scale: 1,
                    opacity: 255
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            e.prototype.onBtnOkClicked = function () {
                this.cb_ok && this.cb_ok(),
                    this.close()
            },
            e.prototype.onBtnCancelClicked = function () {
                this.cb_cancel && this.cb_cancel(),
                    this.close()
            },
            e.prototype.close = function () {
                this.node.removeFromParent(),
                    this.node.destroy()
            },
            e.Prefab_Name = "prefab/common/msgbox/msgbox",
            e.prefab = null,
            a([p(cc.Node)], e.prototype, "gp_content", void 0),
            a([p(cc.Label)], e.prototype, "lb_title", void 0),
            a([p(cc.Node)], e.prototype, "node_layout", void 0),
            a([p(cc.Label)], e.prototype, "lb_context", void 0),
            a([p(cc.Node)], e.prototype, "gp_context2", void 0),
            a([p(cc.Label)], e.prototype, "lb_context2", void 0),
            a([p(cc.Node)], e.prototype, "btns", void 0),
            a([p(cc.Node)], e.prototype, "btn_close", void 0),
            a([p([cc.Label])], e.prototype, "lbs_btnok", void 0),
            a([p([cc.Label])], e.prototype, "lbs_btncancel", void 0),
            n = a([u], e)
    }
        (cc.Component);
n.default = f;