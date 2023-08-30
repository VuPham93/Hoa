var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.net = void 0;
var GameConfig = t("GameConfig"),
    logger = t("logger"),
    DataManager = t("DataManager"),
    PlatformManager = t("PlatformManager"),
    SceneManager = t("SceneManager"),
    s = function () {
        function t() {
            this.DEBUG_URL_DEV = !0,
                this.VER_RES = ""
        }
        return Object.defineProperty(t, "instance", {
            get: function () {
                return null == this.g_Instance && (this.g_Instance = new t),
                    this.g_Instance
            },
            enumerable: !1,
            configurable: !0
        }),
            t.prototype.Init = function (t) {
                this.DEBUG_URL_DEV = t.DEBUG_URL_DEV,
                    this.VER_RES = t.VER_RES,
                    this.T_ldScene = this.T_ldScene
            },
            t.prototype.GetRequestParamter = function (t) {
                var e = "";
                return t.forEach(function (t, n) {
                    e += "" != e ? "&" : "?",
                        e += n + "=" + t
                }
                    .bind(this)),
                    e
            },
            t.prototype._HttpPost = function (e, n) {
                var o = new XMLHttpRequest;
                o.timeout = 5e3,
                    o.ontimeout = function () {
                        console.error("request ontimeout"),
                            n(!1, null),
                            t.CONNECTIING = !1
                    },
                    o.onerror = function () {
                        console.error("request onerror"),
                            n(!1, null),
                            t.CONNECTIING = !1
                    },
                    o.onabort = function () {
                        console.error("request onabort"),
                            n(!1, null),
                            t.CONNECTIING = !1
                    },
                    o.onreadystatechange = function () {
                        if (4 == this.readyState && 200 == o.status) {
                            var e = o.responseText;
                            console.error("http get response : " + e);
                            var r = JSON.parse(e);
                            n(!0, r);
                            t.CONNECTIING = !0
                        }
                    };
                var r = e;
                logger.Logger.debug("begin request server " + r),
                    o.open("POST", r, !0),
                    o.send()
            },
            Object.defineProperty(t.prototype, "baseUrl", {
                get: function () {
                    return this.DEBUG_URL_DEV ? t.DEBUGBASEURL + "/" + GameConfig.GameConfig.REALM : DataManager.dm.gamesetting.reviewing ? t.DEBUGBASEURL + "/" + GameConfig.GameConfig.REALM : DataManager.dm.gamesetting.isServerModelRelease ? t.BASEURL + "/" + GameConfig.GameConfig.REALM : t.DEBUGBASEURL + "/" + GameConfig.GameConfig.REALM
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "developmentUrl", {
                get: function () {
                    return !!DataManager.dm.gamesetting.reviewing || !DataManager.dm.gamesetting.isServerModelRelease
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.Post = function (t, e, n) {
                var o = this;
                console.error("[NetworkManager post] method:", t, " params:", e, "url:", this.baseUrl);
                var r = this.baseUrl + "/" + t;
                (e = e || {}).ver = this.VER_RES;
                var s = "";
                if (e) {
                    for (var l in e)
                        "" != s && (s += "&"), s += l + "=" + encodeURIComponent(e[l]);
                    s && (r += "?" + s)
                }
                this._HttpPost(r, function (t, e) {
                    e && 1019 == e.errcode ? PlatformManager.pm.showModal("Login expired", "Login expired,Login again", "确定", function () {
                        PlatformManager.pm.showToast("Login expired,Login again");
                        SceneManager.sm.switchScene(o.T_ldScene);
                    }) : (n && n(t, e), t && e.errcode, e && e.errcode)
                })
            },
            t.BASEURL = "",//"https://bhr.yudiangame.vip",
            t.DEBUGBASEURL = "",//"https://bhr.yudiangame.vip",
            t.CONNECTIING = !1,
            t.TIMES_RETRY = 3,
            t.g_Instance = null,
            t
    }
        ();
n.default = s,
    n.net = s.instance;