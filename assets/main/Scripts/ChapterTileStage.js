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
var a = t("SwitchNode"),
    c = t("DataManager"),
    s = t("G"),
    l = t("Utils"),
    u = t("BundleResourceList"),
    p = t("GameUtils"),
    f = t("ChapterConfig"),
    h = t("ChapterEvents"),
    d = t("ChapterTileBase"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.switch_status = null,
                e.switch_target = null,
                e.progress = null,
                e.lb_stage_num = null,
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this.tileData
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "curStage", {
                get: function () {
                    return (this.chapterCell.chapterCellData.cId - 1) * f.ChapterConfig.Stage_Per_Chapter + this.data.stage
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "isLocking", {
                get: function () {
                    return c.dm.player.level + 1 < this.curStage
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "config", {
                get: function () {
                    return this._config || (this._config = p.GameUtils.getJsonConfig(u.Idx_Json.level_config)[this.curStage - 1]),
                        this._config
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e),
                    this.ground = e.ground,
                    this.isLocking ? (this.switch_status.showIndex = 0, this.ground.setStatus(f.Stage_Ground_Status.grey)) : (this.switch_status.showIndex = 1, 1 == this.config[1] ? this.ground.setStatus(f.Stage_Ground_Status.red) : this.ground.setStatus(f.Stage_Ground_Status.brown)),
                    this.lb_stage_num.string = this.curStage + "",
                    this.switch_target.showIndex = this.config[0],
                    this.refreshStars()
            },
            e.prototype.refreshAboutPos = function () {
                t.prototype.refreshAboutPos.call(this),
                    this.gp_content.active = this.inCamera,
                    this.ground.node.active = this.inCamera
            },
            e.prototype.refreshStars = function () {
                var t = ~~c.dm.stage.getStageStar(this.curStage) / 3;
                this.progress.progress = t
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    this.gp_content.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.gp_content.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    this.gp_content.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !0),
                    this.gp_content.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this, !0)
            },
            e.prototype.onBtnClicked = function () {
                l.Utils.btnLock() || this.isLocking || (p.GameUtils.playSoundBtnClicked(), s.GlobalEvent.dispatchEvent(new h.EventOnChapterStageClicked(this.chapterCell.chapterCellData.cId, this.data.stage)))
            },
            e.prototype.onTouchStart = function (t) {
                var e = t.getTouches();
                1 == e.length && (this.touchDown = e[0], this.gp_content.stopAllActions(), cc.tween(this.gp_content).to(.1, {
                    scale: .9
                }, {
                    easing: cc.easing.backInOut
                }).start())
            },
            e.prototype.onTouchMove = function (t) {
                var e = t.getTouches();
                if (1 == e.length) {
                    var n = e[0];
                    this.touchDown && n.getLocation().sub(n.getStartLocation()).len() >= 8 && (this.touchDown = void 0),
                        this.touchDown || cc.tween(this.gp_content).to(.1, {
                            scale: 1
                        }, {
                            easing: cc.easing.backInOut
                        }).start()
                }
            },
            e.prototype.onTouchEnd = function (t) {
                1 == t.getTouches().length && this.touchDown && (this.onBtnClicked(), this.touchDown = void 0, cc.tween(this.gp_content).to(.1, {
                    scale: 1
                }, {
                    easing: cc.easing.backInOut
                }).start())
            },
            e.prototype.onTouchCancel = function (t) {
                this.onTouchEnd(t)
            },
            e.prototype.aniIn = function () {
                var t = this;
                this.ground.node.opacity = 0,
                    this.ground.node.scale = 1.5,
                    this.ground.node.y = this.node.y + 100,
                    this.ground.node.active = !0,
                    cc.tween(this.ground.node).to(.3, {
                        scale: 1,
                        opacity: 255,
                        y: this.node.y
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        t.gp_content.active = !0,
                            t.gp_content.scale = 0,
                            cc.tween(t.gp_content).to(.2, {
                                scale: 1
                            }, {
                                easing: cc.easing.backOut
                            }).call(function () {
                                t.aning = !1
                            }).start()
                    }).start()
            },
            e.prototype.aniOut = function () {
                var t = this;
                cc.tween(this.gp_content).to(.2, {
                    scale: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    t.aning = !1
                }).start(),
                    cc.tween(this.ground.node).to(.2, {
                        scale: 0
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.aning = !1
                    }).start()
            },
            r([_(cc.Node)], e.prototype, "gp_content", void 0),
            r([_(a.default)], e.prototype, "switch_status", void 0),
            r([_(a.default)], e.prototype, "switch_target", void 0),
            r([_(cc.ProgressBar)], e.prototype, "progress", void 0),
            r([_(cc.Label)], e.prototype, "lb_stage_num", void 0),
            r([y], e)
    }
        (d.default);
n.default = m;