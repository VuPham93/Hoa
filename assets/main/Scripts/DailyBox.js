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
    s = t("SwitchNode"),
    l = t("DataManager"),
    u = t("G"),
    p = t("GlobalTouch"),
    f = t("AniUtil"),
    h = t("Utils"),
    d = t("GameUtils"),
    g = t("DailyTaskConfig"),
    y = cc._decorator,
    _ = y.ccclass,
    m = y.property,
    v = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.switch_status = null,
                e.frame_eff = null,
                e.node_coin = null,
                e.timer = 0,
                e
        }
        return i(e, t),
            e.prototype.refreshView = function () {
                var t = l.dm.dailyTask.curSeed.count,
                    e = l.dm.dailyTask.newItemNum;
                l.dm.dailyTask.curNum - e < t ? this.switch_status.showIndex = 0 : l.dm.dailyTask.received ? this.switch_status.showIndex = 2 : this.switch_status.showIndex = 1
            },
            e.prototype.onBtnClicked = function (t) {
                var e = this;
                if (!h.Utils.btnLock())
                    switch (d.GameUtils.playSoundBtnClicked(), u.GlobalEvent.dispatchEvent(new p.EventGlobalTouch(void 0)), this.switch_status.showIndex) {
                        case 0:
                            this.switch_status.node.stopAllActions(),
                                this.switch_status.node.x = 0,
                                f.AniUtil.aniShakeHead(this.switch_status.node);
                            break;
                        case 1:
                            this.switch_status.showIndex = 2;
                            for (var n = g.DailyTaskConfig.Reward_Daily_Task[l.dm.dailyTask.index], o = [], i = 0; i < n.length; i++) {
                                var r = {};
                                Object.assign(r, n[i]),
                                    r.type < 0 && (r.type = h.Utils.randomIntInclusive(c.RewardType.Shovel, c.RewardType.Brush)),
                                    r.ico = this.node_coin.children[r.type],
                                    o.push(r)
                            }
                            var s = {
                                needClick: !0,
                                double: g.DailyTaskConfig.Reward_Double.includes(l.dm.dailyTask.index),
                                next: function () {
                                    l.dm.dailyTask.onReward(),
                                        e.switch_status.showIndex = 2,
                                        t && t()
                                },
                                reward: o
                            };
                            a.default.show(s)
                    }
            },
            e.prototype.tryShowReadyEffect = function () {
                var t = this.frame_eff,
                    e = h.Utils.randomFloat(.6, 1.2),
                    n = h.Utils.randomFloat(2, 2.5),
                    o = 27.9 * n + h.Utils.randomInt(20, 40),
                    i = h.Utils.randomInt(200, 255),
                    r = h.Utils.randomInt(-20, 20),
                    a = h.Utils.randomInt(-10, 10),
                    c = d.GameUtils.createNodeByFrame(t, 0, void 0, !0);
                c.opacity = i,
                    c.position = this.node.convertToWorldSpaceAR(cc.v2(r, a)),
                    d.GameUtils.addEffectAR(c),
                    cc.tween(c).to(.3, {
                        scale: e
                    }, {
                        easing: cc.easing.sineIn
                    }).by(n, {
                        x: .5 * r,
                        y: o,
                        opacity: -i
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        h.Utils.removeNode(c)
                    }).start()
            },
            e.prototype.update = function () {
                1 == this.switch_status.showIndex && (this.timer % 36 == 0 && this.tryShowReadyEffect(), this.timer++)
            },
            r([m(s.default)], e.prototype, "switch_status", void 0),
            r([m(cc.SpriteFrame)], e.prototype, "frame_eff", void 0),
            r([m(cc.Node)], e.prototype, "node_coin", void 0),
            r([_], e)
    }
        (cc.Component);
n.default = v;