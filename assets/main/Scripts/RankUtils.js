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
    n.RankUtils = void 0;
var r = function () {
    function t() { }
    return t.Init = function () { },
        t.updateNodeSpriteFrame = function (t, e, n, o, i) {
            void 0 === n && (n = !1),
                void 0 === o && (o = void 0),
                void 0 === i && (i = "png"),
                t && t.startsWith("https://") && cc.assetManager.loadRemote(t, {
                    ext: "." + i
                }, function (n, i) {
                    if (n)
                        console.error("[YDWallManager updateNodeSpriteFrame isFromNet] url:", t, "/err:", n);
                    else if (cc.isValid(e)) {
                        var r = new cc.SpriteFrame(i),
                            a = e.getComponent(cc.Sprite);
                        a && (a.spriteFrame = r),
                            o && o(r)
                    }
                })
        },
        t.loadPefab = function (t, e) {
            return void 0 === e && (e = !1),
                o(this, void 0, Promise, function () {
                    var e = this;
                    return i(this, function () {
                        return [2, new Promise(function (n, r) {
                            return o(e, void 0, void 0, function () {
                                var e,
                                    a,
                                    c = this;
                                return i(this, function (s) {
                                    switch (s.label) {
                                        case 0:
                                            e = function () {
                                                return o(c, void 0, void 0, function () {
                                                    return i(this, function () {
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
                                                a = 3,
                                                s.label = 1;
                                        case 1:
                                            return a > 0 ? [4, e().then(function (t) {
                                                a = 0,
                                                    n(t)
                                            }).catch(function (t) {
                                                --a <= 0 && r(t)
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
        t.solveString = function (t, e) {
            if (!t)
                return "";
            for (var n = 0, o = "", i = 0; i < t.length; i++) {
                if (t.charCodeAt(i) > 127 || 94 == t.charCodeAt(i) ? n += 2 : n++, n > e)
                    return o + "...";
                o += t.charAt(i)
            }
            return o
        },
        t.PopView = function (t, e) {
            t.x = 0,
                t.y = 0,
                t.width = e.width,
                t.height = e.height,
                t.parent = e
        },
        t.postMessage = function (t) {
            wx.postMessage(t)
        },
        t.OpenDataContextCommands = {
            kInitSubContext: "init-sub-context",
            kShowGlobalRank: "show-global-rank",
            kHideGlobalFriendRankLayer: "hide-global-rank"
        },
        t
}
    ();
n.RankUtils = r;