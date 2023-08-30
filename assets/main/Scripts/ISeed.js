var t = require;
var e = module;
var n = exports;
var o = this && this.__decorate || function (t, e, n, o) {
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
var i = cc._decorator,
    r = i.ccclass,
    a = (i.property, function () {
        function t() { }
        return t.Get = function (t, e) {
            return t.GetJson()[e]
        },
            t.GetAll = function (t) {
                return t.GetJson()
            },
            o([r], t)
    }
        ());
n.default = a;