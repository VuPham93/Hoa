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
var a = t("DataManager"),
    c = t("G"),
    s = t("AniUtil"),
    l = t("Utils"),
    u = t("BattleEvents"),
    p = t("MapView"),
    f = t("GameUtils"),
    h = t("DailyTaskConfig"),
    d = t("DailyTaskIco"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.slot_ico = null,
                e.prefab_ico = null,
                e.lb_num = null,
                e.lb_num_max = null,
                e.frame_light = null,
                e.eff_particle = null,
                e.mapView = null,
                e.anchor_eff = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                var t;
                if (a.dm.dailyTask.curSeed) {
                    var e = cc.instantiate(this.prefab_ico).getComponent(d.default);
                    e.init(a.dm.dailyTask.curSeed),
                        e.node.parent = this.slot_ico,
                        this.lb_num.string = a.dm.dailyTask.curNum + a.dm.dailyTask.newItemNum + "",
                        this.lb_num_max.string = (null === (t = a.dm.dailyTask.curSeed) || void 0 === t ? void 0 : t.count) + ""
                }
            },
            e.prototype.onEnable = function () {
                c.GlobalEvent.on(u.EventOnComponentDelete.NAME, this.onEventOnComponentDelete, this),
                    c.GlobalEvent.on(u.EventOnNormalBigBoom.NAME, this.onEventOnNormalBigBoom, this)
            },
            e.prototype.onDisable = function () {
                c.GlobalEvent.off(u.EventOnComponentDelete.NAME, this.onEventOnComponentDelete, this),
                    c.GlobalEvent.off(u.EventOnNormalBigBoom.NAME, this.onEventOnNormalBigBoom, this)
            },
            e.prototype.onEventOnNormalBigBoom = function (t) {
                a.dm.dailyTask.curSeed && (a.dm.dailyTask.isTaskCompleted || a.dm.dailyTask.curSeed.type == h.Daily_Task_Type[h.Daily_Task_Type.flower_big_blast] && this.onEventOnComponentDelete(new u.EventOnComponentDelete(t.tilekey, t.comptType, t.comptColor)))
            },
            e.prototype.onEventOnComponentDelete = function (t) {
                var e = this;
                if (a.dm.dailyTask.activity) {
                    var n = a.dm.dailyTask.curSeed;
                    if (n && !a.dm.dailyTask.isTaskCompleted) {
                        var o = h.Daily_Task_Type[n.typeId],
                            i = h.DailyTaskConfig.Check_Config[o];
                        if (t.comptType == i.cpt_type) {
                            var r = !1;
                            i.check_color ? t.comptColor == a.dm.dailyTask.color && (r = !0) : r = !0,
                                r && (a.dm.dailyTask.newItemNum++, this.showEffect(t.tilekey, function () {
                                    e.gp_content.stopAllActions(),
                                        e.gp_content.x = 0;
                                    var t = Math.min(a.dm.dailyTask.curSeed.count, 1 + ~~e.lb_num.string);
                                    e.lb_num.string = t + "",
                                        cc.tween(e.gp_content).delay(.1).to(.2, {
                                            x: -120
                                        }, {
                                            easing: cc.easing.backOut
                                        }).start()
                                }), this.gp_content.stopAllActions(), cc.tween(this.gp_content).to(.3, {
                                    x: 0
                                }, {
                                    easing: cc.easing.backOut
                                }).start())
                        }
                    }
                }
            },
            e.prototype.showEffect = function (t, e) {
                var n = this,
                    o = this.mapView.tiles[t];
                s.AniUtil.createEffectSpriteHome(o.node, this.anchor_eff, [this.frame_light], function () {
                    e && e(),
                        s.AniUtil.aniDou(n.node);
                    var t = cc.instantiate(n.eff_particle);
                    t.position = n.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                        f.GameUtils.addEffectAR(t),
                        setTimeout(function () {
                            l.Utils.removeNode(t)
                        }, 2e3)
                }, 1, 1, !0)
            },
            r([_(cc.Node)], e.prototype, "gp_content", void 0),
            r([_(cc.Node)], e.prototype, "slot_ico", void 0),
            r([_(cc.Prefab)], e.prototype, "prefab_ico", void 0),
            r([_(cc.Label)], e.prototype, "lb_num", void 0),
            r([_(cc.Label)], e.prototype, "lb_num_max", void 0),
            r([_(cc.SpriteFrame)], e.prototype, "frame_light", void 0),
            r([_(cc.Prefab)], e.prototype, "eff_particle", void 0),
            r([_(p.default)], e.prototype, "mapView", void 0),
            r([_(cc.Node)], e.prototype, "anchor_eff", void 0),
            r([y], e)
    }
        (cc.Component);
n.default = m;