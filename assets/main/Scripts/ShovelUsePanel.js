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
    f = t("GameUtils"),
    h = t("ComponentBase"),
    d = t("ItemUsePanelBase"),
    g = cc._decorator,
    y = g.ccclass,
    _ = g.property,
    m = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ani_shovel = null,
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
                                    f.GameUtils.popView(i),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (e, n) {
                t.prototype.init.call(this, e, n),
                    this._className = "ShovelUsePanel",
                    this._comptName = "comptShovel"
            },
            e.prototype.onBtnOkClicked = function () {
                var t = this;
                if (!u.Utils.btnLock())
                    if (f.GameUtils.playSoundBtnClicked(), this.thisKey)
                        if (l.dm.player.shovel <= 0 && l.dm.player.shovel_prefab <= 0)
                            f.GameUtils.showToast("Không đủ số lượng！", s.TipIco.Error);
                        else {
                            p.ui.showLoading(),
                                l.dm.player.shovel_prefab > 0 ? l.dm.player.shovel_prefab-- : l.dm.player.shovel--;
                            for (var e = 0; e < this.actorNode.length; e++)
                                this.actorNode[e].node.removeComponent(cc.Button);
                            this.actorNode.splice(this.thisIdx, 1);
                            var n = this.thisObj.node.getComponent(h.default);
                            this.mapView.levelData.tiles[this.thisKey].components.removeByType(n.component.type),
                                cc.tween(this.hand).to(.3, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.sineIn
                                }).start(),
                                n.onShovel(this.thisKey, this.ani_shovel, this.shadow, function () {
                                    p.ui.hideLoading(),
                                        t.goBack(),
                                        t.close()
                                })
                        }
                    else
                        f.GameUtils.showToast("Không có mục tiêu để phá！", s.TipIco.Error)
            },
            e.Prefab_Name = "prefab/game/battle/ui/shovel_use_panel",
            r([_(cc.Animation)], e.prototype, "ani_shovel", void 0),
            n = r([y], e)
    }
        (d.default);
n.default = m;