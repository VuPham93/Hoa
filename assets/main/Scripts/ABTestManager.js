var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.ab = void 0;
var o = t("ABTestConfig"),
    i = t("logger"),
    r = t("PlatformManager"),
    a = function () {
        function t() {
            this.ABTestData = new Map
        }
        return Object.defineProperty(t, "instance", {
            get: function () {
                return this._instance || (this._instance = new t)
            },
            enumerable: !1,
            configurable: !0
        }),
            t.prototype.onInit = function () {
                var t = [];
                for (var e in o.ABTestType)
                    t.push(o.ABTestType[e]);
                var n = r.pm.getExptInfoSync(t);
                if (n) {
                    for (var e in o.ABTestType) {
                        var a = o.ABTestType[e];
                        i.Logger.debug("[DataManager initABTestData] 遍历ABTestType ", a);
                        var c = !1;
                        "1" == n[a] && (c = !0),
                            this.ABTestData.set(a, c)
                    }
                    i.Logger.debug("[DataManager initABTestData] data:", this.ABTestData)
                } else
                    i.Logger.error("wx getExptInfoSync error")
            },
            t.prototype.IsABTestOpen = function (t) {
                // return !!this.ABTestData.has(t) && this.ABTestData.get(t)
                return false;
            },
            t
    }
        ();
n.default = a,
    n.ab = a.instance;