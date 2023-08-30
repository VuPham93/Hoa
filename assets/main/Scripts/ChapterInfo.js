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
    a = t("GameConfig"),
    c = t("SaveDataConfig"),
    s = function (t) {
        function e() {
            return t.call(this, c.SaveKey[c.SaveKey.Chapter], e.Config, !1) || this
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "fragment_ids", {
                get: function () {
                    return this.getValue(e.Config.fragment_ids.key)
                },
                set: function (t) {
                    this.setValue(e.Config.fragment_ids.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.getChapterFragmentId = function (t) {
                return this.fragment_ids[t + ""]
            },
            e.prototype.setChapterFragmentId = function (t, e) {
                var n = this.fragment_ids;
                n[t + ""] = e,
                    this.fragment_ids = n
            },
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    a.GameConfig.DEBUG_STAGE
            },
            e.Config = {
                fragment_ids: new r.SaveNodeConfig("fragment_ids", {}, !1)
            },
            e
    }
        (r.default);
n.default = s;