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
var a = t("GameManager"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property,
    u = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.spr_ico = null,
                e.lb_num = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e) {
                this.task = t,
                    this.opt = e,
                    a.default.instance.resList.setFlower(this.spr_ico.node, t.color, 10, void 0),
                    this.lb_num.string = t.cur_num + "",
                    this.node.scale = e[0],
                    this.gp_content.scale = e[1],
                    this.lb_num.node.scale = e[2],
                    this.gp_content.opacity = e[3]
            },
            e.prototype.onNumPlus = function () {
                var t = Math.max(0, ~~this.lb_num.string - 1);
                this.lb_num.string = t + ""
            },
            e.prototype.move = function (t) {
                this.opt = t,
                    cc.tween(this.node).delay(.1).to(.4, {
                        position: cc.v2(0, 0),
                        scale: this.opt[0]
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.gp_content).to(.5, {
                        scale: this.opt[1],
                        opacity: this.opt[3]
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.lb_num.node).to(.5, {
                        scale: this.opt[2]
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            r([l(cc.Node)], e.prototype, "gp_content", void 0),
            r([l(cc.Sprite)], e.prototype, "spr_ico", void 0),
            r([l(cc.Label)], e.prototype, "lb_num", void 0),
            r([s], e)
    }
        (cc.Component);
n.default = u;