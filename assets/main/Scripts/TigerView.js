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
var a = t("RewardUtils"),
    c = t("DataManager"),
    s = t("Utils"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.frames_ico = [],
                e.icoHeight = 120,
                e.icoWidht = 98,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.gp_content.height = 20 * this.icoHeight,
                    this.gp_content.y = 20 * this.icoHeight - this.icoHeight / 2;
                for (var t = c.dm.stage.randomItemType - a.RewardType.Shovel_Prefab, e = 0; e < 20; e++) {
                    var n = new cc.Node;
                    n.width = this.icoWidht,
                        n.height = this.icoHeight;
                    var o = n.addComponent(cc.Sprite);
                    o.sizeMode = cc.Sprite.SizeMode.RAW,
                        n.y = - (.5 + e) * this.icoHeight;
                    var i = 0 == e ? t : s.Utils.randomInt(0, 3);
                    o.spriteFrame = this.frames_ico[i],
                        n.parent = this.gp_content
                }
            },
            e.prototype.begin = function () {
                var t = this;
                cc.tween(this.gp_content).to(1.6, {
                    y: this.icoHeight / 2
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    t.next && t.next()
                }).start()
            },
            Object.defineProperty(e.prototype, "ico", {
                get: function () {
                    return this.gp_content.children[0]
                },
                enumerable: !1,
                configurable: !0
            }),
            r([p(cc.Node)], e.prototype, "gp_content", void 0),
            r([p([cc.SpriteFrame])], e.prototype, "frames_ico", void 0),
            r([u], e)
    }
        (cc.Component);
n.default = f;