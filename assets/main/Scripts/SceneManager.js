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
    r = this && this.__awaiter || function (t, e, n, o) {
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
    a = this && this.__generator || function (t, e) {
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
    n.sm = n.GameScene = n.SceneType = void 0;
var c = t("UIManager"),
    s = t("logger"),
    l = t("Utils"),
    u = t("SceneLoadingUI"),
    p = t("G"),
    f = t("GlobalEvents");
(function (t) {
    t[t.Loading = 0] = "Loading",
        t[t.Main = 1] = "Main",
        t[t.Chapter = 2] = "Chapter",
        t[t.Stage = 3] = "Stage"
})(n.SceneType || (n.SceneType = {}));
var h = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }
    return i(e, t),
        e.prototype.initScene = function (t) {
            void 0 === t && (t = void 0)
        },
        e.prototype.removeScene = function () { },
        e.prototype.getNode = function () { },
        e.prototype.getType = function () {
            return -1
        },
        e
}
    (cc.Component);
n.GameScene = h;
var d = function () {
    function t() {
        this.node = null,
            this.curScene = null,
            this.lastSceneType = -1,
            this.nextSceneType = -1,
            this.isSceneLoading = !1
    }
    return Object.defineProperty(t, "ins", {
        get: function () {
            return this._ins || new t
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.onLoad = function (t) {
            this.node = t
        },
        t.prototype.switchScene = function (t, e, n) {
            return void 0 === e && (e = void 0),
                void 0 === n && (n = !1),
                r(this, void 0, void 0, function () {
                    var o,
                        i,
                        r,
                        l;
                    return a(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return this.isSceneLoading = !0,
                                    o = t.GetType(),
                                    this.nextSceneType = o,
                                    s.Logger.debug("[GameManager swtichScene]>>>>>>>>>", o),
                                    (i = this.curScene) && (this.lastSceneType = i.getType(), c.ui.onSwitchScene(), i.removeScene()),
                                    r = this,
                                    [4, this.createScene(t)];
                            case 1:
                                return r.curScene = a.sent(),
                                    this.curScene && (l = this.curScene.getNode(), this.node.destroyAllChildren(), this.node.addChild(l), p.GlobalEvent.dispatchEvent(new f.EventOnSwitchScene)),
                                    n && u.default.setProgress(1),
                                    this.curScene ? [4, this.curScene.initScene(e)] : [3, 3];
                            case 2:
                                a.sent(),
                                    a.label = 3;
                            case 3:
                                return this.isSceneLoading = !1,
                                    [2]
                        }
                    })
                })
        },
        t.prototype.createScene = function (t) {
            return r(this, void 0, Promise, function () {
                var e,
                    n,
                    o,
                    i;
                return a(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, l.Utils.loadPefab(t.Prefab_Name)];
                        case 1:
                            for (e = r.sent(), (n = cc.instantiate(e)).width = this.node.width, n.height = this.node.height, n.x = 0, n.y = 0, o = n.getComponentsInChildren(cc.Component), i = 0; i < o.length; i++)
                                if (o[i] instanceof h)
                                    return [2, o[i]];
                            return [2, void 0]
                    }
                })
            })
        },
        t
}
    ();
n.default = d,
    n.sm = d.ins;