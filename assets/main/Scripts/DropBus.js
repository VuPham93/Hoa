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
    c = t("BattleConfig"),
    s = t("BusBase"),
    l = t("LevelData"),
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
            e.TryDrop = function (t, e) {
                var o = t.droper;
                if (o) {
                    var i = n.FindPlaceHolder(t);
                    if (i) {
                        for (var r = new cc.Node("from_" + t.tileData.key), a = t.allComponents, c = 0; c < a.length; c++)
                            a[c].onDropBegin();
                        o.parent = r,
                            r.position = t.node.position,
                            r.addComponent(n).init(t, i),
                            e.addChild(r)
                    }
                }
            },
            e.FindPlaceHolder = function (t) {
                for (var e, n = [l.Neighbor_Dir.S, l.Neighbor_Dir.SW, l.Neighbor_Dir.SE], o = [l.Neighbor_Dir.N, l.Neighbor_Dir.NE, l.Neighbor_Dir.NW], i = 0; i < n.length; i++) {
                    var r = n[i];
                    if (t.tileData.checkDirOpen(r)) {
                        var a = t.neighbors[r];
                        if (a) {
                            var c = a.tileData;
                            if (!c.groundData.isBudSpawner && !c.components.isBlok) {
                                var s = o[i];
                                if (c.checkDirOpen(s) && !a.placeholder_droping) {
                                    if (r == l.Neighbor_Dir.SE) {
                                        var u = t.neighbors[l.Neighbor_Dir.NE];
                                        if (u && (u.tileData.isDrop || u.placeholder_droping)) {
                                            var p = u.tileData.checkDirOpen(l.Neighbor_Dir.S),
                                                f = a.tileData.checkDirOpen(l.Neighbor_Dir.N);
                                            if (p && f)
                                                continue
                                        }
                                    } else if (r == l.Neighbor_Dir.SW) {
                                        var h = t.neighbors[l.Neighbor_Dir.NW];
                                        if (h && (h.tileData.isDrop || h.placeholder_droping)) {
                                            var d = h.tileData.checkDirOpen(l.Neighbor_Dir.S),
                                                g = a.tileData.checkDirOpen(l.Neighbor_Dir.N);
                                            if (d && g)
                                                continue
                                        }
                                    }
                                    e = a;
                                    break
                                }
                            }
                        }
                    }
                }
                return e
            },
            e.prototype.init = function (t, e) {
                this.tileFrom = t,
                    this.tileTo = e,
                    this.tileTo.placeholder_droping = !0,
                    this.fromnpos = this.tileFrom.node.position,
                    this.fullDist = c.BattleConfig.Tile_Height,
                    this.components = this.tileFrom.tileData.components.pullDroper(),
                    this.curDist = 0,
                    this.speed = c.BattleConfig.Speed_Drop_Init
            },
            e.prototype.onDisable = function () {
                this.tileFrom = void 0,
                    this.tileTo = void 0,
                    this.components = []
            },
            e.prototype.move = function (t) {
                if (this.curDist += this.speed * t * c.BattleConfig.Tile_Height, this.tileFrom.tileData.col == this.tileTo.tileData.col)
                    this.node.position = cc.v2(this.fromnpos.x, this.fromnpos.y - this.curDist);
                else {
                    var e = a.Utils.angleToRadian(30),
                        n = this.tileTo.tileData.col > this.tileFrom.tileData.col ? 1 : -1;
                    this.node.position = cc.v2(this.fromnpos.x + this.curDist * Math.cos(e) * n, this.fromnpos.y - this.curDist * Math.sin(e))
                }
                this.speed += c.BattleConfig.Speed_Drop_Acc * t
            },
            e.prototype.check = function () {
                if (this.curDist >= this.fullDist) {
                    this.tileTo.placeholder_droping = !1;
                    var t = n.FindPlaceHolder(this.tileTo);
                    if (t) {
                        t.placeholder_droping = !0,
                            this.tileFrom = this.tileTo,
                            this.tileTo = t,
                            this.curDist = 0,
                            this.fromnpos = this.node.position;
                        var e = this.tileTo.node.position;
                        this.fullDist = e.sub(this.fromnpos).len()
                    } else {
                        for (var o = 0; o < this.components.length; o++)
                            this.tileTo.tileData.components.push(this.components[o]);
                        this.tileTo.droper = this.node.children[0],
                            this.tileTo.onDropEnd(),
                            a.Utils.removeNode(this.node)
                    }
                }
            },
            n = r([p], e)
    }
        (s.default));
n.default = f;