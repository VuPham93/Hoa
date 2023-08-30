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
    r = this && this.__spreadArrays || function () {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
            t += arguments[e].length;
        var o = Array(t),
            i = 0;
        for (e = 0; e < n; e++)
            for (var r = arguments[e], a = 0, c = r.length; a < c; a++, i++)
                o[i] = r[a];
        return o
    };
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.ChapterTileItemData = n.ChapterTileBoxData = n.ChapterTileTreeData = n.ChapterTileStageConnectorData = n.ChapterTileStageData = n.ChapterTileData = n.Chapter_Tile_Type = void 0;
var a,
    c = t("GameUtils"),
    s = t("ChapterConfig");
(function (t) {
    t[t.Stage = 1] = "Stage",
        t[t.Stage_Connector = 2] = "Stage_Connector",
        t[t.Tree = 3] = "Tree",
        t[t.Box = 4] = "Box",
        t[t.Item = 5] = "Item"
})(a = n.Chapter_Tile_Type || (n.Chapter_Tile_Type = {}));
var l = function () {
    function t() {
        this.tiles = {}
    }
    return t.prototype.init = function (t) {
        this.cId = t.cId,
            this.focusId = ~~t.focusId;
        var e = t.fragment;
        this.map_size = s.ChapterConfig.Map_Size;
        for (var n = 1, o = e.tiles.length - 1, i = 0; o >= 0; o--, i++)
            if (3 == (m = e.tiles[o]).length) {
                var a = new p(m);
                a.chapterId = this.cId,
                    a.idx = i,
                    this.tiles[a.key] = a,
                    n = a.stage + 1
            } else {
                var c = new f(m);
                c.chapterId = this.cId,
                    c.idx = i,
                    this.tiles[c.key] = c,
                    c.stage = n
            }
        var l = e.trees.tree_id;
        for (o = e.trees.tiles.length - 1; o >= 0; o--) {
            var u;
            u = 2 == (m = e.trees.tiles[o]).length ? r(m, [l]) : m;
            var y = new h(u);
            this.tiles[y.key] = y
        }
        var _ = new d(e.boxes);
        for (this.tiles[_.key] = _, o = e.items.length - 1; o >= 0; o--) {
            var m = e.items[o],
                v = new g(m);
            this.tiles[v.key] = v
        }
        for (var b in this.tiles) {
            var w = this.tiles[b];
            w.x = s.ChapterConfig.Tile_Size.width * (w.col + .5) + w.col * s.ChapterConfig.Tile_Space,
                w.y = this.map_size.height - s.ChapterConfig.Tile_Size.height * (w.row + .5 + (w.col % 2 == 1 ? .5 : 0))
        }
    },
        t
}
    ();
n.default = l;
var u = function () {
    function t(t) {
        this.row = t[0],
            this.col = t[1]
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function () {
            return this._key || (this._key = this.row + "_" + this.col),
                this._key
        },
        enumerable: !1,
        configurable: !0
    }),
        t
}
    ();
n.ChapterTileData = u;
var p = function (t) {
    function e(e) {
        var n = t.call(this, e) || this;
        return n.stage = e[2],
            n.type = a.Stage,
            n
    }
    return i(e, t),
        e
}
    (u);
n.ChapterTileStageData = p;
var f = function (t) {
    function e(e) {
        var n = t.call(this, e) || this;
        return n.type = a.Stage_Connector,
            n
    }
    return i(e, t),
        Object.defineProperty(e.prototype, "globalStageId", {
            get: function () {
                return c.GameUtils.getGlobalStageId(this.chapterId, this.stage)
            },
            enumerable: !1,
            configurable: !0
        }),
        e
}
    (u);
n.ChapterTileStageConnectorData = f;
var h = function (t) {
    function e(e) {
        var n = t.call(this, e) || this;
        return n.treeId = e[2],
            n.type = a.Tree,
            n
    }
    return i(e, t),
        e
}
    (u);
n.ChapterTileTreeData = h;
var d = function (t) {
    function e(e) {
        var n = t.call(this, e) || this;
        return n.type = a.Box,
            n
    }
    return i(e, t),
        e
}
    (u);
n.ChapterTileBoxData = d;
var g = function (t) {
    function e(e) {
        var n = t.call(this, e) || this;
        return n.itemId = e[2],
            n.type = a.Item,
            n
    }
    return i(e, t),
        e
}
    (u);
n.ChapterTileItemData = g;