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
    a = t("SaveDataConfig"),
    c = function (t) {
        function e() {
            return t.call(this, a.SaveKey[a.SaveKey.Once], e.Config) || this
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "dailytask_reward", {
                get: function () {
                    return this.getValue(e.Config.dailytask_reward.key)
                },
                set: function (t) {
                    this.setValue(e.Config.dailytask_reward.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function () {
                t.prototype.init.call(this)
            },
            e.Config = {
                dailytask_reward: new r.SaveNodeConfig("dailytask_reward", !1, !1)
            },
            e
    }
        (r.default);
n.default = c;