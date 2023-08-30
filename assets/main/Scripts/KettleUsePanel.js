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
    u = t("Utils"),
    p = t("UIManager"),
    f = t("BattleConfig"),
    h = t("GameUtils"),
    d = t("ComponentBase"),
    g = t("LevelData"),
    y = t("ItemUsePanelBase"),
    _ = cc._decorator,
    m = _.ccclass,
    v = _.property,
    b = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ani_kettle = null,
                e.eff_water_1 = null,
                e.eff_water_2 = null,
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
                                return [4, u.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return o = r.sent(),
                                    (i = cc.instantiate(o)).getComponent(n).init(t, e),
                                    h.GameUtils.popView(i),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (e, n) {
                t.prototype.init.call(this, e, n),
                    this._className = "KettleUsePanel",
                    this._comptName = "comptKettle",
                    this.eff_water_1.active = !1,
                    this.eff_water_2.active = !1
            },
            e.prototype.aniKettle = function () {
                var t = this;
                return new Promise(function (e) {
                    cc.tween(t.hand).to(.5, {
                        scale: 1
                    }, {
                        easing: cc.easing.backOut
                    }).start(),
                        setTimeout(function () {
                            h.GameUtils.playSFX("kettle"),
                                t.eff_water_1.active = !0
                        }, 1050),
                        setTimeout(function () {
                            t.eff_water_2.active = !0
                        }, 2e3),
                        setTimeout(function () {
                            e()
                        }, 3e3),
                        t.ani_kettle.play()
                })
            },
            e.prototype.onBtnOkClicked = function () {
                return a(this, void 0, void 0, function () {
                    var t,
                        e;
                    return c(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return u.Utils.btnLock() ? [2] : (h.GameUtils.playSoundBtnClicked(), this.thisKey ? l.dm.player.kettle <= 0 && l.dm.player.kettle_prefab <= 0 ? (h.GameUtils.showToast("Không đủ nước！", s.TipIco.Error), [2]) : (p.ui.showLoading(), l.dm.player.kettle_prefab > 0 ? l.dm.player.kettle_prefab-- : l.dm.player.kettle--, [4, this.aniKettle()]) : (h.GameUtils.showToast("Không có hoa để tưới！", s.TipIco.Error), [2]));
                            case 1:
                                for (n.sent(), t = 0; t < this.actorNode.length; t++)
                                    this.actorNode[t].node.removeComponent(cc.Button);
                                return e = this.mapView.tiles[this.thisKey],
                                    [4, this.onKettle(e)];
                            case 2:
                                return n.sent(),
                                    this.goBack(),
                                    this.close(),
                                    p.ui.hideLoading(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onKettle = function (t) {
                return a(this, void 0, void 0, function () {
                    var e,
                        n,
                        o,
                        i,
                        r,
                        a,
                        s,
                        l,
                        u;
                    return c(this, function (c) {
                        switch (c.label) {
                            case 0:
                                for (e = [], n = t.tileData.components.comptKettle, o = n.strength, i = {
                                    key: t.tileData.key,
                                    color: t.tileData.components.color,
                                    oldStrength: o,
                                    strength: Math.min(f.BattleConfig.Strength_Boom1 - 1, o + f.BattleConfig.Kettle_Strength_Add.Center)
                                }, r = this.thisObj.node.getComponent(d.default), t.ground.onKettle(0), e.push(r.grow(i)), n.strength = i.strength, h.GameUtils.playSFX("merge_buds", ".mp3", .3), a = 0; a < g.Neighbor_Dir.Length; a++)
                                    if ((s = t.neighbors[a]) && (s.ground.onKettle(1), l = s.tileData.components.comptKettle)) {
                                        for (o = l.strength, i = {
                                            key: s.tileData.key,
                                            color: s.tileData.components.color,
                                            oldStrength: o,
                                            strength: Math.min(f.BattleConfig.Strength_Boom1 - 1, o + f.BattleConfig.Kettle_Strength_Add.Neighbor)
                                        }, u = 0; u < this.actorNode.length; u++)
                                            if (this.actorNode[u].key == s.tileData.key) {
                                                r = this.actorNode[u].node.getComponent(d.default);
                                                break
                                            }
                                        e.push(r.grow(i)),
                                            l.strength = i.strength
                                    }
                                return [4, Promise.all(e)];
                            case 1:
                                return c.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.Prefab_Name = "prefab/game/battle/ui/kettle_use_panel",
            r([v(cc.Animation)], e.prototype, "ani_kettle", void 0),
            r([v(cc.Node)], e.prototype, "eff_water_1", void 0),
            r([v(cc.Node)], e.prototype, "eff_water_2", void 0),
            n = r([m], e)
    }
        (y.default);
n.default = b;