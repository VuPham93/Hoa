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
var a = t("GameModeCollectCell"),
    c = t("GameModeViewBase"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.arr_slots = [],
                e.prefab_task = null,
                e.option_slots = [[1, 1, 1, 255], [1, 1, 1, 128], [1, 1, 0, 100], [0, 0, 0, 0], [0, 0, 0, 0]],
                e.cells = [],
                e
        }
        return i(e, t),
            e.prototype.init = function (e) {
                t.prototype.init.call(this, e);
                for (var n = 0; n < e.levelData.properties.collect_flowers.length; n++) {
                    var o = e.levelData.properties.collect_flowers[n],
                        i = cc.instantiate(this.prefab_task).getComponent(a.default);
                    i.node.active = !0;
                    var r = Math.min(n, this.option_slots.length - 1);
                    if (i.init(o, this.option_slots[r]), n >= 5) {
                        var c = new cc.Node;
                        c.position = this.arr_slots[4].position,
                            c.parent = this.node,
                            this.arr_slots.push(c)
                    }
                    i.node.parent = this.arr_slots[n],
                        this.cells.push(i)
                }
            },
            e.prototype.onEventOnComponentDelete = function (t, e, n) {
                var o = this,
                    i = this.mapView.levelData.properties.firstTask;
                i && n == i.color && e == i.type && 0 != this.cells.length && (i.cur_num = Math.max(0, i.cur_num - 1), this.showEffect(t, function () {
                    o.cells[i.id - 1].onNumPlus();
                    for (var t = 0, e = 0; t < o.cells.length; t++) {
                        var n = o.cells[t];
                        if (n.task.cur_num <= 0)
                            cc.tween(n.node).to(.5, {
                                scale: 0
                            }, {
                                easing: cc.easing.sineIn
                            }).start();
                        else {
                            var r = n.node,
                                a = r.convertToWorldSpaceAR(cc.v2(0, 0));
                            r.position = o.arr_slots[e].convertToNodeSpaceAR(a),
                                r.parent = o.arr_slots[e];
                            var c = Math.min(o.option_slots.length - 1, e);
                            n.move(o.option_slots[c]),
                                e++
                        }
                    }
                }))
            },
            r([u([cc.Node])], e.prototype, "arr_slots", void 0),
            r([u(cc.Node)], e.prototype, "prefab_task", void 0),
            r([l], e)
    }
        (c.default);
n.default = p;