var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.DailyTaskConfig = n.Daily_Task_Type = void 0,
    function (t) {
        t[t.flower_blast = 1] = "flower_blast",
            t[t.flower_big_blast = 2] = "flower_big_blast",
            t[t.pot = 3] = "pot",
            t[t.green_house = 4] = "green_house",
            t[t.grass = 5] = "grass",
            t[t.hole = 6] = "hole",
            t[t.crow = 7] = "crow",
            t[t.mushroom = 8] = "mushroom",
            t[t.slime = 9] = "slime"
    }
        (n.Daily_Task_Type || (n.Daily_Task_Type = {}));
var o = function () {
    function t() { }
    return t.Reward_Daily_Task = [[{
        type: 0,
        count: 20
    }
    ], [{
        type: 0,
        count: 10
    }
    ], [{
        type: 0,
        count: 20
    }
    ], [{
        type: 0,
        count: 10
    }
    ], [{
        type: 6,
        count: 10,
        suffix: "phút"
    }, {
        type: -1,
        count: 1
    }
    ]],
        t.Reward_Double = [0, 1, 4],
        t.Detail_View = {
            Height_Min: 61,
            Height_Max: 550
        },
        t.Txt_Color = {
            1: "tím",
            2: "vàng",
            3: "hồng",
            4: "đỏ"
        },
        t.Check_Config = {
            flower_blast: {
                cpt_type: "bud",
                check_color: !0
            },
            flower_big_blast: {
                cpt_type: "big_bud",
                check_color: !0
            },
            pot: {
                cpt_type: "pot",
                check_color: !1
            },
            green_house: {
                cpt_type: "green_house",
                check_color: !1
            },
            grass: {
                cpt_type: "weed",
                check_color: !1
            },
            hole: {
                cpt_type: "molehill",
                check_color: !1
            },
            crow: {
                cpt_type: "crow",
                check_color: !1
            },
            mushroom: {
                cpt_type: "exploding_mushroom",
                check_color: !0
            },
            slime: {
                cpt_type: "slime",
                check_color: !1
            }
        },
        t
}
    ();
n.DailyTaskConfig = o;