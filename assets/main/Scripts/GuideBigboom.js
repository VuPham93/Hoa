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
    n.GuideBigboom_Status = void 0;
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
    v = t("GameManager");
(function (t) {
    t[t.none = -1] = "none",
        t[t.Show_Dialog = 0] = "Show_Dialog",
        t[t.Touch_Continue = 1] = "Touch_Continue",
        t[t.Show_Dialog_Power = 2] = "Show_Dialog_Power",
        t[t.Power_Ring_Back = 3] = "Power_Ring_Back",
        t[t.completed = 4] = "completed"
})(s = n.GuideBigboom_Status || (n.GuideBigboom_Status = {}));
var b = cc._decorator,
    w = b.ccclass,
    S = (b.property, function (t) {
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
            e.prototype.update = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        o,
                        i,
                        r,
                        a = this;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                if (this.nextStatus == s.none)
                                    return [3, 8];
                                switch (this.curStatus = this.nextStatus, this.nextStatus = s.none, this.curStatus) {
                                    case s.Show_Dialog:
                                        return [3, 1];
                                    case s.Touch_Continue:
                                        return [3, 3];
                                    case s.Show_Dialog_Power:
                                        return [3, 4];
                                    case s.Power_Ring_Back:
                                        return [3, 6];
                                    case s.completed:
                                        return [3, 7]
                                }
                                return [3, 8];
                            case 1:
                                return t = this.mapview.levelData.tiles[this.gtData.getOption().grid_key],
                                    this.aniRing(t),
                                    i = {
                                        context: this.gtData.getOption().dialog,
                                        title: this.gtData.getOption().title,
                                        showBtn: !1,
                                        next: function () { }
                                    },
                                    e = this,
                                    [4, p.default.show(i)];
                            case 2:
                                return e.masterLi = c.sent(),
                                    this.masterLi.node.parent = this.slot_dialog,
                                    this.masterLi.aniShow(function () {
                                        a.nextStatus = s.Touch_Continue
                                    }),
                                    (n = this.gtData.getOption().ui_node) && (o = f.sm.curScene.getComponentInChildren(n), u.GuideUtils.changeParent(this.actorNode, o.getNode(), this.curUpcontainer), o.onGuide()),
                                    [3, 8];
                            case 3:
                                return this.masterLi.aniShowBtn(function () {
                                    a.hand.active = !0;
                                    var t = a.node.convertToNodeSpaceAR(a.masterLi.btn_continue.convertToWorldSpaceAR(cc.v2(0, 0)));
                                    u.GuideUtils.TaptapHand(a.hand, t)
                                }),
                                    [3, 8];
                            case 4:
                                return i = {
                                    context: "Hoa nở có thể tăng\ncấp độ của nụ hoa \ntrong bán kính hai ô\nđồng thời phá hủy\nchướng ngại vật xung quanh.",
                                    title: void 0,
                                    showBtn: !0,
                                    next: function () { }
                                },
                                    r = this,
                                    [4, p.default.show(i)];
                            case 5:
                                return r.masterLi = c.sent(),
                                    this.masterLi.node.parent = this.slot_dialog,
                                    this.masterLi.aniShow(function () {
                                        a.masterLi.aniShowBtn(function () {
                                            a.hand.active = !0;
                                            var t = a.node.convertToNodeSpaceAR(a.masterLi.btn_continue.convertToWorldSpaceAR(cc.v2(0, 0)));
                                            u.GuideUtils.TaptapHand(a.hand, t)
                                        })
                                    }),
                                    [3, 8];
                            case 6:
                                return this.hand.active = !1,
                                    cc.tween(this.clone_ring).to(1, {
                                        scale: 1,
                                        position: this.backupPos
                                    }, {
                                        easing: cc.easing.sineOut
                                    }).call(function () {
                                        var t = a.mapview.battleLogic.battleUI.statusBar.flowerStatusBar.gp_ring;
                                        t.opacity = 255;
                                        var e = t.children[0].getComponent(cc.Sprite),
                                            n = t.children[1].children[0],
                                            o = t.children[2].children[0];
                                        e.fillRange = 1,
                                            n.active = !0,
                                            o.active = !0,
                                            _.Utils.removeNode(a.clone_ring),
                                            a.nextStatus = s.completed
                                    }).start(),
                                    [3, 8];
                            case 7:
                                return d.gm.recordLastHandInfo(this.hand),
                                    u.GuideUtils.actorGoBack(this.actorNode),
                                    this.actorNode = [],
                                    this.gtData.complete(),
                                    g.GlobalEvent.dispatchEvent(new y.EventOnTileTouchEnd(this.tileData)),
                                    this.close(),
                                    [3, 8];
                            case 8:
                                switch (this.curStatus) {
                                    case s.Touch_Continue:
                                        cc.isValid(this.masterLi.node) || (d.gm.recordLastHandInfo(this.hand), this.nextStatus = s.Show_Dialog_Power);
                                        break;
                                    case s.Show_Dialog_Power:
                                        cc.isValid(this.masterLi.node) || (this.nextStatus = s.Power_Ring_Back)
                                }
                                return [2]
                        }
                    })
                })
            },
            e.prototype.onBackClicked = function () {
                _.Utils.btnLock()
            },
            e.prototype.aniRing = function (t) {
                this.hand.active = !1;
                var e = this.mapview.battleLogic.battleUI.statusBar.flowerStatusBar.gp_ring;
                this.clone_ring = cc.instantiate(e);
                var n = this.clone_ring.children[0].getComponent(cc.Sprite),
                    o = this.clone_ring.children[1].children[0],
                    i = this.clone_ring.children[2].children[0],
                    r = t.components.bud.color;
                v.default.instance.resList.setFlower(o, r, 10, void 0),
                    v.default.instance.resList.setFlower(i, r, 10, void 0),
                    n.fillRange = 0,
                    o.active = !1,
                    i.active = !1,
                    e.opacity = 128,
                    this.clone_ring.position = e.convertToWorldSpaceAR(cc.v2(0, 0)),
                    m.GameUtils.addEffectAR(this.clone_ring),
                    this.backupPos = this.clone_ring.position;
                var a = cc.v2(0, 300);
                cc.tween(this.clone_ring).to(.5, {
                    position: a,
                    scale: 2.5
                }, {
                    easing: cc.easing.sineInOut
                }).delay(.1).call(function () {
                    cc.tween(n).to(.5, {
                        fillRange: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        o.scale = 0,
                            o.active = !0,
                            cc.tween(o).to(.3, {
                                scale: .5
                            }, {
                                easing: cc.easing.backOut
                            }).start(),
                            i.scale = 0,
                            i.active = !0,
                            cc.tween(i).delay(.1).to(.3, {
                                scale: .5
                            }, {
                                easing: cc.easing.backOut
                            }).start()
                    }).start()
                }).start()
            },
            r([w], e)
    }
        (l.default));
n.default = S;