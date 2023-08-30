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
    });
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = t("SaveData"),
    a = t("Utils"),
    c = t("GameConfig"),
    s = t("SaveDataConfig"),
    l = function (t) {
        function e() {
            return t.call(this, s.SaveKey[s.SaveKey.Sign], e.Config) || this
        }
        return i(e, t),
            e.prototype.daysSignedinitTimes = function () {
                return this.getValue(e.Config.initTimes.key)
            },
            Object.defineProperty(e.prototype, "initTimes", {
                set: function (t) {
                    this.setValue(e.Config.initTimes.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "timeGameStart", {
                get: function () {
                    return this.getValue(e.Config.timeGameStart.key)
                },
                set: function (t) {
                    var n = e.Config.timeGameStart.key;
                    0 == this.getValue(n) && this.setValue(n, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "daysSigned", {
                get: function () {
                    var t = this.getValue(e.Config.daysSigned.key);
                    return t >= 7 ? this.isTodaySigned ? 7 : 0 : t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onSign = function () {
                var t = this.getValue(e.Config.daysSigned.key);
                ++t > 7 && (t = 1),
                    this.setValue(e.Config.daysSigned.key, t, !1),
                    this.setValue(e.Config.lastSignTime.key, (new Date).getTime() + "")
            },
            Object.defineProperty(e.prototype, "lastSignTime", {
                get: function () {
                    return this.getValue(e.Config.lastSignTime.key)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isTodaySigned", {
                get: function () {
                    return c.GameConfig.DEBUG_SIGN,
                        a.Utils.isToday(this.lastSignTime / 1e3)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curDayNum", {
                get: function () {
                    var t = this.daysSigned;
                    return this.isTodaySigned ? t : t + 1
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isFristDay", {
                get: function () {
                    return a.Utils.isToday(this.timeGameStart / 1e3)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    c.GameConfig.DEBUG_SIGN
            },
            e.Config = {
                initTimes: new r.SaveNodeConfig("initTimes", 0, !1),
                timeGameStart: new r.SaveNodeConfig("timeGameStart", 0, !1),
                daysSigned: new r.SaveNodeConfig("daysSigned", 0, !1),
                lastSignTime: new r.SaveNodeConfig("lastSignTime", 0, !1)
            },
            e
    }
        (r.default);
n.default = l;