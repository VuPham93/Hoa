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
var r = t("G"),
    a = t("GlobalEvents"),
    c = t("NetworkManager"),
    SaveData = t("SaveData"),
    l = t("Utils"),
    u = t("GameConfig"),
    p = t("SaveDataConfig"),
    f = function (t) {
        function e() {
            var n = t.call(this, p.SaveKey[p.SaveKey.Player], e.Config) || this;
            return n._brush_prefab = 0,
                n._kettle_prefab = 0,
                n._shovel_prefab = 0,
                n
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "brush_prefab", {
                get: function () {
                    return this._brush_prefab
                },
                set: function (t) {
                    this._brush_prefab = t,
                        r.GlobalEvent.dispatchEvent(new a.EventOnDataChange({
                            model: this.saveKey,
                            key: "brush_prefab",
                            value: t
                        }))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "kettle_prefab", {
                get: function () {
                    return this._kettle_prefab
                },
                set: function (t) {
                    this._kettle_prefab = t,
                        r.GlobalEvent.dispatchEvent(new a.EventOnDataChange({
                            model: this.saveKey,
                            key: "kettle_prefab",
                            value: t
                        }))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "shovel_prefab", {
                get: function () {
                    return this._shovel_prefab
                },
                set: function (t) {
                    this._shovel_prefab = t,
                        r.GlobalEvent.dispatchEvent(new a.EventOnDataChange({
                            model: this.saveKey,
                            key: "shovel_prefab",
                            value: t
                        }))
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "times_freestep_share", {
                get: function () {
                    return this.getValue(e.Config.times_freestep_share.key)
                },
                set: function (t) {
                    this.setValue(e.Config.times_freestep_share.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "shovel_infinite_end", {
                get: function () {
                    return this.getValue(e.Config.shovel_infinite_end.key)
                },
                set: function (t) {
                    this.setValue(e.Config.shovel_infinite_end.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "energy_infinite_end", {
                get: function () {
                    return this.getValue(e.Config.energy_infinite_end.key)
                },
                set: function (t) {
                    this.setValue(e.Config.energy_infinite_end.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "brush_free_times", {
                get: function () {
                    return this.getValue(e.Config.brush_free_times.key)
                },
                set: function (t) {
                    this.setValue(e.Config.brush_free_times.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "kettle_free_times", {
                get: function () {
                    return this.getValue(e.Config.kettle_free_times.key)
                },
                set: function (t) {
                    this.setValue(e.Config.kettle_free_times.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "shovel_free_times", {
                get: function () {
                    return this.getValue(e.Config.shovel_free_times.key)
                },
                set: function (t) {
                    this.setValue(e.Config.shovel_free_times.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "energy_free_times", {
                get: function () {
                    return this.getValue(e.Config.energy_free_times.key)
                },
                set: function (t) {
                    this.setValue(e.Config.energy_free_times.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "energy_last_close", {
                get: function () {
                    return this.getValue(e.Config.energy_last_close.key)
                },
                set: function (t) {
                    this.setValue(e.Config.energy_last_close.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "energy", {
                get: function () {
                    return this.isInfinte ? 1 : this.getValue(e.Config.energy.key)
                },
                set: function (t) {
                    this.setValue(e.Config.energy.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "brush", {
                get: function () {
                    return this.getValue(e.Config.brush.key)
                },
                set: function (t) {
                    this.setValue(e.Config.brush.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "kettle", {
                get: function () {
                    return this.getValue(e.Config.kettle.key)
                },
                set: function (t) {
                    this.setValue(e.Config.kettle.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "shovel", {
                get: function () {
                    return this.getValue(e.Config.shovel.key)
                },
                set: function (t) {
                    this.setValue(e.Config.shovel.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "coin", {
                get: function () {
                    return this.getValue(e.Config.coin.key)
                },
                set: function (t) {
                    this.setValue(e.Config.coin.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "level", {
                get: function () {
                    return this.getValue(e.Config.level.key)
                },
                set: function (t) {
                    // t > this.level && c.net.Post("changeScore", {
                    //     score: t,
                    //     token: this.token
                    // }, function () { });
                    this.setValue(e.Config.level.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "token", {
                get: function () {
                    return this.getValue(e.Config.token.key)
                },
                set: function (t) {
                    this.setValue(e.Config.token.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "avatar", {
                get: function () {
                    return this.getValue(e.Config.avatar.key)
                },
                set: function (t) {
                    this.setValue(e.Config.avatar.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "name", {
                get: function () {
                    return this.getValue(e.Config.name.key)
                },
                set: function (t) {
                    this.setValue(e.Config.name.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isInfinte", {
                get: function () {
                    var t = l.Utils.getCurTime();
                    return this.energy_infinite_end > t
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.clearPrefabItem = function () {
                this.brush_prefab = 0,
                    this.kettle_prefab = 0,
                    this.shovel_prefab = 0
            },
            Object.defineProperty(e.prototype, "prefabItemNum", {
                get: function () {
                    return this.brush_prefab + this.kettle_prefab + this.shovel_prefab
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onLogin = function (n) {
                t.prototype.onLogin.call(this, n);
                this.setValue(e.Config.token.key, n.token, !1);
                this.setValue(e.Config.avatar.key, n.avatar, !1);
                this.setValue(e.Config.name.key, n.name, !1);
            },
            e.prototype.init = function () {
                t.prototype.init.call(this);
                u.GameConfig.DEBUG_STAGE && (this.brush = 200, this.shovel = 200, this.kettle = 200, this.level = 452)
            },
            e.Config = {
                token: new SaveData.SaveNodeConfig("token", void 0, !1),
                avatar: new SaveData.SaveNodeConfig("avatar", void 0, !1),
                name: new SaveData.SaveNodeConfig("name", void 0, !1),
                level: new SaveData.SaveNodeConfig("level", 0, !1),
                coin: new SaveData.SaveNodeConfig("coin", 40, !1),
                energy: new SaveData.SaveNodeConfig("energy", 5, !1),
                energy_last_close: new SaveData.SaveNodeConfig("energy_last_close", 0, !1),
                energy_free_times: new SaveData.SaveNodeConfig("energy_free_times", 5, !0),
                energy_infinite_end: new SaveData.SaveNodeConfig("energy_infinite_end", -1, !1),
                shovel: new SaveData.SaveNodeConfig("shovel", 1, !1),
                kettle: new SaveData.SaveNodeConfig("kettle", 1, !1),
                brush: new SaveData.SaveNodeConfig("brush", 1, !1),
                shovel_free_times: new SaveData.SaveNodeConfig("shovel_free_times", 2, !0),
                kettle_free_times: new SaveData.SaveNodeConfig("kettle_free_times", 2, !0),
                brush_free_times: new SaveData.SaveNodeConfig("brush_free_times", 2, !0),
                shovel_infinite_end: new SaveData.SaveNodeConfig("shovel_infinite_end", 0, !1),
                times_freestep_share: new SaveData.SaveNodeConfig("times_freestep_share", 2, !0)
            },
            e
    }
        (SaveData.default);
n.default = f;