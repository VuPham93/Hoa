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
var a = t("BasePanel"),
    c = t("logger"),
    s = t("Utils"),
    l = t("GuideUtils"),
    u = t("GameUtils"),
    p = cc._decorator,
    f = p.ccclass,
    h = p.property,
    d = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.background = null,
                e.gp_content = null,
                e.node_desc = null,
                e.gp_bar = null,
                e.gp_compts = null,
                e.hand = null,
                e.shadow = null,
                e.gp_ico = null,
                e.actorNode = [],
                e
        }
        return i(e, t),
            e.prototype.init = function (t, e) {
                this.mapView = t,
                    this.next = e,
                    this.mapView.levelData.pausing = !0,
                    this.hand.active = !1,
                    this.shadow.active = !1,
                    this.gp_bar.y = -this.gp_bar.height,
                    this.background.opacity = 0,
                    this.node_desc.scale = 0
            },
            e.prototype.onLoad = function () {
                this.aniIn()
            },
            e.prototype.aniIn = function () {
                var t = this;
                cc.tween(this.background).to(.3, {
                    opacity: 120
                }, {
                    easing: cc.easing.sineOut
                }).start(),
                    cc.tween(this.gp_bar).delay(.3).to(.3, {
                        y: 0
                    }, {
                        easing: cc.easing.sineOut
                    }).call(function () {
                        t.refreshView(),
                            cc.tween(t.gp_ico).to(.1, {
                                scale: .8
                            }, {
                                easing: cc.easing.sineOut
                            }).to(.1, {
                                scale: 1.2
                            }, {
                                easing: cc.easing.sineInOut
                            }).to(.1, {
                                scale: .9
                            }, {
                                easing: cc.easing.sineInOut
                            }).to(.1, {
                                scale: 1
                            }, {
                                easing: cc.easing.sineIn
                            }).start(),
                            cc.tween(t.gp_ico.children[0]).call(function () {
                                t.gp_ico.children[0].scale = 0
                            }).delay(.1).by(.15, {
                                scale: 1
                            }, {
                                easing: cc.easing.backOut
                            }).start()
                    }).delay(.8).call(function () {
                        cc.tween(t.node_desc).to(.3, {
                            scale: 1
                        }, {
                            easing: cc.easing.backOut
                        }).start()
                    }).start()
            },
            e.prototype.refreshView = function () {
                var t = this,
                    e = function (e) {
                        var o = n.mapView.tiles[e];
                        if (!o)
                            return "continue";
                        var i = o.tileData.components[n._comptName];
                        if (i) {
                            var r = o.getComptNode(i.type);
                            if (!r)
                                return c.Logger.error("[ShovelUsePanel onLoad] 根据type没有找到对应的组件节点！", i.type, " key:", e), "continue";
                            l.GuideUtils.changeParent(n.actorNode, r, n.gp_compts, function () {
                                t.actorNode[t.actorNode.length - 1].key = o.tileData.key;
                                var e = r.addComponent(cc.Button),
                                    n = new cc.Component.EventHandler;
                                n.target = t.node,
                                    n.handler = "onComptClicked",
                                    n.customEventData = o.tileData.key,
                                    n.component = t._className,
                                    e.clickEvents.push(n)
                            })
                        }
                    },
                    n = this;
                for (var o in this.mapView.tiles)
                    e(o);
                this.thisKey = this.getFirstTile(),
                    this.thisKey && this._onSelected()
            },
            e.prototype.getFirstTile = function () {
                var t = [];
                for (var e in this.mapView.levelData.tiles)
                    t.push(this.mapView.levelData.tiles[e]);
                for (var n = Math.floor(t.length / 2), o = n, i = n + 1, r = [], a = 0; a < n + 1; a++)
                    o - a >= 0 && r.push(o - a), i + a < t.length && r.push(i + a);
                for (a = 0; a < r.length; a++) {
                    var c = t[r[a]];
                    if (c && c.components[this._comptName])
                        return c.key
                }
            },
            e.prototype.onComptClicked = function (t) {
                var e = t.target.getComponent(cc.Button);
                this.thisKey = e.clickEvents[0].customEventData,
                    this._onSelected()
            },
            e.prototype._onSelected = function () {
                for (var t, e = 0; e < this.actorNode.length; e++) {
                    var n = this.actorNode[e];
                    if (n.key == this.thisKey) {
                        this.thisObj = n,
                            this.thisIdx = e,
                            t = this.thisObj.node.position;
                        break
                    }
                }
                this.hand.active = !0,
                    this.shadow.active = !0,
                    cc.tween(this.shadow).to(.4, {
                        position: t
                    }, {
                        easing: cc.easing.sineOut
                    }).start(),
                    cc.tween(this.hand).to(.5, {
                        position: t
                    }, {
                        easing: cc.easing.backOut
                    }).start()
            },
            e.prototype.goBack = function () {
                l.GuideUtils.actorGoBack(this.actorNode)
            },
            e.prototype.onBtnCloseClicked = function () {
                s.Utils.btnLock() || (u.GameUtils.playSoundBtnClicked(), this.goBack(), this.close())
            },
            e.prototype.onDisable = function () {
                this.mapView.levelData.pausing = !1,
                    this.next && this.next()
            },
            r([h(cc.Node)], e.prototype, "background", void 0),
            r([h(cc.Node)], e.prototype, "gp_content", void 0),
            r([h(cc.Node)], e.prototype, "node_desc", void 0),
            r([h(cc.Node)], e.prototype, "gp_bar", void 0),
            r([h(cc.Node)], e.prototype, "gp_compts", void 0),
            r([h(cc.Node)], e.prototype, "hand", void 0),
            r([h(cc.Node)], e.prototype, "shadow", void 0),
            r([h(cc.Node)], e.prototype, "gp_ico", void 0),
            r([f], e)
    }
        (a.default);
n.default = d;