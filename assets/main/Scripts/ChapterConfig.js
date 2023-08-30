var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.ChapterConfig = n.Stage_Ground_Status = void 0,
    function (t) {
        t[t.grey = 0] = "grey",
            t[t.white = 1] = "white",
            t[t.brown = 2] = "brown",
            t[t.red = 3] = "red"
    }
        (n.Stage_Ground_Status || (n.Stage_Ground_Status = {}));
var o = function () {
    function t() { }
    return t.Map_Tile_Num_H = 5,
        t.Map_Tile_Num_V = 24,
        t.Tile_Size = cc.size(163, 108),
        t.Tile_Dist_H = 120,
        t.Stage_Per_Chapter = 20,
        t.Tile_Space = t.Tile_Dist_H - t.Tile_Size.width,
        t.Map_Size = cc.size(t.Tile_Size.width * t.Map_Tile_Num_H + t.Tile_Space * (t.Map_Tile_Num_H - 1), t.Tile_Size.height * t.Map_Tile_Num_V),
        t.Boxes_Config = [{
            star: 30,
            coin: 50
        }, {
            star: 45,
            coin: 100
        }, {
            star: 60,
            coin: 400
        }
        ],
        t.Items_Offset_Y = [cc.v2(-50, 32), cc.v2(50, 32)],
        t
}
    ();
n.ChapterConfig = o;