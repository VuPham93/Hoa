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
});
var r = t("GlobalDefines"),
    c = t("Utils"),
    s = function () {
        function t(t, e) {
            this.isFromMp = !1,
                this.gamekey = void 0,
                this.AdInfo = {
                    Energy: {
                        name: "Energy",
                        adid: "Energy"
                    },
                    Shovel: {
                        name: "Shovel",
                        adid: "Shovel"
                    },
                    Kettle: {
                        name: "Kettle",
                        adid: "Kettle"
                    },
                    Brush: {
                        name: "Brush",
                        adid: "Brush"
                    },
                    Step: {
                        name: "Step",
                        adid: "Step"
                    },
                    Signing: {
                        name: "Signing",
                        adid: "Signing"
                    },
                    DailyTaskRefresh: {
                        name: "DailyTaskRefresh",
                        adid: "DailyTaskRefresh"
                    },
                    DailyTaskDouble: {
                        name: "DailyTaskDouble",
                        adid: "DailyTaskDouble"
                    },
                    HardFreeItem: {
                        name: "HardFreeItem",
                        adid: "HardFreeItem"
                    },
                    YDX: {
                        name: "YD插屏",
                        adid: ""
                    }
                },
                this.BannerInfo = {
                    Normal: {
                        name: "Normal",
                        bid: "Normal"
                    },
                    stage0: {
                        name: "stage0",
                        bid: "stage0"
                    },
                    stage1: {
                        name: "stage1",
                        bid: "stage1"
                    },
                    stage2: {
                        name: "stage2",
                        bid: "stage2"
                    },
                    stageOther: {
                        name: "stageOther",
                        bid: "stageOther"
                    },
                    other1: {
                        name: "other1",
                        bid: "other1"
                    },
                    other2: {
                        name: "other2",
                        bid: "other2"
                    },
                    other3: {
                        name: "other3",
                        bid: "other3"
                    }
                },
                this.XAdInfo = {
                    NormalX: {
                        name: "NormalX",
                        xid: "NormalX"
                    },
                    ChapterX: {
                        name: "ChapterX",
                        xid: "ChapterX"
                    },
                    SigningX: {
                        name: "SigningX",
                        xid: "SigningX"
                    },
                    StageWin: {
                        name: "StageWin",
                        xid: "StageWin"
                    },
                    StageFail: {
                        name: "StageFail",
                        xid: "StageFail"
                    },
                    GameEnter: {
                        name: "GameEnter",
                        xid: "GameEnter"
                    }
                },
                this.isFromMp = t,
                this.gamekey = e
        }
        return t.prototype.load = function () {
            return o(this, void 0, void 0, function () {
                var t;
                return i(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [3, 2] ;
                        case 1:
                            (t = e.sent()) && (this.AdInfo = t.json.AdInfo, this.BannerInfo = t.json.BannerInfo, this.XAdInfo = t.json.XAdInfo),
                                e.label = 2;
                        case 2:
                            return [2]
                    }
                })
            })
        },
            t.prototype.GetAdName = function (t) {
                for (var e in this.AdInfo) {
                    var n = this.AdInfo[e];
                    if (t == t)
                        return n.name
                }
                return "UnknownAD"
            },
            t.prototype.GetPuzzleBannerId = function (t) {
                var e = [],
                    n = t > 2 ? this.BannerInfo.stageOther.bid : this.BannerInfo["stage" + t].bid;
                e.push(n);
                for (var o = 1; o <= 3; o++) {
                    var i = this.BannerInfo["other" + o].bid;
                    e.push(i)
                }
                return e.push(this.BannerInfo.Normal.bid),
                    e
            },
            t.prototype.GetXName = function (t) {
                for (var e in this.XAdInfo) {
                    var n = this.XAdInfo[e];
                    if (t == t)
                        return n.name
                }
                return "UnknownX"
            },
            t
    }
        ();
n.default = s;