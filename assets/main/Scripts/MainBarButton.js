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
var a = cc._decorator,
    c = a.ccclass,
    s = (a.property, function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.frame = null,
                e
        }
        return i(e, t),
            e.prototype.init = function () {
                this.gp_content = this.node.children[0],
                    this.frame = this.gp_content.children[0],
                    this.icon = this.gp_content.children[1],
                    this.title = this.gp_content.children[2],
                    this.node.width = 186,
                    this.node.height = 120,
                    this.icon.y = 30,
                    this.frame.children[1].opacity = 0,
                    this.icon.children[0].opacity = 255,
                    this.icon.children[1].opacity = 0,
                    this.title.scale = 1,
                    this.title.y = -43
            },
            e.prototype.onLoad = function () {
                this.init()
            },
            e.prototype.start = function () { },
            e.prototype.onSelected = function () {
                this.node.stopAllActions(),
                    cc.tween(this.node).to(.2, {
                        width: 226,
                        height: 140
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon).to(.2, {
                        y: 48
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon.children[0]).to(.2, {
                        opacity: 0,
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon.children[1]).to(.2, {
                        opacity: 255,
                        scale: 1
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.frame.children[1]).to(.2, {
                        opacity: 255
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.onUnSelected = function () {
                this.node.stopAllActions(),
                    cc.tween(this.node).to(.2, {
                        width: 186,
                        height: 120
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon).to(.2, {
                        y: 30
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon.children[0]).to(.2, {
                        opacity: 255,
                        scale: .77
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.icon.children[1]).to(.2, {
                        opacity: 0,
                        scale: .77
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.frame.children[1]).to(.2, {
                        opacity: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).start()
            },
            e.prototype.onBtnClicked = function () { },
            r([c], e)
    }
        (cc.Component));
n.default = s;