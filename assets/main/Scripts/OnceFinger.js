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
var s = t("G"),
    l = t("GlobalTouch"),
    u = t("Utils"),
    p = t("GuideUtils"),
    f = t("UIManager"),
    h = cc._decorator,
    d = h.ccclass,
    g = h.property,
    y = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_finger = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e, o, i) {
                return a(this, void 0, void 0, function () {
                    var r,
                        a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return [4, u.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return r = c.sent(),
                                    (a = cc.instantiate(r)).getComponent(n).init(t, e, o, i),
                                    f.ui.getLayer(f.UILayer.Guide).addChild(a),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (t, e, n, o) {
                this.wpos = t,
                    this.next = o,
                    this.node.scaleX = e ? -1 : 1,
                    this.node.scaleY = n ? -1 : 1
            },
            e.prototype.onLoad = function () {
                var t = f.ui.getLayer(f.UILayer.Guide);
                this.node.position = t.convertToNodeSpaceAR(this.wpos),
                    p.GuideUtils.TaptapHand(this.node_finger, cc.v2(0, 0))
            },
            e.prototype.onEnable = function () {
                s.GlobalEvent.on(l.EventGlobalTouch.NAME, this.onEventGlobalTouch, this)
            },
            e.prototype.onDisable = function () {
                this.next && this.next(),
                    s.GlobalEvent.off(l.EventGlobalTouch.NAME, this.onEventGlobalTouch, this)
            },
            e.prototype.onEventGlobalTouch = function () {
                u.Utils.removeNode(this.node)
            },
            e.Prefab_Name = "prefab/game/ui/once_finger",
            r([g(cc.Node)], e.prototype, "node_finger", void 0),
            n = r([d], e)
    }
        (cc.Component);
n.default = y;