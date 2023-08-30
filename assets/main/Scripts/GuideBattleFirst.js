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
}),
    n.GuideBattleFirst_Status = void 0;
var s,
    l = t("GuideControllerBase"),
    u = t("GuideUtils"),
    p = t("MasterLi"),
    f = t("SceneManager"),
    h = t("MapView"),
    d = t("GuideManager"),
    g = t("G"),
    y = t("BattleEvents"),
    _ = t("Utils"),
    m = t("GameUtils"),
    v = t("BattleConfig"),
    b = t("OnceFinger");
(function (t) {
    t[t.none = -1] = "none",
        t[t.Show_Dialog = 0] = "Show_Dialog",
        t[t.Touch_None = 1] = "Touch_None",
        t[t.Touch_Tile = 2] = "Touch_Tile",
        t[t.Touch_Continue = 3] = "Touch_Continue",
        t[t.Show_Dialog_Power = 4] = "Show_Dialog_Power",
        t[t.Power_Ring_Back = 5] = "Power_Ring_Back",
        t[t.Waiting_Touch_Tile2 = 6] = "Waiting_Touch_Tile2",
        t[t.Touch_Tile2 = 7] = "Touch_Tile2",
        t[t.completed = 8] = "completed"
})(s = n.GuideBattleFirst_Status || (n.GuideBattleFirst_Status = {}));
var w = cc._decorator,
    S = w.ccclass,
    C = w.property,
    O = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.btn_tile = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                t.prototype.onLoad.call(this),
                    this.mapview = f.sm.curScene.getComponentInChildren(h.default),
                    this.hand.active = !1,
                    this.nextStatus = s.Show_Dialog
            },
            e.prototype.onEnable = function () {
                g.GlobalEvent.on(y.EventOnTileTouchEnd.NAME, this.onEventOnTileTouchEnd, this)
            },
            e.prototype.onDisable = function () {
                g.GlobalEvent.off(y.EventOnTileTouchEnd.NAME, this.onEventOnTileTouchEnd, this)
            },
            e.prototype.onEventOnTileTouchEnd = function () { },
            e.prototype.update = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        l = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                if (this.nextStatus == s.none)
                                    return [3, 11];
                                switch (this.curStatus = this.nextStatus, this.nextStatus = s.none, this.curStatus) {
                                    case s.Show_Dialog:
                                        return [3, 1];
                                    case s.Touch_None:
                                        return [3, 3];
                                    case s.Touch_Continue:
                                        return [3, 4];
                                    case s.Touch_Tile:
                                        return [3, 5];
                                    case s.Show_Dialog_Power:
                                        return [3, 6];
                                    case s.Power_Ring_Back:
                                        return [3, 7];
                                    case s.Waiting_Touch_Tile2:
                                        return [3, 8];
                                    case s.Touch_Tile2:
                                        return [3, 9];
                                    case s.completed:
                                        return [3, 10]
                                }
                                return [3, 11];
                            case 1:
                                return t = {
                                    context: this.gtData.getOption().dialog,
                                    title: this.gtData.getOption().title,
                                    showBtn: !1,
                                    next: function () { }
                                },
                                    e = this,
                                    [4, p.default.show(t)];
                            case 2:
                                return e.masterLi = c.sent(),
                                    this.masterLi.node.parent = this.slot_dialog,
                                    this.masterLi.aniShow(function () {
                                        l.gtData.getOption().grid_key ? l.nextStatus = s.Touch_Tile : l.nextStatus = s.Touch_None
                                    }),
                                    (n = this.gtData.getOption().ui_node) && (o = f.sm.curScene.getComponentInChildren(n), u.GuideUtils.changeParent(this.actorNode, o.getNode(), this.curUpcontainer), o.onGuide()),
                                    [3, 11];
                            case 3:
                                return this.hand.active = !1,
                                    [3, 11];
                            case 4:
                                return this.masterLi.aniShowBtn(function () {
                                    l.hand.active = !0;
                                    var t = l.node.convertToNodeSpaceAR(l.masterLi.btn_continue.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    u.GuideUtils.TaptapHand(l.hand, t)
                                }),
                                    [3, 11];
                            case 5:
                                return r = this.gtData.getOption().grid_key,
                                    a = this.mapview.tiles[r],
                                    i = this.node.convertToNodeSpaceAR(a.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    this.btn_tile.position = i,
                                    this.tileData = a.tileData,
                                    this.oldBudId = this.tileData.components.budbase.id,
                                    this.oldStrength = this.tileData.components.budbase.strength,
                                    this.mapview.onEventOnTileTouchStart(this.tileData, !1),
                                    u.GuideUtils.TaptapHand(this.hand, i),
                                    [3, 11];
                            case 6:
                                return this.masterLi.refresh("Khi đạt cấp 10 hoa sẽ nở.\nHoa nở sẽ tăng 3 cấp cho các nụ xung quanh.", void 0, !0, function () { }),
                                    this.masterLi.aniShow(function () {
                                        l.masterLi.aniShowBtn(function () {
                                            l.hand.active = !0;
                                            var t = l.node.convertToNodeSpaceAR(l.masterLi.btn_continue.convertToWorldSpaceAR(cc.v2(0, 0)));
                                            u.GuideUtils.TaptapHand(l.hand, t)
                                        })
                                    }),
                                    [3, 11];
                            case 7:
                                return this.hand.active = !1,
                                    cc.tween(this.clone_ring).to(1, {
                                        scale: 1,
                                        position: this.backupPos
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).call(function () {
                                        var t = l.mapview.battleLogic.battleUI.statusBar.flowerStatusBar.gp_ring;
                                        t.opacity = 255,
                                            t.children[0].getComponent(cc.Sprite).fillRange = 12 / v.BattleConfig.Strength_Boom2,
                                            t.children[1].children[0].active = !0,
                                            _.Utils.removeNode(l.clone_ring),
                                            g.GlobalEvent.dispatchEvent(new y.EventOnTileTouchEnd(l.tileData)),
                                            l.nextStatus = s.Waiting_Touch_Tile2
                                    }).start(),
                                    [3, 11];
                            case 8:
                                return [3, 11];
                            case 9:
                                return r = "5_6",
                                    a = this.mapview.tiles[r],
                                    b.default.show(a.node.convertToWorldSpaceAR(cc.v2(0, 0)), !1, !1, void 0),
                                    this.nextStatus = s.completed,
                                    [3, 11];
                            case 10:
                                return d.gm.recordLastHandInfo(this.hand),
                                    u.GuideUtils.actorGoBack(this.actorNode),
                                    this.actorNode = [],
                                    this.gtData.complete(),
                                    this.close(),
                                    [3, 11];
                            case 11:
                                switch (this.curStatus) {
                                    case s.Touch_None:
                                        this.mapview.levelData.pausing || (this.nextStatus = s.Touch_Continue);
                                        break;
                                    case s.Touch_Continue:
                                        cc.isValid(this.masterLi.node) || (this.nextStatus = s.completed);
                                        break;
                                    case s.Show_Dialog_Power:
                                        cc.isValid(this.masterLi.node) || (this.nextStatus = s.Power_Ring_Back);
                                        break;
                                    case s.Touch_Tile:
                                        break;
                                    case s.Waiting_Touch_Tile2:
                                        this.mapview.levelData.pausing || (this.nextStatus = s.Touch_Tile2);
                                        break;
                                    case s.Touch_Tile2:
                                }
                                return [2]
                        }
                    })
                })
            },
            e.prototype.onBackClicked = function () {
                _.Utils.btnLock() || this.curStatus == s.Touch_None && (m.GameUtils.playSoundBtnClicked(), this.nextStatus = s.completed)
            },
            e.prototype.onBtnTileClicked = function () {
                var t = this;
                if (!_.Utils.btnLock()) {
                    this.hand.active = !1,
                        this.btn_tile.active = !1;
                    var e = this.mapview.battleLogic.battleUI.statusBar.flowerStatusBar.gp_ring,
                        n = 12 / v.BattleConfig.Strength_Boom2;
                    this.clone_ring = cc.instantiate(e),
                        this.clone_ring.children[0].getComponent(cc.Sprite).fillRange = 0,
                        this.clone_ring.children[1].children[0].active = !1,
                        e.opacity = 128,
                        this.clone_ring.position = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                        m.GameUtils.addEffectAR(this.clone_ring),
                        this.backupPos = this.clone_ring.position;
                    var o = cc.v2(0, 300);
                    cc.tween(this.clone_ring).to(.5, {
                        position: o,
                        scale: 2.5
                    }, {
                        easing: cc.easing.sineInOut
                    }).delay(.1).call(function () {
                        var e = t.clone_ring.children[0].getComponent(cc.Sprite);
                        cc.tween(e).to(.5, {
                            fillRange: n
                        }, {
                            easing: cc.easing.sineOut
                        }).call(function () {
                            var e = t.clone_ring.children[1].children[0];
                            e.scale = 0,
                                e.active = !0,
                                cc.tween(e).to(.3, {
                                    scale: .5
                                }, {
                                    easing: cc.easing.backOut
                                }).call(function () {
                                    t.nextStatus = s.Show_Dialog_Power
                                }).start()
                        }).start()
                    }).start()
                }
            },
            r([C(cc.Node)], e.prototype, "btn_tile", void 0),
            r([S], e)
    }
        (l.default);
n.default = O;