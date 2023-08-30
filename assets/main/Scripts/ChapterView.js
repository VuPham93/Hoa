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
var s = t("DataManager"),
    l = t("G"),
    u = t("SceneManager"),
    p = t("logger"),
    f = t("Utils"),
    h = t("StageReadyPanel"),
    d = t("UIManager"),
    g = t("BattleConfig"),
    y = t("GameUtils"),
    _ = t("ChapterCell"),
    m = t("ChapterCloseController"),
    v = t("ChapterConfig"),
    b = t("ChapterEvents"),
    w = t("ChapterStagePointer"),
    S = t("ChapterTileConnector"),
    C = t("ChapterUI"),
    O = cc._decorator,
    E = O.ccclass,
    T = O.property,
    k = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.camera = null,
                e.gp_content = null,
                e.gp_cells = null,
                e.pointer = null,
                e.prefab_chapter_cell = null,
                e.chapterUI = null,
                e.eff_bigboom_wave = null,
                e.jumping = !1,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                return this.wposOfCamera = this.camera.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    e = y.GameUtils.getChapterId(g.BattleConfig.Stage.Max_Level_All),
                                    this.max_content_height = e * v.ChapterConfig.Map_Size.height,
                                    n = t > 0 ? t : s.dm.player.level + 1,
                                    n = Math.min(g.BattleConfig.Stage.Max_Level_All, n),
                                    o = y.GameUtils.getStageIdLocal(n),
                                    i = y.GameUtils.getChapterId(n),
                                    this.createMapAndFocus(i, o),
                                    (r = this.node.getComponents(m.default)).length > 0 ? (r.sort(function (t, e) {
                                        return t.index - e.index
                                    }), p.Logger.debug("[[ChapterView init]] sm.lastSceneType:", u.sm.lastSceneType), u.sm.lastSceneType != u.SceneType.Loading ? [3, 2] : [4, f.Utils.waiting(2e3)]) : [3, 6];
                            case 1:
                                c.sent(),
                                    c.label = 2;
                            case 2:
                                a = 0,
                                    c.label = 3;
                            case 3:
                                return a < r.length ? (p.Logger.debug("[ChapterView init] 章节界面结算：", r[a].name), [4, r[a].logic(this)]) : [3, 6];
                            case 4:
                                c.sent(),
                                    c.label = 5;
                            case 5:
                                return a++,
                                    [3, 3];
                            case 6:
                                return d.ui.showLoading(),
                                    [4, f.Utils.waiting(400)];
                            case 7:
                                return c.sent(),
                                    [4, this.aniPointer(n)];
                            case 8:
                                return c.sent(),
                                    d.ui.hideLoading(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.aniPointer = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            t = Math.min(g.BattleConfig.Stage.Max_Level_All, t);
                            var o = y.GameUtils.getStageIdLocal(t),
                                i = y.GameUtils.getChapterId(t),
                                r = s.dm.player.curLevel || s.dm.player.level;
                            if (t == r)
                                e.pointerShow(i, o, !1), n();
                            else {
                                var l = y.GameUtils.getChapterId(r),
                                    u = y.GameUtils.getStageIdLocal(r);
                                e.pointerShow(l, u, !1, function () {
                                    return a(e, void 0, void 0, function () {
                                        var e,
                                            r,
                                            a,
                                            s,
                                            l,
                                            u,
                                            p,
                                            f,
                                            h = this;
                                        return c(this, function (d) {
                                            switch (d.label) {
                                                case 0:
                                                    for (e = this.gp_cells.getComponentsInChildren(S.default), r = [], p = 0; p < e.length; p++)
                                                        (s = e[p]).data.globalStageId == t && r.push(s);
                                                    for (r.sort(function (t, e) {
                                                        return t.data.chapterId == e.data.chapterId ? t.data.idx - e.data.idx : t.data.chapterId - e.data.chapterId
                                                    }), a = [this.pointer.node.convertToWorldSpaceAR(cc.v2(0, 0))], p = 0; p < r.length; p++)
                                                        s = r[p], a.push(s.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                                                    a.push(this.getTileWpos(i, o)),
                                                        l = a.length,
                                                        u = function (t) {
                                                            var e;
                                                            return c(this, function (n) {
                                                                switch (n.label) {
                                                                    case 0:
                                                                        return e = a[t],
                                                                            [4, new Promise(function (t) {
                                                                                var n = h.gp_content.convertToNodeSpaceAR(e);
                                                                                cc.tween(h.pointer.node).to(.3, {
                                                                                    position: n
                                                                                }).call(function () {
                                                                                    t()
                                                                                }).start()
                                                                            })];
                                                                    case 1:
                                                                        return n.sent(),
                                                                            [2]
                                                                }
                                                            })
                                                        },
                                                        p = 1,
                                                        d.label = 1;
                                                case 1:
                                                    return p < l ? [5, u(p)] : [3, 4];
                                                case 2:
                                                    d.sent(),
                                                        d.label = 3;
                                                case 3:
                                                    return p++,
                                                        [3, 1];
                                                case 4:
                                                    return this.pointer.chapterId = i,
                                                        this.pointer.stageId = o,
                                                        0 != (f = (f = a[l - 1].x - a[l - 2].x) > 0 ? 1 : f < 0 ? -1 : 0) ? cc.tween(this.pointer.node).to(.2, {
                                                            angle: -20 * f
                                                        }, {
                                                            easing: cc.easing.sineOut
                                                        }).to(.2, {
                                                            angle: 10 * f
                                                        }, {
                                                            easing: cc.easing.sineInOut
                                                        }).to(.2, {
                                                            angle: -5 * f
                                                        }, {
                                                            easing: cc.easing.sineInOut
                                                        }).to(.2, {
                                                            angle: 0
                                                        }, {
                                                            easing: cc.easing.sineOut
                                                        }).start() : cc.tween(this.pointer.node).to(.2, {
                                                            angle: -5
                                                        }, {
                                                            easing: cc.easing.sineOut
                                                        }).to(.2, {
                                                            angle: 3
                                                        }, {
                                                            easing: cc.easing.sineInOut
                                                        }).to(.2, {
                                                            angle: 0
                                                        }, {
                                                            easing: cc.easing.sineOut
                                                        }).start(),
                                                        n(),
                                                        [2]
                                            }
                                        })
                                    })
                                })
                            }
                        })]
                    })
                })
            },
            e.prototype.getChapterName = function (t) {
                return "c_" + t
            },
            e.prototype.createMapAndFocus = function (t, e) {
                f.Utils.removeAllChildren(this.gp_cells);
                var n,
                    o = y.GameUtils.getChapterId(g.BattleConfig.Stage.Max_Level_All),
                    i = cc.instantiate(this.prefab_chapter_cell).getComponent(_.default);
                i.node.name = this.getChapterName(t),
                    i.refresh(t, this),
                    i.node.y = (t - 1) * v.ChapterConfig.Map_Size.height,
                    i.node.parent = this.gp_cells;
                var r = !!s.dm.stage.newStarNum;
                t == o || !r && 1 != t && e < 5 ? ((n = cc.instantiate(this.prefab_chapter_cell).getComponent(_.default)).node.name = this.getChapterName(t - 1), n.refresh(t - 1, this), n.node.parent = this.gp_cells, n.node.position = cc.v2(0, i.node.y - v.ChapterConfig.Map_Size.height)) : ((n = cc.instantiate(this.prefab_chapter_cell).getComponent(_.default)).node.name = this.getChapterName(t + 1), n.refresh(t + 1, this), this.gp_cells.insertChild(n.node, 0), n.node.position = cc.v2(0, i.node.y + v.ChapterConfig.Map_Size.height));
                var a = i.getStageTile(e).node.convertToWorldSpaceAR(cc.v2(0, 0));
                this.gp_content.y = this.fixFocusPos(a),
                    i.refreshAboutPos(),
                    n.refreshAboutPos()
            },
            e.prototype.fixFocusPos = function (t) {
                var e = this.gp_content.convertToNodeSpaceAR(t);
                return e.y = Math.max(this.camera.height / 2, e.y),
                    e.y = Math.min(this.max_content_height - this.camera.height / 4, e.y),
                    this.camera.height / 2 - e.y
            },
            e.prototype.onEnable = function () {
                l.GlobalEvent.on(b.EventOnChapterStageClicked.NAME, this.onEventOnChapterStageClicked, this)
            },
            e.prototype.onDisable = function () {
                clearTimeout(this._timer),
                    l.GlobalEvent.off(b.EventOnChapterStageClicked.NAME, this.onEventOnChapterStageClicked, this)
            },
            e.prototype.onEventOnChapterStageClicked = function (t) {
                var e = this;
                if (this.gp_cells.getChildByName(this.getChapterName(t.chapterId))) {
                    var n = this.getTileWpos(t.chapterId, t.stageId);
                    this.goHostCountry(n, .3, function () {
                        e.pointerShow(t.chapterId, t.stageId, t.ready)
                    })
                } else
                    this.createMapAndFocus(t.chapterId, t.stageId), this.pointerShow(t.chapterId, t.stageId, t.ready)
            },
            e.prototype.getTileWpos = function (t, e) {
                return this.gp_cells.getChildByName(this.getChapterName(t)).getComponent(_.default).getStageTile(e).node.convertToWorldSpaceAR(cc.v2(0, 0))
            },
            e.prototype.pointerShow = function (t, e, n, o) {
                var i = this.getTileWpos(t, e),
                    r = this.gp_content.convertToNodeSpaceAR(i);
                this.pointer.aniGrow(r, t, e, function () {
                    if (o && o(), n) {
                        var i = (t - 1) * v.ChapterConfig.Stage_Per_Chapter + e;
                        h.default.show(i)
                    }
                })
            },
            e.prototype.setTransform = function (t) {
                var e = this.gp_content.position;
                if (e.addSelf(cc.v2(0, t.y)), t.y > 0 ? e.y = Math.min(0, e.y) : t.y < 0 && (e.y = Math.max(.75 * this.camera.height - this.max_content_height, e.y)), this.gp_content.position = e, Math.abs(t.y) > 0)
                    for (var n = this.gp_content.getComponentsInChildren(_.default), o = n.length - 1; o >= 0; o--)
                        n[o].checkOut(t.y > 0);
                l.GlobalEvent.dispatchEvent(new b.EventMapSetTranform(t))
            },
            e.prototype.goHostCountry = function (t, e, n) {
                var o = this;
                void 0 === e && (e = .5);
                var i = this.fixFocusPos(t);
                this.speed = cc.v2(0, i - this.gp_content.y);
                var r = this.gp_content.position.add(this.speed);
                this.jumping = !0,
                    d.ui.showLoading(),
                    cc.tween(this.gp_content).to(e, {
                        position: r
                    }, {
                        easing: cc.easing.sineInOut
                    }).call(function () {
                        d.ui.hideLoading(),
                            o.speed = void 0,
                            o.jumping = !1,
                            n && n()
                    }).start()
            },
            e.prototype.startMoveWithInertance = function (t) {
                this.speed = t
            },
            e.prototype.stopMove = function () {
                this.speed = null
            },
            e.prototype.update = function () {
                this.jumping ? l.GlobalEvent.dispatchEvent(new b.EventMapSetTranform(this.speed)) : this.speed && (this.setTransform(this.speed), this.speed.div(1.1, this.speed), this.speed.len() < 1 && (this.speed = null))
            },
            r([T(cc.Node)], e.prototype, "camera", void 0),
            r([T(cc.Node)], e.prototype, "gp_content", void 0),
            r([T(cc.Node)], e.prototype, "gp_cells", void 0),
            r([T(w.default)], e.prototype, "pointer", void 0),
            r([T(cc.Prefab)], e.prototype, "prefab_chapter_cell", void 0),
            r([T(C.default)], e.prototype, "chapterUI", void 0),
            r([T(cc.Prefab)], e.prototype, "eff_bigboom_wave", void 0),
            r([E], e)
    }
        (cc.Component);
n.default = k;