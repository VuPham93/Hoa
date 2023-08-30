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
var a = t("ChapterConfig"),
    c = t("ChapterTileBase"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.frames_tree = [],
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "treeData", {
                get: function () {
                    return this.tileData
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e);
                var n = new cc.Node;
                n.addComponent(cc.Sprite).spriteFrame = this.frames_tree[this.treeData.itemId - 1],
                    n.position = a.ChapterConfig.Items_Offset_Y[this.treeData.itemId - 1],
                    n.parent = this.gp_content
            },
            e.prototype.refreshAboutPos = function () {
                t.prototype.refreshAboutPos.call(this),
                    this.gp_content.active = this.inCamera
            },
            e.prototype.aniIn = function () {
                var t = this;
                this.gp_content.opacity = 0,
                    this.gp_content.scale = 1,
                    this.gp_content.y = 100,
                    this.gp_content.active = !0,
                    cc.tween(this.gp_content).to(.3, {
                        y: 0,
                        opacity: 255
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.aning = !1
                    }).start()
            },
            e.prototype.aniOut = function () {
                var t = this;
                cc.tween(this.gp_content).to(.2, {
                    scale: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    t.aning = !1
                }).start()
            },
            r([u(cc.Node)], e.prototype, "gp_content", void 0),
            r([u([cc.SpriteFrame])], e.prototype, "frames_tree", void 0),
            r([l], e)
    }
        (c.default);
n.default = p;