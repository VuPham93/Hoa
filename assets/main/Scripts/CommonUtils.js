var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.CommonUtils = void 0;
var o = t("RankPanel"),
    i = t("RewardPanel"),
    r = t("RewardUtils"),
    // YDWallManager = t("YDWallManager"),
    // u = t("YDXPanel"),
    p = t("GlobalDefines"),
    DataManager = t("DataManager"),
    h = t("NetworkManager"),
    d = t("PlatformManager"),
    g = t("logger"),
    y = t("Utils"),
    _ = t("UIManager"),
    m = t("BattleConfig"),
    v = t("GameConfig"),
    b = function () {
        function t() {
        }

        return Object.defineProperty(t, "popLayer", {
            get: function () {
                return _.ui.getLayer(_.UILayer.Panel)
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t, "effectLayer", {
                get: function () {
                    return _.ui.getLayer(_.UILayer.Effect)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "loadingLayer", {
                get: function () {
                    return _.ui.getLayer(_.UILayer.LoadingBar)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "bannerLayer", {
                get: function () {
                    return _.ui.getLayer(_.UILayer.Banner)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "xLayer", {
                get: function () {
                    return _.ui.getLayer(_.UILayer.X)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.popView = function (t, e) {
                void 0 === e && (e = !1),
                    _.ui.popView(t, e)
            },
            t.addEffectAR = function (t) {
                _.ui.addEffectAR(t)
            },
            t.ClearCustomBanner = function () {
                var t = this.bannerLayer;
                y.Utils.removeAllChildren(t)
            },
            t.createBannerStyle = function (t, e) {
                var n = (Math.abs(t) + p.GlobalDefines.ScreenHeight / 2) / p.GlobalDefines.ScreenHeight,
                    o = p.GlobalDefines.WindowHeight * n,
                    i = p.GlobalDefines.ScreenHeight > p.GlobalDefines.Design_Height ? 1 : .92,
                    r = p.GlobalDefines.WindowWidth * (e ? i : 1);
                return {
                    top: o,
                    left: (p.GlobalDefines.WindowWidth - r) / 2,
                    width: r
                }
            },
            t.RefreshBanner = function (e) {
            },
            t.showBanner = function (e) {
            },
            t.onYDBannerRewardClose = function (t, e, n) {
            },
            t.createRewardIco = function (t, e, n) {
                var o = new cc.Node,
                    i = new cc.Node;
                i.parent = o;
                var r = i.addComponent(cc.Sprite);
                return r.sizeMode = cc.Sprite.SizeMode.TRIMMED,
                    i.scale = n,
                    r.spriteFrame = e,
                    o.position = t,
                    o
            },
            t.ShowX = function (e, n) {
                // if (!(t.xLayer.childrenCount > 0)) {
                //     var o = e || DataManager.dm.adids.XAdInfo.NormalX.xid;
                //     d.pm.ShowX(o, function (e) {
                //         !e && v.GameConfig.X_B && d.pm.getTasks(function (e) {
                //             if (e && e.taskList && 0 != e.taskList.length) {
                //                 YDWallManager.wall.wallTasks = e;
                //                 var n = e.taskList,
                //                     o = n.find(function (t) {
                //                         return 2 == t.status && 0 == t.awareAccpetStatus
                //                     });
                //                 o || (o = n[y.Utils.randomInt(0, n.length)]),
                //                     t.showYDXPanel()
                //             } else
                //                 t.showYDXPanel()
                //         }),
                //             n && n(e)
                //     })
                // }
            },
            t.showYDXPanel = function () {
                // var e = this;
                // t.xLayer.childrenCount > 0 || u.default.show({
                //     xLayer: this.xLayer,
                //     desc: "观看视频，获得金币",
                //     onOk: function () {
                //         _.ui.showLoading(),
                //             d.pm.loadAndShowVideoAd(function (t) {
                //                 if (_.ui.hideLoading(), 1 == t) {
                //                     var n = {
                //                         reward: [{
                //                             type: r.RewardType.Coin,
                //                             count: m.BattleConfig.Coin_Reward_Ad,
                //                             ico: void 0
                //                         }
                //                         ],
                //                         next: function () { },
                //                         needClick: !0
                //                     };
                //                     i.default.show(n)
                //                 }
                //                 y.Utils.removeAllChildren(e.xLayer)
                //             }, DataManager.dm.adids.AdInfo.YDX.adid)
                //     }
                // })
            },
            t.GetWorldRank = function (t) {
                // var e = {
                //     token: DataManager.dm.player.token
                // };
                // h.net.Post("getWorldRank", e, function (e, n) {
                //     e && 0 == n.errcode ? t && t({
                //         rank: n.data,
                //         myRank: n.my_rank
                //     }) : t && t(void 0)
                // })
            },
            t.GameLogin = function (t, e) {
                var n = this;
                // t && _.ui.showLoading();
                var o = DataManager.dm.loginRes,
                    i = {
                        userInfo: o.encryptCombUser,
                        timestamp: o.timestamp,
                        sign: o.sign
                    };
                // h.net.Post("hortorLogin", i, function (o, i) {
                //     t && _.ui.hideLoading();
                //     if (o && 0 == i.errcode) {
                //         if (n.checkLevel(i)) {
                //             DataManager.dm.onLogin(i);
                //             e && e(!0);
                //         }
                //     } else {
                //         e && e(!1);
                //     }
                // })
                e && e(!0);
            },
            t.checkLevel = function (t) {
                var e = t.player;
                return !!e && JSON.parse(e).level.v > DataManager.dm.player.level
            },
            t.ShowRank = function () {
                fetch("https://api.annalala.com/getLeaderboard")
                    .then((response) => response.json())
                    .then((data) => {
                        let n = {
                            rankData: data ? data : [],
                            myInfo: {
                                stage: DataManager.dm.player.level,
                                avatar: DataManager.dm.player.avatar,
                                name: DataManager.dm.player.name,
                            }
                        };

                        let i = {
                            popLayer: t.popLayer,
                            worldData: n,
                            onClosed: function () {
                            }
                        };

                        if (window.FBInstant) {
                            fetch("https://api.annalala.com/getPlayerInfo?" + new URLSearchParams({
                                fbId: window.FBInstant.player.getID()
                            }))
                                .then((response) => response.json())
                                .then((data) => {
                                    n.myInfo = data
                                    o.default.show(i)
                                })
                        } else {
                            o.default.show(i)
                        }
                    })
            },
            t
    }
    ();
n.CommonUtils = b;