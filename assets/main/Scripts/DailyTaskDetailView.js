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
    c = t("Utils"),
    s = t("GameUtils"),
    l = t("DailyTaskConfig"),
    u = cc._decorator,
    p = u.ccclass,
    f = u.property,
    h = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.lb_desc = null,
                e.lb_num = null,
                e.isOpening = !1,
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e, n) {
                this.cb_onRefresh = t,
                    this.cb_onShow = e,
                    this.cb_onHide = n,
                    this.node.height = l.DailyTaskConfig.Detail_View.Height_Min
            },
            e.prototype.onLoad = function () {
                this.gp_content.active = !1,
                    this.gp_content.scale = 0
            },
            e.prototype.refreshView = function () {
                this.lb_desc.string = a.dm.dailyTask.curTaskDesc,
                    this.lb_num.string = a.dm.dailyTask.curNum + "/" + a.dm.dailyTask.curSeed.count
            },
            e.prototype.show = function () {
                this.isOpening = !0,
                    this.refreshView(),
                    cc.tween(this.node).to(.3, {
                        height: l.DailyTaskConfig.Detail_View.Height_Max
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    this.gp_content.active = !0,
                    cc.tween(this.gp_content).to(.3, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    this.cb_onShow && this.cb_onShow()
            },
            e.prototype.hide = function () {
                var t = this;
                cc.tween(this.gp_content).to(.3, {
                    scale: 0
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    t.gp_content.active = !1,
                        t.isOpening = !1
                }).start(),
                    cc.tween(this.node).to(.3, {
                        height: l.DailyTaskConfig.Detail_View.Height_Min
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.cb_onHide && t.cb_onHide()
                    }).start()
            },
            e.prototype.onBtnHideClicked = function () {
                c.Utils.btnLock() || (s.GameUtils.playSoundBtnClicked(), this.hide())
            },
            e.prototype.onBtnRefresh = function () {
                var t = this;
                c.Utils.btnLock() || (s.GameUtils.playSoundBtnClicked(), s.GameUtils.loadAndShowVideoAd(a.dm.adids.AdInfo.DailyTaskRefresh, function () {
                    a.dm.dailyTask.refreshTask(),
                        t.refreshView(),
                        t.cb_onRefresh && t.cb_onRefresh(),
                        cc.tween(t.node).by(.2, {
                            height: -50
                        }, {
                            easing: cc.easing.sineOut
                        }).to(.2, {
                            height: l.DailyTaskConfig.Detail_View.Height_Max
                        }, {
                            easing: cc.easing.sineIn
                        }).start(),
                        cc.tween(t.gp_content).to(.2, {
                            scale: .8
                        }, {
                            easing: cc.easing.sineOut
                        }).to(.2, {
                            scale: 1
                        }, {
                            easing: cc.easing.sineIn
                        }).start()
                }, {
                    stage: a.dm.player.level,
                    task_type: a.dm.dailyTask.curTaskName
                }))
            },
            r([f(cc.Node)], e.prototype, "gp_content", void 0),
            r([f(cc.Label)], e.prototype, "lb_desc", void 0),
            r([f(cc.Label)], e.prototype, "lb_num", void 0),
            r([p], e)
    }
        (cc.Component);
n.default = h;