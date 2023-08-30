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
    n.ShareUtil = void 0;
var r = t("PlatformManager"),
    a = t("Utils"),
    c = t("GameConfig"),
    s = function () {
        function t() { }
        return t.share = function (t, e) {
            return void 0 === e && (e = ""),
                o(this, void 0, Promise, function () {
                    var n = this;
                    return i(this, function () {
                        return [2, new Promise(function (o, i) {
                            var a = n.getShareParam(t);
                            r.pm.Share(a.title, a.imgUrl, a.type, e, function (t) {
                                t > n.Share_Waitting_Time ? o() : i()
                            })
                        })]
                    })
                })
        },
            t.getShareParam = function (t) {
                var e = [],
                    n = function (n) {
                        var i = o.shareData[n],
                            r = t.filter(function (t) {
                                return t == i.name
                            });
                        r && r.length > 0 && e.push(i)
                    },
                    o = this;
                for (var i in this.shareData)
                    n(i);
                0 == e.length && e.push(this.shareData[1]);
                var r = a.Utils.randomInt(0, e.length),
                    c = e[r],
                    s = this.getShareImage(c.image, this.Share_ImgNum["" + c.image]),
                    l = c.imageUrlId,
                    u = c.imageUrl;
                return {
                    title: c.title,
                    imgUrl: s,
                    type: c.name,
                    imageUrlId: l,
                    imageUrl: u
                }
            },
            t.getShareParamInAll = function () {
                var t = a.Utils.randomIntInclusive(1, this.Share_Obj_Num),
                    e = this.shareData[t + ""],
                    n = this.getShareImage(e.image, this.Share_ImgNum["" + e.image]),
                    o = e.imageUrlId,
                    i = e.imageUrl;
                return {
                    title: e.title,
                    imgUrl: n,
                    type: e.name,
                    imageUrlId: o,
                    imageUrl: i
                }
            },
            t.getShareImage = function (e, n) {
                return void 0 === e && (e = "fenxiangtu"),
                    void 0 === n && (n = 5),
                    ~~t.Share_ImgNum[e] > 0 && (1 == n ? e += "_1" : e = e + "_" + a.Utils.randomIntInclusive(1, n)),
                    c.GameConfig.OSS_URL_BASE + "image/" + e + ".png"
            },
            t.Share_Waitting_Time = 2300,
            t.Share_Point_3Point = "点点点",
            t.Share_Point_Steps = "复活",
            t.Share_Obj_Num = 1,
            t.Share_ImgNum = {},
            t.shareData = {
                1: {
                    index: 1,
                    name: "点点点",
                    title: "开门见山，还是出门见喜？",
                    imageUrl: "",
                    image: "fx"
                },
                2: {
                    index: 1,
                    name: "复活",
                    title: "开门见山，还是出门见喜？",
                    imageUrl: "",
                    image: "fx"
                }
            },
            t
    }
        ();
n.ShareUtil = s;