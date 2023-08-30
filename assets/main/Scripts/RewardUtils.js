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
    n.RewardUtils = n.RewardType = void 0;
var r,
    a = t("TopResView"),
    c = t("BattleConfig"),
    s = t("GameUtils"),
    l = t("Utils"),
    u = t("DataManager"),
    p = t("Jumpjump3d"),
    f = t("G"),
    h = t("GameManager"),
    d = t("GlobalEvents");
(function (t) {
    t[t.Coin = 0] = "Coin",
        t[t.Energy = 1] = "Energy",
        t[t.Shovel = 2] = "Shovel",
        t[t.Kettle = 3] = "Kettle",
        t[t.Brush = 4] = "Brush",
        t[t.Step = 5] = "Step",
        t[t.Infinite = 6] = "Infinite",
        t[t.Shovel_Prefab = 7] = "Shovel_Prefab",
        t[t.Kettle_Prefab = 8] = "Kettle_Prefab",
        t[t.Brush_Prefab = 9] = "Brush_Prefab",
        t[t.Shovel_Infinite = 10] = "Shovel_Infinite"
})(r = n.RewardType || (n.RewardType = {}));
var g = function () {
    function t() { }
    return t.rewardsDataClose = function (t) {
        switch (t.type) {
            case r.Coin:
                u.dm.player.coin += t.count;
                break;
            case r.Infinite:
                var e = l.Utils.getCurTime(),
                    n = Math.max(e, u.dm.player.energy_infinite_end) + 60 * t.count;
                u.dm.player.energy_infinite_end = n;
                break;
            case r.Shovel:
                u.dm.player.shovel += t.count;
                break;
            case r.Kettle:
                u.dm.player.kettle += t.count;
                break;
            case r.Brush:
                u.dm.player.brush += t.count;
                break;
            case r.Shovel_Prefab:
                u.dm.player.shovel_prefab += t.count;
                break;
            case r.Kettle_Prefab:
                u.dm.player.kettle_prefab += t.count;
                break;
            case r.Brush_Prefab:
                u.dm.player.brush_prefab += t.count;
                break;
            case r.Shovel_Infinite:
                e = l.Utils.getCurTime(),
                    n = Math.max(e, u.dm.player.shovel_infinite_end) + 60 * t.count,
                    u.dm.player.shovel_infinite_end = n
        }
    },
        t.onCollection = function (t, e) {
            return o(this, void 0, void 0, function () {
                var n;
                return i(this, function (o) {
                    switch (o.label) {
                        case 0:
                            if (!cc.isValid(e))
                                return [2];
                            switch (t.type) {
                                case r.Coin:
                                    return [3, 1]
                            }
                            return [3, 3];
                        case 1:
                            return n = a.topres.getSubView(c.TopresSubType.Coin),
                                this.resBoom(t.type, e, n.node_icon, 10),
                                e.active = !1,
                                [4, l.Utils.waiting(200)];
                        case 2:
                            return o.sent(),
                                [3, 5];
                        case 3:
                            return f.GlobalEvent.dispatchEvent(new d.EventOnGameBtnGetItem(t.type, e)),
                                cc.tween(e).to(.2, {
                                    scale: 0
                                }, {
                                    easing: cc.easing.sineIn
                                }).start(),
                                [4, l.Utils.waiting(200)];
                        case 4:
                            return o.sent(),
                                [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        },
        t.resBoom = function (t, e, n, o) {
            s.GameUtils.playSFX("coin");
            var i = n.convertToWorldSpaceAR(cc.v2(0, 0)),
                r = e.convertToWorldSpaceAR(cc.v2(0, 0));
            s.GameUtils.addEffBoom(r);
            for (var a = [h.default.instance.resList.frames_reward_static[t]], c = 0; c < o; c++) {
                var u = a[l.Utils.randomInt(0, a.length)];
                p.default.createBySpr(void 0, u, r, 0, 1, i, t)
            }
        },
        t.createIcoNode = function (t, e) {
            var n = h.default.instance.resList.frames_reward_static[t];
            return s.GameUtils.createNodeByFrame(n, e)
        },
        t
}
    ();
n.RewardUtils = g;