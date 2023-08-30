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
var s = t("UIManager"),
    l = t("GameUtils"),
    u = t("Utils"),
    p = t("DataManager"),
    f = t("RewardCell"),
    h = t("RewardUtils"),
    d = cc._decorator,
    g = d.ccclass,
    y = d.property,
    _ = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.backgound = null,
                e.gp_content = null,
                e.layout = null,
                e.prefab_cell = null,
                e.frame_eff_color = null,
                e.frame_eff_petal = null,
                e.gp_btns = null,
                e.btn_double = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (o) {
                            return a(e, void 0, void 0, function () {
                                var e,
                                    i,
                                    r,
                                    a;
                                return c(this, function (c) {
                                    switch (c.label) {
                                        case 0:
                                            return [4, u.Utils.loadPefab(this.Prefab_Name)];
                                        case 1:
                                            return e = c.sent(),
                                                i = cc.instantiate(e),
                                                r = i.getComponent(n),
                                                a = t.next,
                                                t.next = function () {
                                                    a && a(),
                                                        o(!0)
                                                },
                                                r.init(t),
                                                l.GameUtils.popView(i),
                                                [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            },
            e.prototype.init = function (t) {
                this.option = t,
                    this.backgound.opacity = 0,
                    this.btn_double.active = t.double;
                for (var e = 0; e < t.reward.length; e++) {
                    var n = t.reward[e],
                        o = cc.instantiate(this.prefab_cell).getComponent(f.default);
                    o.init(n),
                        o.node.parent = this.layout
                }
            },
            e.prototype.onLoad = function () {
                cc.tween(this.backgound).to(.3, {
                    opacity: 200
                }, {
                    easing: cc.easing.sineOut
                }).start();
                for (var t = this.layout, e = 0; e < t.childrenCount; e++)
                    t.children[e].getComponent(f.default).aniShow();
                this.option.needClick || setTimeout(this.onCollection.bind(this), 1e3)
            },
            e.prototype.onDisable = function () {
                this.option.next && this.option.next()
            },
            e.prototype._onBtnClicked = function (t) {
                return a(this, void 0, void 0, function () {
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.rewardsDataClose(t),
                                    cc.tween(this.gp_btns).to(.1, {
                                        scale: 0
                                    }, {
                                        easing: cc.easing.sineIn
                                    }).start(),
                                    [4, this.onCollection()];
                            case 1:
                                return e.sent(),
                                    [4, u.Utils.waiting(1e3)];
                            case 2:
                                return e.sent(),
                                    this.close(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBtnNormlClicked = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return this.option.needClick ? u.Utils.btnLock() ? [2] : (l.GameUtils.playSoundBtnClicked(), this._onBtnClicked(1), [2]) : [2]
                    })
                })
            },
            e.prototype.onBtnDoubleClicked = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e,
                        n = this;
                    return c(this, function () {
                        if (!this.option.needClick)
                            return [2];
                        if (u.Utils.btnLock())
                            return [2];
                        for (l.GameUtils.playSoundBtnClicked(), t = "", e = 0; e < this.option.reward.length; e++)
                            e > 0 && (t += ";"), t += h.RewardType[this.option.reward[e].type] + "_" + this.option.reward[e].count;
                        return l.GameUtils.loadAndShowVideoAd(p.dm.adids.AdInfo.DailyTaskDouble, function () {
                            n._onBtnClicked(2)
                        }, {
                            stage: p.dm.player.level,
                            reward: t
                        }),
                            [2]
                    })
                })
            },
            e.prototype.hide = function () {
                this.node.active = !1
            },
            e.prototype.close = function () {
                u.Utils.removeNode(this.node)
            },
            e.prototype.rewardsDataClose = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n;
                    return c(this, function () {
                        for (e = 0; e < this.option.reward.length; e++)
                            (n = this.layout.children[e].getComponent(f.default)).option.count *= t, n.rewardsDataClose();
                        return [2]
                    })
                })
            },
            e.prototype.onCollection = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                t = 0,
                                    n.label = 1;
                            case 1:
                                return t < this.option.reward.length ? ((e = this.layout.children[t].getComponent(f.default)).refreshNum(), [4, this.createEffct(e.node.convertToWorldSpaceAR(cc.v2(0, 0)))]) : [3, 5];
                            case 2:
                                return n.sent(),
                                    [4, e.onCollection()];
                            case 3:
                                n.sent(),
                                    n.label = 4;
                            case 4:
                                return t++,
                                    [3, 1];
                            case 5:
                                return [2]
                        }
                    })
                })
            },
            e.prototype.createEffct = function (t) {
                var e = this;
                return new Promise(function (n) {
                    var o = l.GameUtils.createNodeByFrame(e.frame_eff_color, 2.6);
                    o.position = t,
                        o.opacity = 0,
                        l.GameUtils.addEffectAR(o),
                        cc.tween(o).to(.3, {
                            opacity: 255
                        }, {
                            easing: cc.easing.sineIn
                        }).to(.2, {
                            scale: 0
                        }, {
                            easing: cc.easing.sineIn
                        }).call(function () {
                            var o = l.GameUtils.effectLayer.convertToNodeSpaceAR(t);
                            e.CreatePetalBoom(o, 15, !1),
                                n()
                        }).start()
                })
            },
            e.prototype.CreatePetalBoom = function (t, e) {
                for (var n = function () {
                    var e = new cc.Node,
                        n = e.addComponent(cc.Sprite);
                    n.spriteFrame = o.frame_eff_petal,
                        n.dstBlendFactor = cc.macro.BlendFactor.ONE;
                    var i = u.Utils.randomInt(50, 180),
                        r = u.Utils.randomInt(0, 360),
                        a = u.Utils.angleToRadian(r),
                        c = cc.v2(t.x + i * Math.cos(a), t.y + i * Math.sin(a)),
                        l = c.sub(t).normalize();
                    e.angle = u.Utils.randomInt(0, 360),
                        e.position = t,
                        e.scale = .4,
                        e.parent = s.ui.getLayer(s.UILayer.Effect);
                    var p = 150 * l.x,
                        f = u.Utils.randomFloat(.6, 2),
                        h = u.Utils.randomIntInclusive(200, 255);
                    cc.tween(e).delay(.15).to(.3, {
                        position: c,
                        scale: f,
                        opacity: h
                    }, {
                        easing: cc.easing.quartOut
                    }).by(1.5, {
                        x: p,
                        y: -400,
                        opacity: -255,
                        scale: - .5
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        u.Utils.removeNode(e)
                    }).start()
                }, o = this, i = 0; i < e; i++)
                    n()
            },
            e.Prefab_Name = "prefab/common/reward/reward_panel",
            r([y(cc.Node)], e.prototype, "backgound", void 0),
            r([y(cc.Node)], e.prototype, "gp_content", void 0),
            r([y(cc.Node)], e.prototype, "layout", void 0),
            r([y(cc.Prefab)], e.prototype, "prefab_cell", void 0),
            r([y(cc.SpriteFrame)], e.prototype, "frame_eff_color", void 0),
            r([y(cc.SpriteFrame)], e.prototype, "frame_eff_petal", void 0),
            r([y(cc.Node)], e.prototype, "gp_btns", void 0),
            r([y(cc.Node)], e.prototype, "btn_double", void 0),
            n = r([g], e)
    }
        (cc.Component);
n.default = _;