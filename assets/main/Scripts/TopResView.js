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
    n.topres = void 0;
var r = t("GlobalDefines"),
    a = t("logger"),
    c = t("Utils"),
    s = t("BattleConfig"),
    l = t("TopResSubViewBase"),
    u = function () {
        function t() {
            this.gp_widget = null,
                this.gp_content = null,
                this.curList = [],
                this.lastList = []
        }
        return Object.defineProperty(t, "ins", {
            get: function () {
                return this._ins || (this._ins = new t),
                    this._ins
            },
            enumerable: !1,
            configurable: !0
        }),
            t.prototype.onLoad = function (e) {
                return o(this, void 0, void 0, function () {
                    var n,
                        o;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return c.Utils.removeAllChildren(e),
                                    [4, c.Utils.loadPefab(t.prefab_name)];
                            case 1:
                                return (n = i.sent()) ? (o = cc.instantiate(n), this.gp_widget = o.children[0].children[0], this.gp_content = this.gp_widget.children[0], this.init(), o.parent = e, [2, o]) : [2, void 0]
                        }
                    })
                })
            },
            t.prototype.init = function () {
                var t = r.GlobalDefines.MenuButtonLogic.height;
                this.gp_widget.height = t,
                    this.gp_content.height = t;
                for (var e = this.gp_content.getComponentsInChildren(l.default), n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.standWidth = o.node.width,
                        o.node.width = 0,
                        o.node.children[0].scale = 0
                }
            },
            t.prototype._aniShow = function (t) {
                this.gp_content.stopAllActions(),
                    cc.tween(this.gp_content).to(.3, {
                        y: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start();
                var e = this.gp_content.getComponentsInChildren(l.default);
                e.sort(function (t, e) {
                    return t.type - e.type
                });
                for (var n = function (n) {
                    var i = e[n],
                        r = i.type,
                        c = t.findIndex(function (t) {
                            return t == r
                        });
                    c >= 0 ? (i.onShow(), a.Logger.debug("[TopResView _aniShow] type:", r, "/idx:", c), o.gp_content.children[c].setSiblingIndex(i.node.getSiblingIndex()), i.node.setSiblingIndex(c), cc.tween(i.node).to(.2, {
                        width: i.standWidth
                    }, {
                        easing: cc.easing.sineOut
                    }).start(), cc.tween(i.node.children[0]).to(.2, {
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start()) : (i.node.setSiblingIndex(e.length - 1), i.onHide(), cc.tween(i.node).to(.2, {
                        width: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start(), cc.tween(i.node.children[0]).to(.2, {
                        scale: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start())
                }, o = this, i = 0; i < e.length; i++)
                    n(i)
            },
            t.prototype.aniShowHome = function () {
                this.lastList = this.curList,
                    this.curList = [s.TopresSubType.Energy, s.TopresSubType.Coin, s.TopresSubType.Rank],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowChapter = function () {
                this.lastList = this.curList,
                    this.curList = [s.TopresSubType.Energy, s.TopresSubType.Coin, s.TopresSubType.Rank],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowBattle = function () {
                this.lastList = this.curList,
                    this.curList = [],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowReady = function () {
                this.lastList = this.curList,
                    this.curList = [s.TopresSubType.Energy, s.TopresSubType.Coin],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowResult = function () {
                this.lastList = this.curList,
                    this.curList = [s.TopresSubType.Energy, s.TopresSubType.Coin],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowGetEnergy = function () {
                this.lastList = this.curList,
                    this.curList = [s.TopresSubType.Energy, s.TopresSubType.Coin],
                    this._aniShow(this.curList)
            },
            t.prototype.aniShowBack = function () {
                this.curList = this.lastList,
                    this.lastList = [],
                    this._aniShow(this.curList)
            },
            t.prototype.aniHide = function () {
                this.lastList = this.curList,
                    this.gp_content.stopAllActions(),
                    cc.tween(this.gp_content).to(.3, {
                        y: 200
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            t.prototype.getSubView = function (t) {
                return this.gp_content.getComponentsInChildren(l.default).find(function (e) {
                    return e.type == t
                })
            },
            t.prefab_name = "prefab/game/ui/topres",
            t
    }
        ();
n.default = u,
    n.topres = u.ins;