var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.StarChallengeConfig = n.Star_Challenge_Status = void 0;
var o,
    i = t("DataManager"),
    r = t("Utils"),
    a = t("BundleResourceList"),
    c = t("GameUtils");
(function (t) {
    t[t.Desc = 0] = "Desc",
        t[t.Ing = 1] = "Ing",
        t[t.Award = 2] = "Award",
        t[t.End = 3] = "End"
})(o = n.Star_Challenge_Status || (n.Star_Challenge_Status = {}));
var s = function () {
    function t() { }
    return Object.defineProperty(t, "rateAll", {
        get: function () {
            if (0 == this._rateAll) {
                var t = 0;
                for (var e in this.roleSeedMap)
                    t += this.roleSeedMap[e].rate;
                this._rateAll = t
            }
            return this._rateAll
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t, "roleSeedMap", {
            get: function () {
                return this._roleSeedMap || (this._roleSeedMap = c.GameUtils.getJsonConfig(a.Idx_Json.star_challenge)),
                    this._roleSeedMap
            },
            enumerable: !1,
            configurable: !0
        }),
        t.getRundomUserId = function (t) {
            var e = Math.floor(this.Num_User_All / this.Num_Role),
                n = t * e,
                o = (t + 1) * e;
            return r.Utils.randomInt(n, o)
        },
        t.getRundomSeedId = function () {
            var t = r.Utils.randomInt(0, this.rateAll),
                e = 0;
            for (var n in this.roleSeedMap) {
                var o = this.roleSeedMap[n];
                if (t <= (e += o.rate))
                    return o.id
            }
            return 0
        },
        Object.defineProperty(t, "curStatus", {
            get: function () {
                var t,
                    e = r.Utils.getCurTime(),
                    n = i.dm.starChallenge.time_match_start,
                    a = i.dm.starChallenge.time_awarded,
                    c = e - n <= 60 * this.Match_Cycle,
                    s = r.Utils.isToday(n),
                    l = a < n,
                    u = i.dm.starChallenge.myRank,
                    p = ~~(null === (t = i.dm.starChallenge.roleMe) || void 0 === t ? void 0 : t.star),
                    f = 0 == u && p > 0;
                return c ? o.Ing : l && f ? o.Award : s ? o.End : o.Desc
            },
            enumerable: !1,
            configurable: !0
        }),
        t.Match_Cycle = 60,
        t.Energy_Infinite_Cycle = 30,
        t.Reward_Coin = 50,
        t.Reward_Item_Cycle = 30,
        t.Num_Role = 5,
        t.Num_User_All = 170,
        t.Num_Seed_All = 21,
        t._rateAll = 0,
        t._roleSeedMap = void 0,
        t
}
    ();
n.StarChallengeConfig = s;