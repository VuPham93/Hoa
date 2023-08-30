var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
});
var o = !1,
    i = cc.sys.platform === cc.sys.WECHAT_GAME,
    r = (window && window.qq, !1),
    a = cc.sys.os === cc.sys.OS_IOS && r,
    c = cc.sys.os === cc.sys.OS_ANDROID && r;
function s(t, e) {
    return console.warn("[platform]: ", t, r ? JSON.stringify(e) : e),
        o ? Promise.resolve() : null
}
    s("isDebug", o),
    s("isWX", i),
    s("isAPP", r),
    s("isIOSAPP", a),
    s("isAndroidAPP", c),
    o && void 0 === window.HSDK && (window.HSDK = {}, ["ENV", "LogType", "EventType", "NoticeType", "SMSCodeType", "QQScene", "WXScene", "QQMicroAppType", "WXMicroAppType", "MicroProgramType", "BindPlatformType", "AddicationType", "SwitchStatus"].forEach(function (t) {
        window.HSDK[t] = {}
    }));
var l = function () {
    function t() {
        this.user = {
            tryLogin: function () {
                return s("user.tryLogin") || r && HSDK.tryLogin() || Promise.reject()
            },
            login: function (t) {
                return s("user.login", t) || HSDK.login(t)
            },
            onLogin: function (t) {
                s("user.onLogin", t) || i && HSDK.onLogin(t)
            },
            multiPlatformLogin: function (t) {
                return s("user.multiPlatformLogin", t) || r && HSDK.dialogLogin(t) || Promise.reject()
            },
            logout: function () {
                return s("user.logout") || HSDK.logout()
            },
            weakLogin: function (t) {
                if (o) {
                    var e = localStorage.getItem("userId");
                    e || (e = (new Date).getTime() + "", localStorage.setItem("userId", e));
                    var n = {
                        id: e,
                        name: e,
                        authed: !!localStorage.getItem("_fakeAuthed")
                    };
                    return Promise.resolve(n)
                }
                return new Promise(function (e) {
                    HSDK.weakLogin(t).then(e).catch(function () {
                        e(void 0)
                    })
                })
            },
            createInfoBtn: function (t) {
                return s("user.createInfoBtn", t) || i && HSDK.createUserInfoButton(t) || Promise.reject()
            },
            setPlayerInfo: function (t) {
                return s("user.setPlayerInfo", t) || i && HSDK.setGameUserInfo(t) || Promise.reject()
            },
            updateInfo: function (t) {
                return s("user.updateInfo", t) || i && HSDK.updateUserInfo(t) || Promise.reject()
            }
        },
            this.share = {
                shareMsg: function (t) {
                    return s("share.shareMsg", t) || HSDK.share(t)
                },
                onShare: function (t) {
                    return s("share.onShare", t) || i && HSDK.onShare(t) || Promise.reject()
                },
                onTimeline: function (t) {
                    return s("share.onTimeline", t) || i && HSDK.onShareTimeline(t) || Promise.reject()
                },
                getShareData: function (t) {
                    return s("share.getShareData", t) || i && HSDK.getShareData(t) || Promise.reject()
                }
            },
            this.loading = {
                show: function (t) {
                    s("loading.show", t) || HSDK.showLoading(t)
                },
                hide: function () {
                    s("loading.hide") || HSDK.hideLoading()
                }
            },
            this.ui = {
                showAlert: function (t) {
                    s("ui.showAlert", t) || a && HSDK.showAlert(t)
                }
            },
            this.ad = {
                video: {
                    preload: function (t) {
                        return s("ad.video.preload", t) || HSDK.preloadAd(t)
                    },
                    show: function (t) {
                        return s("ad.video.show", t) || HSDK.showAd(t)
                    }
                },
                banner: {
                    preload: function (t) {
                        return s("ad.banner.preload", t) || HSDK.preloadAd(t)
                    },
                    show: function (t) {
                        return s("ad.banner.show", t) || HSDK.showAd(t)
                    },
                    hide: function (t) {
                        return s("ad.banner.hide", t) || HSDK.hideAd(t)
                    }
                },
                interstitial: {
                    preload: function (t) {
                        return s("ad.interstitial.preload", t) || HSDK.preloadAd(t)
                    },
                    show: function (t) {
                        return s("ad.interstitial.show", t) || HSDK.showAd(t)
                    }
                },
                custom: {
                    preload: function (t) {
                        return s("ad.custom.preload", t) || i && HSDK.preloadAd(t) || Promise.reject()
                    },
                    show: function (t) {
                        return s("ad.custom.show", t) || i && HSDK.showAd(t) || Promise.reject()
                    },
                    hide: function (t) {
                        return s("ad.hide", t) || HSDK.hideAd(t)
                    }
                }
            },
            this.track = {
                gameLog: function (t) {
                    return s("track.gameLog", t) || HSDK.gameTrack(t)
                },
                apmLog: function (t) {
                    s("track.apmLog", t) || i && HSDK.postAPMLog(t)
                }
            },
            this.gm = {
                getSwitchData: function (t) {
                    return s("gm.getSwitchData", t) || HSDK.checkSwitches(t)
                },
                getNotice: function (t) {
                    return s("gm.getNotice", t) || i && HSDK.getNotice(t) || Promise.reject()
                }
            },
            this.subscribe = {
                requestMsg: function (t) {
                    return s("subscribe.requestMsg", t) || i && HSDK.requestSubscribeMessage(t) || Promise.reject()
                },
                getCount: function () {
                    return s("subscribe.getCount") || i && HSDK.getSubscribeMessageCount() || Promise.reject()
                }
            },
            this.realName = {
                getInfo: function () {
                    return s("realName.getInfo") || r && HSDK.getRealNameInfo()
                }
            },
            this.antiAddiction = {
                listen: function (t) {
                    s("antiAddiction.listen", t) || r && HSDK.onAddictionQuit(t)
                }
            },
            this.apple = {
                showComment: function (t) {
                    s("apple.showComment", t) || a && HSDK.showAppComment(t)
                },
                onPaySupplement: function (t) {
                    s("apple.onPaySupplement", t) || a && HSDK.onApplePaySupplement(t)
                }
            },
            this.wall = {
                getTaskList: function (t) {
                    return s("wall.getTaskList", t) || i && HSDK.getTask(t) || Promise.reject()
                },
                logOpenTaskPanel: function () {
                    return s("wall.logOpenTaskPanel") || i && HSDK.logOpenTaskPanel() || Promise.reject()
                },
                goTask: function (t) {
                    return s("wall.goTask", t) || i && HSDK.goTask(t) || Promise.reject()
                },
                getAward: function (t) {
                    return s("wall.getAward", t) || i && HSDK.getAward(t) || Promise.reject()
                }
            },
            this.customer = {
                openMiniApp: function (t) {
                    return s("customer.openMiniApp", t) || i && HSDK.openCustomerMiniApp(t) || Promise.reject()
                },
                openConversation: function (t) {
                    return s("customer.openConversation") || i && HSDK.openCustomerServiceConversation(t) || Promise.reject()
                }
            }
    }
    return Object.defineProperty(t.prototype, "platformType", {
        get: function () {
            if (cc.sys.platform === cc.sys.WECHAT_GAME)
                return "hortor"
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.init = function (t) {
            return s("init", t) || HSDK.init(t)
        },
        t.prototype.pay = function (t) {
            return c ? s("android pay", t) || HSDK.dialogPay(t) : a ? s("ios pay", t) || HSDK.applePay(t) : i ? s("wx pay", t) || HSDK.pay(t) : void 0
        },
        t
}
    ();
n.default = new l;