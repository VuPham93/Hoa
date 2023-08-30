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
var a = t("RewardPanel"),
    c = t("RewardUtils"),
    s = t("SwitchNode"),
    l = t("DataManager"),
    u = t("BundleResourceList"),
    p = t("GameUtils"),
    f = cc._decorator,
    h = f.ccclass,
    d = f.property,
    g = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_shovle = null,
                e.node_kettle = null,
                e.node_brush = null,
                e.node_infinite = null,
                e.switch_frame = null,
                e.node_flag = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                this.reward = p.GameUtils.getJsonConfig(u.Idx_Json.sign_in)[t + ""],
                    this.refreshStatus()
            },
            e.prototype.refreshStatus = function () {
                var t = this.reward.id,
                    e = l.dm.sign.curDayNum;
                this.switch_frame.showIndex = e == t ? 1 : e < t ? 0 : 2,
                    this.node_flag.active = t <= l.dm.sign.daysSigned
            },
            e.prototype.onCollect = function (t) {
                var e = [];
                this.reward.item1 > 0 && e.push({
                    type: c.RewardType.Shovel,
                    count: this.reward.item1 * t,
                    ico: this.node_shovle
                }),
                    this.reward.item2 > 0 && e.push({
                        type: c.RewardType.Kettle,
                        count: this.reward.item2 * t,
                        ico: this.node_kettle
                    }),
                    this.reward.item3 > 0 && e.push({
                        type: c.RewardType.Brush,
                        count: this.reward.item3 * t,
                        ico: this.node_brush
                    }),
                    this.reward.item4 > 0 && e.push({
                        type: c.RewardType.Infinite,
                        count: this.reward.item4 * t,
                        ico: this.node_infinite,
                        suffix: "phút"
                    });
                var n = {
                    needClick: !0,
                    double: !1,
                    next: function () { },
                    reward: e
                };
                a.default.show(n)
            },
            r([d(cc.Node)], e.prototype, "node_shovle", void 0),
            r([d(cc.Node)], e.prototype, "node_kettle", void 0),
            r([d(cc.Node)], e.prototype, "node_brush", void 0),
            r([d(cc.Node)], e.prototype, "node_infinite", void 0),
            r([d(s.default)], e.prototype, "switch_frame", void 0),
            r([d(cc.Node)], e.prototype, "node_flag", void 0),
            r([h], e)
    }
        (cc.Component);
n.default = g;