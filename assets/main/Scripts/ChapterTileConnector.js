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
var a = t("DataManager"),
    c = t("ChapterConfig"),
    s = t("ChapterTileBase"),
    l = cc._decorator,
    u = l.ccclass,
    p = (l.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "data", {
                get: function () {
                    return this.tileData
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e),
                    this.ground = e.ground;
                var n = (this.chapterCell.chapterCellData.cId - 1) * c.ChapterConfig.Stage_Per_Chapter + this.data.stage;
                a.dm.player.level + 1 < n ? this.ground.setStatus(c.Stage_Ground_Status.grey) : this.ground.setStatus(c.Stage_Ground_Status.white)
            },
            e.prototype.refreshAboutPos = function () {
                t.prototype.refreshAboutPos.call(this),
                    this.ground.node.active = this.inCamera
            },
            e.prototype.aniIn = function () {
                var t = this;
                this.ground.node.opacity = 0,
                    this.ground.node.scale = 1.5,
                    this.ground.node.y = this.node.y + 100,
                    this.ground.node.active = !0,
                    cc.tween(this.ground.node).to(.3, {
                        scale: 1,
                        opacity: 255,
                        y: this.node.y
                    }, {
                        easing: cc.easing.backOut
                    }).call(function () {
                        t.aning = !1
                    }).start()
            },
            e.prototype.aniOut = function () {
                var t = this;
                cc.tween(this.ground.node).to(.3, {
                    scale: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    t.aning = !1
                }).start()
            },
            r([u], e)
    }
        (s.default));
n.default = p;