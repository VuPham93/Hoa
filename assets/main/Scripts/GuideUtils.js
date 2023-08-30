var t = require;
var e = module;
var n = exports;
var o = this && this.__awaiter || function (t, e, n, o) {
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
    i = this && this.__generator || function (t, e) {
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
    n.GuideUtils = void 0;
var r = t("logger"),
    a = t("Utils"),
    c = t("GuideManager"),
    s = t("UIManager"),
    l = function () {
        function t() { }
        return t.changeStep = function (t, e) {
            for (var n = 0; n < t.children.length; n++)
                t.children[n].active = e == n;
            return t.children[e]
        },
            t.DragdragHand = function (t, e, n) {
                return o(this, void 0, void 0, function () {
                    var o;
                    return i(this, function () {
                        return t.stopAllActions(),
                            t.children[0].stopAllActions(),
                            t.active = !0,
                            t.position = e,
                            o = cc.repeatForever(cc.sequence(cc.moveBy(.3, -10, 10).easing(cc.easeCubicActionIn()), cc.moveTo(.6, n.x, n.y).easing(cc.easeCubicActionOut()), cc.moveBy(.6, 0, 0), cc.moveTo(0, e.x, e.y))),
                            cc.tween(),
                            t.runAction(o),
                            [2]
                    })
                })
            },
            t.TaptapHand = function (t, e, n) {
                var a;
                return o(this, void 0, void 0, function () {
                    return i(this, function () {
                        return t.active = !0,
                            t.position = (null === (a = c.gm.lastHanInfo) || void 0 === a ? void 0 : a.position) || cc.v2(0, 0),
                            cc.tween(t).to(.6, {
                                position: e,
                                scale: 1
                            }, {
                                easing: cc.easing.sineOut
                            }).call(function () {
                                if (cc.isValid(t)) {
                                    var e = t.children[0];
                                    t.stopAllActions(),
                                        e.stopAllActions(),
                                        t.active = !0,
                                        cc.tween(t).call(function () {
                                            r.Logger.debug("[GuideUtils TaptapHand] jiantou.pos = " + t.position),
                                                n && n();
                                            var o = cc.repeatForever(cc.sequence(cc.moveBy(.3, -10, 10).easing(cc.easeCubicActionIn()), cc.moveBy(.3, 10, -10).easing(cc.easeCubicActionIn())));
                                            e.runAction(o)
                                        }).start()
                                }
                            }).start(),
                            [2]
                    })
                })
            },
            t.HandMove = function (t) {
                if (t && t.jiantou) {
                    if (t.offset = t.offset || cc.v2(0, 0), t.angle = t.angle || 0, t.targetNode) {
                        var e = t.targetNode.convertToWorldSpaceAR(t.offset),
                            n = t.jiantou.parent.convertToNodeSpaceAR(e);
                        t.position = n
                    }
                    t.jiantou.stopAllActions(),
                        t.jiantou.active = !0;
                    var o = cc.v2(t.position.x + t.offset.x, t.position.y + t.offset.y);
                    cc.tween(t.jiantou).to(.7, {
                        position: o,
                        opacity: 255,
                        angle: t.angle,
                        scale: 1
                    }, {
                        easing: "sineOut"
                    }).call(function () {
                        t.next && t.next()
                    }).start()
                }
            },
            t.changeParent = function (t, e, n, o, i) {
                var r = {
                    node: e,
                    oldPostion: e.position,
                    oldParent: e.parent,
                    index: e.getSiblingIndex(),
                    oldScale: e.scale,
                    backCall: i
                };
                t.push(r);
                var a = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                    c = n.convertToNodeSpaceAR(a);
                return e.parent = n,
                    e.position = c,
                    o && o(r),
                    e
            },
            t.actorGoBack = function (t) {
                for (var e = t.length - 1; e >= 0; e--) {
                    var n = t[e],
                        o = n.oldParent;
                    n.backCall && n.backCall(n),
                        n.node.position = n.oldPostion,
                        o.insertChild(n.node, n.index)
                }
            },
            t.show = function (t, e, n) {
                return o(this, void 0, Promise, function () {
                    var o,
                        r;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return s.ui.showLoading("Đang tải..."),
                                    [4, a.Utils.loadPefab(n, !0).catch(function (t) {
                                        throw s.ui.hideLoading(),
                                        t
                                    })];
                            case 1:
                                return o = i.sent(),
                                    (r = cc.instantiate(o)).getComponent(e).init(t),
                                    r.position = cc.v2(0, 0),
                                    s.ui.addGuide(r),
                                    s.ui.hideLoading(),
                                    [2, r]
                        }
                    })
                })
            },
            t.breakGuide = function (e, n) {
                t.actorGoBack(e),
                    e = [],
                    a.Utils.removeAllChildren(n),
                    c.gm.curTask = void 0
            },
            t
    }
        ();
n.GuideUtils = l;