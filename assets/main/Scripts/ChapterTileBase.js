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
    };
Object.defineProperty(n, "__esModule", {
    value: !0
});
var a = t("G"),
    c = t("ChapterEvents"),
    s = cc._decorator,
    l = s.ccclass,
    u = (s.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.aning = !1,
                e.inCamera = !0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.tileData = t.tileData,
                    this.chapterCell = t.chapterCell
            },
            e.prototype.refreshAboutPos = function () {
                var t = this.chapterCell.chapterView.camera,
                    e = this.chapterCell.chapterView.wposOfCamera,
                    n = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                this.inCamera = n.y > e.y && n.y < e.y + t.height
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(c.EventMapSetTranform.NAME, this.onEventMapSetTranform, this)
            },
            e.prototype.onDisable = function () {
                this.chapterCell = void 0,
                    a.GlobalEvent.off(c.EventMapSetTranform.NAME, this.onEventMapSetTranform, this)
            },
            e.prototype.onEventMapSetTranform = function (t) {
                this.aniMoving(t.delta)
            },
            e.prototype.aniMoving = function (t) {
                var e = this.chapterCell.chapterView.camera,
                    n = this.chapterCell.chapterView.wposOfCamera,
                    o = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                t.y > 0 ? o.y > n.y + e.height ? !this.aning && this.inCamera && (this.aning = !0, this.inCamera = !1, this.aniOut()) : o.y > n.y && (this.aning || this.inCamera || (this.aning = !0, this.inCamera = !0, this.aniIn())) : t.y < 0 && (o.y < n.y ? !this.aning && this.inCamera && (this.aning = !0, this.inCamera = !1, this.aniOut()) : o.y < n.y + e.height && (this.aning || this.inCamera || (this.aning = !0, this.inCamera = !0, this.aniIn())))
            },
            e.prototype.aniIn = function () { },
            e.prototype.aniOut = function () { },
            r([l], e)
    }
        (cc.Component));
n.default = u;