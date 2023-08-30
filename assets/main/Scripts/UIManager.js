var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.ui = n.UILayer = void 0;
var o,
    GlobalDefines = t("GlobalDefines"),
    r = t("logger"),
    a = t("Utils");
(function (t) {
    t[t.Panel = 0] = "Panel",
        t[t.Topres = 1] = "Topres",
        t[t.LoadingBar = 2] = "LoadingBar",
        t[t.MessageBox = 3] = "MessageBox",
        t[t.Guide = 4] = "Guide",
        t[t.Banner = 5] = "Banner",
        t[t.X = 6] = "X",
        t[t.Effect = 7] = "Effect",
        t[t.Effect2 = 8] = "Effect2",
        t[t.Tip = 9] = "Tip"
})(o = n.UILayer || (n.UILayer = {}));
var c = function () {
    function t() {
        this.hurryLoading = null
    }
    return Object.defineProperty(t, "ins", {
        get: function () {
            return this._ins || (this._ins = new t),
                this._ins
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.onLoad = function (t, e) {
            this.node = t,
                this.hurryLoading = e
        },
        t.prototype.onInit = function () {
            this.hideLoading()
        },
        t.prototype.showLoading = function (t) {
            void 0 === t && (t = !0),
                this.hurryLoading.show(t)
        },
        t.prototype.hideLoading = function () {
            this.hurryLoading.hide()
        },
        Object.defineProperty(t.prototype, "isLoading", {
            get: function () {
                return this.hurryLoading.isLoading
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.checkNode = function () {
            for (var t in r.Logger.warn("[UIManager checkNode] width:", this.node.width, "/height:", this.node.height), o)
                isNaN(t) && this.addNullNode(this.node, t)
        },
        t.prototype.addNullNode = function (t, e) {
            if (t) {
                var n = t.getChildByName(e);
                if (n)
                    return console.warn("[UIManager addNullNode] 节点" + e + "已经存在"), n;
                var o = new cc.Node(e);
                return t.addChild(o),
                    o.width = o.parent.width,
                    o.height = o.parent.height,
                    o.x = 0,
                    o.y = 0,
                    o
            }
            console.warn("[UIManager addNullNode] " + t + "不存在")
        },
        t.prototype.getLayer = function (t) {
            var e = o[t];
            return this.node.getChildByName(e)
        },
        t.prototype.addGuide = function (t) {
            t.x = 0,
                t.y = 0,
                t.width = GlobalDefines.GlobalDefines.ScreenWidth,
                t.height = GlobalDefines.GlobalDefines.ScreenHeight,
                this.getLayer(o.Guide).addChild(t)
        },
        t.prototype.popView = function (t, e) {
            void 0 === e && (e = !1),
                t.x = 0,
                t.y = 0,
                t.width = GlobalDefines.GlobalDefines.ScreenWidth,
                t.height = GlobalDefines.GlobalDefines.ScreenHeight,
                e ? this.getLayer(o.Panel).insertChild(t, 0) : t.parent = this.getLayer(o.Panel)
        },
        t.prototype.tip = function (t) {
            t.parent = this.getLayer(o.Tip)
        },
        t.prototype.layerClear = function (t) {
            a.Utils.removeAllChildren(this.getLayer(t))
        },
        t.prototype.addEffect = function (t, e) {
            void 0 === e && (e = !1),
                this.getLayer(o.Effect).childrenCount >= 800 && a.Utils.removeNode(this.getLayer(o.Effect).children[0]),
                e ? this.getLayer(o.Effect).insertChild(t, 0) : t.parent = this.getLayer(o.Effect)
        },
        t.prototype.addEffectAR = function (t, e) {
            void 0 === e && (e = !1);
            var n = this.getLayer(o.Effect).convertToNodeSpaceAR(t.position);
            t.position = n,
                this.addEffect(t, e)
        },
        t.prototype.addTip = function (t) {
            var e = this.getLayer(o.Tip),
                n = e.convertToNodeSpaceAR(t.position);
            t.position = n,
                t.parent = e
        },
        t.prototype.onSwitchScene = function () {
            this.layerClear(o.Panel),
                this.layerClear(o.Tip)
        },
        Object.defineProperty(t.prototype, "safeAreaTop", {
            get: function () {
                return GlobalDefines.GlobalDefines.MenuButtonLogic.top + GlobalDefines.GlobalDefines.MenuButtonLogic.height + (100 - GlobalDefines.GlobalDefines.MenuButtonLogic.height) / 2
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "alignmentToMenu", {
            get: function () {
                var top = GlobalDefines.GlobalDefines.MenuButtonLogic.top,
                    height = GlobalDefines.GlobalDefines.MenuButtonLogic.height;
                return GlobalDefines.GlobalDefines.ScreenHeight / 2 - top - height / 2
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.default = c,
    n.ui = c.ins;