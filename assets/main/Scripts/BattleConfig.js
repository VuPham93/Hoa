var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.BattleConfig = n.Dir_Angle = n.TgaEventType = n.TopresSubType = void 0,
    function (t) {
        t[t.Energy = 0] = "Energy",
            t[t.Coin = 1] = "Coin",
            t[t.Rank = 2] = "Rank"
    }
        (n.TopresSubType || (n.TopresSubType = {})),
    function (t) {
        t.Track = "track",
            t.UserSet = "user_set",
            t.UserSetOnce = "user_setOnce",
            t.UserAdd = "user_add",
            t.UserUnset = "user_unset",
            t.UserDel = "user_del"
    }
        (n.TgaEventType || (n.TgaEventType = {})),
    function (t) {
        t[t.N = 90] = "N",
            t[t.NE = 30] = "NE",
            t[t.SE = -30] = "SE",
            t[t.S = -90] = "S",
            t[t.SW = -120] = "SW",
            t[t.NW = 120] = "NW",
            t[t.Length = 121] = "Length"
    }
        (n.Dir_Angle || (n.Dir_Angle = {}));
var o = function () {
    function t() { }
    return t.X_Stage = 10,
        t.X_Cyc = 2,
        t.X_Cyc_Mod = 0,
        t.Coin_Reward_Ad = 100,
        t.Tile_Height = 92,
        t.Map_Tile_Num_H = 9,
        t.Map_Tile_Num_V = 10,
        t.Min_Num_Group = 3,
        t.Speed_Drop_Init = 8,
        t.Speed_Drop_Acc = 4,
        t.Strength_Boom1 = 10,
        t.Strength_Boom2 = 45,
        t.Speed_Stone_Init = 10,
        t.Speed_Stone_Acc = -2,
        t.Dir_Run = [[0, 5, 1, 4, 2], [1, 0, 2, 5, 3], [2, 3, 1, 4, 0], [3, 2, 4, 1, 5], [4, 3, 5, 0, 2], [5, 0, 4, 1, 2]],
        t.Score = {
            Strength: 10,
            BoomBase: 100,
            BigBoom: 1e3,
            BoomCombo: 10,
            SloganConfig: [3e4, 24e3, 18e3, 12e3, 6e3, 3e3]
        },
        t.Kettle_Strength_Add = {
            Center: 6,
            Neighbor: 3
        },
        t.Energy_Num_Full = 5,
        t.Energy_Grow_Cycle = 600,
        t.Price = {
            Energy: 100,
            Step: 100,
            Shovel: 200,
            Kettle: 220,
            Brush: 250,
            Relife: 100,
            RelifeRate: 2
        },
        t.Times = {
            Energy_Free: 5,
            Relife_Free: 1
        },
        t.Step_Num_Add = 5,
        t.Option_Item_Get = {
            1: {
                type: 1,
                tile: "Năng lượng",
                num: 5,
                num_ad: 5,
                desc: "Bổ sung lượt chơi",
                key_free_times: "energy_free_times",
                free_times_full: 5,
                price: t.Price.Energy,
                key_item_num: "energy",
                key_ad: "Energy"
            },
            2: {
                type: 2,
                tile: "Xẻng",
                num: 3,
                num_ad: 1,
                desc: "Dọn cỏ, đập kính, hái hoa",
                key_free_times: "shovel_free_times",
                free_times_full: 2,
                price: t.Price.Shovel,
                key_item_num: "shovel",
                key_ad: "Shovel"
            },
            3: {
                type: 3,
                tile: "Nước",
                num: 3,
                num_ad: 1,
                desc: "Tưới để hoa nở",
                key_free_times: "kettle_free_times",
                free_times_full: 2,
                price: t.Price.Kettle,
                key_item_num: "kettle",
                key_ad: "Kettle"
            },
            4: {
                type: 4,
                tile: "Bút",
                num: 3,
                num_ad: 1,
                desc: "Đổi màu hoa theo ý muốn",
                key_free_times: "brush_free_times",
                free_times_full: 2,
                price: t.Price.Brush,
                key_item_num: "brush",
                key_ad: "Brush"
            }
        },
        t.Color = {
            Bud: {
                1: cc.color(179, 0, 255),
                2: cc.color(255, 189, 0),
                3: cc.color(255, 133, 164),
                4: cc.color(232, 51, 0)
            }
        },
        t.Tile_Offset = [[[-1, 0], [-1, 1], [0, 1], [1, 0], [0, -1], [-1, -1]], [[-1, 0], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]],
        t.Stage = {
            Signin: 10,
            Max_Level_Open: 4960,
            Max_Level_All: 4960
        },
        t.Sounds_Preload = {
            honey_bee: ["honey_bee/beeblocker_hit", "honey_bee/beeblocker_hover_loop_1", "honey_bee/beeblocker_land_1", "honey_bee/beeblocker_restless_loop_1", "honey_bee/beeblocker_takeoff_1"],
            exploding_mushroom: ["exploding_mushroom/exploding_mushroom_appear_1", "exploding_mushroom/exploding_mushroom_destroy", "exploding_mushroom/exploding_mushroom_explode_1", "exploding_mushroom/exploding_mushroom_pollinated", "exploding_mushroom/beeblocker_takeoff_1"],
            green_house: ["green_house/green_house_clicked", "green_house/green_house_crack_1", "green_house/green_house_crack_2", "green_house/green_house_destroyed_1", "green_house/green_house_destroyed_2", "green_house/green_house_destroyed_3"],
            crow: ["crow/bird_fly", "crow/bird_hit", "crow/bird_pick"],
            molehill: ["mole_hill/mole_hill_1", "mole_hill/mole_hill_2", "mole_hill/mole_hill_3", "mole_hill/mole_hill_popup"],
            pile_of_leaves: ["pile_of_leaves/leaves_merge", "pile_of_leaves/leaves_move"],
            pot: ["pot/ceramic_break_1", "pot/ceramic_break_2", "pot/ceramic_break_3"],
            weed: ["weed/weed_1", "weed/weed_2", "weed/weed_3"],
            slime: ["slime/slime_destroyed_1", "slime/slime_destroyed_2", "slime/slime_hit_1", "slime/slime_hit_2", "slime/slime_hit_3"],
            snail: ["snail/snail_hit", "snail/snail_move_1", "snail/snail_move_2", "snail/snail_move_3", "snail/snail_stunned"]
        },
        t.WallValue = {
            OpenAll: 0,
            CloseAll: 63,
            LikeSlime: 28,
            Teleport_In: 8,
            Teleport_Out: 35,
            Spawner: 35
        },
        t.WallBeHurtDict = {
            Near: t.Tile_Height / 2 + 4,
            Boom: t.Tile_Height,
            BigBoom: t.Tile_Height / 4 * 7
        },
        t.Dir_Reverse = [3, 4, 5, 0, 1, 2],
        t.Dir_Stream = {
            n: 0,
            ne: 1,
            se: 2,
            s: 3,
            sw: 4,
            nw: 5
        },
        t.Water_Flow_Influence = {
            bud: 1,
            big_bud: 1,
            weed: -1
        },
        t.Grid_Num_WaterBucket = 4,
        t.Grid_Num_RollingStone = 3,
        t.Dir_Wall = {
            2: "east",
            3: "south",
            4: "west"
        },
        t.Wall_Dir = {
            east: 2,
            south: 3,
            west: 4
        },
        t.Rolling_Strong_Power = 10,
        t.Rolling_Strong_Behurt = 1,
        t
}
    ();
n.BattleConfig = o;