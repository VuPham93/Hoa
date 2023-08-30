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
    c = t("ComponentBase"),
    s = t("ComponentPileofleaves"),
    l = t("TileData"),
    u = t("ScoreToast"),
    p = cc._decorator,
    f = p.ccclass,
    h = (p.property, function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        var n;
        return i(e, t),
            n = e,
            e.Show = function (t, e, o) {
                var i = new cc.Node("from_" + t.tileData.key),
                    r = t.mapView.levelData.componentSeeds[l.Tile_Component_Type.pile_of_leaves].layer + 2;
                t.gp_layer[r].children[0].parent = i,
                    i.position = t.node.position,
                    i.addComponent(n).init(t, e),
                    o.addChild(i)
            },
            e.prototype.init = function (t, e) {
                this.tileFrom = t,
                    this.tileTo = e
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.tileTo = void 0
            },
            e.prototype.onLoad = function () {
                this.moveTo()
            },
            e.prototype.moveTo = function () {
                var t = this;
                cc.tween(this.node).to(.5, {
                    position: this.tileTo.node.position
                }, {
                    easing: cc.easing.backOut
                }).call(function () {
                    for (var e = t.tileTo.mapView.levelData.componentSeeds[l.Tile_Component_Type.pile_of_leaves].layer + 2, n = t.node.children[0], o = t.tileTo.gp_layer[e], i = o.getComponentsInChildren(c.default), r = 0; r < i.length; r++) {
                        var a = i[r];
                        if (a instanceof s.default) {
                            var p = a.component.seed.score;
                            p > 0 && (t.tileTo.mapView.levelData.score += p, u.default.show(p, t.node.convertToWorldSpaceAR(cc.v2(0, 0))))
                        }
                        i[r]._remove()
                    }
                    n.parent = o,
                        t.tileTo.onDropEnd()
                }).call(function () {
                    a.Utils.removeNode(t.node)
                }).start()
            },
            e.prototype.changeWay = function (t) {
                this.tileTo = t,
                    this.node.stopAllActions(),
                    this.moveTo()
            },
            n = r([f], e)
    }
        (cc.Component));
n.default = h;