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
    n.AniUtil = void 0;
var r = t("GlobalDefines"),
    a = t("SpriteToHome"),
    c = t("UIManager"),
    s = t("GameUtils"),
    l = t("Utils"),
    u = function () {
        function t() { }
        return t.JumpTo2 = function (t, e, n, o, i, a, u) {
            void 0 === n && (n = 300),
                void 0 === o && (o = 1),
                void 0 === i && (i = 1),
                void 0 === a && (a = !1);
            var p = t.convertToWorldSpaceAR(cc.v2(0, 0));
            n = Math.min(r.GlobalDefines.ScreenHeight + 50 - e.y, n);
            var f = cc.v2(p.x, e.y),
                h = new cc.Node("skin_x");
            h.position = f,
                c.ui.addEffectAR(h);
            var d = new cc.Node("skin_y");
            d.position = cc.v2(0, p.y - e.y),
                d.parent = h;
            var g = cc.instantiate(t);
            g.active = !0,
                g.scale = o,
                g.position = cc.v2(0, 0),
                g.parent = d;
            var y = 3,
                _ = function () {
                    --y <= 0 && (u && u(), a && s.GameUtils.addEffBoom(e), l.Utils.removeNode(h))
                },
                m = h.x + (e.x - f.x),
                v = d.y < 0 ? n : d.y + n;
            cc.tween(h).to(.5, {
                x: m
            }).call(function () {
                _()
            }).start(),
                cc.tween(d).to(.25, {
                    y: v
                }, {
                    easing: cc.easing.sineOut
                }).to(.25, {
                    y: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    _()
                }).start(),
                cc.tween(g).to(.5, {
                    scale: i
                }).call(function () {
                    _()
                }).start()
        },
            t.JumpTo = function (t, e, n, o, i) {
                void 0 === n && (n = 1),
                    void 0 === i && (i = !1);
                var r = t.convertToWorldSpaceAR(cc.v2(0, 0)),
                    a = cc.v2(r.x, e.y),
                    s = cc.instantiate(t);
                s.position = cc.v2(0, r.y - e.y),
                    s.scale = n;
                var l = new cc.Node("skin");
                l.addChild(s),
                    l.position = a,
                    c.ui.addEffectAR(l);
                var u = 2,
                    p = function () {
                        --u <= 0 && (o && o(), l.removeFromParent())
                    },
                    f = l.x + (e.x - a.x),
                    h = s.y < 0 ? 300 : s.y + 300;
                cc.tween(l).to(.6, {
                    x: f
                }).call(function () {
                    p()
                }).start(),
                    i ? cc.tween(s).to(.3, {
                        y: h
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.3, {
                        y: -50,
                        scale: 1
                    }, {
                        easing: cc.easing.sineIn
                    }).to(.2, {
                        y: 10,
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.15, {
                        y: 0,
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        p()
                    }).start() : cc.tween(s).to(.3, {
                        y: h
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.3, {
                        y: 0,
                        scale: 1
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        p()
                    }).start()
            },
            t.createEffectSpriteHome = function (t, e, n, o, i, r, c) {
                void 0 === i && (i = 5),
                    void 0 === r && (r = 1),
                    void 0 === c && (c = !1);
                for (var s = i, u = t.convertToWorldSpaceAR(cc.v2(0, 0)), p = e.convertToWorldSpaceAR(new cc.Vec2(0, 0)), f = 0; f < s; f++) {
                    var h = l.Utils.randomInt(0, 300);
                    setTimeout(function () {
                        var t = l.Utils.randomInt(0, n.length),
                            e = n[t];
                        a.default.create(e, cc.v2(u.x, u.y), p, !1, o, r, c)
                    }, h)
                }
            },
            t.aniWillShow = function (t) {
                t.opacity = 0,
                    t.scale = .7
            },
            t.aniShow = function (t, e) {
                t.stopAllActions(),
                    cc.tween(t).to(.3, {
                        opacity: 255,
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        e && e()
                    }).start()
            },
            t.aniHide = function (t, e, n) {
                void 0 === n && (n = .3),
                    t.stopAllActions(),
                    cc.tween(t).to(n, {
                        opacity: 0,
                        scale: .7
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        e && e()
                    }).start()
            },
            t.aniLoopShaking = function (t) {
                t.stopAllActions(),
                    t.angle = 0,
                    cc.tween(t).repeatForever(cc.tween(t).to(.1, {
                        angle: -8
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 5
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: -3
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 1.5
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).delay(.5)).start()
            },
            t.aniShaking = function (t) {
                t.stopAllActions(),
                    t.angle = 0,
                    cc.tween(t).to(.1, {
                        angle: -8
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 5
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: -3
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 1.5
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.1, {
                        angle: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            t.aniHeart = function (t, e, n) {
                void 0 === e && (e = .2),
                    t.stopAllActions(),
                    t.angle = 0,
                    cc.tween(t).repeatForever(cc.tween(t).to(n ? e : e / 2, {
                        scale: 1.2
                    }, {
                        easing: cc.easing.sineOut
                    }).to(e, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).delay(n ? 0 : .5)).start()
            },
            t.aniHeartHappy = function (t) {
                t.stopAllActions();
                var e = t.y,
                    n = t.y + 30;
                cc.tween(t).repeatForever(cc.tween(t).to(.1, {
                    scaleX: 1.1,
                    scaleY: .8
                }, {
                    easing: cc.easing.sineOut
                }).to(.1, {
                    scaleX: 1,
                    scaleY: 1,
                    y: n
                }, {
                    easing: cc.easing.sineOut
                }).to(.1, {
                    scaleX: 1,
                    scaleY: 1,
                    y: e
                }, {
                    easing: cc.easing.sineIn
                }).to(.1, {
                    scaleX: 1.1,
                    scaleY: .8
                }, {
                    easing: cc.easing.sineOut
                }).to(.1, {
                    scaleX: 1,
                    scaleY: 1
                }, {
                    easing: cc.easing.sineIn
                }).delay(.2)).start()
            },
            t.aniDou = function (t, e) {
                cc.tween(t).to(.1, {
                    scaleY: 1.4,
                    scaleX: .7
                }, {
                    easing: cc.easing.sineOut
                }).to(.05, {
                    scaleY: .9,
                    scaleX: 1.1
                }, {
                    easing: cc.easing.sineOut
                }).to(.08, {
                    scaleY: 1.1,
                    scaleX: .9
                }, {
                    easing: cc.easing.sineOut
                }).to(.08, {
                    scaleY: 1,
                    scaleX: 1
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    e && e()
                }).start()
            },
            t.aniShakeHead = function (t, e) {
                cc.tween(t).to(.05, {
                    x: -6
                }, {
                    easing: cc.easing.sineOut
                }).to(.08, {
                    x: 6
                }, {
                    easing: cc.easing.sineOut
                }).to(.07, {
                    x: -5
                }, {
                    easing: cc.easing.sineOut
                }).to(.06, {
                    x: 4
                }, {
                    easing: cc.easing.sineOut
                }).to(.05, {
                    x: -3
                }, {
                    easing: cc.easing.sineOut
                }).to(.04, {
                    x: 2
                }, {
                    easing: cc.easing.sineOut
                }).to(.03, {
                    x: -1
                }, {
                    easing: cc.easing.sineOut
                }).to(.02, {
                    x: 0
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    e && e()
                }).start()
            },
            t.aniOnce = function (t, e) {
                return o(this, void 0, void 0, function () {
                    var n,
                        o;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, l.Utils.loadPefab(t)];
                            case 1:
                                return n = i.sent(),
                                    (o = cc.instantiate(n)).position = e,
                                    o.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function () {
                                        l.Utils.removeNode(o)
                                    }
                                        .bind(this), this),
                                    s.GameUtils.addEffectAR(o),
                                    [2]
                        }
                    })
                })
            },
            t
    }
        ();
n.AniUtil = u;