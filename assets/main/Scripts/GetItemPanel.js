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
var s = t("BasePanel"),
    l = t("RewardUtils"),
    u = t("SwitchNode"),
    p = t("Toast"),
    f = t("DataManager"),
    h = t("G"),
    d = t("GameManager"),
    g = t("GlobalEvents"),
    y = t("AniUtil"),
    _ = t("Utils"),
    m = t("TopResView"),
    v = t("UIManager"),
    b = t("BattleConfig"),
    w = t("GameUtils"),
    S = cc._decorator,
    C = S.ccclass,
    O = S.property,
    E = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.lb_title = null,
                e.gp_content = null,
                e.gp_layout = null,
                e.btn_close = null,
                e.switch_ico = null,
                e.gp_desc = null,
                e.lb_free_times = null,
                e.lb_price = null,
                e.lb_product_num = null,
                e.lb_desc = null,
                e.lb_once = null,
                e.btn_ad = null,
                e
        }

        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e, o) {
                return a(this, void 0, void 0, function () {
                    var i,
                        r;
                    return c(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return w.GameUtils.popLayer.getComponentInChildren(n) ? [2] : [4, _.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return i = a.sent(),
                                    (r = cc.instantiate(i)).getComponent(n).init(t, e, o),
                                    w.GameUtils.popView(r),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (t, e, n) {
                this.battleLogic = t,
                    this.opt = e,
                    this.next = n,
                    this.lb_title.string = this.opt.tile,
                    this.lb_desc.string = this.opt.desc,
                    this.lb_product_num.string = "+" + this.opt.num,
                    this.lb_price.string = this.opt.price + "",
                    this.switch_ico.showIndex = e.type,
                    this.lb_once.node.active = this.opt.num != this.opt.num_ad;
                var o = this.switch_ico.node.children[e.type].getComponent(cc.Sprite);
                o.spriteFrame || (o.spriteFrame = d.default.instance.resList.frames_reward_static[this.opt.type], o.node.scale = 1.5),
                    this.refreshFreeTimes(),
                    y.AniUtil.aniWillShow(this.gp_content);
                for (var i = 0; i < this.gp_layout.childrenCount; i++)
                    y.AniUtil.aniWillShow(this.gp_layout.children[i]);
                y.AniUtil.aniWillShow(this.btn_close),
                    this.btn_close.active = !1,
                this.opt.free_times_full <= 0 && (this.btn_ad.active = !1)
            },
            e.prototype.refreshFreeTimes = function () {
                this.lb_free_times.string = "（" + f.dm.player[this.opt.key_free_times] + "/" + this.opt.free_times_full + "）"
            },
            e.prototype.onLoad = function () {
                this.aniShow()
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    h.GlobalEvent.on(g.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                    m.topres.aniShowResult()
            },
            e.prototype.onDisable = function () {
                m.topres.aniShowBack(),
                    t.prototype.onDisable.call(this),
                    h.GlobalEvent.off(g.EventOnDataChange.NAME, this.onEventOnDataChange, this),
                this.next && this.next()
            },
            e.prototype.onEventOnDataChange = function (t) {
                t.obj.model == f.dm.player.saveKey && t.obj.key == this.opt.key_free_times && this.refreshFreeTimes()
            },
            e.prototype.aniShow = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return y.AniUtil.aniShow(this.gp_content),
                                    [4, _.Utils.waiting(150)];
                            case 1:
                                n.sent(),
                                    t = 0,
                                    n.label = 2;
                            case 2:
                                return t < this.gp_layout.childrenCount ? (e = this.gp_layout.children[t], this.opt.free_times_full <= 0 && e == this.gp_desc ? [3, 4] : (y.AniUtil.aniShow(e), [4, _.Utils.waiting(150)])) : [3, 5];
                            case 3:
                                n.sent(),
                                    n.label = 4;
                            case 4:
                                return t++,
                                    [3, 2];
                            case 5:
                                return this.btn_close.active = !0,
                                    y.AniUtil.aniShow(this.btn_close),
                                    y.AniUtil.aniShaking(this.btn_close.children[0]),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBtnCloseClicked = function () {
                _.Utils.btnLock() || (w.GameUtils.playSoundBtnClicked(), this.close())
            },
            e.prototype.onBtnCoinClicked = function () {
                _.Utils.btnLock() || (w.GameUtils.playSoundBtnClicked(), f.dm.player.coin < this.opt.price ? w.GameUtils.showToast_noCoin() : (f.dm.player[this.opt.key_item_num] += this.opt.num, f.dm.player.coin -= this.opt.price, this.boomAndClose(this.opt.num)))
            },
            e.prototype.onBtnAdClicked = function () {
                var t = this;
                _.Utils.btnLock() || (w.GameUtils.playSoundBtnClicked(), f.dm.player[this.opt.key_free_times] < 1 ? w.GameUtils.showToast("Lượt nhận miễn phí hôm nay đã hết", p.TipIco.Error) : w.GameUtils.loadAndShowVideoAd(f.dm.adids.AdInfo[this.opt.key_ad], function () {
                    f.dm.player[t.opt.key_item_num] += t.opt.num_ad,
                        f.dm.player[t.opt.key_free_times]--,
                        t.boomAndClose(t.opt.num_ad)
                }, {
                    stage: f.dm.player.level,
                    item_type: l.RewardType[this.opt.type]
                }))
            },
            e.prototype.boomAndClose = function (t) {
                var e = this;
                v.ui.showLoading(),
                    cc.tween(this.switch_ico.node).to(.2, {
                        scale: .5
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        var n;
                        switch (e.opt.type) {
                            case l.RewardType.Energy:
                                n = m.topres.getSubView(b.TopresSubType.Energy);
                                break;
                            case l.RewardType.Shovel:
                                n = e.battleLogic.battleUI.itemsBar.itemShovelView;
                                break;
                            case l.RewardType.Kettle:
                                n = e.battleLogic.battleUI.itemsBar.itemKettleView;
                                break;
                            case l.RewardType.Brush:
                                n = e.battleLogic.battleUI.itemsBar.itemBrushView
                        }
                        l.RewardUtils.resBoom(e.opt.type, e.switch_ico.node, n.node_icon, t)
                    }).to(.2, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).delay(1.2).call(function () {
                        v.ui.hideLoading(),
                            e.close()
                    }).start()
            },
            e.Prefab_Name = "prefab/game/battle/ui/get_item_panel",
            r([O(cc.Label)], e.prototype, "lb_title", void 0),
            r([O(cc.Node)], e.prototype, "gp_content", void 0),
            r([O(cc.Node)], e.prototype, "gp_layout", void 0),
            r([O(cc.Node)], e.prototype, "btn_close", void 0),
            r([O(u.default)], e.prototype, "switch_ico", void 0),
            r([O(cc.Node)], e.prototype, "gp_desc", void 0),
            r([O(cc.Label)], e.prototype, "lb_free_times", void 0),
            r([O(cc.Label)], e.prototype, "lb_price", void 0),
            r([O(cc.Label)], e.prototype, "lb_product_num", void 0),
            r([O(cc.Label)], e.prototype, "lb_desc", void 0),
            r([O(cc.Label)], e.prototype, "lb_once", void 0),
            r([O(cc.Node)], e.prototype, "btn_ad", void 0),
            n = r([C], e)
    }
    (s.default);
n.default = E;