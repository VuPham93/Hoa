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
var a = t("NumberAction"),
    c = t("Utils"),
    s = t("UIManager"),
    l = t("GameUtils"),
    u = cc._decorator,
    p = u.ccclass,
    f = u.property,
    h = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.lb_rank = null,
                e.lb_name = null,
                e.spr_avatar = null,
                e.gp_box = null,
                e.lb_num = null,
                e.prefab_tip = null,
                e
        }
        return i(e, t),
            e.prototype.refreshView = function (t) {
                var e = this.node.getSiblingIndex();
                this.lb_rank.string = e + 1 + "",
                    this.lb_name.string = c.Utils.solveString(t.user.name, 12),
                    c.Utils.updateNodeSpriteFrame(t.user.avatar, this.spr_avatar.node, !0),
                    a.default.numberTo(this.lb_num.node, t.starNum),
                    this.gp_box.active = 0 == e
            },
            e.prototype.onBtnBoxClicked = function () {
                if (!c.Utils.btnLock()) {
                    l.GameUtils.playSoundBtnClicked();
                    var t = cc.instantiate(this.prefab_tip);
                    t.position = this.gp_box.convertToWorldSpaceAR(cc.v2(0, 0)),
                        s.ui.addTip(t)
                }
            },
            r([f(cc.Node)], e.prototype, "gp_content", void 0),
            r([f(cc.Label)], e.prototype, "lb_rank", void 0),
            r([f(cc.Label)], e.prototype, "lb_name", void 0),
            r([f(cc.Sprite)], e.prototype, "spr_avatar", void 0),
            r([f(cc.Node)], e.prototype, "gp_box", void 0),
            r([f(cc.Label)], e.prototype, "lb_num", void 0),
            r([f(cc.Prefab)], e.prototype, "prefab_tip", void 0),
            r([p], e)
    }
        (cc.Component);
n.default = h;