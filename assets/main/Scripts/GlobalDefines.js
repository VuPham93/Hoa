var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.LoadStatus = n.GlobalDefines = void 0;
var o = t("GameConfig"),
    i = function () {
        function t() { }
        return Object.defineProperty(t, "ScreenWidth", {
            get: function () {
                return this.Design_Width
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t, "ScreenHeight", {
                get: function () {
                    var t = this.Design_Width / this.WindowWidth;
                    return this.WindowHeight * t
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "SafeAreaHeight", {
                get: function () {
                    return this.ScreenHeight - this.MenuButtonLogic.top - this.MenuButtonLogic.height
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "wsRate", {
                get: function () {
                    return this.WindowWidth / this.ScreenWidth
                },
                enumerable: !1,
                configurable: !0
            }),
            t.CHANNEL = o.GameConfig.cfg.channel,
            t.Second_Day = 86400,
            t.isIos = !0,
            t.PixelRatio = 2,
            // t.WindowHeight = 844,
            // t.WindowWidth = 390,
            t.WindowHeight = 1334,
            t.WindowWidth = 750,
            t.MenuButtonLogic = {
                width: 174,
                height: 64,
                top: 32,
                right: 730,
                bottom: 80,
                left: 556
            },
            t.SDKVersion = "",
            t.platform = "",
            t.Design_Width = 750,
            t.Design_Height = 1334,
            t
    }
        ();
n.GlobalDefines = i,
    function (t) {
        t[t.Doing = -1] = "Doing",
            t[t.Success = 0] = "Success",
            t[t.GameOut = 1] = "GameOut"
    }
        (n.LoadStatus || (n.LoadStatus = {}));