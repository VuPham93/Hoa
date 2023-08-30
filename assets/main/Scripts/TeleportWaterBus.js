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
var a = t("AniUtil"),
    c = t("Utils"),
    s = t("BusBase"),
    l = t("TileData"),
    u = cc._decorator,
    p = u.ccclass,
    f = (u.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.components = [],
                e
        }
        var n;
        return i(e, t),
            n = e,
            e.TryMove = function (t, e, o) {
                return new Promise(function (i) {
                    for (var r = t.tileFrom.nodebigboom, a = new cc.Node("stream_from_" + t.tileFrom.tileData.key), c = t.tileFrom.allComponents, s = 0; s < c.length; s++)
                        c[s].onDropBegin();
                    t.carrierFrom.node.position = cc.v2(0, 0),
                        t.carrierFrom.node.parent = a,
                        r.position = cc.v2(0, 0),
                        r.parent = a,
                        a.position = t.tileFrom.node.position;
                    var l = a.addComponent(n);
                    l.init(t.tileFrom, t.tileTo, t.carrierFrom, t.carrierData, o, i),
                        e.addChild(a),
                        l.streamMove()
                })
            },
            e.prototype.init = function (t, e, n, o, i, r) {
                for (var a in this.tileFrom = t, this.tileTo = e, this.carrierFrom = n, this.carrierData = o, this.gp_carrier = i, this.next = r, this.components = [], this.tileFrom.tileData.components.components) {
                    var c = this.tileFrom.tileData.components.components[a];
                    c instanceof l.Tile_Component_Wall || (this.components.push(c), delete this.tileFrom.tileData.components.components[a])
                }
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.tileTo = void 0,
                    this.carrierFrom = void 0,
                    this.carrierData = void 0,
                    this.components = []
            },
            e.prototype.streamMove = function () {
                var t = this;
                cc.tween(this.node).to(.4, {
                    scale: 0
                }, {
                    easing: cc.easing.sineIn
                }).set({
                    position: this.tileTo.node.position
                }).call(function () {
                    for (var e = t.components, n = 0; n < e.length; n++)
                        t.tileTo.tileData.components.push(e[n]);
                    t.carrierFrom.node.position = t.tileTo.node.position,
                        t.carrierFrom.node.parent = t.gp_carrier,
                        t.tileTo.tileData.carrier = t.carrierData;
                    var o = t.node.children[0];
                    t.tileTo.nodebigboom = o,
                        t.tileTo.carrier = t.carrierFrom,
                        t.tileFrom.carrier = void 0,
                        t.tileFrom.tileData.carrier = void 0,
                        t.tileTo.gp_content.scale = 0,
                        cc.tween(t.tileTo.gp_content).to(.3, {
                            scale: 1
                        }, {
                            easing: cc.easing.backOut
                        }).call(function () {
                            c.Utils.removeNode(t.node),
                                t.next && t.next()
                        }).start(),
                        a.AniUtil.aniOnce("prefab/game/battle/teleport_eff", t.tileTo.node.convertToWorldSpaceAR(cc.v2(0, 0)))
                }).start()
            },
            n = r([p], e)
    }
        (s.default));
n.default = f;