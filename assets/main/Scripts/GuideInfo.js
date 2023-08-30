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
            var n = t.call(this, a.SaveKey[a.SaveKey.Guide], e.Config, !1) || this;
            return n.taskPassTemp = [],
                n
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "taskPass", {
                get: function () {
                    return this.getValue(e.Config.taskPass.key)
                },
                set: function (t) {
                    this.setValue(e.Config.taskPass.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "bigboom", {
                get: function () {
                    return this.getValue(e.Config.bigboom.key)
                },
                set: function (t) {
                    this.setValue(e.Config.bigboom.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.isTaskCompleted = function (t) {
                return !!this.taskPassTemp.includes(t) || this.taskPass.includes(t)
            },
            e.prototype.setTaskCompleted = function (t) {
                var e = this.taskPass;
                e.includes(t) || (e.push(t), this.taskPass = e)
            },
            e.prototype.clearTempList = function () {
                this.taskPassTemp = []
            },
            e.prototype.addTempId = function (t) {
                this.taskPassTemp.push(t)
            },
            e.prototype.init = function () {
                t.prototype.init.call(this)
            },
            e.Config = {
                taskPass: new r.SaveNodeConfig("taskPass", [], !1),
                bigboom: new r.SaveNodeConfig("bigboom", !1, !1)
            },
            e
    }
        (r.default);
n.default = c;