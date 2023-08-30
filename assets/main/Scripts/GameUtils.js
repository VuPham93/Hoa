var t = require;
var e = module;
var n = exports;
var o = this && this.__awaiter || function (t, e, n, o) {
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
    i = this && this.__generator || function (t, e) {
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
    n.GameUtils = void 0;
var r = t("AudioManager"),
    a = t("Toast"),
    c = t("GameManager"),
    s = t("PlatformManager"),
    l = t("SceneManager"),
    u = t("Utils"),
    p = t("LevelData"),
    f = t("ChapterConfig"),
    h = t("UIManager"),
    d = t("BattleConfig"),
    g = t("GameConfig"),
    y = function () {
        function t() { }
        return Object.defineProperty(t, "popLayer", {
            get: function () {
                return h.ui.getLayer(h.UILayer.Panel)
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t, "effectLayer", {
                get: function () {
                    return h.ui.getLayer(h.UILayer.Effect)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "loadingLayer", {
                get: function () {
                    return h.ui.getLayer(h.UILayer.LoadingBar)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "bannerLayer", {
                get: function () {
                    return h.ui.getLayer(h.UILayer.Banner)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "tipLayer", {
                get: function () {
                    return h.ui.getLayer(h.UILayer.Tip)
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "xLayer", {
                get: function () {
                    return h.ui.getLayer(h.UILayer.X)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.popView = function (t, e) {
                void 0 === e && (e = !1),
                    h.ui.popView(t, e)
            },
            t.addEffectAR = function (t) {
                h.ui.addEffectAR(t)
            },
            t.playSoundBtnClicked = function () {
                this.playOGG("button_press", ".mp3", .5)
            },
            t.playSFX = function (t, e, n) {
                void 0 === e && (e = ".mp3"),
                    void 0 === n && (n = 1),
                    r.sd.playSFX("sounds/" + t, n, e)
            },
            t.playOGG = function (t, e, n) {
                void 0 === e && (e = ".mp3"),
                    void 0 === n && (n = 1),
                    r.sd.playSFX("sounds/" + t, n, e)
            },
            t.vibrateLight = function () { },
            t.vibrateMedium = function () { },
            t.showToast = function (t, e) {
                a.default.show(h.ui.getLayer(h.UILayer.Tip), t, e)
            },
            t.showToast_noCoin = function () {
                this.showToast("Không đủ vàng", a.TipIco.Coin)
            },
            t.showToast_noEnergy = function () {
                this.showToast("Không đủ năng lượng", a.TipIco.Energy)
            },
            Object.defineProperty(t, "isBattle", {
                get: function () {
                    return l.sm.curScene.getType() == l.SceneType.Stage
                },
                enumerable: !1,
                configurable: !0
            }),
            t.addEffBoom = function (e) {
                var n = cc.instantiate(c.default.instance.resList.prefab_eff_boom);
                n.position = e,
                    t.addEffectAR(n),
                    setTimeout(function () {
                        u.Utils.removeNode(n)
                    }, 3e3)
            },
            t.loadConfigFromAli = function (t) {
                return o(this, void 0, void 0, function () {
                    var e;
                    return i(this, function () {
                        // return e = "" + g.GameConfig.OSS_URL_BASE + t + ".json?" + Math.random(),
                        return e = t,
                            [2, u.Utils.loadConfigFromAli(e)]
                    })
                })
            },
            t.createNodeByFrame = function (t, e, n, o) {
                void 0 === o && (o = !1);
                var i = new cc.Node,
                    r = new cc.Node;
                i.scale = e,
                    r.parent = i;
                var a = r.addComponent(cc.Sprite);
                return a.spriteFrame = t,
                    a.sizeMode = cc.Sprite.SizeMode.RAW,
                    o && (a.dstBlendFactor = cc.macro.BlendFactor.ONE),
                    n && u.Utils.updateNodeSpriteFrame(n, r, !1),
                    i
            },
            t.getJsonConfig = function (t) {
                return c.default.instance.resList.json_config[t].json
            },
            t.CreatePetalBoom = function (t, e, n, o) {
                for (var i = function () {
                    var n = new cc.Node,
                        i = n.addComponent(cc.Sprite),
                        r = 2 * (e - 1) + (o ? 0 : 1);
                    i.spriteFrame = c.default.instance.resList.frames_color_petals[r];
                    var a = u.Utils.randomInt(120, 180),
                        s = u.Utils.randomInt(0, 360),
                        l = u.Utils.angleToRadian(s),
                        p = cc.v2(t.x + a * Math.cos(l), t.y + a * Math.sin(l)),
                        f = p.sub(t).normalize();
                    n.angle = u.Utils.randomInt(0, 360),
                        n.position = t,
                        n.scale = .4,
                        n.parent = h.ui.getLayer(h.UILayer.Effect);
                    var d = 150 * f.x,
                        g = o ? u.Utils.randomFloat(.6, 1) : u.Utils.randomFloat(.8, 2),
                        y = u.Utils.randomIntInclusive(200, 255);
                    cc.tween(n).delay(.15).to(.3, {
                        position: p,
                        scale: g,
                        opacity: y
                    }, {
                        easing: cc.easing.quartOut
                    }).by(2, {
                        x: d,
                        y: -400,
                        opacity: -255,
                        scale: - .5
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        u.Utils.removeNode(n)
                    }).start()
                }, r = 0; r < n; r++)
                    i()
            },
            t.createEffectClear = function (e, n, r) {
                return void 0 === r && (r = 1),
                    o(this, void 0, void 0, function () {
                        var o,
                            a;
                        return i(this, function (i) {
                            switch (i.label) {
                                case 0:
                                    return [4, u.Utils.loadPefab("prefab/game/battle/particle/eff_brother_clear")];
                                case 1:
                                    return o = i.sent(),
                                        (a = cc.instantiate(o)).scale = r,
                                        a.getComponentInChildren(cc.ParticleSystem).spriteFrame = c.default.instance.resList.frames_color_points[n],
                                        a.position = e,
                                        t.addEffectAR(a),
                                        setTimeout(function () {
                                            u.Utils.removeNode(a)
                                        }, 500),
                                        [2]
                            }
                        })
                    })
            },
            t.CreateWallValue = function (t) {
                for (var e = 0, n = 0; n < p.Neighbor_Dir.Length; n++)
                    t.includes(n) || (e |= 1 << n);
                return e
            },
            t.OpenWallValue = function (t, e) {
                for (var n = 0; n < e.length; n++)
                    t &= ~(1 << n);
                return t
            },
            t.checkNeighborsOpen = function (t, e, n) {
                var o = t.getDirTo(e);
                return !!t.checkDirOpen(o, n) && !!e.checkDirOpen(d.BattleConfig.Dir_Reverse[o], n)
            },
            t.getChapterId = function (t) {
                return Math.floor((t - 1) / f.ChapterConfig.Stage_Per_Chapter) + 1
            },
            t.getStageIdLocal = function (t) {
                var e = t % f.ChapterConfig.Stage_Per_Chapter;
                return 0 == e ? f.ChapterConfig.Stage_Per_Chapter : e
            },
            t.getGlobalStageId = function (t, e) {
                return (t - 1) * f.ChapterConfig.Stage_Per_Chapter + e
            },
            t.loadAndShowVideoAd = function (t, e, n) {
                h.ui.showLoading();
                var o = {
                    ad_name: t.name
                };
                Object.assign(o, n),
                    s.pm.trackEventPost(s.TRACK_EVENT_NAME.VIDEO_SHOW, o),
                    s.pm.loadAndShowVideoAd(function (t) {
                        h.ui.hideLoading(),
                            1 == t && (e && e(t), s.pm.trackEventPost(s.TRACK_EVENT_NAME.VIDEO_SUCCESS, o))
                    }, t.adid)
            },
            t
    }
        ();
n.GameUtils = y;