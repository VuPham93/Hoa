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
}),
    n.Idx_Json = void 0;
var a = t("Utils"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property;
(function (t) {
    t[t.config = 0] = "config",
        t[t.score = 1] = "score",
        t[t.shop = 2] = "shop",
        t[t.sign_in = 3] = "sign_in",
        t[t.challenge = 4] = "challenge",
        t[t.obj = 5] = "obj",
        t[t.scene = 6] = "scene",
        t[t.level = 7] = "level",
        t[t.tree = 8] = "tree",
        t[t.goal = 9] = "goal",
        t[t.daily_task = 10] = "daily_task",
        t[t.level_config = 11] = "level_config",
        t[t.star_challenge = 12] = "star_challenge",
        t[t.user = 13] = "user"
})(n.Idx_Json || (n.Idx_Json = {}));
var u = function (t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.json_config = [],
            e.json_chapter_fragments = [],
            e.frames_reward_static = [],
            e.frames_color_points = [],
            e.frames_color_petals = [],
            e.frames_bigbud = [],
            e.prefab_eff_boom = null,
            e.frames_flower = {},
            e.frames_mushroom = {},
            e.frames_slogan = {},
            e.frames_stream = {},
            e
    }
    return i(e, t),
        e.prototype.setFlower = function (t, e, n, o) {
            var i = this,
                r = e + "_" + n,
                c = this.frames_flower[r];
            if (c)
                return t.getComponent(cc.Sprite).spriteFrame = c, void (o && o());
            var s = "images/tiles/b_" + r;
            a.Utils.updateNodeSpriteFrame(s, t, !1, function (t) {
                i.frames_flower[r] = t
            }),
                o && o()
        },
        e.prototype.setMushroom = function (t, e, n, o) {
            var i = this,
                r = e + "_" + n,
                c = this.frames_mushroom[r];
            if (c)
                return t.getComponent(cc.Sprite).spriteFrame = c, void (o && o());
            var s = "images/tiles/m_" + r;
            a.Utils.updateNodeSpriteFrame(s, t, !1, function (t) {
                i.frames_mushroom[r] = t
            }),
                o && o()
        },
        e.prototype.setSlogan = function (t, e) {
            var n = this,
                o = e + "",
                i = this.frames_slogan[o];
            if (i)
                t.getComponent(cc.Sprite).spriteFrame = i;
            else {
                var r = "images/bud_boom/appraise_" + e;
                a.Utils.updateNodeSpriteFrame(r, t, !1, function (t) {
                    n.frames_slogan[o] = t
                })
            }
        },
        e.prototype.setStreamFrame = function (t, e) {
            var n = this,
                o = e + "",
                i = this.frames_stream[o];
            if (i)
                t.spriteFrame = i;
            else {
                var r = "images/streame/str_" + e;
                a.Utils.updateNodeSpriteFrame(r, t.node, !1, function (t) {
                    n.frames_stream[o] = t
                })
            }
        },
        r([l([cc.JsonAsset])], e.prototype, "json_config", void 0),
        r([l([cc.JsonAsset])], e.prototype, "json_chapter_fragments", void 0),
        r([l([cc.SpriteFrame])], e.prototype, "frames_reward_static", void 0),
        r([l([cc.SpriteFrame])], e.prototype, "frames_color_points", void 0),
        r([l([cc.SpriteFrame])], e.prototype, "frames_color_petals", void 0),
        r([l([cc.SpriteFrame])], e.prototype, "frames_bigbud", void 0),
        r([l(cc.Prefab)], e.prototype, "prefab_eff_boom", void 0),
        r([s], e)
}
    (cc.Component);
n.default = u;