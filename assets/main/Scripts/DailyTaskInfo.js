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
var r = t("DataManager"),
    a = t("SaveData"),
    c = t("Utils"),
    s = t("BundleResourceList"),
    l = t("DailyTaskConfig"),
    u = t("GameUtils"),
    p = t("DailyTask"),
    f = t("SaveDataConfig"),
    h = function (t) {
        function e() {
            var n = t.call(this, f.SaveKey[f.SaveKey.Daily_Task], e.Config) || this;
            return n.newItemNum = 0,
                n
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "curSeed", {
                get: function () {
                    var t = this;
                    if (!(this.index >= l.DailyTaskConfig.Reward_Daily_Task.length)) {
                        if (!this._curSeed)
                            if (0 == this.curTaskId) {
                                if (i = this.createNextSeed()) {
                                    if (this.setValue(e.Config.curTaskId.key, i.id, !1), this.color > 0) {
                                        var n = [1, 2, 3, 4],
                                            o = n.findIndex(function (e) {
                                                return e == t.color
                                            });
                                        o >= 0 && n.splice(o, 1),
                                            this.setValue(e.Config.color.key, n[c.Utils.randomInt(0, n.length)], !1)
                                    } else
                                        this.setValue(e.Config.color.key, c.Utils.randomInt(1, 5), !1);
                                    this._curSeed = new p.DailyTaskSeed(i)
                                }
                                this.setValue(e.Config.curNum.key, 0, !1),
                                    this.setValue(e.Config.received.key, !1, !1),
                                    this.save()
                            } else {
                                var i;
                                (i = u.GameUtils.getJsonConfig(s.Idx_Json.daily_task)[this.curTaskId + ""]) && (this._curSeed = new p.DailyTaskSeed(i))
                            }
                        return this._curSeed
                    }
                    this._curSeed = void 0
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.createNextSeed = function () {
                var t = u.GameUtils.getJsonConfig(s.Idx_Json.daily_task),
                    e = [],
                    n = 0;
                for (var o in t) {
                    var i = t[o],
                        a = r.dm.player.level + 1;
                    i.min_level <= a && a <= i.max_level && (e.push(i), n += i.rate)
                }
                c.Utils.shuffle(e);
                for (var l = c.Utils.randomInt(0, n), p = 0, f = void 0, h = 0; h < e.length; h++) {
                    if (i = e[h], p <= l && l < p + i.rate) {
                        f = i;
                        break
                    }
                    p += i.rate
                }
                return f
            },
            Object.defineProperty(e.prototype, "activity", {
                get: function () {
                    return this.getValue(e.Config.activity.key)
                },
                set: function (t) {
                    this.setValue(e.Config.activity.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "index", {
                get: function () {
                    return this.getValue(e.Config.index.key)
                },
                set: function (t) {
                    this.setValue(e.Config.index.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "received", {
                get: function () {
                    return this.getValue(e.Config.received.key)
                },
                set: function (t) {
                    this.setValue(e.Config.received.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "color", {
                get: function () {
                    return this.getValue(e.Config.color.key)
                },
                set: function (t) {
                    this.setValue(e.Config.color.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curNum", {
                get: function () {
                    return this.getValue(e.Config.curNum.key)
                },
                set: function (t) {
                    this.setValue(e.Config.curNum.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curTaskId", {
                get: function () {
                    return this.getValue(e.Config.curTaskId.key)
                },
                set: function (t) {
                    this.setValue(e.Config.curTaskId.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curTaskDesc", {
                get: function () {
                    var t = new String(this.curSeed.desc);
                    return (t = (t = t.replace("$1", this.curSeed.count + "")).replace("$2", l.DailyTaskConfig.Txt_Color[this.color + ""])).toString()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curTaskName", {
                get: function () {
                    var t = new String(this.curSeed.name);
                    return (t = (t = t.replace("$1", this.curSeed.count + "")).replace("$2", l.DailyTaskConfig.Txt_Color[this.color + ""])).toString()
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isTaskCompleted", {
                get: function () {
                    return !this.curSeed || this.curNum + this.newItemNum >= this.curSeed.count
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onReward = function () {
                this.setValue(e.Config.index.key, this.getValue(e.Config.index.key) + 1, !1),
                    this.setValue(e.Config.received.key, !0)
            },
            e.prototype.refreshTask = function () {
                this._curSeed = void 0,
                    this.setValue(e.Config.curTaskId.key, 0, !1),
                    this.setValue(e.Config.curNum.key, 0, !1)
            },
            e.prototype.init = function () {
                t.prototype.init.call(this)
            },
            e.Config = {
                activity: new a.SaveNodeConfig("activity", !1, !1),
                curTaskId: new a.SaveNodeConfig("curTaskId", 0, !0),
                curNum: new a.SaveNodeConfig("curNum", 0, !0),
                color: new a.SaveNodeConfig("color", 0, !0),
                received: new a.SaveNodeConfig("received", !1, !0),
                index: new a.SaveNodeConfig("index", 0, !0)
            },
            e
    }
        (a.default);
n.default = h;