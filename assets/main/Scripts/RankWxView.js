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
var a = t("RankUtils"),
    c = cc._decorator,
    s = c.ccclass,
    l = c.property,
    u = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.subContextView = null,
                e
        }
        return i(e, t),
            e.prototype.onEnable = function () {
                var t = {
                    event: a.RankUtils.OpenDataContextCommands.kInitSubContext,
                    data: {
                        stageWidth: this.subContextView.node.width,
                        stageHeight: this.subContextView.node.height
                    }
                };
                a.RankUtils.postMessage(t),
                    setTimeout(function () {
                        a.RankUtils.postMessage({
                            event: a.RankUtils.OpenDataContextCommands.kShowGlobalRank,
                            data: {}
                        })
                    }, 0)
            },
            e.prototype.onDisable = function () {
                this.hideWXList()
            },
            e.prototype.hideWXList = function () {
                a.RankUtils.postMessage({
                    event: a.RankUtils.OpenDataContextCommands.kHideGlobalFriendRankLayer,
                    data: {}
                })
            },
            r([l(cc.SubContextView)], e.prototype, "subContextView", void 0),
            r([s], e)
    }
        (cc.Component);
n.default = u;