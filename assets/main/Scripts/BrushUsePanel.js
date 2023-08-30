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
var s = t("Toast"),
    l = t("DataManager"),
    u = t("GameManager"),
    p = t("Utils"),
    f = t("UIManager"),
    h = t("BattleConfig"),
    d = t("GameUtils"),
    g = t("ComponentBase"),
    y = t("ComponentBudBase"),
    _ = t("LevelData"),
    m = t("ItemUsePanelBase"),
    v = cc._decorator,
    b = v.ccclass,
    w = v.property,
    S = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_btns = [],
                e.ani_brush = null,
                e.node_circle = null,
                e.node_brush_point = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e) {
                return a(this, void 0, void 0, function () {
                    var o,
                        i;
                    return c(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, p.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return o = r.sent(),
                                    (i = cc.instantiate(o)).getComponent(n).init(t, e),
                                    d.GameUtils.popView(i),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (e, n) {
                t.prototype.init.call(this, e, n),
                    this._className = "BrushUsePanel",
                    this._comptName = "comptBrush"
            },
            e.prototype._onSelected = function () {
                if (t.prototype._onSelected.call(this), this.thisKey) {
                    var e = this.thisObj.node.getComponent(g.default),
                        n = e.component.color,
                        o = h.BattleConfig.Color.Bud[n + ""];
                    this.setBrushColor(o);
                    for (var i = e.component.strength, r = 0, a = 1; a < _.Tile_Color.Length; a++)
                        if (n != a) {
                            var c = this.gp_btns[r];
                            c.name = a + "",
                                u.default.instance.resList.setFlower(c, a, i, void 0),
                                r++
                        }
                }
            },
            e.prototype.setBrushColor = function (t) {
                cc.tween(this.node_circle).to(.4, {
                    color: t
                }, {
                    easing: cc.easing.sineIn
                }).start(),
                    cc.tween(this.node_brush_point).to(.4, {
                        color: t
                    }, {
                        easing: cc.easing.sineIn
                    }).start()
            },
            e.prototype.aniBrush = function () {
                var t = this;
                return new Promise(function (e) {
                    cc.tween(t.hand).to(.5, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).start(),
                        t.ani_brush.once(cc.Animation.EventType.FINISHED, function () {
                            e()
                        }
                            .bind(t), t),
                        t.ani_brush.play()
                })
            },
            e.prototype.onBtnOkClicked = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i;
                    return c(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return p.Utils.btnLock()
                                    ? [2] : (d.GameUtils.playSoundBtnClicked(), this.thisKey
                                        ? l.dm.player.brush <= 0 && l.dm.player.brush_prefab <= 0
                                            ? (d.GameUtils.showToast("Không đủ số lượng bút！", s.TipIco.Error), [2])
                                            : (f.ui.showLoading(), e = t.getCurrentTarget(), n = ~~e.children[0].name, this.setBrushColor(h.BattleConfig.Color.Bud[n + ""]), l.dm.player.brush_prefab > 0
                                                ? l.dm.player.brush_prefab-- : l.dm.player.brush--, [4, this.aniBrush()])
                                        : (d.GameUtils.showToast("Không có hoa để đổi màu！", s.TipIco.Error), [2]));
                            case 1:
                                for (r.sent(), d.GameUtils.playOGG("booster_color_change"), o = 0; o < this.actorNode.length; o++)
                                    this.actorNode[o].node.removeComponent(cc.Button);
                                return [4, this.onBrush(n)];
                            case 2:
                                return r.sent(),
                                    i = this.thisObj.node,
                                    d.GameUtils.addEffBoom(i.convertToWorldSpaceAR(cc.v2(0, 0))),
                                    this.goBack(),
                                    this.close(),
                                    f.ui.hideLoading(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBrush = function (t) {
                return a(this, void 0, void 0, function () {
                    var e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return (e = this.thisObj.node.getComponent(y.default)).component.color = t,
                                    e.refreshStrength(t, e.component.strength, void 0),
                                    this.mapView.levelData.checkDeadlock(),
                                    [4, p.Utils.waiting(200)];
                            case 1:
                                return n.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Prefab_Name = "prefab/game/battle/ui/brush_use_panel",
            r([w([cc.Node])], e.prototype, "gp_btns", void 0),
            r([w(cc.Animation)], e.prototype, "ani_brush", void 0),
            r([w(cc.Node)], e.prototype, "node_circle", void 0),
            r([w(cc.Node)], e.prototype, "node_brush_point", void 0),
            n = r([b], e)
    }
        (m.default);
n.default = S;