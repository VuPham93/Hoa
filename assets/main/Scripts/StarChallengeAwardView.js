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
    }),
    r = this && this.__decorate || function (t, e, n, o) {
        var i,
            r = arguments.length,
            a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, o);
        else
            for (var c = t.length - 1; c >= 0; c--)
                (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
        return r > 3 && a && Object.defineProperty(e, n, a),
            a
    };
Object.defineProperty(n, "__esModule", {
    value: !0
});
var a = t("RewardPanel"),
    c = t("RewardUtils"),
    s = t("DataManager"),
    l = t("G"),
    u = t("PlatformManager"),
    p = t("Utils"),
    f = t("GameUtils"),
    h = t("StarChallengeConfig"),
    d = t("StarChallengeEvents"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_rank = null,
                e.ani_box = null,
                e.node_eff1 = null,
                e.node_eff2 = null,
                e.ico_coin = null,
                e.ico_item = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.lb_rank.string = s.dm.starChallenge.myRank + 1 + ""
            },
            e.prototype.onBtnAwardClicked = function () {
                var t = this;
                p.Utils.btnLock() || (f.GameUtils.playSoundBtnClicked(), this.ani_box.once(cc.Animation.EventType.FINISHED, function () {
                    t.node_eff1.active = !1,
                        t.node_eff2.active = !1,
                        s.dm.starChallenge.onAward();
                    var e = [];
                    e.push({
                        type: c.RewardType.Coin,
                        count: h.StarChallengeConfig.Reward_Coin,
                        ico: t.ico_coin
                    }, {
                        type: c.RewardType.Shovel_Infinite,
                        count: h.StarChallengeConfig.Reward_Item_Cycle,
                        ico: t.ico_item,
                        suffix: "phút"
                    });
                    var n = {
                        needClick: !0,
                        double: !1,
                        next: function () {
                            l.GlobalEvent.dispatchEvent(new d.EventOnChallengeDescClose),
                                l.GlobalEvent.dispatchEvent(new d.EventOnChallengeAward)
                        },
                        reward: e
                    };
                    a.default.show(n);
                    for (var o = "", i = s.dm.starChallenge.roleList.length, r = 0; r < i; r++) {
                        var p = s.dm.starChallenge.roleList[r];
                        r > 0 && (o += ","),
                            0 == p.id ? o += "-" + p.star : o += "" + p.star
                    }
                    var f = {
                        stage: s.dm.player.level,
                        starlist: o
                    };
                    u.pm.trackEventPost(u.TRACK_EVENT_NAME.STAR_CHALLENGE_AWARD, f)
                }, this), this.ani_box.play())
            },
            r([_(cc.Label)], e.prototype, "lb_rank", void 0),
            r([_(cc.Animation)], e.prototype, "ani_box", void 0),
            r([_(cc.Node)], e.prototype, "node_eff1", void 0),
            r([_(cc.Node)], e.prototype, "node_eff2", void 0),
            r([_(cc.Node)], e.prototype, "ico_coin", void 0),
            r([_(cc.Node)], e.prototype, "ico_item", void 0),
            r([y], e)
    }
        (cc.Component);
n.default = m;