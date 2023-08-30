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
    n.GuideBattle_Status = void 0;
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
    m = t("GameUtils");
(function (t) {
    t[t.none = -1] = "none",
        t[t.Show_Dialog = 0] = "Show_Dialog",
        t[t.Touch_None = 1] = "Touch_None",
        t[t.Touch_Tile = 2] = "Touch_Tile",
        t[t.Touch_Continue = 3] = "Touch_Continue",
        t[t.step4 = 4] = "step4",
        t[t.completed = 5] = "completed"
})(s = n.GuideBattle_Status || (n.GuideBattle_Status = {}));
var v = cc._decorator,
    b = v.ccclass,
    w = (v.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
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
            e.prototype.onEventOnTileTouchEnd = function (t) {
                var e = this;
                t.tileData == this.tileData && setTimeout(function () {
                    e.nextStatus = s.completed
                }, 600)
            },
            e.prototype.update = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        l,
                        h,
                        g,
                        y,
                        _,
                        m,
                        v,
                        b = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                if (this.nextStatus == s.none)
                                    return [3, 7];
                                switch (this.curStatus = this.nextStatus, this.nextStatus = s.none, this.curStatus) {
                                    case s.Show_Dialog:
                                        return [3, 1];
                                    case s.Touch_None:
                                        return [3, 3];
                                    case s.Touch_Continue:
                                        return [3, 4];
                                    case s.Touch_Tile:
                                        return [3, 5];
                                    case s.completed:
                                        return [3, 6]
                                }
                                return [3, 7];
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
                                        b.gtData.getOption().grid_key ? b.nextStatus = s.Touch_Tile : b.nextStatus = s.Touch_None
                                    }),
                                    (n = this.gtData.getOption().ui_node) && (o = f.sm.curScene.getComponentInChildren(n), u.GuideUtils.changeParent(this.actorNode, o.getNode(), this.curUpcontainer), o.onGuide()),
                                    [3, 7];
                            case 3:
                                return this.hand.active = !1,
                                    [3, 7];
                            case 4:
                                return this.masterLi.aniShowBtn(function () {
                                    b.hand.active = !0;
                                    var t = b.node.convertToNodeSpaceAR(b.masterLi.btn_continue.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    u.GuideUtils.TaptapHand(b.hand, t)
                                }),
                                    [3, 7];
                            case 5:
                                for (i = this.gtData.getOption().grid_key, r = this.mapview.tiles[i], this.tileData = r.tileData, this.oldBudId = this.tileData.components.budbase.id, this.oldStrength = this.tileData.components.budbase.strength, a = this.mapview.onEventOnTileTouchStart(this.tileData), l = 0; l < a.length; l++) {
                                    for (h = a[l].key, g = this.mapview.tiles[h], u.GuideUtils.changeParent(this.actorNode, g.node, this.curUpcontainer), y = g.node.getComponentsInChildren(cc.Sprite), _ = 0; _ < y.length; _++)
                                        y[_].node.opacity = 255;
                                    h != i && ((m = new cc.Node).width = g.node.width, m.height = g.node.height, m.addComponent(cc.BlockInputEvents), m.position = this.node.convertToNodeSpaceAR(g.node.convertToWorldSpaceAR(cc.v2(0, 0))), m.parent = this.node)
                                }
                                return v = this.node.convertToNodeSpaceAR(r.node.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    u.GuideUtils.TaptapHand(this.hand, v),
                                    [3, 7];
                            case 6:
                                return d.gm.recordLastHandInfo(this.hand),
                                    u.GuideUtils.actorGoBack(this.actorNode),
                                    this.actorNode = [],
                                    this.gtData.complete(),
                                    this.close(),
                                    [3, 7];
                            case 7:
                                switch (this.curStatus) {
                                    case s.Touch_None:
                                        this.mapview.levelData.pausing || (this.nextStatus = s.Touch_Continue);
                                        break;
                                    case s.Touch_Continue:
                                        cc.isValid(this.masterLi.node) || (this.nextStatus = s.completed);
                                        break;
                                    case s.Touch_Tile:
                                }
                                return [2]
                        }
                    })
                })
            },
            e.prototype.onBackClicked = function () {
                _.Utils.btnLock() || this.curStatus == s.Touch_None && (m.GameUtils.playSoundBtnClicked(), this.nextStatus = s.completed)
            },
            r([b], e)
    }
        (l.default));
n.default = w;