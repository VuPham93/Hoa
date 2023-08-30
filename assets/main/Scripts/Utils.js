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
    },
    r = this && this.__spreadArrays || function () {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
        var o = Array(t),
            i = 0;
        for (e = 0; e < n; e++)
            for (var r = arguments[e], a = 0, c = r.length; a < c; a++, i++)
                o[i] = r[a];
        return o
    };
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.Utils = void 0;
var a = t("GlobalDefines"),
    c = t("NetworkManager"),
    s = t("logger"),
    l = function () {
        function t() { }
        return t.sleep = function (t, e) {
            return o(this, void 0, void 0, function () {
                var n = this;
                return i(this, function () {
                    return [2, new Promise(function (o) {
                        setTimeout(function () {
                            n.invokeCallback(o)
                        }, t, e)
                    }).catch(function () { })]
                })
            })
        },
            t.invokeCallback = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                t && "function" == typeof t && t.apply(null, e)
            },
            t.safeCallFunc = function (t, e) {
                t && "function" == typeof t && t.apply(e)
            },
            t.randomInt = function (t, e) {
                return t = Math.ceil(t),
                    e = Math.floor(e),
                    Math.floor(Math.random() * (e - t)) + t
            },
            t.randomIntInclusive = function (t, e) {
                return t = Math.ceil(t),
                    e = Math.floor(e),
                    Math.floor(Math.random() * (e - t + 1)) + t
            },
            t.randomFloat = function (t, e) {
                return Math.random() * (e - t) + t
            },
            t.randomByList = function (t) {
                t.map(function (t, e, n) {
                    return n[e] = ~~n[e - 1] + t
                });
                for (var e = this.randomIntInclusive(1, t[t.length - 1]), n = t.length - 1; n >= 0; n--) {
                    var o = t[n];
                    if (~~t[n - 1] < e && e <= o)
                        return n
                }
                return -1
            },
            t.modByLimit = function (t, e) {
                return (t - 1) % e + 1
            },
            t.isNullOrEmpty = function (t) {
                return !t || "" == t || "null" == t
            },
            t.qrSceneOption = function (t) {
                if (!t)
                    return {};
                for (var e = {}, n = 0, o = decodeURIComponent(t).split("&"); n < o.length; n++) {
                    var i = o[n].split("=");
                    e[i[0]] = i[1]
                }
                return e
            },
            t.formatTimeExt = function (t, e) {
                if (void 0 === e && (e = !1), ~~t <= 0)
                    return e ? "00小时00分00秒" : "00分00秒";
                var n,
                    o = Math.floor(t / 3600).toString(),
                    i = Math.floor(t % 3600 % 60).toString(),
                    r = e ? Math.floor(t % 3600 / 60) : Math.floor(t / 60).toString();
                return e ? (n = [o, r, i].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }))[0] + "小时" + n[1] + "分" + n[2] + "秒" : (n = [r, i].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }))[0] + "分" + n[1] + "秒"
            },
            t.formatMilTime = function (t) {
                if (t > 0) {
                    var e = Math.ceil(1e3 * t);
                    return Math.floor(e / 1e3) + "″" + e % 1e3
                }
                return "0″000"
            },
            t.formatTime = function (t, e) {
                if (void 0 === e && (e = !1), ~~t <= 0)
                    return e ? "00:00:00" : "00:00";
                var n = Math.floor(t / 3600).toString(),
                    o = Math.floor(t % 3600 % 60).toString(),
                    i = e ? Math.floor(t % 3600 / 60) : Math.floor(t / 60).toString();
                return e ? [n, i, o].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }).join(":") : [i, o].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }).join(":")
            },
            t.formatTime_Date = function (t, e) {
                var n = new Date(1e3 * t),
                    o = (n.getMonth() + 1).toString(),
                    i = n.getDate();
                return e ? [n.getFullYear().toString(), o, i].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }).join(".") : [o, i].map(function (t) {
                    return ("" + t)[1] ? t : "0" + t
                }).join(".")
            },
            t.getWeekNumberNow = function (t) {
                var e = new Date(t);
                return this.getWeekNumber(e)
            },
            t.getWeekNumber = function (t) {
                (t = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()))).setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
                var e = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
                return Math.ceil(((t.getTime() - e.getTime()) / 864e5 + 1) / 7)
            },
            t.getMonthM = function (t, e) {
                return 4 == e || 6 == e || 9 == e || 11 == e ? 30 : 2 == e ? t % 4 == 0 && t % 100 != 0 || t % 400 == 0 ? 29 : 28 : 31
            },
            t.getTimestamp = function () {
                return (new Date).getTime()
            },
            t.getOSSTime = function (t) {
                if (this.isEmpty(t))
                    return 0;
                var e = t.split(","),
                    n = new Date(parseInt(e[0]), parseInt(e[1]) - 1, parseInt(e[2]), parseInt(e[3]), parseInt(e[4]), 0);
                return Math.floor(n.getTime() / 1e3)
            },
            t.solveString = function (t, e) {
                if (!t)
                    return "";
                for (var n = 0, o = "", i = 0; i < t.length; i++) {
                    if (t.charCodeAt(i) > 127 || 94 == t.charCodeAt(i) ? n += 2 : n++, n > e)
                        return o + "...";
                    o += t.charAt(i)
                }
                return o
            },
            t.mixedStrLen = function (t) {
                for (var e = 0, n = 0; n < t.length; n++)
                    t.substr(n, 1).charCodeAt(0) > 255 ? e += 2 : e++, Math.tanh;
                return e
            },
            t.angleToRadian = function (t) {
                return t * Math.PI / 180
            },
            t.updateNodeSpriteFrame = function (e, n, o, i, r) {
                if (void 0 === o && (o = !1), void 0 === i && (i = void 0), void 0 === r && (r = "png"), !t.isNullOrEmpty(e))
                    if (o) {
                        if (!e.startsWith("https://"))
                            return;
                        cc.assetManager.loadRemote(e, {
                            ext: "." + r
                        }, function (t, o) {
                            if (t)
                                console.error("[Utils updateNodeSpriteFrame isFromNet] url:", e, "/err:", t);
                            else if (cc.isValid(n)) {
                                s.Logger.debug("[Utils updateNodeSpriteFrame] texture:", o);
                                var r = new cc.SpriteFrame(o),
                                    a = n.getComponent(cc.Sprite);
                                a && (a.spriteFrame = r),
                                    i && i(r)
                            }
                        })
                    } else
                        cc.resources.load(e, cc.SpriteFrame, function (t, o) {
                            if (t)
                                console.error("[Utils updateNodeSpriteFrame isNotFromNet] url:", e, "/err:", t);
                            else if (cc.isValid(n)) {
                                var r = n.getComponent(cc.Sprite);
                                r && (r.spriteFrame = o),
                                    i && i(o)
                            } else
                                console.warn("[Utils updateNodeSpriteFrame isNotFromNet] url:", e, "/node is not valid")
                        })
            },
            t.loadSpine = function (t, e, n, o) {
                cc.assetManager.loadRemote(t + ".json", function (e, i) {
                    e ? o && o("加载json失败") : (s.Logger.debug("[加载Json] date:", (new Date).getTime()), cc.assetManager.loadRemote(t + ".atlas", function (e, r) {
                        e ? o && o("加载atlas失败") : (s.Logger.debug("[加载atlas] date:", (new Date).getTime()), cc.assetManager.loadRemote(t + ".png", function (e, a) {
                            if (e)
                                o && o("加载png失败");
                            else {
                                s.Logger.debug("[加载png] date:", (new Date).getTime());
                                var c = {
                                    skeletonJson: i.json,
                                    atlasText: r.text,
                                    textures: [a],
                                    uuid: t + ".json",
                                    textureNames: [name + ".png"]
                                };
                                n && n(c)
                            }
                        }))
                    }))
                })
            },
            t.updateSpineRes = function (t, e, n) {
                var o = e.getComponent(sp.Skeleton);
                o || (o = e.addComponent("sp.Skeleton"));
                var i = new sp.SkeletonData;
                i._uuid = n.uuid,
                    i.skeletonJson = n.skeletonJson,
                    i.atlasText = n.atlasText,
                    i.textures = n.textures,
                    i.textureNames = n.textureNames,
                    o.skeletonData = i,
                    o.setAnimation(0, t, !0)
            },
            t.secondsToClock = function (t) {
                var e = (t = Number(t)) % 60,
                    n = (t - e) / 60,
                    o = Math.floor(n / 60);
                return o > 0 && (n %= 60),
                    (o > 9 ? o : "0" + o) + ":" + (n > 9 ? n : "0" + n) + ":" + (e > 9 ? e : "0" + e)
            },
            t.isEmpty = function (t) {
                return null == t || "" == t || null == t
            },
            t.loadSimpleBone = function (t, e, n) {
                var o = "bones/" + t + "/",
                    i = [o + e + "_ske", o + e + "_atlas", o + e + "_tex"];
                cc.resources.load(i, function (o, i) {
                    o ? s.Logger.debug("[Utils loadSimpleBone] 加载失败:", t, "/", e) : n(i[0], i[1])
                })
            },
            t.loadPlayerBone = function (t, e, n, o) {
                var i = "bones/finn/",
                    r = [i + t + (e ? "_ske" : "_pk_ske"), i + t + (e ? "_atlas" : "_pk_atlas"), i + t + (e ? "_tex" : "_pk_tex")];
                cc.resources.load(r, function (e, i) {
                    if (e)
                        return s.Logger.debug("[Utils loadSimpleBone] 加载失败:", t), void (o && o("加载失败 " + t));
                    n(i[0], i[1], i[2])
                })
            },
            t.releaseRes = function (t) {
                return o(this, void 0, void 0, function () {
                    return i(this, function () {
                        return cc.assetManager.releaseAsset(t),
                            [2]
                    })
                })
            },
            t.loadPefab = function (t, e) {
                return void 0 === e && (e = !1),
                    o(this, void 0, Promise, function () {
                        var e = this;
                        return i(this, function () {
                            return [2, new Promise(function (n, r) {
                                return o(e, void 0, void 0, function () {
                                    var e,
                                        a,
                                        l = this;
                                    return i(this, function (u) {
                                        switch (u.label) {
                                            case 0:
                                                e = function () {
                                                    return o(l, void 0, void 0, function () {
                                                        return i(this, function () {
                                                            return [2, new Promise(function (e, n) {
                                                                var o = setTimeout(function () {
                                                                    s.Logger.debug("[Utils oadPefab] " + t + "加载超时"),
                                                                        n("oadPefab 连接超时" + t)
                                                                }, 1e4);
                                                                cc.resources.load(t, function (t, i) {
                                                                    clearTimeout(o),
                                                                        t ? n(t) : e(i)
                                                                })
                                                            })]
                                                        })
                                                    })
                                                },
                                                    a = c.default.TIMES_RETRY,
                                                    u.label = 1;
                                            case 1:
                                                return a > 0 ? [4, e().then(function (t) {
                                                    a = 0,
                                                        n(t)
                                                }).catch(function (t) {
                                                    --a <= 0 && r(t)
                                                })] : [3, 3];
                                            case 2:
                                                return u.sent(),
                                                    [3, 1];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })]
                        })
                    })
            },
            t.loadConfigFromAli = function (t) {
                return o(this, void 0, void 0, function () {
                    return i(this, function () {
                        return [2, new Promise(function (e, n) {
                            cc.resources.load(t, function (o, i) {
                                if (o)
                                    return s.Logger.debug("[DataManager loadConfig[" + t + "]] err:", o), void n("加载失败" + t);
                                e(i.json)
                            })
                        })]
                    })
                })
            },
            t.isNum = function (t) {
                if ("0" === t || null == t)
                    return !0;
                var e = Number(t);
                return !isNaN(e)
            },
            t.getCurTime = function () {
                return Math.floor(this.getCurMillisecond() / 1e3)
            },
            t.getCurMillisecond = function () {
                return (new Date).getTime()
            },
            t.getymd = function (t) {
                var e = new Date(1e3 * t),
                    n = e.getMonth() + 1,
                    o = e.getDate();
                return {
                    year: e.getFullYear(),
                    month: n,
                    date: o,
                    hour: e.getHours(),
                    minute: e.getMinutes(),
                    second: e.getSeconds(),
                    milliseconds: e.getMilliseconds()
                }
            },
            t.isToday = function (e) {
                var n = this.getCurTime(),
                    o = t.getymd(e),
                    i = t.getymd(n);
                return o.year == i.year && o.month == i.month && o.date == i.date
            },
            t.getDayBeginTime = function (t) {
                var e = new Date(t);
                return e.setHours(0),
                    e.setSeconds(0),
                    e.setMinutes(0),
                    e.setMilliseconds(0),
                    e.getTime()
            },
            t.waiting = function (t) {
                return new Promise(function (e) {
                    setTimeout(function () {
                        e()
                    }, t)
                })
            },
            t.prototype.secondsToClock = function (t) {
                var e = (t = Number(t)) % 60,
                    n = (t - e) / 60,
                    o = Math.floor(n / 60);
                return o > 0 && (n %= 60),
                    (o > 9 ? o : "0" + o) + ":" + (n > 9 ? n : "0" + n) + ":" + (e > 9 ? e : "0" + e)
            },
            t.loadConfig = function (t) {
                return o(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (n) {
                        switch (n.label) {
                            case 0:
                                e = "config/" + t,
                                    n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]),
                                    [4, this.LoadRes(e)];
                            case 2:
                                return [2, n.sent()];
                            case 3:
                                return n.sent(),
                                    [2, void 0];
                            case 4:
                                return [2]
                        }
                    })
                })
            },
            t.LoadRes = function (t) {
                return new Promise(function (e, n) {
                    cc.resources.load(t, function (t, o) {
                        t ? n(t.message || t) : e(o)
                    })
                })
            },
            t.btnLock = function (t) {
                var e = this;
                return void 0 === t && (t = 500),
                    !!this._btnLock || (this._btnLock = !0, setTimeout(function () {
                        e._btnLock = !1
                    }, t), !1)
            },
            t.removeNode = function (t) {
                t && t.parent && (t.removeFromParent(), t.destroy())
            },
            t.removeAllChildren = function (t) {
                t && t.removeAllChildren()
            },
            t.toGrey = function (t) {
                if (t) {
                    var e = cc.MaterialVariant.getBuiltinMaterial("2d-gray-sprite");
                    t.setMaterial(0, e)
                }
            },
            t.toColor = function (t) {
                if (t) {
                    var e = cc.MaterialVariant.getBuiltinMaterial("2d-sprite");
                    t.setMaterial(0, e)
                }
            },
            t.toGreyNode = function (t) {
                if (t)
                    for (var e = t.getComponentsInChildren(cc.RenderComponent), n = 0; n < e.length; n++) {
                        var o = e[n];
                        this.toGrey(o)
                    }
            },
            t.toColorNode = function (t) {
                if (t)
                    for (var e = t.getComponentsInChildren(cc.RenderComponent), n = 0; n < e.length; n++) {
                        var o = e[n];
                        this.toColor(o)
                    }
            },
            t.shuffle = function (t) {
                for (var e, n, o = t.length; o;)
                    n = t[e = Math.floor(Math.random() * o--)], t[e] = t[o], t[o] = n;
                return t
            },
            t.shuffle2 = function (t) {
                for (var e = [], n = [], o = t.length / 2, i = 0; i < t.length; i++)
                    i <= o ? e.push(t[i]) : n.push(t[i]);
                return e = this.shuffle(e),
                    n = this.shuffle(n),
                    r(n, e)
            },
            t.ilterRepeatStr = function (t) {
                return [].filter.call(t, function (t, e, n) {
                    return n.indexOf(t) == e
                }).join("").toString().replace(/,/g, "")
            },
            t.getValue = function (t, e) {
                var n = e.split(".");
                try {
                    for (var o = t[n[0]], i = 1; i < n.length; i++)
                        o = o[n[i]];
                    return o
                } catch (r) {
                    return
                }
            },
            t.animationGotoStart = function (t, e) {
                var n = e;
                "number" == typeof e && (n = t.getClips()[e].name),
                    t.play(String(n), 0),
                    t.sample(String(n)),
                    t.stop()
            },
            t.animationGotoEnd = function (t, e) {
                var n = e,
                    o = e;
                if ("string" == typeof e) {
                    for (var i in t.getClips())
                        if (t.getClips()[i].name === e) {
                            n = i;
                            break
                        }
                } else
                    "number" == typeof e && (o = t.getClips()[e].name);
                var r = t.getClips()[n].duration;
                t.play(String(o), r)
            },
            t.GetZodiac = function (t, e) {
                var n = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22],
                    o = t - (e < n[t - 1] ? 1 : 0),
                    i = t - 2 < 0 ? 11 : + (t - 2),
                    r = t + 1 > 12 ? 1 : + (t + 1);
                return {
                    index: o = 12 == o ? 0 : o,
                    sZodiac: "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2 * o, 2) + "座",
                    sBetween: (e < n[t - 1] ? i + 1 + "." + n[i] : t + "." + n[t - 1]) + "-" + (e < n[t - 1] ? t + "." + (n[o] - 1) : r + "." + (n[r - 1] - 1))
                }
            },
            t.getGameDay = function (e) {
                e = t.getDayBeginTime(e);
                var n = (t.getDayBeginTime(t.getCurTime()) - e) % (7 * a.GlobalDefines.Second_Day);
                return Math.floor(n / a.GlobalDefines.Second_Day) + 1
            },
            t.getWeek = function (e, n) {
                return n = t.getDayBeginTime(n),
                    e = t.getDayBeginTime(e),
                    Math.floor((e - n) / (7e3 * a.GlobalDefines.Second_Day))
            },
            t.StrToNumberArray = function (t, e) {
                return t ? t.split(e).map(Number) : []
            },
            t._btnLock = !1,
            t
    }
        ();
n.Utils = l;