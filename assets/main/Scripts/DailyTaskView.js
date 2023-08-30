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
var a = t("Toast"),
    c = t("GlobalDefines"),
    s = t("DataManager"),
    l = t("Jumpjump3d"),
    u = t("G"),
    p = t("AniUtil"),
    f = t("Utils"),
    h = t("OnceFinger"),
    d = t("GameUtils"),
    g = t("DailyBox"),
    y = t("DailyTaskDetailView"),
    _ = t("DailyTaskIco"),
    m = cc._decorator,
    v = m.ccclass,
    b = m.property,
    w = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.prefab_ico = null,
                e.slot_ico = null,
                e.lb_name = null,
                e.lb_num = null,
                e.chest = null,
                e.progressBar = null,
                e.box = null,
                e.btn_refresh = null,
                e.gp_btn_refresh = null,
                e.detailView = null,
                e.flag_opening = null,
                e.eff_particle = null,
                e.touch_view = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                s.dm.dailyTask.newItemNum > 0 ? this.progressBar.progress = s.dm.dailyTask.curNum / s.dm.dailyTask.curSeed.count : this.progressBar.progress = 0,
                    this.detailView.init(this.cb_onDetailRefresh.bind(this), this.cb_onDetailShow.bind(this), this.cb_onDetailHide.bind(this)),
                    this.refreshTask(!0)
            },
            e.prototype.cb_onDetailShow = function () {
                var t = cc.v2(c.GlobalDefines.ScreenWidth / 2, c.GlobalDefines.ScreenHeight / 2);
                this.touch_view.position = this.gp_content.convertToNodeSpaceAR(t),
                    this.touch_view.width = c.GlobalDefines.ScreenWidth,
                    this.touch_view.height = c.GlobalDefines.ScreenHeight,
                    this.touch_view.active = !0,
                    cc.tween(this.gp_content).by(.3, {
                        y: -16
                    }, {
                        easing: cc.easing.sineOut
                    }).by(.3, {
                        y: 16
                    }, {
                        easing: cc.easing.backOut
                    }).start()
            },
            e.prototype.cb_onDetailHide = function () {
                this.touch_view.active = !1,
                    this.touch_view.width = 0,
                    this.touch_view.height = 0,
                    this.gp_btn_refresh.active = !0,
                    cc.tween(this.flag_opening).to(.2, {
                        angle: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.gp_content).by(.2, {
                        y: 16
                    }, {
                        easing: cc.easing.sineOut
                    }).by(.2, {
                        y: -16
                    }, {
                        easing: cc.easing.backOut
                    }).start()
            },
            e.prototype.cb_onDetailRefresh = function () {
                this.effOnRefresh(),
                    this.refreshTask(!1),
                    d.GameUtils.showToast(" Đã đổi nhiệm vụ！", a.TipIco.Tip)
            },
            e.prototype.onEnable = function () {
                u.GlobalEvent.on(l.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onDisable = function () {
                u.GlobalEvent.off(l.EventOnBoom.NAME, this.onEventOnBoom, this)
            },
            e.prototype.onEventOnBoom = function (t) {
                -1 == t.tType && p.AniUtil.aniDou(this.slot_ico)
            },
            e.prototype.refreshTask = function (t) {
                var e = this;
                cc.tween(this.slot_ico).to(.2, {
                    scale: 0
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    f.Utils.removeAllChildren(e.slot_ico),
                        e.taskIco = cc.instantiate(e.prefab_ico).getComponent(_.default),
                        e.taskIco.init(s.dm.dailyTask.curSeed),
                        e.taskIco.node.parent = e.slot_ico
                }).to(.2, {
                    scale: 1
                }, {
                    easing: cc.easing.backOut
                }).start(),
                    this.lb_name.string = s.dm.dailyTask.curTaskName,
                    this.lb_num.string = "（" + s.dm.dailyTask.curNum + "/" + s.dm.dailyTask.curSeed.count + "）",
                    this.box.refreshView(),
                    this.btn_refresh.active = s.dm.dailyTask.curSeed && !s.dm.dailyTask.isTaskCompleted,
                    t ? (this.gp_content.y = 300 - this.node.height / 2, this.gp_content.opacity = 0, cc.tween(this.gp_content).to(.3, {
                        y: -this.node.height / 2,
                        opacity: 255
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        e.aniProgressBar()
                    }).start()) : this.aniProgressBar()
            },
            e.prototype.aniProgressBar = function () {
                var t = this,
                    e = s.dm.dailyTask.curNum / s.dm.dailyTask.curSeed.count;
                cc.tween(this.progressBar).to(.3, {
                    progress: e
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    e >= 1 && (d.GameUtils.playSFX("blossom_pop_11"), s.dm.once.dailytask_reward || h.default.show(t.box.node.convertToWorldSpaceAR(cc.v2(0, 0)), !0, !1, function () {
                        s.dm.once.dailytask_reward = !0
                    }))
                }).start()
            },
            e.prototype.onBtnBoxClicked = function () {
                var t = this;
                this.box.onBtnClicked(function () {
                    s.dm.dailyTask.refreshTask(),
                        s.dm.dailyTask.curSeed ? t.refreshTask(!0) : cc.tween(t.gp_content).to(.3, {
                            y: t.node.height,
                            opacity: 0
                        }, {
                            easing: cc.easing.sineIn
                        }).call(function () {
                            t.gp_content.active = !1
                        }).start()
                })
            },
            e.prototype.onBtnRefreshClicked = function () {
                f.Utils.btnLock() || this.detailView.isOpening || s.dm.dailyTask.isTaskCompleted || (d.GameUtils.playSoundBtnClicked(), this.gp_btn_refresh.active = !1, this.detailView.show(), cc.tween(this.flag_opening).to(.2, {
                    angle: 180
                }, {
                    easing: cc.easing.sineOut
                }).start())
            },
            e.prototype.effOnRefresh = function () {
                var t = cc.instantiate(this.eff_particle);
                t.position = this.slot_ico.convertToWorldSpaceAR(cc.v2(0, 0)),
                    d.GameUtils.addEffectAR(t),
                    setTimeout(function () {
                        f.Utils.removeNode(t)
                    }, 2e3)
            },
            e.prototype.onBtnTouchViewClicked = function () {
                f.Utils.btnLock() || this.detailView.hide()
            },
            r([b(cc.Node)], e.prototype, "gp_content", void 0),
            r([b(cc.Prefab)], e.prototype, "prefab_ico", void 0),
            r([b(cc.Node)], e.prototype, "slot_ico", void 0),
            r([b(cc.Label)], e.prototype, "lb_name", void 0),
            r([b(cc.Label)], e.prototype, "lb_num", void 0),
            r([b(cc.Node)], e.prototype, "chest", void 0),
            r([b(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            r([b(g.default)], e.prototype, "box", void 0),
            r([b(cc.Node)], e.prototype, "btn_refresh", void 0),
            r([b(cc.Node)], e.prototype, "gp_btn_refresh", void 0),
            r([b(y.default)], e.prototype, "detailView", void 0),
            r([b(cc.Node)], e.prototype, "flag_opening", void 0),
            r([b(cc.Prefab)], e.prototype, "eff_particle", void 0),
            r([b(cc.Node)], e.prototype, "touch_view", void 0),
            r([v], e)
    }
        (cc.Component);
n.default = w;