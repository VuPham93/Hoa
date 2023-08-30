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
var s = t("SwitchNode"),
    l = t("DataManager"),
    u = t("Utils"),
    p = t("UIManager"),
    f = t("GameUtils"),
    h = t("ChapterBox"),
    d = t("ChapterTileBase"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.boxList = [],
                e.lb_chapter = null,
                e.progressBar = null,
                e.lb_progress = null,
                e.node_star_small = null,
                e
        }
        
        return i(e, t),
            Object.defineProperty(e.prototype, "treeData", {
                get: function () {
                    return this.tileData
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e);
                for (var n = e.chapterCell.chapterCellData.cId, o = 0; o < this.boxList.length; o++)
                    this.boxList[o].init(n);
                this.lb_chapter.string = "" + n;
                var i = 0;
                l.dm.stage.newStarNum && f.GameUtils.getChapterId(l.dm.stage.newStarNum.stageId) == this.chapterCell.chapterCellData.cId && (i = l.dm.stage.newStarNum.value);
                var r = l.dm.stage.getChapterStar(n) - i;
                this.progressBar.progress = r / 60,
                    this.lb_progress.string = r + " / 60"
            },
            e.prototype.refreshAboutPos = function () {
                t.prototype.refreshAboutPos.call(this),
                    this.gp_content.active = this.inCamera
            },
            e.prototype.aniIn = function () {
                var t = this;
                this.gp_content.opacity = 0,
                    this.gp_content.scale = 1.5,
                    this.gp_content.y = 100,
                    this.gp_content.active = !0,
                    cc.tween(this.gp_content).to(.3, {
                        y: 0,
                        opacity: 255,
                        scale: 1
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.aning = !1
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
                }).start()
            },
            e.prototype.aniNewStar = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        h,
                        d,
                        g = this;
                    return c(this, function (y) {
                        switch (y.label) {
                            case 0:
                                e = p.ui.getLayer(p.UILayer.Effect2),
                                    n = e.getChildByName("new_star"),
                                    o = this.node_star_small.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    i = n.convertToNodeSpaceAR(o),
                                    r = function (t) {
                                        var e,
                                            o;
                                        return c(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return 0 != (e = n.children[t].getComponent(s.default)).showIndex ? [3, 2] : (o = e.node.position.add(i).divide(2).add(cc.v2(-300, 0)), cc.tween(e.node).bezierTo(.8, e.node.position, o, i).to(.8, {
                                                        scale: .2,
                                                        angle: 259
                                                    }).union().call(function () {
                                                        var t = cc.instantiate(g.node_star_small);
                                                        t.position = g.node_star_small.convertToWorldSpaceAR(cc.v2(0, 0)),
                                                            f.GameUtils.addEffectAR(t),
                                                            cc.tween(t).to(.4, {
                                                                scale: 2,
                                                                opacity: 0
                                                            }).call(function () {
                                                                u.Utils.removeNode(t)
                                                            }).start(),
                                                            u.Utils.removeNode(e.node)
                                                    }).start(), [4, u.Utils.waiting(500)]);
                                                case 1:
                                                    return r.sent(),
                                                        [3, 4];
                                                case 2:
                                                    return cc.tween(e.node).to(.3, {
                                                        scale: 0
                                                    }, {
                                                        easing: cc.easing.sineIn
                                                    }).start(),
                                                        [4, u.Utils.waiting(300)];
                                                case 3:
                                                    r.sent(),
                                                        r.label = 4;
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    },
                                    d = 0,
                                    y.label = 1;
                            case 1:
                                return d < n.childrenCount ? [5, r(d)] : [3, 4];
                            case 2:
                                y.sent(),
                                    y.label = 3;
                            case 3:
                                return d++,
                                    [3, 1];
                            case 4:
                                return l.dm.stage.newStarNum = void 0,
                                    [4, u.Utils.waiting(1e3)];
                            case 5:
                                for (y.sent(), a = this.chapterCell.chapterCellData.cId, h = l.dm.stage.getChapterStar(a), this.progressBar.progress = h / 60, this.lb_progress.string = h + " / 60", cc.tween(this.progressBar).to(.3, {
                                    progress: h / 60
                                }, {
                                    easing: cc.easing.sineOut
                                }).start(), d = 0; d < this.boxList.length; d++)
                                    this.boxList[d].init(a);
                                return [4, u.Utils.waiting(300)];
                            case 6:
                                return y.sent(),
                                    t && t(),
                                    [2]
                        }
                    })
                })
            },
            r([_(cc.Node)], e.prototype, "gp_content", void 0),
            r([_([h.default])], e.prototype, "boxList", void 0),
            r([_(cc.Label)], e.prototype, "lb_chapter", void 0),
            r([_(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            r([_(cc.Label)], e.prototype, "lb_progress", void 0),
            r([_(cc.Node)], e.prototype, "node_star_small", void 0),
            r([y], e)
    }
        (d.default);
n.default = m;