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
    n.EventOnTeleportLandClose = n.EventOnTeleportLandOpen = n.EventOnAddScore = n.EventOnStageCompleted = n.EventOnTipListChanged = n.EventOnPausing = n.EventOnNormalBigBoom = n.EventOnComponentDelete = n.EventOnStepChanged = n.EventOnScoreChanged = n.EventOnFlowerStatusStrengthChanged = n.EventOnWallBeHurt = n.EventOnWallsBeHurt = n.EventOnRunnerBeHurt = n.EventOnCrowBeHurt = n.EventOnMolehillBeHurt = n.EventOnTileTouchCancel = n.EventOnTileTouchEnd = n.EventOnBattleContinue = n.EventOnShowResult = n.EventOnBattleOut = n.EventOnBattleEnter = n.EventOnNextStage = n.EventOnBattleRestart = n.EventOnBattleStart = void 0;
var r = function (t) {
    function e(n, o, i) {
        void 0 === i && (i = !1);
        var r = t.call(this, e.NAME, !0) || this;
        return r.battleLogic = n,
            r.levelData = o,
            r.isReset = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnBattleStart",
        e
}
    (cc.Event.EventCustom);
n.EventOnBattleStart = r;
var a = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnBattleRestart",
        e
}
    (cc.Event.EventCustom);
n.EventOnBattleRestart = a;
var c = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnNextStage",
        e
}
    (cc.Event.EventCustom);
n.EventOnNextStage = c;
var s = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnBattleEnter",
        e
}
    (cc.Event.EventCustom);
n.EventOnBattleEnter = s;
var l = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnBattleOut",
        e
}
    (cc.Event.EventCustom);
n.EventOnBattleOut = l;
var u = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.isWin = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnShowResult",
        e
}
    (cc.Event.EventCustom);
n.EventOnShowResult = u;
var p = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnBattleContinue",
        e
}
    (cc.Event.EventCustom);
n.EventOnBattleContinue = p;
var f = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.tileData = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnTileTouchEnd",
        e
}
    (cc.Event.EventCustom);
n.EventOnTileTouchEnd = f;
var h = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnTileTouchCancel",
        e
}
    (cc.Event.EventCustom);
n.EventOnTileTouchCancel = h;
var d = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnMolehillBeHurt",
        e
}
    (cc.Event.EventCustom);
n.EventOnMolehillBeHurt = d;
var g = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnCrowBeHurt",
        e
}
    (cc.Event.EventCustom);
n.EventOnCrowBeHurt = g;
var y = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.opt = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnRunnerBeHurt",
        e
}
    (cc.Event.EventCustom);
n.EventOnRunnerBeHurt = y;
var _ = function (t) {
    function e(n, o, i) {
        var r = t.call(this, e.NAME, !0) || this;
        return r.tileFrom = n,
            r.addStrength = o,
            r.dist = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnWallsBeHurt",
        e
}
    (cc.Event.EventCustom);
n.EventOnWallsBeHurt = _;
var m = function (t) {
    function e(n, o, i) {
        var r = t.call(this, e.NAME, !0) || this;
        return r.wall_id = n,
            r.oldStrength = o,
            r.strength = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnWallBeHurt",
        e
}
    (cc.Event.EventCustom);
n.EventOnWallBeHurt = m;
var v = function (t) {
    function e(n, o) {
        void 0 === o && (o = 0);
        var i = t.call(this, e.NAME, !0) || this;
        return i.strength = n,
            i.color = o,
            i
    }
    return i(e, t),
        e.NAME = "EventOnFlowerStatusStrengthChanged",
        e
}
    (cc.Event.EventCustom);
n.EventOnFlowerStatusStrengthChanged = v;
var b = function (t) {
    function e(n, o) {
        var i = t.call(this, e.NAME, !0) || this;
        return i.score = n,
            i.scoreOld = o,
            i
    }
    return i(e, t),
        e.NAME = "EventOnScoreChanged",
        e
}
    (cc.Event.EventCustom);
n.EventOnScoreChanged = b;
var w = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.step = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnStepChanged",
        e
}
    (cc.Event.EventCustom);
n.EventOnStepChanged = w;
var S = function (t) {
    function e(n, o, i) {
        var r = t.call(this, e.NAME, !0) || this;
        return r.tilekey = n,
            r.comptType = o,
            r.comptColor = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnComponentDelete",
        e
}
    (cc.Event.EventCustom);
n.EventOnComponentDelete = S;
var C = function (t) {
    function e(n, o, i) {
        var r = t.call(this, e.NAME, !0) || this;
        return r.tilekey = n,
            r.comptType = o,
            r.comptColor = i,
            r
    }
    return i(e, t),
        e.NAME = "EventOnNormalBigBoom",
        e
}
    (cc.Event.EventCustom);
n.EventOnNormalBigBoom = C;
var O = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.status = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnPausing",
        e
}
    (cc.Event.EventCustom);
n.EventOnPausing = O;
var E = function (t) {
    function e() {
        return t.call(this, e.NAME, !0) || this
    }
    return i(e, t),
        e.NAME = "EventOnTipListChanged",
        e
}
    (cc.Event.EventCustom);
n.EventOnTipListChanged = E;
var T = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.isCompleted = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnStageCompleted",
        e
}
    (cc.Event.EventCustom);
n.EventOnStageCompleted = T;
var k = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.score = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnAddScore",
        e
}
    (cc.Event.EventCustom);
n.EventOnAddScore = k;
var P = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.pid = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnTeleportLandOpen",
        e
}
    (cc.Event.EventCustom);
n.EventOnTeleportLandOpen = P;
var D = function (t) {
    function e(n) {
        var o = t.call(this, e.NAME, !0) || this;
        return o.pid = n,
            o
    }
    return i(e, t),
        e.NAME = "EventOnTeleportLandClose",
        e
}
    (cc.Event.EventCustom);
n.EventOnTeleportLandClose = D;