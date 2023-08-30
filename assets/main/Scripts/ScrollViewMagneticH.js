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
            return e.node_content = null,
                e.itemPrefab = null,
                e.space_left = 0,
                e.space_right = 0,
                e.itemWidth = 0,
                e.itemHeight = 0,
                e.callback_onScrolling = null,
                e.callback_onPageChanged = null,
                e.scrollView = null,
                e.ctx = 0,
                e._dataList = [],
                e.numNull = 0,
                e.preItemCount = 0,
                e._pageIndex = 0,
                e
        }
        return i(e, t),
            Object.defineProperty(e.prototype, "pageIndex", {
                get: function () {
                    return this._pageIndex
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "content", {
                get: function () {
                    return this.scrollView.content
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onLoad = function () { },
            e.prototype.setup = function () {
                if (!this.scrollView)
                    if (this.scrollView = this.addComponent(cc.ScrollView), this.scrollView.horizontal = !0, this.scrollView.vertical = !1, this.scrollView.elastic = !1, this.node_content)
                        this.node_content.width = this.node.width, this.node_content.height = this.node.height, this.node_content.x = 0, this.node_content.y = 0, this.scrollView.content = this.node_content;
                    else {
                        var t = new cc.Node("content");
                        t.anchorX = 0,
                            t.width = this.node.width,
                            t.height = this.node.height,
                            this.node.addChild(t),
                            this.scrollView.content = t
                    }
            },
            e.prototype.onEnable = function () {
                this.registerEvent()
            },
            e.prototype.registerEvent = function () {
                this.scrollView.node.on("scrolling", this.onScrolling, this),
                    this.scrollView.node.on("scroll-ended", this.scroll_ended, this)
            },
            e.prototype.onDisable = function () {
                this.callback_onScrolling = void 0,
                    this.scrollView.scrollEvents.pop(),
                    this.scrollView.node.off("scroll-ended", this.scroll_ended, this),
                    this.scrollView.node.off("scrolling", this.onScrolling, this)
            },
            e.prototype.setting = function (t, e, n) {
                void 0 === e && (e = 0),
                    void 0 === n && (n = -1);
                var o = Math.ceil(this.node.width / this.itemWidth);
                this.numNull = n < 0 ? Math.floor(o / 2) : n,
                    this.preItemCount = o + 2,
                    this.preItemCount = Math.min(t.length, this.preItemCount),
                    this._pageIndex = e,
                    this._dataList = t,
                    c.Utils.removeAllChildren(this.scrollView.content);
                for (var i = [], r = 0, a = 0; a < this.preItemCount; a++)
                    i.push(r++);
                for (var s = 0; s < i.length; s++) {
                    a = i[s];
                    var l = cc.instantiate(this.itemPrefab);
                    l.name += a,
                        l.y = 0;
                    var u = a + e;
                    l.x = u * this.itemWidth,
                        l.width = this.itemWidth,
                        l.height = this.itemHeight,
                        this.scrollView.content.addChild(l),
                        this.refreshItemData(l)
                }
                this.scrollView.content.width = this._dataList.length * this.itemWidth;
                var p = this.scrollView.getMaxScrollOffset();
                this.scrollView.content.x = Math.max(-p.x, -e * this.itemWidth + this.itemWidth * this.numNull)
            },
            e.prototype.update = function () {
                if (this.ctx = this.scrollView.content.x, this.scrollView.isAutoScrolling()) {
                    var t = this.ctx - this.ltx;
                    !this.isPaging && Math.abs(t) < 5 && this.fixFocus(t > 0)
                }
                this.ltx = this.ctx
            },
            e.prototype.fixFocus = function (t) {
                var e = this;
                if (!this.backingOnTrack) {
                    this.backingOnTrack = !0,
                        this.scrollView.stopAutoScroll();
                    var n = Math.abs(this.ctx % this.itemWidth);
                    if (0 != n) {
                        null == t && (t = n > this.itemWidth / 2);
                        var o = Math.floor(this.scrollView.content.x / this.itemWidth) * this.itemWidth + (t ? 0 : this.itemWidth),
                            i = Math.abs(o) / this.scrollView.getMaxScrollOffset().x;
                        this.calcPageNum(o),
                            this.scrollView.scrollTo(cc.v2(i, 0), .4),
                            setTimeout(function () {
                                e.backingOnTrack = !1,
                                    e.scrollView.stopAutoScroll()
                            }, 400)
                    }
                }
            },
            e.prototype.onScrolling = function () {
                if (this.scrollView.content.x - this.ctx > 0)
                    for (var t = 0; t < this.preItemCount; t++)
                        (e = this.scrollView.content.children[t]).x + this.scrollView.content.x > this.node.width + 1.2 * this.itemWidth && (e.x = e.x - this.itemWidth * this.preItemCount, this.refreshItemData(e));
                else
                    for (t = this.preItemCount - 1; t >= 0; t--) {
                        var e;
                        (e = this.scrollView.content.children[t]).x + this.scrollView.content.x < 1.2 * -this.itemWidth && (e.x = e.x + this.itemWidth * this.preItemCount, this.refreshItemData(e))
                    }
                this.callback_onScrolling && this.callback_onScrolling(this.scrollView.content.position)
            },
            e.prototype.scroll_ended = function () { },
            e.prototype.calcPageNum = function (t) {
                var e = -Math.floor(t / this.itemWidth);
                this._pageIndex = e + this.numNull,
                    console.log("pagenum:", this._pageIndex)
            },
            e.prototype.onTouchStart = function (t) {
                this.xOnStart = t.touch.getLocationX(),
                    this.isPaging = !1
            },
            e.prototype.onTouchEnd = function (t) {
                t.touch.getLocationX(),
                    this.scrollView.isAutoScrolling() || this.fixFocus()
            },
            e.prototype.pageNext = function () {
                var t = Math.min(this._dataList.length - 1 - this.numNull, this._pageIndex + 1);
                this.pageToIndex(t)
            },
            e.prototype.pageLast = function () {
                var t = Math.max(this.numNull, this._pageIndex - 1);
                this.pageToIndex(t)
            },
            e.prototype.pageToIndex = function (t) {
                this.isPaging = !0,
                    null != t && (this._pageIndex = t);
                var e = this.scrollView.getMaxScrollOffset().x,
                    n = (this._pageIndex - this.numNull) * this.itemWidth / e;
                this.scrollView.scrollTo(cc.v2(n, 0), .4),
                    this.callback_onPageChanged && this.callback_onPageChanged()
            },
            e.prototype.refreshItemData = function (t) {
                var e = Math.floor(t.x / this.itemWidth);
                e < 0 || e >= this._dataList.length ? t.active = !1 : (t.active = !0, t.getComponent(a.default).onRefreshData(this._dataList[e], e))
            },
            r([u(cc.Node)], e.prototype, "node_content", void 0),
            r([u(cc.Prefab)], e.prototype, "itemPrefab", void 0),
            r([u(cc.Integer)], e.prototype, "space_left", void 0),
            r([u(cc.Integer)], e.prototype, "space_right", void 0),
            r([u(cc.Integer)], e.prototype, "itemWidth", void 0),
            r([u(cc.Integer)], e.prototype, "itemHeight", void 0),
            r([l], e)
    }
        (cc.Component);
n.default = p;