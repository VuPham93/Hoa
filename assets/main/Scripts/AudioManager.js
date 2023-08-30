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
    n.sd = void 0;
var r = t("logger"),
    a = t("PlatformManager"),
    c = function () {
        function t() {
            this.soundLib = {},
                this.bgmVolume = null,
                this.sfxVolume = null,
                this.bgmAudioID = null,
                this.curBGMUrl = null,
                this._bgmEnabled = !0,
                this._sfxEnabled = !0
        }
        return Object.defineProperty(t.prototype, "sfxEnabled", {
            get: function () {
                return this._sfxEnabled
            },
            set: function (t) {
                this._sfxEnabled = t
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t.prototype, "bgmEnabled", {
                get: function () {
                    return this._bgmEnabled
                },
                set: function (t) {
                    this._bgmEnabled = t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.init = function () {
                cc.log("audio init"),
                    this.curBGMUrl = null,
                    this.bgmVolume = .2,
                    this.sfxVolume = 1,
                    this.bgmAudioID = -1,
                    this._bgmEnabled = !0,
                    this._sfxEnabled = !0;
                var t = a.pm.Get("bgmVolume");
                t && (this.bgmVolume = parseFloat(t));
                var e = a.pm.Get("sfxVolume");
                e && (this.sfxVolume = parseFloat(e));
                var n = a.pm.Get("bgmEnabled");
                n && "false" == n && (this._bgmEnabled = !1);
                var o = a.pm.Get("sfxEnabled");
                o && "false" == o && (this._sfxEnabled = !1)
            },
            t.prototype.playBGM = function (t, e) {
                this.curBGMUrl && this.curBGMUrl == t && this.bgmAudioID && !e || (this.curBGMUrl = t, this._bgmEnabled && (this.stopBGM(), cc.resources.load(t, function (e, n) {
                    this.curBGMUrl == t ? (cc.audioEngine.stopAll(), this.bgmAudioID = cc.audioEngine.play(n, !0, this.bgmVolume)) : console.log("播放背景音乐失败:", e)
                }
                    .bind(this))))
            },
            t.prototype.stopBGM = function () {
                this.bgmAudioID >= 0 && (cc.audioEngine.stop(this.bgmAudioID), this.bgmAudioID = null)
            },
            t.prototype.preloadAudioClip = function (t) {
                return o(this, void 0, void 0, function () {
                    return i(this, function () {
                        return this._sfxEnabled ? (cc.resources.preload("sounds/" + t, cc.AudioClip), [2]) : [2]
                    })
                })
            },
            t.prototype.playSFX = function (t, e, n, o, i, a) {
                var c = this;
                if (void 0 === e && (e = this.sfxVolume), void 0 === n && (n = ".mp3"), void 0 === o && (o = !1), void 0 === i && (i = !1), this._sfxEnabled)
                    if (this.soundLib["" + t]) {
                        var s = cc.audioEngine.play(this.soundLib["" + t], o, e);
                        a && a(s)
                    } else if (i) {
                        if (!t.startsWith("https://"))
                            return void (a && a());
                        cc.assetManager.loadRemote(t, {
                            ext: n
                        }, function (t, n) {
                            if (t)
                                r.Logger.debug(t), a && a();
                            else {
                                var i = cc.audioEngine.play(n, o, e);
                                a && a(i)
                            }
                        })
                    } else
                        cc.resources.load(t, function (n, i) {
                            if (n)
                                r.Logger.debug(n), a && a();
                            else {
                                var s = cc.audioEngine.play(i, o, e);
                                c.soundLib["" + t] = i,
                                    a && a(s)
                            }
                        });
                else
                    a && a()
            },
            t.prototype.stopSFX = function (t) {
                r.Logger.debug("audioId", t),
                    null != t && cc.audioEngine.stop(t)
            },
            t.prototype.getSFXEnabled = function () {
                return this.sfxEnabled
            },
            t.prototype.setSFXEnabled = function (t) {
                this.sfxEnabled != t && (a.pm.Set("sfxEnabled", String(t)), this.sfxEnabled = t)
            },
            t.prototype.getBGMEnabled = function () {
                return this.bgmEnabled
            },
            t.prototype.setBGMEnabled = function (t) {
                this.bgmEnabled != t && (a.pm.Set("bgmEnabled", String(t)), this.bgmEnabled = t, 1 == this.bgmEnabled && null != this.curBGMUrl ? this.playBGM(this.curBGMUrl, !0) : this.stopBGM())
            },
            t.prototype.pauseBGM = function () {
                this.bgmAudioID >= 0 && cc.audioEngine.pause(this.bgmAudioID)
            },
            t.prototype.resumeBGM = function () {
                this.bgmAudioID >= 0 && cc.audioEngine.resume(this.bgmAudioID)
            },
            t.prototype.uncache = function (t) {
                var e = cc.url.raw(t);
                cc.audioEngine.uncache(e),
                    this.soundLib["" + t] = void 0
            },
            t.prototype.uncacheAll = function () {
                cc.audioEngine.uncacheAll(),
                    this.soundLib = {}
            },
            t.prototype.pauseAll = function () {
                r.Logger.debug("Pause All Sound"),
                    cc.audioEngine.pauseAll()
            },
            t.prototype.resumeAll = function () {
                r.Logger.debug("Resum All Sound"),
                    cc.audioEngine.resumeAll()
            },
            t.prototype.stopAll = function () {
                cc.audioEngine.stopAll()
            },
            t.prototype.clean = function () {
                this.stopAll(),
                    this.uncacheAll(),
                    this.curBGMUrl = null,
                    this.bgmAudioID = -1
            },
            t.Instance = new t,
            t
    }
        ();
n.default = c,
    n.sd = c.Instance;