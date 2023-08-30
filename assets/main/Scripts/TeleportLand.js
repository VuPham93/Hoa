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
    c = t("BattleEvents"),
    s = t("Teleport"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ani = null,
                e
        }
        return i(e, t),
            e.prototype.init = function (e, n) {
                t.prototype.init.call(this, e, n),
                    this.nextStatus = 0,
                    this.ani.play("teleport_land_in_3")
            },
            e.prototype.onEnable = function () {
                a.GlobalEvent.on(c.EventOnTeleportLandOpen.NAME, this.onEventOnTeleportLandOpen, this),
                    a.GlobalEvent.on(c.EventOnTeleportLandClose.NAME, this.onEventOnTeleportLandClose, this)
            },
            e.prototype.onDisable = function () {
                a.GlobalEvent.off(c.EventOnTeleportLandOpen.NAME, this.onEventOnTeleportLandOpen, this),
                    a.GlobalEvent.off(c.EventOnTeleportLandClose.NAME, this.onEventOnTeleportLandClose, this)
            },
            e.prototype.onEventOnTeleportLandOpen = function (t) {
                t.pid == this.pid && (this.nextStatus = 1)
            },
            e.prototype.onEventOnTeleportLandClose = function (t) {
                var e = this;
                t.pid == this.pid && (clearTimeout(this._timeout), this._timeout = setTimeout(function () {
                    e.nextStatus = 0
                }, 500))
            },
            e.prototype.update = function (e) {
                if (t.prototype.update.call(this, e), -1 != this.nextStatus) {
                    if (this.nextStatus == this.curStatus)
                        return;
                    switch (this.curStatus = this.nextStatus, this.curStatus) {
                        case 0:
                            this.ani.play("teleport_land_in_2");
                            break;
                        case 1:
                            this.ani.play("teleport_land_in_4")
                    }
                    this.nextStatus = -1
                }
            },
            r([p(cc.Animation)], e.prototype, "ani", void 0),
            r([u], e)
    }
        (s.default);
n.default = f;