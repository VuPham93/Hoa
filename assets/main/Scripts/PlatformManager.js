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
    n.pm = n.PlatformWeb = n.TRACK_EVENT_NAME = void 0;
var logger = t("logger"),
    GlobalDefines = t("GlobalDefines"),
    GameConfig = t("GameConfig");

(function (t) {
    t.GAME_INIT = "GAME_INIT",
        t.STAGE_IN = "STAGE_IN",
        t.STAGE_WIN = "STAGE_WIN",
        t.STAGE_FAIL = "STAGE_FAIL",
        t.STEP_AD = "STEP_AD",
        t.STEP_COIN = "STEP_COIN",
        t.STEP_SHARE = "STEP_SHARE",
        t.VIDEO_SHOW = "VIDEO_SHOW",
        t.VIDEO_SUCCESS = "VIDEO_SUCCESS",
        t.JUMP_TO_APP = "JUMP_TO_APP",
        t.STAR_CHALLENGE_AWARD = "STAR_CHALLENGE_AWARD"
})(n.TRACK_EVENT_NAME || (n.TRACK_EVENT_NAME = {}));

var l = function () {
    function t() { }
    return Object.defineProperty(t, "platform", {
        get: function () {
            return this._platform = new u,
                this._platform
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t, "iswxGame", {
            get: function () {
                return cc.sys.platform == cc.sys.WECHAT_GAME
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t, "isH5", {
            get: function () {
                return cc.sys.isBrowser
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.default = l;
var u = function () {
    function t() { }
    return t.prototype.tryShowWxButton = function () { },
        t.prototype.getLaunchOptionsSync = function () { },
        t.prototype.onLoad = function () {
            this.InitSysInfo()
        },
        t.prototype.InitSysInfo = function () {
            GlobalDefines.GlobalDefines.isIos = !1
        },
        t.prototype.LoadSubPackage = function () {
            return new Promise(function (t) {
                t()
            }).catch(function (t) {
                logger.Logger.warn("[PlatformWeb LoadSubPackage] reason", t)
            })
        },
        t.prototype.Login = function () {
            return o(this, void 0, void 0, function () {
                var t = this;
                return i(this, function () {
                    return [2, new Promise(function (e, n) {
                        t.weakLogin().then(function (t) {
                            t ? e(t) : n("登录失败！")
                        })
                    })]
                })
            })
        },
        t.prototype.weakLogin = function () {
            return new Promise(function (t) {
                "cyyh" == GameConfig.GameConfig.GameKey ? t({
                    encryptCombUser: "kDHv6JA2N1gma4E7EodK0t2I6AxHJrDXzMWPd07GeiUKXhlEh7ODsBv9ACMcbTaTpH/ct7IKT38qrTBqUroMTDcB50qlxGu5mKJ2B7Q9LmkAw778Lts//0cNdovtB5VhS9qyF5R+DQyPHtYlQ+0J4MD7BOMIKn+m0lYpSFXSghuTXdhXtsDaEIIdBMzADsI30rVDqpGYVXddfbKnxD9ZVt1Bw/1o9/Am5onYSp6pERpI7NaUVcBPVP0uujQR3YUH0+IEkWIvDYLf4v45MAIUE3JwG3PX11KXGAdOc0YxwDw40FmMt2M9m3rD0lmK1kh656+/2N56yGjkAKlhj1m45IyVczIFn0uhec6OdOMUlyuZEE/wVOOdXYubxrot+v9qn8gFpNvAaUPncQfv+Q6OQBEGLgWUop6BhiBOX8yW7ySxRVc/XOAhlgzwlVcB7ZdvKjjySoTG0zHejxg51Zx3b3ijeMiuUUQcee1H5gkqsUUCXBjViUgqhNeagLn1k+RtJmEOoM9Lskkd5LgHKI7aV2s+KG61U8nVNXuVD6maGVdPRTW9BJKWEqfQhy3tM8UjUTK5CsNAgsHtl3RYO8zbxJT8oJ7GJXK6GlU9+CBtwFhEJ4YizxIsFSA4Xyj0TD4Hb+DPITCMzfNyYwk0b8o38VNZwmNhr0hjffYoJ0SYInPEohchToKIa6l7dTrsXg+M7Ptn45t7RW0LKL9waMT2Mz1YKjk5U3NhJQI6GlLLa4Amw7+bIykF9yLiR7vBDPHlTxpkvq+7DCX2bKwXUzg2GNYcHe4wX6FtErOZ7T1wpbivxlGOLsgPcfx/Li6ReZp2",
                    timestamp: 1665300426,
                    sign: "e14a749ddefb4de5d986d183a20ec230"
                }) : t({
                    encryptCombUser: "m3w5sVPqIqlGU5lQayOUzU3LTFy3/qUbtdfTBo8OeQBewIWIr0SxQ730Nkth0/xMM3/WHd5zppZ0SEsXK2qLEIm1PUNlekUdyGQX8f1FFkEednnG7aHcJZtL8iYV/vujwVDf9/sEVImDQ25yB4oWsR/QjvKlEkyWBUoStJDowKC9/Th4iDX0LQ/Ud9wB8UfuGq80sFZo31a/sbeKATWhIYo5O85UQ5wY+vitjyKQQrQNjFbg0ejiWx1LphOSm1X12uAvPdQltsMuVtiJG0iTEnf9Lp3PXbzY7nnWsPrtWHPBAogmwaLai4+cgpJhMiIGzEPXDZVx5hVk91d9T0ziWaQuNz5EFE8OQx7oSiTiVyzU83ehzmtBJFXwLn6tkfua3yZP7a3ISJ+DxD+7WHoBAW4bzxSQAqdiEOiOFzdWBI4yQ6KEuSlUUvbge3z/idsA7jFt86ckkt/9VBODwbv/MgDwOgNrNZeV26TnhAkdk8RkFuMLhLoWxPUT2m6113PGfG/+SagL4wnGcmOKcZ8k0AqfWt+5q3J3aUojiZXjXV/KlpBGh2XNlzvxgI/L4eHdfJAprKfTjlIZOZ6f3EKsx6nxaOcNblN+eQiHcmvJ4ydPr0wxWm76JeI4+mw4WApr",
                    timestamp: 1665384667,
                    sign: "9a42e868cddc03dd5181a4fd4cb17d83"
                })
            })
        },
        t.prototype.HotLogin = function () {
            return o(this, void 0, void 0, function () {
                return i(this, function () {
                    return [2]
                })
            })
        },
        t.prototype.Get = function (t) {
            var e = cc.sys.localStorage.getItem(t);
            return JSON.parse(e)
        },
        t.prototype.Set = function (t, e) {
            cc.sys.localStorage.setItem(t, JSON.stringify(e))
        },
        t.prototype.preLoadVideoAd = function (t, e) {
            logger.Logger.debug("[PlatformManager preLoadVideoAd] adUnitId:", e),
                t && t(!0)
        },
        t.prototype.showVideoAd = function (t) {
            t && t(!0)
        },
        t.prototype.loadAndShowVideoAd = function (t, e) {
            logger.Logger.debug("[PlatformManager loadAndShowVideoAd] adUnitId:", e),
                t && t(1)
        },
        t.prototype.SetUserScore = function () { },
        t.prototype.postMessage = function () { },
        t.prototype.OnShow = function () { },
        t.prototype.OnHide = function () { },
        t.prototype.Share = function (t, e, n, o, i) {
            i && i(3e3)
        },
        t.prototype.showLoading = function () { },
        t.prototype.hideLoading = function () { },
        t.prototype.getUpdateManager = function () { },
        t.prototype.showModal = function (t, e, n, o, i, r) {
            1 == confirm(t) ? o && o() : r && r()
        },
        t.prototype.showToast = function () { },
        t.prototype.aldStageOnStart = function () { },
        t.prototype.aldStageOnEnd = function () { },
        t.prototype.initPlayerInfoBtn = function () { },
        t.prototype.exitMiniProgram = function () { },
        t.prototype.VerifyMessage = function () { },
        t.prototype.onShareMessageToFriend = function (t) {
            t && t()
        },
        t.prototype.getMenuButtonBoundingClientRect = function () {
            return {
                width: 174,
                height: 64,
                top: 52,
                right: 355,
                bottom: 104,
                left: 530
            }
        },
        t.prototype.vibrateShort = function (t) {
            logger.Logger.debug("[短震动]"),
                t && t.complete && t.complete()
        },
        t.prototype.vibrateLong = function (t) {
            logger.Logger.debug("[长震动]"),
                t && t.complete && t.complete()
        },
        t.prototype.isUseLowResource = function () {
            return !1
        },
        t.prototype.goCustomer = function () {
            logger.Logger.debug("[呼叫客服]")
        },
        t.prototype.setKeepScreenOn = function () { },
        t.prototype.preloadInterstitialAds = function (t, e) {
            e && e(!0, void 0)
        },
        t.prototype.loadAndShowInsertAd = function (t, e) {
            e && e(!0, void 0)
        },
        t.prototype.ShowInsertAd = function (t, e) {
            e && e(!0, void 0)
        },
        t.prototype.destroyInterstitialAd = function () { },
        t.prototype.triggerGC = function () { },
        t.prototype.showCustomAd = function () { },
        t.prototype.getExptInfoSync = function (t) {
            var e = {};
            return t.forEach(function (t) {
                e[t] = "0"
            }),
                e
        },
        t.prototype.HideAllAD = function () { },
        t.prototype.ShowBannnerBySize = function () {
            return o(this, void 0, Promise, function () {
                return i(this, function () {
                    return [2, new Promise(function (t) {
                        t(!1)
                    })]
                })
            })
        },
        t.prototype.GetBannerHeight = function () { },
        t.prototype.initReport = function () { },
        t.prototype.ShowBannerBySizePolling = function (t, e, n) {
            return o(this, void 0, void 0, function () {
                var o,
                    r;
                return i(this, function (i) {
                    switch (i.label) {
                        case 0:
                            o = 0,
                                i.label = 1;
                        case 1:
                            return o < t.length ? (r = o, [4, this.ShowBannnerBySize(t[r], e)]) : [3, 4];
                        case 2:
                            if (i.sent())
                                return n && n(!0), [2];
                            i.label = 3;
                        case 3:
                            return o++,
                                [3, 1];
                        case 4:
                            return n && n(!1),
                                [2]
                    }
                })
            })
        },
        t.prototype.ShowX = function (t, e) {
            e && e(!1)
        },
        t.prototype.trackEventPost = function () { },
        t.prototype.trackGameLog = function () { },
        t.prototype.getTasks = function (t) {
            GameConfig.GameConfig.OSS_URL_BASE,
                t && t({
                    taskList: [],
                    banner: void 0
                })
        },
        t.prototype.logOpenTaskPanel = function () { },
        t.prototype.goTask = function (t, e) {
            e && e({})
        },
        t.prototype.getAward = function (t, e) {
            e && e({})
        },
        t.prototype.getSwitchData = function () {
            return !0
        },
        t.prototype.OpenApp = function () { },
        t
}
    ();
n.PlatformWeb = u,
    n.pm = l.platform;