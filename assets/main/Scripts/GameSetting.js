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
    n.GameSetting = void 0;
var r = t("GlobalDefines"),
    a = t("logger"),
    c = t("GameConfig"),
    s = t("GameUtils"),
    l = function () {
        function t() {
            this.isLoading = !1
        }
        return t.prototype.loadGameSetting = function () {
            return o(this, void 0, void 0, function () {
                var t = this;
                return i(this, function () {
                    return [2, new Promise(function (e) {
                        return o(t, void 0, void 0, function () {
                            var t,
                                n = this;
                            return i(this, function (o) {
                                switch (o.label) {
                                    case 0:
                                        return t = "config/" + (c.GameConfig.GAME_MODEL == c.Game_Model.DEVELOP ? "gamesetting_dev" : "gamesetting"),
                                            [4, s.GameUtils.loadConfigFromAli(t).then(function (t) {
                                                n.gameSetting = t;
                                                a.Logger.debug("[DataManager onInit] gamesetting加载完毕");
                                                e(r.LoadStatus.Success);
                                            }).catch(function () {
                                                a.Logger.debug("[DataManager onInit] gamesetting初始化失败");
                                                setTimeout(function () {
                                                    e(r.LoadStatus.Doing)
                                                }, 1e3);
                                            })];
                                    case 1:
                                        return o.sent(),
                                            [2]
                                }
                            })
                        })
                    })]
                })
            })
        },
            Object.defineProperty(t.prototype, "local", {
                get: function () {
                    if (this.gameSetting)
                        return this.gameSetting[c.GameConfig.GameKey]
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "isServerModelRelease", {
                get: function () {
                    return !!this.gameSetting && !!this.gameSetting.server_mode && "release" == this.gameSetting.server_mode
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "reviewing", {
                get: function () {
                    return !!this.local && !!this.local.reviewing && this.local.reviewing_ver == c.GameConfig.VER_RES
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "banner", {
                get: function () {
                    return this.local ? this.local.banner : [{
                        spine: 1,
                        reward: 1
                    }, {
                        spine: 2,
                        reward: 2
                    }
                    ]
                },
                enumerable: !1,
                configurable: !0
            }),
            t
    }
        ();
n.GameSetting = l;