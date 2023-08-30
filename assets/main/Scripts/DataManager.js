var t = require;
var e = module;
var n = exports;
var o = this && this.__awaiter || function (t, e, n, o) {
    return new (n || (n = Promise))(function (i, r) {
        function a(t) {
            try {
                s(o.next(t))
            } catch (e) {
                r(e)
            }
        }
        function c(t) {
            try {
                s(o.throw(t))
            } catch (e) {
                r(e)
            }
        }
        function s(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                t(e)
            })).then(a, c)
        }
        s((o = o.apply(t, e || [])).next())
    })
},
    i = this && this.__generator || function (t, e) {
        var n,
            o,
            i,
            r,
            a = {
                label: 0,
                sent: function () {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
        return r = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
            "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                return this
            }),
            r;
        function c(t) {
            return function (e) {
                return s([t, e])
            }
        }
        function s(r) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return a.label++, {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                                o = r[1],
                                r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(),
                                a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1],
                                    i = r;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                    a.ops.push(r);
                                break
                            }
                            i[2] && a.ops.pop(),
                                a.trys.pop();
                            continue
                    }
                    r = e.call(t, a)
                } catch (c) {
                    r = [6, c],
                        o = 0
                } finally {
                    n = i = 0
                }
            if (5 & r[0])
                throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
    };
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.dm = void 0;
var GuideInfo = t("GuideInfo"),
    BattleConfig = t("BattleConfig"),
    GameConfig = t("GameConfig"),
    AdConfig = t("AdConfig"),
    ChapterInfo = t("ChapterInfo"),
    DailyTaskInfo = t("DailyTaskInfo"),
    GameSetting = t("GameSetting"),
    OnceInfo = t("OnceInfo"),
    PlayerInfo = t("PlayerInfo"),
    StageInfo = t("StageInfo"),
    StarChallengeInfo = t("StarChallengeInfo"),
    SignInfo = t("SignInfo"),
    Utils = t("Utils"),
    PlatformManager = t("PlatformManager"),
    v = function () {
        function t() {
            this.openId = void 0,
                this.hortorId = void 0,
                this.channel = void 0,
                this.adq = "1",
                this.infoList = [],
                this.loginForRank = !1,
                this.gamesetting = new GameSetting.GameSetting,
                this.player = new PlayerInfo.default,
                this.sign = new SignInfo.default,
                this.guide = new GuideInfo.default,
                this.stage = new StageInfo.default,
                this.dailyTask = new DailyTaskInfo.default,
                this.chapter = new ChapterInfo.default,
                this.once = new OnceInfo.default,
                this.starChallenge = new StarChallengeInfo.default,
                this.infoList = [this.player, this.sign, this.stage, this.dailyTask, this.once, this.starChallenge]
        }
        return Object.defineProperty(t, "ins", {
            get: function () {
                return this._ins || (this._ins = new t),
                    this._ins
            },
            enumerable: !1,
            configurable: !0
        }),
            t.prototype.onInit = function () {
                return o(this, void 0, void 0, function () {
                    var t;
                    return i(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return t = PlatformManager.pm.getLaunchOptionsSync(),
                                    this.adq = Utils.Utils.getValue(t, "query.adq"),
                                    this.ad = Utils.Utils.getValue(t, "query.ad"),
                                    console.log("onInit end isFromMp ==", t, this.IsFromMp()),
                                    this.player.init(),
                                    this.sign.init(),
                                    this.guide.init(),
                                    this.stage.init(),
                                    this.dailyTask.init(),
                                    this.chapter.init(),
                                    this.once.init(),
                                    this.starChallenge.init(),
                                    this.adids = new AdConfig.default(this.IsFromMp(), GameConfig.GameConfig.GameKey),
                                    [4, this.adids.load()];
                            case 1:
                                return e.sent(),
                                    [2]
                        }
                    })
                })
            },
            t.prototype.onLogin = function (t) {
                for (var e = 0; e < this.infoList.length; e++)
                    this.infoList[e].onLogin(t)
            },
            t.prototype.IsFromMp = function () {
                return "0" == this.adq
            },
            t.prototype.getTgaData = function () {
                return {}
            },
            t.prototype.isAdOnface = function () {
                return !12555
            },
            t.prototype.isResultX = function () {
                return this.player.level < BattleConfig.BattleConfig.X_Stage || n.dm.player.level % BattleConfig.BattleConfig.X_Cyc == BattleConfig.BattleConfig.X_Cyc_Mod
            },
            t.prototype.GetRank = function (t, e) {
                void 0 === e && (e = 6800);
                var n = (-1 / (2 * e) * t * t + t) / (-1 / (2 * e) * e * e + e) * 100;
                return (n = Math.min(n, 99.99)).toFixed(2)
            },
            t
    }
        ();
n.default = v,
    n.dm = v.ins;