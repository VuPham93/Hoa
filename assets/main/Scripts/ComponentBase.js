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
var s = t("G"),
    l = t("Utils"),
    u = t("UIManager"),
    p = t("BattleConfig"),
    f = t("GameUtils"),
    h = t("BattleEvents"),
    d = t("ScoreToast"),
    g = cc._decorator,
    y = g.ccclass,
    _ = (g.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.getTile = function () {
                for (var t = this.node; t;) {
                    var e = t.getComponent("Tile");
                    if (e)
                        return e;
                    if ("map_view" == t.name)
                        return;
                    if ("uiManager" == t.name)
                        return;
                    t = t.parent
                }
            },
            e.prototype.init = function (t) {
                this.component = t
            },
            e.prototype._remove = function () {
                var t = cc.instantiate(this.node);
                t.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    u.ui.addEffectAR(t, !0),
                    cc.tween(t).to(.1, {
                        scale: .5
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        l.Utils.removeNode(t)
                    }).start(),
                    l.Utils.removeNode(this.node)
            },
            e.prototype.grow = function () {
                return a(this, void 0, void 0, function () {
                    return c(this, function () {
                        return [2]
                    })
                })
            },
            e.prototype.remove = function (t) {
                var e = this.component.seed.score,
                    n = this.getTile();
                e > 0 && n && (n.mapView.levelData.score += e, d.default.show(e, n.node.convertToWorldSpaceAR(cc.v2(0, 0))));
                var o = this.component,
                    i = t || (null == n ? void 0 : n.tileData.key),
                    r = o.type,
                    a = o.color;
                this._remove(),
                    i && s.GlobalEvent.dispatchEvent(new h.EventOnComponentDelete(i, r, a))
            },
            e.prototype.onNear = function (t) {
                return a(this, void 0, void 0, function () {
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return this.component.onNear(t.tileData) ? [4, this.grow({
                                    key: void 0,
                                    color: -1,
                                    oldStrength: this.component.strength - this.component.seed.near,
                                    strength: this.component.strength
                                })] : [2];
                            case 1:
                                return e.sent(),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onEnable = function () { },
            e.prototype.onDisable = function () { },
            e.prototype.onShovel = function (t, e, n, o) {
                var i = this,
                    r = cc.instantiate(this.node);
                r.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    f.GameUtils.addEffectAR(r),
                    this.node.opacity = 0,
                    e.once(cc.Animation.EventType.FINISHED, function () {
                        o && o()
                    }, !0),
                    e.play("ani_shovel_1"),
                    setTimeout(function () {
                        f.GameUtils.playOGG("booster_shovel_dig"),
                            cc.tween(r).by(.5, {
                                y: p.BattleConfig.Tile_Height,
                                opacity: -255,
                                scale: 1
                            }, {
                                easing: cc.easing.sineIn
                            }).call(function () {
                                i.remove(t),
                                    l.Utils.removeNode(r),
                                    cc.tween(n).to(.3, {
                                        scale: 0
                                    }, {
                                        easing: cc.easing.sineIn
                                    }).start()
                            }).start()
                    }, 600)
            },
            e.prototype.onClicked = function () { },
            e.prototype.onTouchEnd = function () { },
            e.prototype.onDropBegin = function () { },
            r([y], e)
    }
        (cc.Component));
n.default = _;