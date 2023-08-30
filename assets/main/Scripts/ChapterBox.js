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
    u = t("AniUtil"),
    p = t("Utils"),
    f = t("GameUtils"),
    h = t("ChapterConfig"),
    d = cc._decorator,
    g = d.ccclass,
    y = d.property,
    _ = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.boxId = 1,
                e.switch_status = null,
                e.lb_num_star = null,
                e.ani_open = null,
                e.frame_eff = null,
                e.node_coin = null,
                e.timer = 0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.chapterId = t;
                var e = h.ChapterConfig.Boxes_Config[this.boxId - 1].star;
                this.lb_num_star.string = e + "";
                var n = 0;
                l.dm.stage.newStarNum && f.GameUtils.getChapterId(l.dm.stage.newStarNum.stageId) == t && (n = l.dm.stage.newStarNum.value),
                    l.dm.stage.getChapterStar(t) - n < e ? this.switch_status.showIndex = 0 : l.dm.stage.getReceived(this.chapterId, this.boxId) ? this.switch_status.showIndex = 2 : this.switch_status.showIndex = 1
            },
            e.prototype.onEnable = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onDisable = function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onBtnClicked = function () {
                var t = this;
                if (!p.Utils.btnLock())
                    switch (f.GameUtils.playSoundBtnClicked(), this.switch_status.showIndex) {
                        case 0:
                            this.switch_status.node.stopAllActions(),
                                this.switch_status.node.x = 0,
                                this.lb_num_star.node.color = cc.Color.WHITE,
                                u.AniUtil.aniShakeHead(this.switch_status.node),
                                cc.tween(this.lb_num_star.node).to(.1, {
                                    color: cc.Color.RED
                                }).delay(.1).to(.1, {
                                    color: cc.Color.WHITE
                                }).start();
                            break;
                        case 1:
                            this.ani_open.once(cc.Animation.EventType.FINISHED, function () {
                                var e = h.ChapterConfig.Boxes_Config[t.boxId - 1].coin,
                                    n = [];
                                n.push({
                                    type: c.RewardType.Coin,
                                    count: e,
                                    ico: t.node_coin
                                });
                                var o = {
                                    needClick: !0,
                                    double: !1,
                                    next: function () {
                                        l.dm.stage.setReceived(t.chapterId, t.boxId),
                                            t.switch_status.showIndex = 2
                                    },
                                    reward: n
                                };
                                a.default.show(o)
                            }, this),
                                this.ani_open.play()
                    }
            },
            e.prototype.onTouchStart = function (t) {
                var e = t.getTouches();
                1 == e.length && (this.touchDown = e[0], this.node.stopAllActions(), cc.tween(this.node).to(.1, {
                    scale: 1.1
                }, {
                    easing: cc.easing.backInOut
                }).start())
            },
            e.prototype.onTouchMove = function (t) {
                var e = t.getTouches();
                if (1 == e.length) {
                    var n = e[0];
                    this.touchDown && n.getLocation().sub(n.getStartLocation()).len() >= 8 && (this.touchDown = void 0),
                        this.touchDown || cc.tween(this.node).to(.1, {
                            scale: 1
                        }, {
                            easing: cc.easing.backInOut
                        }).start()
                }
            },
            e.prototype.onTouchEnd = function (t) {
                1 == t.getTouches().length && this.touchDown && (this.onBtnClicked(), this.touchDown = void 0, cc.tween(this.node).to(.1, {
                    scale: 1
                }, {
                    easing: cc.easing.backInOut
                }).start())
            },
            e.prototype.onTouchCancel = function (t) {
                this.onTouchEnd(t)
            },
            e.prototype.tryShowReadyEffect = function () {
                var t = this.frame_eff,
                    e = p.Utils.randomFloat(.6, 1.2),
                    n = p.Utils.randomFloat(2, 2.5),
                    o = 27.9 * n + p.Utils.randomInt(20, 40),
                    i = p.Utils.randomInt(200, 255),
                    r = p.Utils.randomInt(-20, 20),
                    a = p.Utils.randomInt(-10, 10),
                    c = f.GameUtils.createNodeByFrame(t, 0, void 0, !0);
                c.opacity = i,
                    c.position = this.node.convertToWorldSpaceAR(cc.v2(r, a)),
                    f.GameUtils.addEffectAR(c),
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
                        p.Utils.removeNode(c)
                    }).start()
            },
            e.prototype.update = function () {
                1 == this.switch_status.showIndex && (this.timer % 36 == 0 && this.tryShowReadyEffect(), this.timer++)
            },
            r([y(cc.Integer)], e.prototype, "boxId", void 0),
            r([y(s.default)], e.prototype, "switch_status", void 0),
            r([y(cc.Label)], e.prototype, "lb_num_star", void 0),
            r([y(cc.Animation)], e.prototype, "ani_open", void 0),
            r([y(cc.SpriteFrame)], e.prototype, "frame_eff", void 0),
            r([y(cc.Node)], e.prototype, "node_coin", void 0),
            r([g], e)
    }
        (cc.Component);
n.default = _;