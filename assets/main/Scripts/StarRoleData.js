var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.StarRoleData = n.StarUserInfo = void 0;
var o = t("DataManager"),
    i = t("Utils"),
    r = t("BundleResourceList"),
    a = t("GameUtils"),
    c = t("StarChallengeConfig"),
    s = function () {
        function t() { }
        return t.prototype.initOther = function (t) {
            return this.avatar = "",//"https://thirdwx.qlogo.cn/mmopen/vi_32/" + t.avatar + "/132",
                this.name = t.name,
                this
        },
            t.prototype.initMe = function () {
                return this.avatar = o.dm.player.avatar,
                    this.name = o.dm.player.name,
                    this
            },
            t
    }
        ();
n.StarUserInfo = s;
var l = function () {
    function t(t) {
        this.id = t.id,
            0 == this.id ? (this.seed = void 0, this.user = (new s).initMe()) : (this.seed = a.GameUtils.getJsonConfig(r.Idx_Json.star_challenge)[t.seedId], this.user = (new s).initOther(a.GameUtils.getJsonConfig(r.Idx_Json.user)[t.userId])),
            this.user.id = t.userId,
            this.starNum = t.starNum,
            this.starNewNum = t.starNumNew,
            this.last_close_time = t.closeTime
    }
    return t.prototype.starClose = function () {
        if (0 == this.id) {
            var t = this.starNewNum > 0;
            return this.starNum += this.starNewNum,
                this.starNewNum = 0,
                t
        }
        var e = o.dm.starChallenge.time_match_start + 60 * c.StarChallengeConfig.Match_Cycle,
            n = Math.min(i.Utils.getCurTime(), e) - this.last_close_time,
            r = Math.floor(n / (60 * this.seed.interview));
        if (r > 0) {
            for (var a = 0, s = 0; s < r; s++)
                if (!(i.Utils.randomIntInclusive(1, 100) > this.seed.activity)) {
                    var l = this.seed.ability;
                    a += l[i.Utils.randomInt(0, l.length)]
                }
            this.starNum += a;
            var u = this.last_close_time + r * this.seed.interview * 60;
            return this.last_close_time = u,
                !0
        }
        return !1
    },
        Object.defineProperty(t.prototype, "roleSaveData", {
            get: function () {
                var t;
                return {
                    id: this.id,
                    seedId: null === (t = this.seed) || void 0 === t ? void 0 : t.id,
                    userId: this.user.id,
                    starNum: this.starNum,
                    starNumNew: this.starNewNum,
                    closeTime: this.last_close_time
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "star", {
            get: function () {
                return this.starNum + this.starNewNum
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.StarRoleData = l;