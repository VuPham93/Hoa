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
    n.ShareImage = void 0;
var r = t("logger"),
    a = function () {
        function t(t, e) {
            this.canvas = wx.createCanvas(),
                this.canvas.width = t,
                this.canvas.height = e,
                this.ctx = this.canvas.getContext("2d")
        }
        return t.prototype.measureText = function (t, e) {
            var n = 0;
            try {
                n = this.ctx.measureText(t).width
            } catch (o) {
                n = t.length * e,
                    r.Logger.debug("measureText 报错")
            }
            return n
        },
            t.prototype.addLabel = function (t, e, n, o, i, r, a, c, s, l) {
                this.ctx.font = (e || 20) + "px Arial" + (l ? " bold" : ""),
                    this.ctx.fillStyle = "#623a18";
                var u = this.measureText(t, e);
                this.ctx.fillText(t, o - u * r, i - e * a),
                    c && (this.ctx.lineWidth = c, this.ctx.strokeStyle = "#623a18", this.ctx.strokeText(t, o - u * r, i - e * a))
            },
            t.prototype.addMLabelEX2 = function (t, e, n, o, i, r, a, c, s, l) {
                for (var u = e.split("\n"), p = u.length, f = r - p * (n + t) / 2, h = 0; h < p; h++) {
                    var d = u[h];
                    this.addLabel(d, n, 0, i - d.length * n / 2, f + h * (n + t) + t / 2, 0, 0, s, l, !0)
                }
            },
            t.prototype.addMLabel = function (t, e, n, o, i, r, a, c, s, l, u) {
                n.length == e + 1 && (e -= 1);
                for (var p = Math.ceil(n.length / e), f = a + o / 2 - ((o + t) * p - (1 == p ? 0 : t)) / 2, h = 0; h < p; h++) {
                    var d = h * e,
                        g = Math.min(e, n.length - d),
                        y = n.substr(d, g);
                    this.addLabel(y, o, 0, r, f + h * (o + t), 0, 0, l, u, !0)
                }
            },
            t.prototype.addImage = function (t, e, n, r, a, c, s) {
                return o(this, void 0, Promise, function () {
                    var o;
                    return i(this, function () {
                        return o = this.ctx,
                            [2, new Promise(function (i, l) {
                                var u = wx.createImage();
                                u.src = t,
                                    u.onload = function () {
                                        o.drawImage(u, 0, 0, u.width, u.height, r - u.width * e * c, a - u.height * n * s, u.width * c, u.height * s),
                                            i()
                                    },
                                    u.onerror = function () {
                                        l()
                                    }
                            })]
                    })
                })
            },
            t.prototype.addAvatar = function (t, e, n, r, a) {
                return o(this, void 0, Promise, function () {
                    var o,
                        c;
                    return i(this, function () {
                        return t ? (o = t.replace(/\/0$/, "/96"), c = this.ctx, [2, new Promise(function (t, i) {
                            var s = wx.createImage();
                            s.src = o,
                                s.onload = function () {
                                    c.drawImage(s, 0, 0, s.width, s.height, e, n, r, a),
                                        t()
                                },
                                s.onerror = function () {
                                    i()
                                }
                        })]) : [2]
                    })
                })
            },
            t.prototype.saveToFile = function (t) {
                try {
                    return this.canvas.toTempFilePathSync({
                        x: t.x,
                        y: t.y,
                        width: t.width,
                        height: t.height,
                        destWidth: t.width,
                        destHeight: t.height
                    })
                } catch (e) {
                    r.Logger.warn("[ShareImage].saveToFile e:", e)
                }
            },
            t
    }
        ();
n.ShareImage = a;