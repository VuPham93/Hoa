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
    c = t("BattleConfig"),
    s = t("BattleEvents"),
    l = t("TileData"),
    u = t("DropBus"),
    p = cc._decorator,
    f = p.ccclass,
    h = (p.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.portList = {},
                e
        }
        return i(e, t),
            e.prototype.init = function (t) {
                var e,
                    n;
                for (var o in this.mapView = t, this.mapView.tiles) {
                    var i = this.mapView.tiles[o];
                    if (i)
                        if ((null === (e = i.tileData.groundData.teleport) || void 0 === e ? void 0 : e.type) == l.Teleport_Type.Land_In) {
                            var r = i.tileData.groundData.teleport.pair_id + "";
                            (a = this.portList[r]) || (a = {
                                in: void 0,
                                out: void 0
                            }, this.portList[r] = a),
                                a.in = i
                        } else if ((null === (n = i.tileData.groundData.teleport) || void 0 === n ? void 0 : n.type) == l.Teleport_Type.Land_Out) {
                            var a;
                            r = i.tileData.groundData.teleport.pair_id + "",
                                (a = this.portList[r]) || (a = {
                                    in: void 0,
                                    out: void 0
                                }, this.portList[r] = a),
                                a.out = i
                        }
                }
            },
            e.prototype.afterDrop = function () {
                for (var t in this.portList) {
                    var e = this.portList[t].out;
                    u.default.FindPlaceHolder(e) && (this.portList[t].in.tileData.groundData.wall = c.BattleConfig.WallValue.Teleport_In, a.GlobalEvent.dispatchEvent(new s.EventOnTeleportLandOpen(~~t)))
                }
            },
            e.prototype.getOuter = function (t) {
                var e = t + "";
                return this.portList[e].out
            },
            r([f], e)
    }
        (cc.Component));
n.default = h;