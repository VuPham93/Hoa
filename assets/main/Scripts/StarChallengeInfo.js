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
    a = t("SaveData"),
    c = t("logger"),
    s = t("Utils"),
    l = t("StarChallengeConfig"),
    u = t("StarChallengeEvents"),
    p = t("StarRoleData"),
    f = t("SaveDataConfig"),
    h = function (t) {
        function e() {
            var n = t.call(this, f.SaveKey[f.SaveKey.Star_Challenge], e.Config) || this;
            return n.roleList = [],
                n
        }
        return i(e, t),
            e.prototype.onLogin = function (e) {
                t.prototype.onLogin.call(this, e),
                    this.initRoleList()
            },
            Object.defineProperty(e.prototype, "role_list", {
                get: function () {
                    return this.getValue(e.Config.role_list.key)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "show_panel", {
                get: function () {
                    return this.getValue(e.Config.show_panel.key)
                },
                set: function (t) {
                    this.setValue(e.Config.show_panel.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "time_awarded", {
                get: function () {
                    return this.getValue(e.Config.time_awarded.key)
                },
                set: function (t) {
                    this.setValue(e.Config.time_awarded.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "time_match_start", {
                get: function () {
                    return this.getValue(e.Config.time_match_start.key)
                },
                set: function (t) {
                    this.setValue(e.Config.time_match_start.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "match_today", {
                get: function () {
                    var t = this.time_match_start;
                    return s.Utils.isToday(t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onMatchStart = function () {
                var t = s.Utils.getCurTime();
                this.setValue(e.Config.time_match_start.key, t, !1);
                for (var n = [], o = 0; o < l.StarChallengeConfig.Num_Role; o++)
                    n.push({
                        id: o,
                        seedId: l.StarChallengeConfig.getRundomSeedId(),
                        userId: l.StarChallengeConfig.getRundomUserId(o),
                        starNum: 0,
                        starNumNew: 0,
                        closeTime: t
                    });
                c.Logger.debug("[StarChallengeInfo onMathStart] roleList:", n),
                    this.setValue(e.Config.role_list.key, n, !1),
                    this.save(),
                    this.initRoleList()
            },
            e.prototype.starClose = function () {
                for (var t = !1, e = 0; e < this.roleList.length; e++)
                    this.roleList[e].starClose() && (t = !0);
                return t && (this.restRoleSaveData(!0), r.GlobalEvent.dispatchEvent(new u.EventOnChallengeClose)),
                    t
            },
            e.prototype.onMatchEnd = function () { },
            e.prototype.onAward = function () {
                this.time_awarded = s.Utils.getCurTime()
            },
            e.prototype.restRoleSaveData = function (t) {
                for (var n = [], o = 0; o < this.roleList.length; o++) {
                    var i = this.roleList[o].roleSaveData;
                    n.push(i)
                }
                c.Logger.debug("[StarChallengeInfo tryAddMyNewStar] saveList:", n),
                    this.setValue(e.Config.role_list.key, n, t)
            },
            e.prototype.initRoleList = function () {
                var t = this.role_list;
                this.roleList = [];
                for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                        o = new p.StarRoleData(n);
                    this.roleList.push(o)
                }
                this.roleMe = this.roleList[0]
            },
            Object.defineProperty(e.prototype, "myRank", {
                get: function () {
                    return this.roleList.sort(function (t, e) {
                        return e.star - t.star
                    }),
                        this.roleList.findIndex(function (t) {
                            return 0 == t.id
                        })
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.tryAddMyNewStar = function (t) {
                l.StarChallengeConfig.curStatus == l.Star_Challenge_Status.Ing && (this.roleMe.starNewNum += t, c.Logger.debug("[StarChallengeInfo tryAddMyNewStar] starNewNum:", this.roleMe.starNewNum), this.restRoleSaveData(!0))
            },
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    this.initRoleList()
            },
            e.Config = {
                time_match_start: new a.SaveNodeConfig("time_match_start", 0, !1),
                time_awarded: new a.SaveNodeConfig("time_awarded", 0, !1),
                role_list: new a.SaveNodeConfig("role_list", [], !1),
                show_panel: new a.SaveNodeConfig("time_show_panel", !1, !0)
            },
            e
    }
        (a.default);
n.default = h;