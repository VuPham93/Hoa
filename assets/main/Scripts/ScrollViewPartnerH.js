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
    c = t("logger"),
    s = t("Utils"),
    l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    f = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.node_content = null,
                e.itemPrefab = null,
                e.pageModel = !1,
                e.space_left = 0,
                e.space_right = 0,
                e.itemWidth = 0,
                e.itemHeight = 0,
                e.callback_onScrolling = null,
                e.callback_onPageChanged = null,
                e.scrollView = null,
                e.cty = 0,
                e._dataList = [],
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
                if (!this.scrollView) {
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
                    this.getComponent(cc.Sprite) ? c.Logger.debug("[ScrollViewPartnerH onLoad] 点击存在sprite组件导致mask添加失败") : this.node.addComponent(cc.Mask).type = cc.Mask.Type.RECT
                }
            },
            e.prototype.onEnable = function () {
                this.registerEvent()
            },
            e.prototype.registerEvent = function () {
                var t = new cc.Component.EventHandler;
                t.target = this.node,
                    t.handler = "onScrolling",
                    t.component = "ScrollViewPartnerH",
                    this.scrollView.scrollEvents.push(t),
                    this.pageModel && (this.scrollView.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !1), this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !1), this.scrollView.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, !1))
            },
            e.prototype.onDisable = function () {
                this.callback_onScrolling = void 0,
                    this.scrollView.scrollEvents.pop(),
                    this.pageModel && (this.scrollView.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !1), this.scrollView.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this, !1), this.scrollView.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this, !1))
            },
            e.prototype.setting = function (t, e) {
                void 0 === e && (e = 0),
                    this._pageIndex = e,
                    this._dataList = t,
                    this.scrollView.content.x = -e * this.itemWidth,
                    s.Utils.removeAllChildren(this.scrollView.content),
                    this.preItemCount = Math.ceil(this.node.width / this.itemWidth) + 2,
                    this.preItemCount = Math.min(this._dataList.length, this.preItemCount);
                for (var n = [], o = 0; o < this.preItemCount; o++)
                    n.push(o);
                this.preItemCount > 1 && (n[0] = 1, n[1] = 0);
                for (var i = 0; i < n.length; i++) {
                    o = n[i];
                    var r = cc.instantiate(this.itemPrefab);
                    r.name += o,
                        r.y = 0;
                    var a = o + e;
                    r.x = a * this.itemWidth,
                        r.width = this.itemWidth,
                        r.height = this.content.height,
                        this.scrollView.content.addChild(r),
                        this.refreshItemData(r)
                }
                this.scrollView.content.width = this._dataList.length * this.itemWidth
            },
            e.prototype.update = function () {
                this.cty = this.scrollView.content.x
            },
            e.prototype.onScrolling = function () {
                if (this.scrollView.content.x - this.cty > 0)
                    for (var t = 0; t < this.preItemCount; t++)
                        (e = this.scrollView.content.children[t]).x + this.scrollView.content.x > this.node.width + 1.2 * this.itemWidth && (e.x = e.x - this.itemWidth * this.preItemCount, this.refreshItemData(e));
                else
                    for (t = this.preItemCount - 1; t >= 0; t--) {
                        var e;
                        (e = this.scrollView.content.children[t]).x + this.scrollView.content.x < 1.2 * -this.itemWidth && (e.x = e.x + this.itemWidth * this.preItemCount, this.refreshItemData(e))
                    }
                this.callback_onScrolling && this.callback_onScrolling(this.scrollView.content.position)
            },
            e.prototype.onTouchStart = function (t) {
                this.xOnStart = t.touch.getLocationX()
            },
            e.prototype.onTouchEnd = function (t) {
                var e = t.touch.getLocationX() - this.xOnStart;
                this.xOnStart = void 0,
                    e < -100 ? this.pageNext() : e > 100 ? this.pageLast() : this.pageToIndex()
            },
            e.prototype.pageNext = function () {
                this._pageIndex = Math.min(this._dataList.length - 1, ++this._pageIndex),
                    this.pageToIndex()
            },
            e.prototype.pageLast = function () {
                this._pageIndex = Math.max(0, --this._pageIndex),
                    this.pageToIndex()
            },
            e.prototype.pageToIndex = function (t) {
                null != t && (this._pageIndex = t);
                var e = this._pageIndex / (this._dataList.length - 1);
                this.scrollView.scrollTo(cc.v2(e, 0), .4),
                    this.callback_onPageChanged && this.callback_onPageChanged()
            },
            e.prototype.refreshItemData = function (t) {
                var e = Math.floor(t.x / this.itemWidth);
                e < 0 || e >= this._dataList.length ? t.active = !1 : (t.active = !0, t.getComponent(a.default).onRefreshData(this._dataList[e], e))
            },
            r([p(cc.Node)], e.prototype, "node_content", void 0),
            r([p(cc.Prefab)], e.prototype, "itemPrefab", void 0),
            r([p(cc.Boolean)], e.prototype, "pageModel", void 0),
            r([p(cc.Integer)], e.prototype, "space_left", void 0),
            r([p(cc.Integer)], e.prototype, "space_right", void 0),
            r([p(cc.Integer)], e.prototype, "itemWidth", void 0),
            r([p(cc.Integer)], e.prototype, "itemHeight", void 0),
            r([u], e)
    }
        (cc.Component);
n.default = f;