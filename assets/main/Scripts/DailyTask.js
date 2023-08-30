var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.DailyTaskSeed = void 0;
var o = t("DailyTaskConfig");
n.DailyTaskSeed = function (t) {
    Object.assign(this, t),
        this.typeId = o.Daily_Task_Type[this.type]
};