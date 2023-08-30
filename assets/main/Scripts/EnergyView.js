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
var a = t("NumberAction"),
    c = t("RewardUtils"),
    s = t("Toast"),
    l = t("DataManager"),
    u = t("Jumpjump3d"),
    p = t("Shakeshake"),
    f = t("G"),
    h = t("GlobalEvents"),
    d = t("Utils"),
    g = t("GetItemPanel"),
    y = t("BattleConfig"),
    _ = t("PlayerInfo"),
    m = t("GameUtils"),
    v = t("TopResSubViewBase"),
    b = cc._decorator,
    w = b.ccclass,
    S = b.property,
    C = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_energy = null,
                e.lb_cd = null,
                e.lastEnergy = -1,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.refreshView()
            },
            e.prototype.onEnable = function () {
                f.GlobalEvent.on(h.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    f.GlobalEvent.on(u.EventOnBoom.NAME, this.onEventOnBoom, this),
                    this._interval = setInterval(this.onInterval.bind(this), 1e3),
                    this.onInterval()
            },
            e.prototype.onDisable = function () {
                f.GlobalEvent.off(h.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    f.GlobalEvent.off(u.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onInterval = function () {
                var t = l.dm.player.energy;
                if (t >= y.BattleConfig.Energy_Num_Full)
                    l.dm.player.energy_last_close && (l.dm.player.energy_last_close = 0);
                else {
                    var e = d.Utils.getCurTime();
                    l.dm.player.energy_last_close || (l.dm.player.energy_last_close = e);
                    var n = e - l.dm.player.energy_last_close,
                        o = Math.floor(n / y.BattleConfig.Energy_Grow_Cycle);
                    if (o > 0) {
                        l.dm.player.setValue(_.default.Config.energy_last_close.key, e, !1);
                        var i = t + o;
                        i = Math.min(i, y.BattleConfig.Energy_Num_Full),
                            l.dm.player.setValue(_.default.Config.energy.key, i, !1),
                            l.dm.player.save()
                    }
                }
                this.refreshView()
            },
            e.prototype.refreshView = function () {
                var t = d.Utils.getCurTime();
                if (l.dm.player.isInfinte) {
                    var e = l.dm.player.energy_infinite_end - t,
                        n = d.Utils.formatTime(e);
                    this.lb_cd.string = n,
                        this.lb_energy.string = "Đầy"
                } else {
                    var o = l.dm.player.energy;
                    this.lastEnergy != o && (a.default.numberTo(this.lb_energy.node, o), o >= y.BattleConfig.Energy_Num_Full && (this.lb_cd.string = "Đầy"), this.lastEnergy = o),
                        o < y.BattleConfig.Energy_Num_Full && (e = l.dm.player.energy_last_close + y.BattleConfig.Energy_Grow_Cycle - t, n = d.Utils.formatTime(e), this.lb_cd.string = n)
                }
            },
            e.prototype.onEventOnDataChange = function (t) {
                t.obj.model == l.dm.player.saveKey && [_.default.Config.energy.key, _.default.Config.energy_infinite_end.key].includes(t.obj.key) && this.onInterval()
            },
            e.prototype.onEventOnBoom = function (t) {
                if (t.tType == c.RewardType.Energy) {
                    var e = cc.instantiate(this.node_icon_flush);
                    e.position = this.node_icon_flush.convertToWorldSpaceAR(cc.v2(0, 0)),
                        m.GameUtils.addEffectAR(e),
                        e.active = !0,
                        e.opacity = 255,
                        cc.tween(e).to(.6, {
                            opacity: 0
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            d.Utils.removeNode(e)
                        }).start(),
                        p.default.begin(this.node)
                }
            },
            e.prototype.onBtnClicked = function () {
                if (!d.Utils.btnLock())
                    if (m.GameUtils.playSoundBtnClicked(), l.dm.player.energy >= y.BattleConfig.Energy_Num_Full)
                        m.GameUtils.showToast("Năng lượng đã đầy", s.TipIco.Energy);
                    else {
                        var t = y.BattleConfig.Option_Item_Get[c.RewardType.Energy];
                        g.default.show(void 0, t, void 0)
                    }
            },
            r([S(cc.Label)], e.prototype, "lb_energy", void 0),
            r([S(cc.Label)], e.prototype, "lb_cd", void 0),
            r([w], e)
    }
        (v.default);
n.default = C;