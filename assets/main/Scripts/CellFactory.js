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
    c = cc._decorator,
    s = c.ccclass,
    l = (c.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.offset = 0,
                e.creating = !1,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.createVCell = function (t, e, n, o, i) {
                return this._createCell(!0, t, e, n, o, i)
            },
            e.createHCell = function (t, e, n, o, i) {
                return this._createCell(!1, t, e, n, o, i)
            },
            e._createCell = function (t, e, o, i, r, a) {
                var c = new cc.Node("fct" + (e.id || ""));
                return c.width = i,
                    c.height = r,
                    t ? (c.x = 0, c.y = - (o + .5) * r) : (c.x = (o + .5) * i, c.y = 0),
                    c.addComponent(n).init(e, t, a),
                    c
            },
            e.prototype.init = function (t, e, n) {
                this.data = t,
                    this.isV = e,
                    this.cellT = n
            },
            e.prototype.start = function () { },
            e.prototype.lateUpdate = function () {
                this.refreshView()
            },
            e.prototype.refreshView = function () {
                var t = this;
                if (!this.creating)
                    if (this.isV) {
                        var e = (c = this.node.parent).parent,
                            n = c.y + this.node.y,
                            o = n - this.node.height / 2,
                            i = n + this.node.height / 2,
                            r = e.height / 2;
                        this.node.childrenCount > 0 ? (o > r || i < -r) && cc.tween(this.node.children[this.node.childrenCount - 1]).to(.4, {
                            opacity: 0
                        }, {
                            easing: cc.easing.sineInOut
                        }).call(function () {
                            a.Utils.removeAllChildren(t.node)
                        }).start() : o <= r && i >= -r && (this.creating = !0, this.cellT.create(this.data).then(function (e) {
                            e.width = t.node.width,
                                e.height = t.node.height,
                                e.opacity = 0,
                                e.scale = .8,
                                e.name = t.data.index + "",
                                t.node.addChild(e),
                                cc.tween(e).to(.3, {
                                    opacity: 255,
                                    scale: 1
                                }, {
                                    easing: cc.easing.sineOut
                                }).start(),
                                t.creating = !1
                        }))
                    } else {
                        e = (c = this.node.parent).parent;
                        var c,
                            s = c.x + this.node.x,
                            l = s - this.node.width / 2,
                            u = s + this.node.width / 2;
                        r = e.width / 2,
                            this.node.childrenCount > 0 ? (l > r + this.offset || u < -r - this.offset) && a.Utils.removeAllChildren(this.node) : l <= r + this.offset && u >= -r - this.offset && (this.creating = !0, this.cellT.create(this.data).then(function (e) {
                                t.node.addChild(e),
                                    t.creating = !1
                            }))
                    }
            },
            n = r([s], e)
    }
        (cc.Component));
n.default = l;