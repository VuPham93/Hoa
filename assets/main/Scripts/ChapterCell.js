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
var a = t("DataManager"),
    c = t("GameManager"),
    s = t("Utils"),
    l = t("BattleConfig"),
    u = t("GameUtils"),
    p = t("ChapterCellData"),
    f = t("ChapterConfig"),
    h = t("ChapterTileBase"),
    d = t("ChapterTileBoxes"),
    g = t("ChapterTileConnector"),
    y = t("ChapterTileGround"),
    _ = t("ChapterTileStage"),
    m = cc._decorator,
    v = m.ccclass,
    b = m.property,
    w = function (t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.gp_content = null,
                e.gp_layers = null,
                e.gp_ground = null,
                e.gp_tiles = null,
                e.prefab_tiles = [],
                e.prefab_ground = null,
                e.tiles = {},
                e
        }
        return i(e, t),
            e.prototype.refresh = function (t, e) {
                this.chapterView = e;
                for (var n = 0; n < this.gp_layers.childrenCount; n++)
                    s.Utils.removeAllChildren(this.gp_layers.children[n]);
                this.tiles = {};
                var o = c.default.instance.resList.json_chapter_fragments.length,
                    i = a.dm.chapter.getChapterFragmentId(t);
                null == i && (i = s.Utils.randomInt(0, o), a.dm.chapter.setChapterFragmentId(t, i));
                var r = {
                    cId: t,
                    fragment: c.default.instance.resList.json_chapter_fragments[i].json
                };
                this.chapterCellData = new p.default,
                    this.chapterCellData.init(r);
                var l = this.chapterCellData.map_size.width,
                    u = this.chapterCellData.map_size.height;
                for (this.gp_layers.width = l, this.gp_layers.height = u, this.gp_layers.position = cc.v2(-l / 2, 0), n = 0; n < this.gp_layers.childrenCount; n++) {
                    var f = this.gp_layers.children[n];
                    f.position = cc.v2(0, 0),
                        f.width = l,
                        f.height = u
                }
                var d = [];
                for (var g in this.chapterCellData.tiles) {
                    var _ = this.chapterCellData.tiles[g];
                    d.push(_)
                }
                for (d.sort(function (t, e) {
                    return t.y != e.y ? e.y - t.y : e.x - t.x
                }), n = 0; n < d.length; n++) {
                    _ = d[n];
                    var m = cc.instantiate(this.prefab_tiles[_.type - 1]);
                    m.name = _.key,
                        m.position = cc.v2(_.x, _.y);
                    var v = m.getComponent(h.default),
                        b = void 0;
                    if ([p.Chapter_Tile_Type.Stage, p.Chapter_Tile_Type.Stage_Connector].includes(_.type)) {
                        var w = cc.instantiate(this.prefab_ground);
                        w.position = m.position,
                            b = w.getComponent(y.default),
                            w.parent = this.gp_ground
                    }
                    v && v.init({
                        tileData: _,
                        chapterCell: this,
                        ground: b
                    }),
                        this.gp_tiles.addChild(m),
                        this.tiles[_.key] = v
                }
            },
            e.prototype.refreshAboutPos = function () {
                for (var t in this.tiles) {
                    var e = this.tiles[t];
                    e && e.refreshAboutPos()
                }
            },
            e.prototype.getStageTile = function (t) {
                for (var e in this.tiles) {
                    var n = this.tiles[e];
                    if (n instanceof _.default && n.data.stage == t)
                        return n
                }
            },
            e.prototype.getConnectorTiles = function (t) {
                var e = [];
                for (var n in this.tiles) {
                    var o = this.tiles[n];
                    o instanceof g.default && o.data.stage == t && e.push(o)
                }
                return e
            },
            e.prototype.getBoxes = function () {
                for (var t in this.tiles) {
                    var e = this.tiles[t];
                    if (e instanceof d.default)
                        return e
                }
            },
            e.prototype.checkOut = function (t) {
                var e = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                if (t) {
                    var n = this.chapterView.wposOfCamera.y + this.chapterView.camera.height;
                    e.y > n && (o = this.chapterCellData.cId - 2) > 0 && (this.node.y -= 2 * f.ChapterConfig.Map_Size.height, this.node.setSiblingIndex(1), this.node.name = "c_" + o, this.refresh(o, this.chapterView), this.refreshAboutPos())
                } else {
                    var o;
                    e.y < this.chapterView.wposOfCamera.y - f.ChapterConfig.Map_Size.height && (o = this.chapterCellData.cId + 2) <= u.GameUtils.getChapterId(l.BattleConfig.Stage.Max_Level_All) && (this.node.y += 2 * f.ChapterConfig.Map_Size.height, this.node.setSiblingIndex(0), this.node.name = "c_" + o, this.refresh(o, this.chapterView), this.refreshAboutPos())
                }
            },
            r([b(cc.Node)], e.prototype, "gp_content", void 0),
            r([b(cc.Node)], e.prototype, "gp_layers", void 0),
            r([b(cc.Node)], e.prototype, "gp_ground", void 0),
            r([b(cc.Node)], e.prototype, "gp_tiles", void 0),
            r([b([cc.Prefab])], e.prototype, "prefab_tiles", void 0),
            r([b(cc.Prefab)], e.prototype, "prefab_ground", void 0),
            r([v], e)
    }
        (cc.Component);
n.default = w;