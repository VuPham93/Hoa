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
var a = t("MainBarButton"),
    c = t("MainEvents"),
    s = t("MainDefines"),
    l = t("GameUtils"),
    u = t("G"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.gp_btns = null,
                e.btnCount = 0,
                e._curIndex = s.Main_Page_Index.Stage,
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "curIndex", {
                get: function () {
                    return this._curIndex
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onLoad = function () { },
            e.prototype.show = function (t, e) {
                this.btnCount = this.gp_btns.childrenCount,
                    this._onEventMainPageChanged(t),
                    this.gp_content.active = !0,
                    this.gp_content.y = -this.gp_content.height,
                    this.gp_content.stopAllActions(),
                    cc.tween(this.gp_content).to(.2, {
                        y: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        var n = new c.EventMainPageChanged;
                        n.pageIndex = t,
                            n.now = !0,
                            n.param = e,
                            u.GlobalEvent.dispatchEvent(n)
                    }).start()
            },
            e.prototype.hide = function () {
                var t = this;
                this.gp_content.stopAllActions(),
                    cc.tween(this.gp_content).to(.2, {
                        y: 1.2 * -this.gp_content.height
                    }, {
                        easing: cc.easing.sineIn
                    }).call(function () {
                        t.gp_content.active = !1
                    }).start()
            },
            e.prototype.onEnable = function () {
                u.GlobalEvent.on(c.EventMainPageChanged.NAME, this.onEventMainPageChanged, this),
                    u.GlobalEvent.on(c.EventMainPageDraging.NAME, this.onEventMainPageDraging, this),
                    u.GlobalEvent.on(c.EventShowMainBar.NAME, this.onEventShowMainBar, this)
            },
            e.prototype.onDisable = function () {
                u.GlobalEvent.off(c.EventMainPageChanged.NAME, this.onEventMainPageChanged, this),
                    u.GlobalEvent.off(c.EventMainPageDraging.NAME, this.onEventMainPageDraging, this),
                    u.GlobalEvent.off(c.EventShowMainBar.NAME, this.onEventShowMainBar, this)
            },
            e.prototype.onEventMainPageDraging = function () { },
            e.prototype.onEventMainPageChanged = function (t) {
                this._onEventMainPageChanged(t.pageIndex)
            },
            e.prototype._onEventMainPageChanged = function (t) {
                this._curIndex = t,
                    this.refreshButtons()
            },
            e.prototype.refreshButtons = function () {
                for (var t = 0; t < this.btnCount; t++) {
                    var e = this.gp_btns.children[t];
                    this._curIndex == t ? e.getComponent(a.default).onSelected() : e.getComponent(a.default).onUnSelected()
                }
            },
            e.prototype.onBtnClicked = function (t) {
                var e = t.currentTarget.getSiblingIndex();
                this.switchPage(e)
            },
            e.prototype.switchPage = function (t) {
                l.GameUtils.playSoundBtnClicked(),
                    this.gp_btns.children[t].getComponent(a.default).onBtnClicked();
                var e = new c.EventMainPageChanged;
                e.pageIndex = t,
                    u.GlobalEvent.dispatchEvent(e)
            },
            e.prototype.onEventShowMainBar = function (t) {
                t.show ? this.show(this._curIndex) : this.hide()
            },
            r([h(cc.Node)], e.prototype, "gp_content", void 0),
            r([h(cc.Node)], e.prototype, "gp_btns", void 0),
            r([f], e)
    }
        (cc.Component);
n.default = d;