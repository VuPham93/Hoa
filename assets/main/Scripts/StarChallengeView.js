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
    c = t("G"),
    s = t("AniUtil"),
    l = t("Utils"),
    u = t("GameUtils"),
    p = t("StarChallengeConfig"),
    f = t("StarChallengeEvents"),
    h = t("StarChallengePanel"),
    d = cc._decorator,
    g = d.ccclass,
    y = d.property,
    _ = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.ico_star = null,
                e.lb_tile = null,
                e.node_flag = null,
                e
        }
        return i(e, t),
            e.prototype.onLoad = function () {
                this.refreshView()
            },
            e.prototype.onEnable = function () {
                c.GlobalEvent.on(f.EventOnChallengeJoinMatch.NAME, this.onEventOnChallengeJoinMatch, this),
                    c.GlobalEvent.on(f.EventOnChallengeAward.NAME, this.onEventOnChallengeAward, this),
                    c.GlobalEvent.on(f.EventOnChallengeClose.NAME, this.onEventOnChallengeClose, this)
            },
            e.prototype.onDisable = function () {
                clearInterval(this._interval),
                    c.GlobalEvent.off(f.EventOnChallengeJoinMatch.NAME, this.onEventOnChallengeJoinMatch, this),
                    c.GlobalEvent.off(f.EventOnChallengeAward.NAME, this.onEventOnChallengeAward, this),
                    c.GlobalEvent.on(f.EventOnChallengeClose.NAME, this.onEventOnChallengeClose, this)
            },
            e.prototype.refreshView = function () {
                switch (clearInterval(this._interval), p.StarChallengeConfig.curStatus) {
                    case p.Star_Challenge_Status.Desc:
                        this.lb_tile.string = "Tranh tài",
                            this.node_flag.active = !1;
                        break;
                    case p.Star_Challenge_Status.Ing:
                        this.node_flag.active = !1,
                            this.refreshCountDown(),
                            this._interval = setInterval(this.refreshCountDown.bind(this), 1e3);
                        break;
                    case p.Star_Challenge_Status.Award:
                        this.lb_tile.string = "Đã kết thúc",
                            this.node_flag.active = !0,
                            s.AniUtil.aniLoopShaking(this.node_flag);
                        break;
                    case p.Star_Challenge_Status.End:
                        this.lb_tile.string = "Đã kết thúc",
                            this.node_flag.active = !1
                }
            },
            e.prototype.onBtnClicked = function () {
                l.Utils.btnLock() || (u.GameUtils.playSoundBtnClicked(), h.default.show(this.gp_content))
            },
            e.prototype.refreshCountDown = function () {
                var t = a.dm.starChallenge.time_match_start,
                    e = l.Utils.getCurTime(),
                    n = t + 60 * p.StarChallengeConfig.Match_Cycle - e;
                this.lb_tile.string = l.Utils.formatTime(Math.max(0, n), !0),
                    n < 0 && this.refreshView()
            },
            e.prototype.onEventOnChallengeJoinMatch = function () {
                this.refreshView()
            },
            e.prototype.onEventOnChallengeAward = function () {
                this.refreshView()
            },
            e.prototype.onEventOnChallengeClose = function () {
                this.refreshView()
            },
            r([y(cc.Node)], e.prototype, "gp_content", void 0),
            r([y(cc.Node)], e.prototype, "ico_star", void 0),
            r([y(cc.Label)], e.prototype, "lb_tile", void 0),
            r([y(cc.Node)], e.prototype, "node_flag", void 0),
            r([g], e)
    }
        (cc.Component);
n.default = _;