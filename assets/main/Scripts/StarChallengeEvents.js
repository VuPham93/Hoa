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
    });
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.EventOnChallengeClose = n.EventOnChallengeGoto = n.EventOnChallengeAward = n.EventOnChallengeTimeout = n.EventOnChallengeJoinMatch = n.EventOnChallengeDescClose = void 0;
var r = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeDescClose",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeDescClose = r;
var a = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeJoinMatch",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeJoinMatch = a;
var c = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeTimeout",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeTimeout = c;
var s = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeAward",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeAward = s;
var l = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeGoto",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeGoto = l;
var u = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnChallengeClose",
        e
}
    (cc.Event.EventCustom);
n.EventOnChallengeClose = u;