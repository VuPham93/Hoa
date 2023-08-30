var t = require;
var e = module;
var n = exports;
var o = this && this.__spreadArrays || function () {
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
    n.Logger = void 0;
var i = function () {
    function t() { }
    return t.Init = function (t) {
        this.DEBUG_LOG = t
    },
        t.debug = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            t.DEBUG_LOG && console.log.apply(console, e)
        },
        t.info = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            console.log.apply(console, t)
        },
        t.warn = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            t.DEBUG_LOG && console.warn.apply(console, e)
        },
        t.error = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            console.error.apply(console, t)
        },
        t.assert = function (e, n) {
            for (var i = [], r = 2; r < arguments.length; r++)
                i[r - 2] = arguments[r];
            t.DEBUG_LOG && console.assert.apply(console, o([e, n], i))
        },
        t.DEBUG_LOG = !0,
        t
}
    ();
n.Logger = i;