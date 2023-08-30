var t = require;
var e = module;
var n = exports;
var o, i = this && this.__extends || (o = function (t, e) {
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
    c = t("UIManager"),
    s = t("DailyTaskView"),
    l = t("SigninView"),
    u = t("StarChallengeView"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.slot_daily_task_view = null,
                e.signinView = null,
                e.starChallengeView = null,
                e.prefab_daily_task_view = null,
                e
        }

        return i(e, t),
            e.prototype.onLoad = function () {
                if (a.dm.dailyTask.curSeed) {
                    var t = c.ui.alignmentToMenu - 40;
                    this.slot_daily_task_view.y = t;
                    var e = cc.instantiate(this.prefab_daily_task_view);
                    this.dailyTaskView = e.getComponent(s.default),
                        e.parent = this.slot_daily_task_view
                }
            },
            e.prototype.onDisable = function () {
                clearTimeout(this._timeout)
            },
            r([h(cc.Node)], e.prototype, "slot_daily_task_view", void 0),
            r([h(l.default)], e.prototype, "signinView", void 0),
            r([h(u.default)], e.prototype, "starChallengeView", void 0),
            r([h(cc.Prefab)], e.prototype, "prefab_daily_task_view", void 0),
            r([f], e)
    }
    (cc.Component);
n.default = d;