var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.GameConfig = n.Game_Model = void 0;
var o,
    c = t("NetworkManager"),
    s = t("logger"),
    l = t("LoadingScene"),
    u = window.gcfg;
(function (t) {
    t[t.DEVELOP = 1] = "DEVELOP",
        t[t.RELEASE = 2] = "RELEASE"
})(o = n.Game_Model || (n.Game_Model = {}));
var p = function () {
    function t() { }
    return Object.defineProperty(t, "cfg", {
        get: function () {
            return this._cfg || (this._cfg = t.GameList[t.GameKey]),
                this._cfg
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t, "isDebug", {
            get: function () {
                return this.DEBUG_URL_DEV || this.DEBUG_COIN || this.DEBUG_STAGE || this.DEBUG_SIGN || this.DEBUG_ENERGY || this.DEBUG_GUIDE || this.DEBUG_STAR_CHALLENGE || this.DEBUG_FLOWER_STRENGTH || this.GAME_MODEL != o.RELEASE
            },
            enumerable: !1,
            configurable: !0
        }),
        t.Init = function () {
            s.Logger.Init(t.DEBUG_LOG),
                c.net.Init({
                    DEBUG_URL_DEV: t.DEBUG_URL_DEV,
                    VER_RES: t.VER_RES,
                    ldScene: l.default
                });
        },
        t.GAME_MODEL = o.RELEASE,
        t.OSS_URL_BASE = "",//"https://fkqst-res.hortorgames.com/402_word_flower/wx/",
        t.GameList = {
            bbkh: {
                gameid: "yd_bbkh_mini",
                gameid_mix: "yd_bbkh_mix",
                name: "步步开花",
                appid: "wx3d598254f5f3622b",
                ver_res: "1.2.1",
                ver_release: "1.2.1",
                realm: "403",
                ydbanner: !1,
                banner_b: !1,
                x_b: !1,
                banner_adIntervals: -1,
                channel: 3,
                voice: !0
            }
        },
        t.GameKey =  "bbkh",
        t._cfg = void 0,
        t.GameId = t.cfg.gameid,
        t.GameId_Mix = t.cfg.gameid_mix,
        t.VER_RES = t.cfg.ver_res,
        t.VER_RELEASE = t.cfg.ver_release,
        t.REALM = t.cfg.realm,
        t.IS_YDBANNER = t.cfg.ydbanner,
        t.APPID = t.cfg.appid,
        t.BANNER_B = t.cfg.banner_b,
        t.X_B = t.cfg.x_b,
        t.BANNER_ADINTERVALS = t.cfg.banner_adIntervals,
        t.DEBUG_URL_DEV = t.GAME_MODEL == o.DEVELOP && !1,
        t.DEBUG_COIN = t.GAME_MODEL == o.DEVELOP && !0,
        t.DEBUG_STAGE = t.GAME_MODEL == o.DEVELOP && !0,
        t.DEBUG_SIGN = t.GAME_MODEL == o.DEVELOP && !0,
        t.DEBUG_ENERGY = t.GAME_MODEL == o.DEVELOP && !1,
        t.DEBUG_ENTRY = t.GAME_MODEL == o.DEVELOP && !1,
        t.DEBUG_GUIDE = t.GAME_MODEL == o.DEVELOP && !1,
        t.DEBUG_LOG = t.GAME_MODEL == o.DEVELOP && !0,
        t.DEBUG_STAR_CHALLENGE = t.GAME_MODEL == o.DEVELOP && !1,
        t.DEBUG_FLOWER_STRENGTH = t.GAME_MODEL == o.DEVELOP && !1,
        t.Test_Token = "10001",
        t
}
    ();
n.GameConfig = p;