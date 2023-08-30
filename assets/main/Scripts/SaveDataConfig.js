var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.SaveDataConfig = n.SaveKey = void 0,
    function (t) {
        t[t.Player = 0] = "Player",
            t[t.Word = 1] = "Word",
            t[t.Sign = 2] = "Sign",
            t[t.Guide = 3] = "Guide",
            t[t.Stage = 4] = "Stage",
            t[t.Daily_Task = 5] = "Daily_Task",
            t[t.Chapter = 6] = "Chapter",
            t[t.Once = 7] = "Once",
            t[t.Star_Challenge = 8] = "Star_Challenge"
    }
        (n.SaveKey || (n.SaveKey = {}));
var o = function () {
    function t() { }
    return t.SaveKeyAdapter = {
        Player: "player",
        Sign: "sign",
        Stage: "stage",
        Daily_Task: "dailyTask",
        Once: "once",
        Star_Challenge: "starChallenge"
    },
        t.keyTimesTamp = "timestamp",
        t
}
    ();
n.SaveDataConfig = o;