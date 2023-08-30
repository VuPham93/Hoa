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
var a = t("GameUtils"),
    c = t("Utils"),
    s = cc._decorator,
    l = s.ccclass,
    u = (s.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.show = function (t, e, o, i) {
                void 0 === i && (i = !1);
                var r = new cc.Node("eff_" + t);
                r.addComponent(cc.Sprite).dstBlendFactor = cc.macro.ONE,
                    r.position = o,
                    r.addComponent(n).init(t, e),
                    a.GameUtils.addEffectAR(r)
            },
            e.prototype.init = function (t, e) {
                this.name = t,
                    this.frame_num = e,
                    this.timer = 0,
                    this.last_index = 0,
                    this.frame_time = Math.floor(1e3 / 24),
                    this.full_time = this.frame_time * this.frame_num,
                    this.spr = this.node.getComponent(cc.Sprite),
                    this.refreshFrame(0)
            },
            e.prototype.refreshFrame = function (t) {
                var e = "images/" + this.name + "/" + this.name + "_" + t;
                c.Utils.updateNodeSpriteFrame(e, this.spr.node)
            },
            e.prototype.update = function (t) {
                if (this.timer >= this.full_time)
                    c.Utils.removeNode(this.node);
                else {
                    var e = Math.floor(this.timer / this.frame_time);
                    e > this.last_index && (this.refreshFrame(e), this.last_index = e),
                        this.timer += 1e3 * t
                }
            },
            n = r([l], e)
    }
        (cc.Component));
n.default = u;