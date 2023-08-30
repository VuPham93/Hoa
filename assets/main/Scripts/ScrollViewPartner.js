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
var a = t("ScrollViewItemBase"),
    c = t("Utils"),
    s = cc._decorator,
    l = s.ccclass,
    u = s.property,
    p = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.itemPrefab = null,
                e.scrollView = null,
                e.cty = 0,
                e._dataList = [],
                e.preItemCount = 0,
                e.itemHeight = 0,
                e
        }
        return i(e, t),
            e.prototype.getScrollView = function () {
                return this.scrollView
            },
            e.prototype.onLoad = function () {
                if (this.node.anchorY = 1, !this.scrollView) {
                    this.itemHeight = Math.floor(this.itemPrefab.height),
                        this.itemPrefab.removeFromParent(),
                        this.itemPrefab.anchorY = 1,
                        this.itemPrefab.anchorX = .5,
                        this.itemPrefab.height = this.itemHeight,
                        this.scrollView = this.addComponent(cc.ScrollView),
                        this.scrollView.horizontal = !1,
                        this.scrollView.vertical = !0;
                    var t = new cc.Node("content");
                    t.anchorY = 1,
                        t.width = this.node.width,
                        t.height = 0,
                        this.node.addChild(t),
                        this.scrollView.content = t,
                        this.node.addComponent(cc.Mask).type = cc.Mask.Type.RECT;
                    var e = new cc.Component.EventHandler;
                    e.target = this.node,
                        e.handler = "onScrolling",
                        e.component = "ScrollViewPartner",
                        this.scrollView.scrollEvents.push(e)
                }
            },
            e.prototype.onDisable = function () { },
            Object.defineProperty(e.prototype, "dataList", {
                get: function () {
                    return this._dataList
                },
                set: function (t) {
                    var e = this;
                    this._dataList = t,
                        setTimeout(function () {
                            e.scrollView.content.y = 0,
                                c.Utils.removeAllChildren(e.scrollView.content),
                                e.preItemCount = Math.ceil(e.node.height / e.itemHeight) + 2,
                                e.preItemCount = Math.min(e._dataList.length, e.preItemCount);
                            for (var t = 0; t < e.preItemCount; t++) {
                                var n = cc.instantiate(e.itemPrefab);
                                n.x = 0,
                                    n.y = -t * e.itemHeight,
                                    e.scrollView.content.addChild(n),
                                    e.refreshItemData(n)
                            }
                            e.scrollView.content.height = e._dataList.length * e.itemHeight
                        }, 0)
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.setDataListToBottom = function (t) {
                var e = this;
                this._dataList = t,
                    setTimeout(function () {
                        e.scrollView.content.y = 0,
                            c.Utils.removeAllChildren(e.scrollView.content),
                            e.preItemCount = Math.ceil(e.node.height / e.itemHeight) + 2,
                            e.preItemCount = Math.min(e._dataList.length, e.preItemCount);
                        for (var t = 0; t < e.preItemCount; t++) {
                            var n = cc.instantiate(e.itemPrefab);
                            n.x = 0,
                                n.y = -t * e.itemHeight,
                                e.scrollView.content.addChild(n),
                                e.refreshItemData(n)
                        }
                        e.scrollView.content.height = e._dataList.length * e.itemHeight,
                            e.scrollView.scrollToBottom(0),
                            e.onScrolling(void 0)
                    }, 0)
            },
            e.prototype.update = function () {
                this.cty = this.scrollView.content.y
            },
            e.prototype.onScrolling = function () {
                if (this.scrollView.content.y - this.cty > 0)
                    for (var t = 0; t < this.preItemCount; t++)
                        (e = this.scrollView.content.children[t]).y + this.scrollView.content.y > this.itemHeight && (e.y = e.y - this.itemHeight * this.preItemCount, this.refreshItemData(e));
                else
                    for (t = this.preItemCount - 1; t >= 0; t--) {
                        var e;
                        (e = this.scrollView.content.children[t]).y + this.scrollView.content.y < -this.node.height && (e.y = e.y + this.itemHeight * this.preItemCount, this.refreshItemData(e))
                    }
            },
            e.prototype.refreshItemData = function (t) {
                var e = -Math.ceil(t.y / this.itemHeight);
                e < 0 || e >= this._dataList.length ? t.active = !1 : (t.active = !0, t.getComponent(a.default).onRefreshData(this._dataList[e]))
            },
            e.prototype.scrollToIndexItem = function (t) {
                var e = t / (this._dataList.length - 1);
                console.log("ScrollViewPartner scrollToIndexItem", t, e, this._dataList.length),
                    this.scrollView.scrollTo(cc.v2(0, -e), .25)
            },
            Object.defineProperty(e.prototype, "children", {
                get: function () {
                    return this.scrollView.content.children
                },
                enumerable: !1,
                configurable: !0
            }),
            r([u(cc.Node)], e.prototype, "itemPrefab", void 0),
            r([l], e)
    }
        (cc.Component);
n.default = p;