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
    c = t("LevelData"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.sprFrame = null,
                e.idx = 0,
                e.timer = 0,
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                switch (t) {
                    case c.Neighbor_Dir.SW:
                        this.node.angle = 0;
                        break;
                    case c.Neighbor_Dir.S:
                        this.node.angle = 60;
                        break;
                    case c.Neighbor_Dir.SE:
                        this.node.angle = 120;
                        break;
                    case c.Neighbor_Dir.NE:
                        this.node.angle = 180;
                        break;
                    case c.Neighbor_Dir.N:
                        this.node.angle = 240;
                        break;
                    case c.Neighbor_Dir.NW:
                        this.node.angle = 300
                }
            },
            e.prototype.update = function () {
                ++this.timer % 5 == 0 && (this.idx++, a.default.instance.resList.setStreamFrame(this.sprFrame, this.idx % 20))
            },
            r([u(cc.Sprite)], e.prototype, "sprFrame", void 0),
            r([l], e)
    }
        (cc.Component);
n.default = p;