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
var s = t("BundleResourceList"),
    l = t("GuideManager"),
    u = t("RedDotManager"),
    p = t("ShareUtil"),
    f = t("TopResView"),
    h = t("UIManager"),
    d = t("GameConfig"),
    g = t("GameUtils"),
    LoadingScene = t("LoadingScene"),
    _ = t("logger"),
    m = t("Utils"),
    v = t("ABTestManager"),
    b = t("AudioManager"),
    w = t("HurryLoading"),
    S = t("MessageBox"),
    C = t("SceneLoadingUI"),
    E = t("GlobalDefines"),
    T = t("DataManager"),
    k = t("G"),
    P = t("GlobalEvents"),
    D = t("NetworkManager"),
    G = t("PlatformManager"),
    B = t("SceneManager"),
    U = cc._decorator,
    R = U.ccclass,
    M = U.property,
    x = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.uiNode = null,
                e.hurryLoading = null,
                e.uiCamera = null,
                e.smNode = null,
                e.resList = null,
                e.timeOffset_sec = 0,
                e.timeOffset_msec = 0,
                e.timeout_crossday = void 0,
                e.isInited = !1,
                e.entryData = void 0,
                e
        }

        var n;
        return i(e, t),
            n = e,
            Object.defineProperty(e, "instance", {
                get: function () {
                    return this._instance
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onShow = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return c(this, function () {
                        return this.entryData = t,
                            b.sd.resumeAll(),
                            this.isInited ? ((e = new P.EventOnShow).res = t, k.GlobalEvent.dispatchEvent(e), [2]) : [2]
                    })
                })
            },
            e.prototype.onHide = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function () {
                        return b.sd.pauseAll(),
                            t = new P.EventOnHide,
                            k.GlobalEvent.dispatchEvent(t),
                            [2]
                    })
                })
            },
            e.prototype.onLoad = function () {
                window.addEventListener("unhandledrejection", function (t) {
                    return t.preventDefault(),
                        console.log("promise 错误 reason:", t.reason),
                        console.log("Promise 对象 promise:", t.promise),
                        !0
                }),
                    h.ui.onLoad(this.uiNode, this.hurryLoading),
                    B.sm.onLoad(this.smNode)
            },
            e.prototype.start = function () {
                this.gameStart()
            },
            e.prototype.onShareMessageToFriend = function () {
            },
            e.prototype.gameStart = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function () {
                        return d.GameConfig.Init(),
                            this.playtime = m.Utils.getCurTime(),
                            n._instance = this,
                            this.entryData = G.pm.getLaunchOptionsSync() || {},
                            t = p.ShareUtil.getShareParamInAll(),
                            G.pm.onLoad({
                                onShow: this.onShow.bind(this),
                                onHide: this.onHide.bind(this),
                                onShareMessageToFriend: this.onShareMessageToFriend.bind(this),
                                adIntervals: d.GameConfig.BANNER_ADINTERVALS,
                                shareData: {
                                    title: t.title,
                                    query: "key=val",
                                    imageUrl: t.imgUrl
                                }
                            }),
                            G.pm.initReport(),
                            _.Logger.debug("[GameManager onLoad] entryData:", this.entryData),
                            this.createUpdateManager(),
                            G.pm.setKeepScreenOn(!0),
                            setTimeout(function () {
                                h.ui.checkNode();
                                B.sm.node.getComponentInChildren(LoadingScene.default).startLoading()
                            }, 0),
                            [2]
                    })
                })
            },
            e.prototype.createUpdateManager = function () {
                console.log("[GameManager createUpdateManager]尝试检查版本更新");
                var t = G.pm.getUpdateManager();
                t ? (t.onUpdateReady(function () {
                    G.pm.showModal("Chú ý", "Phiên bản mới đã sẵn sàng，vui lòng cập nhật", "làm mới", function () {
                        t.applyUpdate()
                    })
                }), t.onCheckForUpdate(function (t) {
                    console.log("[请求完新版本信息的回调]", t.hasUpdate)
                }), t.onUpdateFailed(function () {
                    console.log("[新版本下载失败]")
                })) : console.log("[GameManager createUpdateManager]微信版本没有强更机制")
            },
            e.prototype.initGame = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return setTimeout(function () {
                                    G.pm.trackEventPost(G.TRACK_EVENT_NAME.GAME_INIT)
                                }, 1e4),
                                    C.default.setProgress(0),
                                    [4, T.dm.onInit()];
                            case 1:
                                return t.sent(),
                                    C.default.setProgress(.6),
                                    u.red.onInit(),
                                    m.Utils.waiting(0),
                                    C.default.setProgress(.7),
                                    l.gm.onInit(),
                                    m.Utils.waiting(0),
                                    C.default.setProgress(.75),
                                    v.ab.onInit(),
                                    m.Utils.waiting(0),
                                    C.default.setProgress(.8),
                                    h.ui.onInit(),
                                    m.Utils.waiting(0),
                                    C.default.setProgress(.85),
                                    b.sd.init(),
                                    [4, f.topres.onLoad(h.ui.getLayer(h.UILayer.Topres))];
                            case 2:
                                return t.sent(),
                                    m.Utils.waiting(0),
                                    C.default.setProgress(.9),
                                    m.Utils.waiting(0),
                                    this.registerCrossEvent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.GetScreenWHRate = function () {
                var t = cc.view.getFrameSize();
                return t.width / t.height
            },
            e.prototype.getServerTime = function () {
                return Math.floor((new Date).getTime() / 1e3) + this.timeOffset_sec
            },
            e.prototype.getServerTimeMsec = function () {
                return (new Date).getTime() + this.timeOffset_msec
            },
            e.prototype.timeCheck = function (t) {
                var e = (new Date).getTime();
                return this.timeOffset_sec = t - Math.floor(e / 1e3),
                    this.timeOffset_msec = 1e3 * t - e,
                Math.abs(this.timeOffset_sec) < E.GlobalDefines.Second_Day
            },
            e.prototype.registerCrossEvent = function () {
                var t = this,
                    e = this.getServerTimeMsec(),
                    n = m.Utils.getDayBeginTime(e) / 1e3 + E.GlobalDefines.Second_Day - e / 1e3 + m.Utils.randomInt(0, 60);
                clearTimeout(this.timeout_crossday),
                    this.timeout_crossday = setTimeout(function () {
                        t.onCrossDay()
                    }, 1e3 * n)
            },
            e.prototype.HotLogin = function (t) {
                return a(this, void 0, Promise, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n, o) {
                            return a(e, void 0, void 0, function () {
                                var e;
                                return c(this, function (i) {
                                    switch (i.label) {
                                        case 0:
                                            e = D.default.TIMES_RETRY,
                                                i.label = 1;
                                        case 1:
                                            return e > 0 ? [4, G.pm.HotLogin(t).then(function (t) {
                                                t ? (e = 0, S.default.showRetryCancel({
                                                    popLayer: g.GameUtils.popLayer,
                                                    title: "Vui lòng kiểm tra lại kết nối mạng",
                                                    context: t,
                                                    cb_ok: function () {
                                                        o()
                                                    },
                                                    cb_cancel: function () {
                                                    }
                                                })) : (e = 0, n())
                                            }).catch(function () {
                                                --e <= 0 && o()
                                            })] : [3, 3];
                                        case 2:
                                            return i.sent(),
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
            e.prototype.onCrossDay = function () {
                B.sm.switchScene(LoadingScene.default)
            },
            e.prototype.gameLoadingErr = function (t) {
                void 0 === t && (t = !0),
                    S.default.showRetryCancel({
                        popLayer: g.GameUtils.popLayer,
                        title: "Vui lòng kiểm tra lại kết nối mạng",
                        context: "Không thể tải tài nguyên",
                        cb_ok: function () {
                            B.sm.switchScene(LoadingScene.default),
                                console.log("[GameManager gameLoadingErro] Không tải được, đăng nhập lại")
                        },
                        cb_cancel: function () {
                        }
                    })
            },
            r([M(cc.Node)], e.prototype, "uiNode", void 0),
            r([M(w.default)], e.prototype, "hurryLoading", void 0),
            r([M(cc.Camera)], e.prototype, "uiCamera", void 0),
            r([M(cc.Node)], e.prototype, "smNode", void 0),
            r([M(s.default)], e.prototype, "resList", void 0),
            n = r([R], e)
    }
    (cc.Component);
n.default = x;