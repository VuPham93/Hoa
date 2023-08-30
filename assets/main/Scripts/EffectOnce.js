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
            return e.next = null,
                e.cbOnLoaded = null,
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.create = function (t, e, o) {
                var i = (new cc.Node).addComponent(n);
                return i.init(t, e, o),
                    i
            },
            e.createWithNode = function (t, e, o) {
                var i = t.addComponent(n);
                return i.initWithNode(e, o),
                    i
            },
            e.prototype.init = function (t, e, n) {
                var o = this;
                this.cbOnLoaded = e,
                    this.next = n;
                var i = t;
                a.Utils.loadSimpleBone("effect", t, function (e, n) {
                    var r = o.node.addComponent(dragonBones.ArmatureDisplay);
                    r.dragonAsset = e,
                        r.dragonAtlasAsset = n,
                        r.armatureName = i,
                        r.addEventListener(dragonBones.EventObject.COMPLETE, o.animationEventHandler, o),
                        r.playAnimation(t, 1),
                        o.cbOnLoaded && o.cbOnLoaded()
                })
            },
            e.prototype.initWithNode = function (t, e) {
                this.next = e;
                var n = this.node.getComponent(dragonBones.ArmatureDisplay);
                n.armatureName = t,
                    n.addEventListener(dragonBones.EventObject.COMPLETE, this.animationEventHandler, this),
                    n.playAnimation(t, 1)
            },
            e.prototype.animationEventHandler = function (t) {
                t.type == dragonBones.EventObject.COMPLETE && (this.next && this.next(), a.Utils.removeNode(this.node))
            },
            e.prototype.onLoad = function () { },
            e.prototype.start = function () { },
            n = r([s], e)
    }
        (cc.Component));
n.default = l;