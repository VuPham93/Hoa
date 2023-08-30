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
var r = t("RewardUtils"),
    a = t("SaveData"),
    c = t("Utils"),
    s = t("ChapterConfig"),
    l = t("SaveDataConfig"),
    u = function (t) {
        function e() {
            var n = t.call(this, l.SaveKey[l.SaveKey.Stage], e.Config) || this;
            return n.newStarNum = void 0,
                n.justFailed = !1,
                n
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "stars", {
                get: function () {
                    return this.getValue(e.Config.stars.key)
                },
                set: function (t) {
                    this.setValue(e.Config.stars.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "boxId_received", {
                get: function () {
                    return this.getValue(e.Config.boxId_received.key)
                },
                set: function (t) {
                    this.setValue(e.Config.boxId_received.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.getReceived = function (t, e) {
                return (this.boxId_received[t + ""] || []).includes(e)
            },
            e.prototype.setReceived = function (t, e) {
                var n = this.boxId_received,
                    o = n[t + ""];
                o || (o = [], n[t + ""] = o),
                    o.includes(e) || o.push(e),
                    this.boxId_received = n
            },
            e.prototype.setStageStar = function (t, e) {
                var n = this.stars;
                n[t + ""] = e,
                    this.stars = n
            },
            e.prototype.getStageStar = function (t) {
                return ~~this.stars[t + ""]
            },
            e.prototype.getChapterStar = function (t) {
                for (var e = (t - 1) * s.ChapterConfig.Stage_Per_Chapter + 1, n = e + s.ChapterConfig.Stage_Per_Chapter - 1, o = this.stars, i = 0, r = e; r <= n; r++)
                    i += ~~o[r + ""];
                return i
            },
            e.prototype.refreshRandomItemType = function () {
                this.randomItemType = c.Utils.randomIntInclusive(r.RewardType.Shovel_Prefab, r.RewardType.Brush_Prefab)
            },
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    this.refreshRandomItemType()
            },
            e.Config = {
                stars: new a.SaveNodeConfig("stars", {}, !1),
                boxId_received: new a.SaveNodeConfig("boxId_received", {}, !1)
            },
            e
    }
        (a.default);
n.default = u;