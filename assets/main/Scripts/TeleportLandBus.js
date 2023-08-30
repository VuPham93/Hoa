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
var a = t("Utils"),
    c = t("BusBase"),
    s = t("ComponentBase"),
    l = cc._decorator,
    u = l.ccclass,
    p = (l.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.components = [],
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.TryMove = function (t, e) {
                for (var o = t.tileFrom.droper, i = new cc.Node("stream_from_" + t.tileFrom.tileData.key), r = t.tileFrom.gp_content.getComponentsInChildren(s.default), a = 0; a < r.length; a++)
                    r[a].onDropBegin();
                o.position = cc.v2(0, 0),
                    o.parent = i,
                    i.position = t.tileFrom.node.position;
                var c = i.addComponent(n);
                c.init(t.tileFrom, t.tileTo),
                    e.addChild(i),
                    c.streamMove()
            },
            e.prototype.init = function (t, e) {
                for (var n in this.tileFrom = t, this.tileTo = e, this.components = [], this.tileFrom.tileData.components.components) {
                    var o = this.tileFrom.tileData.components.components[n];
                    o.type.startsWith("wall") || (this.components.push(o), delete this.tileFrom.tileData.components.components[n])
                }
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.tileTo = void 0,
                    this.components = []
            },
            e.prototype.streamMove = function () {
                for (var t = this.components, e = 0; e < t.length; e++)
                    this.tileTo.tileData.components.push(t[e]);
                var n = this.node.children[0];
                this.tileTo.droper = n,
                    a.Utils.removeNode(this.node)
            },
            n = r([u], e)
    }
        (c.default));
n.default = p;