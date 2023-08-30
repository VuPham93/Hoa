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
var s = t("AudioManager"),
    l = t("BasePanel"),
    u = t("SwitchNode"),
    p = t("DataManager"),
    f = t("SceneManager"),
    h = t("AniUtil"),
    d = t("Utils"),
    g = t("ChapterScene"),
    y = t("GameConfig"),
    _ = t("GameUtils"),
    m = t("StageOutPanel"),
    v = cc._decorator,
    b = v.ccclass,
    w = v.property,
    S = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.lb_stage = null,
                e.gp_layout = null,
                e.btn_close = null,
                e.switch_music = null,
                e.switch_sound = null,
                e.lb_ver = null,
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
                                return [4, d.Utils.loadPefab(this.Prefab_Name)];
                            case 1:
                                return o = r.sent(),
                                    (i = cc.instantiate(o)).getComponent(n).init(t, e),
                                    _.GameUtils.popView(i),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.init = function (t, e) {
                this.levelData = t,
                    this.next = e,
                    this.lb_stage.string = "Màn " + t.lId,
                    this.lb_ver.string = "v" + y.GameConfig.VER_RELEASE,
                    this.switch_music.showIndex = s.sd.bgmEnabled ? 0 : 1,
                    this.switch_sound.showIndex = s.sd.sfxEnabled ? 0 : 1,
                    h.AniUtil.aniWillShow(this.gp_content);
                for (var n = 0; n < this.gp_layout.childrenCount; n++)
                    h.AniUtil.aniWillShow(this.gp_layout.children[n]);
                h.AniUtil.aniWillShow(this.btn_close),
                    this.btn_close.active = !1
            },
            e.prototype.onLoad = function () {
                this.aniShow()
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    this.next && this.next()
            },
            e.prototype.aniShow = function () {
                return a(this, void 0, void 0, function () {
                    var t;
                    return c(this, function (e) {
                        switch (e.label) {
                            case 0:
                                return h.AniUtil.aniShow(this.gp_content),
                                    [4, d.Utils.waiting(150)];
                            case 1:
                                e.sent(),
                                    t = 0,
                                    e.label = 2;
                            case 2:
                                return t < this.gp_layout.childrenCount ? (h.AniUtil.aniShow(this.gp_layout.children[t]), [4, d.Utils.waiting(100)]) : [3, 5];
                            case 3:
                                e.sent(),
                                    e.label = 4;
                            case 4:
                                return t++,
                                    [3, 2];
                            case 5:
                                return this.btn_close.active = !0,
                                    h.AniUtil.aniShow(this.btn_close),
                                    h.AniUtil.aniShaking(this.btn_close.children[0]),
                                    [2]
                        }
                    })
                })
            },
            e.prototype.onBtnCloseClicked = function () {
                d.Utils.btnLock() || (_.GameUtils.playSoundBtnClicked(), this.close())
            },
            e.prototype.onBtnOkClicked = function () {
                var t = this;
                d.Utils.btnLock() || (_.GameUtils.playSoundBtnClicked(), m.default.show(function (e) {
                    e && (p.dm.dailyTask.newItemNum = 0, p.dm.player.clearPrefabItem(), f.sm.switchScene(g.default, {
                        curLevel: t.levelData.lId
                    }))
                }))
            },
            e.prototype.onBtnMusicClicked = function () {
                d.Utils.btnLock() || (s.sd.bgmEnabled = !s.sd.bgmEnabled, this.switch_music.showIndex = s.sd.bgmEnabled ? 0 : 1, _.GameUtils.playSoundBtnClicked())
            },
            e.prototype.onBtnSoundClicked = function () {
                d.Utils.btnLock() || (s.sd.sfxEnabled = !s.sd.sfxEnabled, this.switch_sound.showIndex = s.sd.sfxEnabled ? 0 : 1, _.GameUtils.playSoundBtnClicked())
            },
            e.Prefab_Name = "prefab/game/battle/ui/setting_panel",
            r([w(cc.Node)], e.prototype, "gp_content", void 0),
            r([w(cc.Label)], e.prototype, "lb_stage", void 0),
            r([w(cc.Node)], e.prototype, "gp_layout", void 0),
            r([w(cc.Node)], e.prototype, "btn_close", void 0),
            r([w(u.default)], e.prototype, "switch_music", void 0),
            r([w(u.default)], e.prototype, "switch_sound", void 0),
            r([w(cc.Label)], e.prototype, "lb_ver", void 0),
            n = r([b], e)
    }
        (l.default);
n.default = S;