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
    },
    a = this && this.__awaiter || function (t, e, n, o) {
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
    c = this && this.__generator || function (t, e) {
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
var s = t("RewardUtils"),
    l = t("GlobalDefines"),
    u = t("DataManager"),
    p = t("G"),
    f = t("Utils"),
    h = t("GuideEvents"),
    d = t("BattleConfig"),
    g = t("GameUtils"),
    y = t("BattleCompBase"),
    _ = t("MapView"),
    m = t("BrushUsePanel"),
    v = t("GetItemPanel"),
    b = t("ItemBrushView"),
    w = t("ItemKettleView"),
    S = t("ItemShovelView"),
    C = t("KettleUsePanel"),
    O = t("SettingPanel"),
    E = t("ShovelUsePanel"),
    T = cc._decorator,
    k = T.ccclass,
    P = T.property,
    D = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.mapView = null,
                e.gp_content = null,
                e.btn_back = null,
                e.itemShovelView = null,
                e.itemKettleView = null,
                e.itemBrushView = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.node.width = 0,
                    this.gp_content.active = !1,
                    this.btn_back.active = !1
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    p.GlobalEvent.on(h.EventOnGuideShow.NAME, this.onEventOnGuideShow, this),
                    p.GlobalEvent.on(h.EventOnGuideClose.NAME, this.onEventOnGuideClose, this)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    p.GlobalEvent.off(h.EventOnGuideShow.NAME, this.onEventOnGuideShow, this),
                    p.GlobalEvent.off(h.EventOnGuideClose.NAME, this.onEventOnGuideClose, this)
            },
            e.prototype.onEventOnGuideShow = function () {
                this.node.stopAllActions(),
                    this.gp_content.stopAllActions(),
                    this.node.opacity = 0
            },
            e.prototype.onEventOnGuideClose = function () {
                this.aniIn()
            },
            e.prototype.refreshView = function () {
                this.aniIn()
            },
            e.prototype.aniIn = function () {
                var t = this;
                this.node.opacity = 255,
                    this.node.width = 0,
                    this.gp_content.scale = 0,
                    this.gp_content.active = !0,
                    this.btn_back.x = -l.GlobalDefines.ScreenWidth - this.btn_back.width,
                    cc.tween(this.node).to(.3, {
                        width: 624
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        t.btn_back.active = !0,
                            cc.tween(t.btn_back).to(.3, {
                                x: -685
                            }, {
                                easing: cc.easing.sineOut
                            }).start()
                    }).start(),
                    cc.tween(this.gp_content).to(.3, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.aniOut = function () {
                var t = this;
                cc.tween(this.btn_back).to(.3, {
                    x: -l.GlobalDefines.ScreenWidth - this.btn_back.width
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    t.btn_back.active = !1,
                        cc.tween(t.node).to(.3, {
                            width: 0
                        }, {
                            easing: cc.easing.sineIn
                        }).start(),
                        cc.tween(t.gp_content).to(.3, {
                            scale: 0
                        }, {
                            easing: cc.easing.sineIn
                        }).start()
                }).start()
            },
            e.prototype.onItemShovelClicked = function () {
                var t = this;
                if (!f.Utils.btnLock())
                    if (g.GameUtils.playSoundBtnClicked(), u.dm.player.shovel <= 0 && u.dm.player.shovel_prefab <= 0) {
                        var e = d.BattleConfig.Option_Item_Get[s.RewardType.Shovel];
                        v.default.show(this.battleLogic, e, void 0)
                    } else
                        this.aniOut(), E.default.show(this.mapView, function () {
                            return a(t, void 0, void 0, function () {
                                return c(this, function (t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.aniIn(),
                                                this.levelData.isCompleted = this.levelData.checkResult(),
                                                this.levelData.isCompleted ? [4, this.mapView.onTargetCompleted()] : [3, 2];
                                        case 1:
                                            return t.sent(),
                                                [3, 3];
                                        case 2:
                                            this.mapView.checkDeadlock(),
                                                t.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            })
                        })
            },
            e.prototype.onItemKettleClicked = function () {
                if (!f.Utils.btnLock())
                    if (g.GameUtils.playSoundBtnClicked(), u.dm.player.kettle <= 0 && u.dm.player.kettle_prefab <= 0) {
                        var t = d.BattleConfig.Option_Item_Get[s.RewardType.Kettle];
                        v.default.show(this.mapView.battleLogic, t, void 0)
                    } else
                        this.aniOut(), C.default.show(this.mapView, this.aniIn.bind(this))
            },
            e.prototype.onItemBrushClicked = function () {
                if (!f.Utils.btnLock())
                    if (g.GameUtils.playSoundBtnClicked(), u.dm.player.brush <= 0 && u.dm.player.brush_prefab <= 0) {
                        var t = d.BattleConfig.Option_Item_Get[s.RewardType.Brush];
                        v.default.show(this.mapView.battleLogic, t, void 0)
                    } else
                        this.aniOut(), m.default.show(this.mapView, this.aniIn.bind(this))
            },
            e.prototype.onBtnSettingClicked = function () {
                f.Utils.btnLock() || (g.GameUtils.playSoundBtnClicked(), O.default.show(this.mapView.levelData, function () { }))
            },
            r([P(_.default)], e.prototype, "mapView", void 0),
            r([P(cc.Node)], e.prototype, "gp_content", void 0),
            r([P(cc.Node)], e.prototype, "btn_back", void 0),
            r([P(S.default)], e.prototype, "itemShovelView", void 0),
            r([P(w.default)], e.prototype, "itemKettleView", void 0),
            r([P(b.default)], e.prototype, "itemBrushView", void 0),
            r([k], e)
    }
        (y.default);
n.default = D;