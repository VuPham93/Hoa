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
    });
Object.defineProperty(n, "__esModule", {
    value: !0
});
var r = t("SaveData"),
    a = t("logger"),
    c = t("Utils"),
    s = t("BundleResourceList"),
    l = t("GameConfig"),
    u = t("GameUtils"),
    p = t("SaveDataConfig"),
    f = function (t) {
        function e() {
            return t.call(this, p.SaveKey[p.SaveKey.Word], e.Config) || this
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "status", {
                get: function () {
                    return this.getValue(e.Config.status.key)
                },
                set: function (t) {
                    this.setValue(e.Config.status.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.unlock = function (t) {
                a.Logger.debug(">>>> [WordInfo unlock] gid:", this.cur_gid, "status:", this.status);
                for (var e = this.status, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (o.got) {
                        var i = e[o.id + ""];
                        i || (i = [], e[o.id + ""] = i),
                            i.push(o.idx)
                    }
                }
                var r = this.cur_gid;
                this.checkGroupFinish(r, e),
                    a.Logger.debug("<<<< [WordInfo unlock] gid:", this.cur_gid, "status:", e)
            },
            e.prototype.checkGroupFinish = function (t, n) {
                var o = this.getGroupFormat(t),
                    i = !0;
                for (var r in o) {
                    var a = o[r],
                        c = n[r];
                    if (a.length != (null == c ? void 0 : c.length)) {
                        i = !1;
                        break
                    }
                }
                if (i) {
                    for (var r in o)
                        delete n[r];
                    this.setValue(e.Config.cur_gid.key, t + 1, !1),
                        this.setValue(e.Config.status.key, n, !1),
                        this.save()
                }
            },
            e.prototype.getGroupFormat = function (t) {
                var e = u.GameUtils.getJsonConfig(s.Idx_Json.level),
                    n = void 0;
                for (var o in e) {
                    var i = e[o];
                    if (i.group == t) {
                        n || (n = {});
                        var r = i.word.replace(/ /g, "").replace(/。/g, "").replace(/，/g, "").replace(/？/g, "").replace(/！/g, "");
                        r.includes("，") && a.Logger.warn("[WordInfo getGroupFormat] 标点符号替换异常"),
                            n[o] = r
                    }
                }
                return a.Logger.debug("[WordInfo getGroupFormat] group:", n),
                    n
            },
            Object.defineProperty(e.prototype, "charLocking", {
                get: function () {
                    var t = this,
                        e = this.status,
                        n = function (n) {
                            var o = [],
                                i = t.getGroupFormat(n);
                            if (!i)
                                return [];
                            for (var r in i)
                                for (var a = i[r], c = e[r] || [], s = 0; s < a.length; s++)
                                    if (!c.includes(s)) {
                                        var l = a[s];
                                        o.push({
                                            gid: n,
                                            id: r,
                                            idx: s,
                                            char: l,
                                            got: !1
                                        })
                                    }
                            return o
                        },
                        o = this.cur_gid,
                        i = n(o),
                        r = i.length;
                    if (3 == r)
                        return i;
                    if (r > 3) {
                        i = c.Utils.shuffle(i);
                        for (var a = [], s = 0; s < 3; s++)
                            a.push(i[s]);
                        return a
                    }
                    var l = n(o + 1);
                    if (0 == l.length)
                        return i;
                    var u = 3 - r;
                    for (s = 0; s < u; s++)
                        i.push(l[s]);
                    return i
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "cur_gid", {
                get: function () {
                    return this.getValue(e.Config.cur_gid.key)
                },
                set: function (t) {
                    this.setValue(e.Config.cur_gid.key, t)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function () {
                t.prototype.init.call(this),
                    l.GameConfig.DEBUG_STAGE
            },
            e.Config = {
                cur_gid: new r.SaveNodeConfig("cur_gid", 1, !1),
                status: new r.SaveNodeConfig("status", {}, !1)
            },
            e
    }
        (r.default);
n.default = f;