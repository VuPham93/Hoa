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
var a = t("UIManager"),
    c = t("BattleStatusBar"),
    s = t("GameModeBar"),
    l = t("ItemsBar"),
    u = t("ScoreBar"),
    p = t("StepBar"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.stepBar = null,
                e.itemsBar = null,
                e.gameModeBar = null,
                e.scoreBar = null,
                e.statusBar = null,
                e
        }
        return i(e, t),
            e.prototype.start = function () {
                this.statusBar.node.y = a.ui.alignmentToMenu;
                this.statusBar.show();
            },
            r([d(p.default)], e.prototype, "stepBar", void 0),
            r([d(l.default)], e.prototype, "itemsBar", void 0),
            r([d(s.default)], e.prototype, "gameModeBar", void 0),
            r([d(u.default)], e.prototype, "scoreBar", void 0),
            r([d(c.default)], e.prototype, "statusBar", void 0),
            r([h], e)
    }
        (cc.Component);
n.default = g;