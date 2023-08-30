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
    n.gm = n.GTDataBigBoom = n.GTData = n.GuideManager = n.GTType = void 0;
var r,
    a = t("DataManager"),
    c = t("G"),
    s = t("GlobalEvents"),
    l = t("logger"),
    u = t("Utils"),
    p = t("BattleConfig"),
    f = t("GameConfig"),
    h = t("GuideControllerBase"),
    d = t("GuideConfig"),
    g = t("UIManager");
(function (t) {
    t[t.BATTLE = 1] = "BATTLE",
        t[t.BIG_BOOM = 2] = "BIG_BOOM",
        t[t.ALL = 1] = "ALL"
})(r = n.GTType || (n.GTType = {}));
var y = function () {
    function t() {
        this.curTask = null,
            this.lastHanInfo = void 0,
            this.isInited = !1,
            this.taskList = []
    }
    return Object.defineProperty(t, "instance", {
        get: function () {
            return this._instance || (this._instance = new t)
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.onInit = function () {
            if (!f.GameConfig.DEBUG_GUIDE && !this.isInited) {
                for (var t in d.GuideConfig.options) {
                    var e = d.GuideConfig.options[t],
                        n = void 0;
                    switch (e.type) {
                        case r.BATTLE:
                            n = new _(e);
                            break;
                        case r.BIG_BOOM:
                            n = new m(e)
                    }
                    this.taskList.push(n)
                }
                this.taskList.sort(function (t, e) {
                    return t.getOption().id - e.getOption().id
                }),
                    this.isInited = !0
            }
        },
        Object.defineProperty(t.prototype, "isGuiding", {
            get: function () {
                return !!this.curTask
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.taskComplete = function (t) {
            a.dm.guide.setTaskCompleted(t),
                c.GlobalEvent.dispatchEvent(new s.EventOnTaskCompleted(t))
        },
        t.prototype.showGuideCtl = function (t) {
            return o(this, void 0, void 0, function () {
                var e = this;
                return i(this, function () {
                    return [2, new Promise(function (n) {
                        return o(e, void 0, void 0, function () {
                            var e,
                                o,
                                r;
                            return i(this, function (i) {
                                switch (i.label) {
                                    case 0:
                                        return e = "prefab/game/guide/" + t.getOption().prefab_name,
                                            [4, u.Utils.loadPefab(e)];
                                    case 1:
                                        return o = i.sent(),
                                            (r = cc.instantiate(o)).getComponent(h.default).init(t, n),
                                            g.ui.addGuide(r),
                                            [2]
                                }
                            })
                        })
                    })]
                })
            })
        },
        t.prototype._checkAndShow = function (t, e) {
            return void 0 === t && (t = r.ALL),
                o(this, void 0, void 0, function () {
                    var n,
                        o,
                        r,
                        a;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if (this.curTask)
                                    return l.Logger.debug("[GruideManager _checkAndShow] Nhiệm vụ hiện tại đang được tiến hành", this.curTask), [2];
                                n = 0,
                                    i.label = 1;
                            case 1:
                                if (!(n < this.taskList.length))
                                    return [3, 7];
                                if (o = this.taskList[n], r = o.getOption().type, 0 == (t & r))
                                    return [3, 6];
                                if (!o.checkTask(e))
                                    return [3, 6];
                                this.curTask = o,
                                    i.label = 2;
                            case 2:
                                return i.trys.push([2, 4, , 5]),
                                    [4, o.show()];
                            case 3:
                                return i.sent(),
                                    [3, 5];
                            case 4:
                                return a = i.sent(),
                                    l.Logger.debug("[GuideManger _checkAndShow] ", o.getOption().type, "Nhiệm vụ tải ngoại lệ:", a),
                                    [3, 5];
                            case 5:
                                return [3, 7];
                            case 6:
                                return n++,
                                    [3, 1];
                            case 7:
                                return [2]
                        }
                    })
                })
        },
        t.prototype.recordLastHandInfo = function (t) {
            this.lastHanInfo = {
                angle: t.angle,
                position: t.position
            }
        },
        t.prototype.checkAndShowBattle = function () {
            return o(this, void 0, void 0, function () {
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this._checkAndShow(r.BATTLE, void 0)];
                        case 1:
                            return t.sent(),
                                [2]
                    }
                })
            })
        },
        t.prototype.checkAndShowBigBoom = function (t, e) {
            return o(this, void 0, void 0, function () {
                return i(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [4, this._checkAndShow(r.BIG_BOOM, {
                                tileData: t,
                                power: e
                            })];
                        case 1:
                            return n.sent(),
                                [2]
                    }
                })
            })
        },
        Object.defineProperty(t.prototype, "isBigboomGuiding", {
            get: function () {
                return this.curTask && this.curTask instanceof m
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.GuideManager = y;
var _ = function () {
    function t(t) {
        this.option = t
    }
    return t.prototype.getOption = function () {
        return this.option
    },
        t.prototype.checkTask = function () {
            return !(a.dm.guide.isTaskCompleted(this.option.id) || a.dm.player.curLevel != this.option.stage || this.option.pre_id > 0 && !a.dm.guide.isTaskCompleted(this.option.pre_id))
        },
        t.prototype.show = function () {
            return o(this, void 0, void 0, function () {
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, n.gm.showGuideCtl(this)];
                        case 1:
                            return t.sent(),
                                [2]
                    }
                })
            })
        },
        t.prototype.complete = function () {
            this.option.save ? y.instance.taskComplete(this.option.id) : a.dm.guide.addTempId(this.option.id),
                n.gm.curTask = void 0,
                n.gm.checkAndShowBattle()
        },
        t
}
    ();
n.GTData = _;
var m = function () {
    function t(t) {
        this.option = t
    }
    return t.prototype.getOption = function () {
        return this.option
    },
        t.prototype.checkTask = function (t) {
            return !(a.dm.guide.bigboom || t.power < p.BattleConfig.Strength_Boom2 || !t.tileData.components.bud || (this.option.grid_key = t.tileData.key, 0))
        },
        t.prototype.show = function () {
            return o(this, void 0, void 0, function () {
                return i(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, n.gm.showGuideCtl(this)];
                        case 1:
                            return t.sent(),
                                [2]
                    }
                })
            })
        },
        t.prototype.complete = function () {
            f.GameConfig.DEBUG_GUIDE || (a.dm.guide.bigboom = !0),
                n.gm.curTask = void 0
        },
        t
}
    ();
n.GTDataBigBoom = m,
    n.gm = y.instance;