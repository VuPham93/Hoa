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
    l = t("Jumpjump3d"),
    u = t("Utils"),
    p = t("GameUtils"),
    f = t("ChapterCell"),
    h = t("ChapterCloseController"),
    d = cc._decorator,
    g = d.ccclass,
    y = (d.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.logic = function (t) {
                return a(this, void 0, void 0, function () {
                    var e = this;
                    return c(this, function () {
                        return [2, new Promise(function (n) {
                            if (s.dm.dailyTask.curSeed && 0 != s.dm.dailyTask.newItemNum) {
                                var o = s.dm.player.curLevel,
                                    i = p.GameUtils.getStageIdLocal(o),
                                    r = p.GameUtils.getChapterId(o),
                                    a = t.gp_cells.getChildByName("c_" + r).getComponent(f.default).getStageTile(i),
                                    c = a.node.convertToWorldSpaceAR(cc.v2(0, 0));
                                cc.tween(a.node).to(.5, {
                                    scale: .5
                                }, {
                                    easing: cc.easing.sineOut
                                }).delay(.2).call(function () {
                                    p.GameUtils.playSFX("blossom_pop_" + (e.index + 1));
                                    var n = cc.instantiate(t.eff_bigboom_wave);
                                    n.position = c,
                                        p.GameUtils.addEffectAR(n),
                                        setTimeout(function () {
                                            u.Utils.removeNode(n)
                                        }, 1e3)
                                }).to(.2, {
                                    scale: 1
                                }, {
                                    easing: cc.easing.backOut
                                }).call(function () {
                                    var e = p.GameUtils.effectLayer.convertToNodeSpaceAR(c);
                                    p.GameUtils.CreatePetalBoom(e, 2, 10, !0);
                                    var o = t.chapterUI.dailyTaskView,
                                        i = o.slot_ico.convertToWorldSpaceAR(cc.v2(0, 0));
                                    p.GameUtils.addEffBoom(c);
                                    for (var r = o.taskIco.icoNode, a = 0; a < s.dm.dailyTask.newItemNum; a++)
                                        l.default.createByNode(r, c, 0, 1, i, -1);
                                    setTimeout(function () {
                                        s.dm.dailyTask.curNum += s.dm.dailyTask.newItemNum,
                                            s.dm.dailyTask.newItemNum = 0,
                                            o.refreshTask(!1),
                                            n()
                                    }, 1600)
                                }).start()
                            } else
                                n()
                        })]
                    })
                })
            },
            r([g], e)
    }
        (h.default));
n.default = y;