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
var a = t("logger"),
    c = t("Utils"),
    s = t("BusBase"),
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
            e.show = function (t, e, o) {
                return new Promise(function (i) {
                    a.Logger.debug("from:", t.tileData.key, "/to:", e.tileData.key);
                    var r = new cc.Node("from_" + t.tileData.key);
                    t.droper.parent = r,
                        r.position = t.node.position,
                        r.addComponent(n).init(t, e, i),
                        o.addChild(r)
                })
            },
            e.prototype.init = function (t, e, n) {
                this.tileFrom = t,
                    this.tileTo = e,
                    this.next = n,
                    this.components = this.tileFrom.tileData.components.pullBud()
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.tileTo = void 0,
                    this.components = []
            },
            e.prototype.onLoad = function () {
                var t = this;
                cc.tween(this.node).to(.5, {
                    position: this.tileTo.node.position
                }, {
                    easing: cc.easing.sineInOut
                }).call(function () {
                    for (var e = 0; e < t.components.length; e++)
                        t.tileTo.tileData.components.push(t.components[e]);
                    t.tileTo.droper = t.node.children[0],
                        t.tileTo.onDropEnd(),
                        t.next && t.next()
                }).call(function () {
                    c.Utils.removeNode(t.node)
                }).start()
            },
            e.prototype.move = function () { },
            e.prototype.check = function () { },
            n = r([u], e)
    }
        (s.default));
n.default = p;