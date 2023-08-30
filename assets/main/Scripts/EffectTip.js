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
    c = t("GlobalEvents"),
    s = t("GlobalTouch"),
    l = t("Utils"),
    u = t("GameUtils"),
    p = t("BattleEvents"),
    f = cc._decorator,
    h = f.ccclass,
    d = (f.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.prototype.onLoad = function () {
                var t = this,
                    e = this.node.children[0];
                this.effNode = cc.instantiate(e);
                var n = cc.instantiate(e);
                n.parent = this.effNode;
                for (var o = n.getComponentsInChildren(cc.Sprite), i = 0; i < o.length; i++) {
                    var r = o[i];
                    r.node.active && (r.dstBlendFactor = cc.macro.BlendFactor.ONE)
                }
                this.effNode.position = this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
                    u.GameUtils.addEffectAR(this.effNode),
                    cc.tween(this.effNode).to(.4, {
                        scale: 1.2
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.3, {
                        scale: 1.05
                    }, {
                        easing: cc.easing.sineOut
                    }).to(.3, {
                        scale: 1.2
                    }, {
                        easing: cc.easing.sineOut
                    }).delay(.1).call(function () {
                        t.removeSlowly()
                    }).start(),
                    n.opacity = 0,
                    cc.tween(n).to(.4, {
                        opacity: 100
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(s.EventGlobalTouch.NAME, this.onEventGlobalTouch, this),
                    a.GlobalEvent.on(s.EventGlobalMove.NAME, this.onEventGlobalMove, this),
                    a.GlobalEvent.on(c.EventOnPanelPop.NAME, this.onEventOnPanelPop, this),
                    a.GlobalEvent.on(p.EventOnPausing.NAME, this.onEventOnPausing, this),
                    a.GlobalEvent.on(p.EventOnTipListChanged.NAME, this.onEventOnTipListChanged, this),
                    a.GlobalEvent.on(c.EventOnSwitchScene.NAME, this.onEventOnSwitchScene, this)
            },
            e.prototype.onDisable = function () {
                this.remove(),
                    a.GlobalEvent.off(s.EventGlobalTouch.NAME, this.onEventGlobalTouch, this),
                    a.GlobalEvent.off(s.EventGlobalMove.NAME, this.onEventGlobalMove, this),
                    a.GlobalEvent.off(c.EventOnPanelPop.NAME, this.onEventOnPanelPop, this),
                    a.GlobalEvent.off(p.EventOnPausing.NAME, this.onEventOnPausing, this),
                    a.GlobalEvent.off(p.EventOnTipListChanged.NAME, this.onEventOnTipListChanged, this),
                    a.GlobalEvent.off(c.EventOnSwitchScene.NAME, this.onEventOnSwitchScene, this)
            },
            e.prototype.onEventOnSwitchScene = function () {
                this.remove()
            },
            e.prototype.onEventOnTipListChanged = function () {
                this.remove()
            },
            e.prototype.onEventOnPausing = function (t) {
                t.status && this.remove()
            },
            e.prototype.onEventGlobalTouch = function () {
                this.remove()
            },
            e.prototype.onEventGlobalMove = function () {
                this.remove()
            },
            e.prototype.onEventOnPanelPop = function () {
                this.remove()
            },
            e.prototype.remove = function () {
                l.Utils.removeNode(this.effNode),
                    this.effNode = void 0,
                    cc.isValid(this.node) && this.node.removeComponent(n)
            },
            e.prototype.removeSlowly = function () {
                var t = this;
                cc.isValid(this.effNode) && cc.tween(this.effNode).to(.4, {
                    scale: 1,
                    opacity: 0
                }, {
                    easing: cc.easing.sineOut
                }).call(function () {
                    cc.isValid(t.effNode) && t.remove()
                }).start()
            },
            n = r([h], e)
    }
        (cc.Component));
n.default = d;