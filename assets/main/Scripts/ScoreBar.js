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
    c = t("SwitchNode"),
    s = t("G"),
    l = t("GameUtils"),
    u = t("BattleCompBase"),
    p = t("BattleEvents"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.progressbar = null,
                e.gp_words = null,
                e.lb_score = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                for (var t = 0; t < this.gp_words.childrenCount; t++)
                    this.gp_words.children[t].x = -20
            },
            e.prototype.refreshView = function () {
                var t = this.gp_words.width;
                this.scoreList = [~~this.levelData.properties.star_1, ~~this.levelData.properties.star_2, ~~this.levelData.properties.star_3];
                for (var e = this.levelData.properties.star_3, n = this.gp_words.childrenCount - 1; n >= 0; n--) {
                    var o = this.gp_words.children[n].getComponent(c.default);
                    o.showIndex = 1;
                    var i = this.scoreList[n];
                    cc.tween(o.node).delay(.3 - .1 * n).to(.3, {
                        x: i / e * t
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
                }
            },
            e.prototype.onEnable = function () {
                t.prototype.onEnable.call(this),
                    s.GlobalEvent.on(p.EventOnScoreChanged.NAME, this.onEventOnScoreChanged, this)
            },
            e.prototype.onDisable = function () {
                t.prototype.onDisable.call(this),
                    s.GlobalEvent.off(p.EventOnScoreChanged.NAME, this.onEventOnScoreChanged, this)
            },
            e.prototype.onEventOnScoreChanged = function (t) {
                cc.tween(this.progressbar).to(.1, {
                    progress: t.score / ~~this.levelData.properties.star_3
                }, {
                    easing: cc.easing.sineIn
                }).start(),
                    a.default.numberTo(this.lb_score.node, t.score);
                for (var e = 0; e < this.gp_words.childrenCount; e++) {
                    var n = this.gp_words.children[e].getComponent(c.default);
                    t.score >= this.scoreList[e] && 1 == n.showIndex && (l.GameUtils.playSFX("star_reward"), this.aniFlip(n, e))
                }
            },
            e.prototype.aniFlip = function (t, e) {
                var n = this;
                cc.tween(t.node).to(.2, {
                    scaleX: 0
                }, {
                    easing: cc.easing.sineIn
                }).call(function () {
                    t.showIndex = 0,
                        n.levelData.starNum = Math.max(n.levelData.starNum, e + 1)
                }).to(.2, {
                    scaleX: 1
                }, {
                    easing: cc.easing.sineIn
                }).start()
            },
            r([d(cc.ProgressBar)], e.prototype, "progressbar", void 0),
            r([d(cc.Node)], e.prototype, "gp_words", void 0),
            r([d(cc.Label)], e.prototype, "lb_score", void 0),
            r([h], e)
    }
        (u.default);
n.default = g;