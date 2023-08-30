var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.PlatformUtil = void 0;
var o = t("PlatformManager"),
    i = function () {
        function t() { }
        return Object.defineProperty(t, "NEED_LOAD_GAMESETTING", {
            get: function () {
                return !1
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t, "NEED_LOGIN", {
                get: function () {
                    return o.default.iswxGame || o.default.isH5 || cc.sys.os == cc.sys.OS_ANDROID
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "NEED_TIME_CHECK", {
                get: function () {
                    return !1
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "NEED_DATA_UPLOAD", {
                get: function () {
                    return o.default.iswxGame || o.default.isH5 || cc.sys.os == cc.sys.OS_ANDROID
                },
                enumerable: !1,
                configurable: !0
            }),
            t
    }
        ();
n.PlatformUtil = i;