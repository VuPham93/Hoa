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
    c = t("Utils"),
    s = t("StarRoleCell"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.prefab_cell_normal = null,
                e.prefab_cell_me = null,
                e.callfunc_onStarClose = null,
                e
        }
        return i(e, t),
            e.prototype.start = function () {
                this.gp_content.height = 750,
                    a.dm.starChallenge.roleList.sort(function (t, e) {
                        return e.starNum - t.starNum
                    }),
                    this.refreshList()
            },
            e.prototype.refreshList = function () {
                c.Utils.removeAllChildren(this.gp_content);
                for (var t = 0; t < a.dm.starChallenge.roleList.length; t++) {
                    var e = a.dm.starChallenge.roleList[t],
                        n = cc.instantiate(0 == e.id ? this.prefab_cell_me : this.prefab_cell_normal),
                        o = n.getComponent(s.default);
                    n.y = 150 * -t,
                        n.x = 0,
                        this.gp_content.addChild(n),
                        o.refreshView(e)
                }
            },
            r([p(cc.Node)], e.prototype, "gp_content", void 0),
            r([p(cc.Prefab)], e.prototype, "prefab_cell_normal", void 0),
            r([p(cc.Prefab)], e.prototype, "prefab_cell_me", void 0),
            r([p(cc.callFunc)], e.prototype, "callfunc_onStarClose", void 0),
            r([u], e)
    }
        (cc.Component);
n.default = f;