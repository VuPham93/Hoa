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
    c = t("GameUtils"),
    s = t("BattleEvents"),
    l = cc._decorator,
    u = l.ccclass,
    p = (l.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(s.EventOnBattleStart.NAME, this.onEventOnBattleStart, this),
                    a.GlobalEvent.on(s.EventOnShowResult.NAME, this.onEventOnShowResult, this)
            },
            e.prototype.onDisable = function () {
                this.battleLogic = void 0,
                    this.levelData = void 0,
                    a.GlobalEvent.off(s.EventOnBattleStart.NAME, this.onEventOnBattleStart, this),
                    a.GlobalEvent.off(s.EventOnShowResult.NAME, this.onEventOnShowResult, this)
            },
            e.prototype.onEventOnShowResult = function () { },
            e.prototype.onEventOnBattleStart = function (t) {
                this.battleLogic = t.battleLogic,
                    this.levelData = t.levelData,
                    this.isReset = t.isReset,
                    this.refreshView()
            },
            e.prototype.refreshView = function () { },
            e.prototype.onEventOnPanelPop = function () {
                cc.tween(this.node).to(.3, {
                    opacity: 0
                }, {
                    easing: cc.easing.sineIn
                }).start()
            },
            e.prototype.onEventOnPanelClosed = function () {
                c.GameUtils.popLayer.childrenCount > 0 || cc.tween(this.node).to(.3, {
                    opacity: 255
                }, {
                    easing: cc.easing.sineOut
                }).start()
            },
            r([u], e)
    }
        (cc.Component));
n.default = p;