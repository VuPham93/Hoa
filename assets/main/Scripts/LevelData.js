var t = require;
var e = module;
var n = exports;
var o = this && this.__awaiter || function (t, e, n, o) {
    return new (n || (n = Promise))(function (i, r) {
        function a(t) {
            try {
                s(o.next(t))
            } catch (e) {
                r(e)
            }
        }
        function c(t) {
            try {
                s(o.throw(t))
            } catch (e) {
                r(e)
            }
        }
        function s(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                t(e)
            })).then(a, c)
        }
        s((o = o.apply(t, e || [])).next())
    })
},
    i = this && this.__generator || function (t, e) {
        var n,
            o,
            i,
            r,
            a = {
                label: 0,
                sent: function () {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
        return r = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
            "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                return this
            }),
            r;
        function c(t) {
            return function (e) {
                return s([t, e])
            }
        }
        function s(r) {
            if (n)
                throw new TypeError("Generator is already executing.");
            for (; a;)
                try {
                    if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done)
                        return i;
                    switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                        case 0:
                        case 1:
                            i = r;
                            break;
                        case 4:
                            return a.label++, {
                                value: r[1],
                                done: !1
                            };
                        case 5:
                            a.label++,
                                o = r[1],
                                r = [0];
                            continue;
                        case 7:
                            r = a.ops.pop(),
                                a.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                a.label = r[1];
                                break
                            }
                            if (6 === r[0] && a.label < i[1]) {
                                a.label = i[1],
                                    i = r;
                                break
                            }
                            if (i && a.label < i[2]) {
                                a.label = i[2],
                                    a.ops.push(r);
                                break
                            }
                            i[2] && a.ops.pop(),
                                a.trys.pop();
                            continue
                    }
                    r = e.call(t, a)
                } catch (c) {
                    r = [6, c],
                        o = 0
                } finally {
                    n = i = 0
                }
            if (5 & r[0])
                throw r[1];
            return {
                value: r[0] ? r[1] : void 0,
                done: !0
            }
        }
    };
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.Level_properties = n.COLLECT_FLOWERS_TASK = n.Tile_Pos = n.Tile_Color = n.Neighbor_Dir = n.Game_Mode = void 0;
var r,
    a,
    c,
    s = t("Toast"),
    l = t("G"),
    u = t("SceneManager"),
    p = t("logger"),
    f = t("Utils"),
    h = t("ChapterScene"),
    d = t("BundleResourceList"),
    g = t("BattleConfig"),
    y = t("GameUtils"),
    _ = t("BattleEvents"),
    m = t("TileData");
(function (t) {
    t[t.REACH_SCORE_TARGET = 0] = "REACH_SCORE_TARGET",
        t[t.SPRING_CLEANING = 1] = "SPRING_CLEANING",
        t[t.COLLECT_FLOWERS = 2] = "COLLECT_FLOWERS",
        t[t.REMOVE_ALL_BIG_BUDS = 3] = "REMOVE_ALL_BIG_BUDS"
})(r = n.Game_Mode || (n.Game_Mode = {})),
    function (t) {
        t[t.N = 0] = "N",
            t[t.NE = 1] = "NE",
            t[t.SE = 2] = "SE",
            t[t.S = 3] = "S",
            t[t.SW = 4] = "SW",
            t[t.NW = 5] = "NW",
            t[t.Length = 6] = "Length"
    }
        (a = n.Neighbor_Dir || (n.Neighbor_Dir = {})),
    function (t) {
        t[t.Purple = 1] = "Purple",
            t[t.Yellow = 2] = "Yellow",
            t[t.Pink = 3] = "Pink",
            t[t.Red = 4] = "Red",
            t[t.Length = 5] = "Length"
    }
        (c = n.Tile_Color || (n.Tile_Color = {}));
var v = function () {
    function t() { }
    return t.prototype.initWithKey = function (t) {
        var e = t.split("_");
        return this.row = ~~e[0],
            this.col = ~~e[1],
            this
    },
        t.prototype.initWithPos = function (t, e) {
            return this.row = t,
                this.col = e,
                this
        },
        Object.defineProperty(t.prototype, "key", {
            get: function () {
                return this.row + "_" + this.col
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.isSame = function (t) {
            return this.row == t.row && this.col == t.col
        },
        t
}
    ();
n.Tile_Pos = v;
var b = function (t, e) {
    this.id = t;
    var n = e.split("_");
    switch (n[0]) {
        case "blue":
            this.color = c.Purple;
            break;
        case "pink":
            this.color = c.Pink;
            break;
        case "red":
            this.color = c.Red;
            break;
        case "orange":
            this.color = c.Yellow
    }
    this.target_num = parseInt(n[1]),
        this.cur_num = this.target_num,
        this.type = m.Tile_Component_Type.bud
};
n.COLLECT_FLOWERS_TASK = b;
var w = function () {
    function t(t) {
        Object.assign(this, t),
            this.initGameMode(t)
    }
    return t.prototype.initGameMode = function (t) {
        if (this.game_mode == r[r.COLLECT_FLOWERS]) {
            for (var e in this.collect_flowers = [], t)
                if (e.startsWith("goal_")) {
                    var n = parseInt(e.split("_")[1]),
                        o = t[e];
                    if (o.split("_").length < 2)
                        switch (n % (c.Length - 1) + 1) {
                            case c.Purple:
                                o = "blue_" + o;
                                break;
                            case c.Pink:
                                o = "pink_" + o;
                                break;
                            case c.Red:
                                o = "red_" + o;
                                break;
                            case c.Yellow:
                                o = "orange_" + o
                        }
                    this.collect_flowers.push(new b(n, o))
                }
            this.collect_flowers.sort(function (t, e) {
                return t.id - e.id
            })
        }
    },
        Object.defineProperty(t.prototype, "firstTask", {
            get: function () {
                for (var t = 0; t < this.collect_flowers.length; t++) {
                    var e = this.collect_flowers[t];
                    if (e.cur_num > 0)
                        return e
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "needNum", {
            get: function () {
                for (var t = 0, e = 0; e < this.collect_flowers.length; e++)
                    t += this.collect_flowers[e].cur_num;
                return t
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.Level_properties = w;
var S = function () {
    function t() {
        this.tiles = {},
            this.growAction = [],
            this.componentSeeds = {},
            this.molehillBeHurt = !1,
            this.crowBeHurt = !1,
            this.times_relife_free = g.BattleConfig.Times.Relife_Free,
            this.times_relife_coin = 0,
            this._pausing = !1,
            this.isCompleted = !1,
            this._score = 0,
            this.round_score = 0,
            this.comptNum = {},
            this.starNum = 0,
            this._tipList = [],
            this.lastDeadCheckTime = 0,
            this.hasWaterTeleport = !1,
            this.hasLandTeleport = !1;
        var t = f.Utils.angleToRadian(30),
            e = Math.tan(t);
        this.space = -e * (g.BattleConfig.Tile_Height / 2);
        var n = Math.cosh(t),
            o = g.BattleConfig.Tile_Height / 2 * n;
        this.tile_size = cc.size(2 * o, g.BattleConfig.Tile_Height);
        var i = g.BattleConfig.Map_Tile_Num_H * this.tile_size.width + this.space * (g.BattleConfig.Map_Tile_Num_H - 1),
            r = this.tile_size.height * (g.BattleConfig.Map_Tile_Num_V + .5);
        this.mapSize = cc.size(i, r)
    }
    return Object.defineProperty(t.prototype, "pausing", {
        get: function () {
            return this._pausing
        },
        set: function (t) {
            this._pausing = t,
                l.GlobalEvent.dispatchEvent(new _.EventOnPausing(this._pausing))
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t.prototype, "score", {
            get: function () {
                return this._score
            },
            set: function (t) {
                var e = this._score;
                this._score = t,
                    l.GlobalEvent.dispatchEvent(new _.EventOnScoreChanged(this._score, e))
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "steps", {
            get: function () {
                return this._steps
            },
            set: function (t) {
                this._steps = Math.max(0, t),
                    l.GlobalEvent.dispatchEvent(new _.EventOnStepChanged(this._steps))
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "tipList", {
            get: function () {
                return this._tipList
            },
            set: function (t) {
                this._tipList = t,
                    l.GlobalEvent.dispatchEvent(new _.EventOnTipListChanged)
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.load = function (t) {
            return o(this, void 0, void 0, function () {
                var e,
                    n = this;
                return i(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return t > g.BattleConfig.Stage.Max_Level_Open ? (y.GameUtils.showToast("Hãy theo dõi các cấp độ tiếp theo！", s.TipIco.Tip), u.sm.switchScene(h.default), [3, 3]) : [3, 1];
                        case 1:
                            return this.lId = t,
                                e = (t + "").padStart(4, "0"),
                                [4, y.GameUtils.loadConfigFromAli("config/levels/level" + e).then(function (t) {
                                    n.initLevel(t)
                                }).catch(function () {
                                    y.GameUtils.showToast("Lỗi tải màn tiếp theo", s.TipIco.NetErr)
                                })];
                        case 2:
                            o.sent(),
                                o.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        },
        t.prototype.initLevel = function (t) {
            if (t) {
                var e = y.GameUtils.getJsonConfig(d.Idx_Json.obj);
                for (var n in e)
                    "wall" == (D = e[n]).type ? (this.componentSeeds[m.Tile_Component_Type.wall_east] = new m.Tile_Component_Seed(D), this.componentSeeds[m.Tile_Component_Type.wall_west] = new m.Tile_Component_Seed(D), this.componentSeeds[m.Tile_Component_Type.wall_south] = new m.Tile_Component_Seed(D)) : this.componentSeeds[n] = new m.Tile_Component_Seed(D);
                this.properties = new w(t.properties),
                    this.steps = this.properties.nr_moves;
                for (var o = t.level, i = 0; i < o.length; i++)
                    if (!(D = o[i]).includes(0)) {
                        var r = new m.TileData(this),
                            a = Math.floor(i / g.BattleConfig.Map_Tile_Num_H),
                            c = i % g.BattleConfig.Map_Tile_Num_H;
                        r.row = a,
                            r.col = c,
                            r.x = this.tile_size.width * (c + .5) + c * this.space,
                            r.y = -this.tile_size.height * (a + .5 + (c % 2 == 1 ? .5 : 0));
                        for (var s = void 0, l = void 0, u = void 0, f = void 0, h = -1, _ = void 0, v = 0; v < D.length; v++) {
                            var b = D[v];
                            if (0 == b)
                                break;
                            b -= 1;
                            var S = t.tiles[b];
                            switch (p.Logger.debug("[LevelData initLevel] tile.type:", S.type), S.type) {
                                case "water_lily_leaf_spawner":
                                    u = new m.LeafSpawner;
                                    break;
                                case "bud_spawner":
                                    l = new m.BudSpawner(S);
                                    break;
                                case "normal_slot":
                                    s = new m.Ground_Data_Normal;
                                    break;
                                case "water_slot":
                                    s = new m.Ground_Data_Water;
                                    break;
                                case "water_lily_leaf":
                                    f = new m.CarrierDataLeaf(2);
                                    break;
                                case "floating_log":
                                    f = new m.CarrierDataFloatingLog;
                                    break;
                                case "stream":
                                    var C = S.direction;
                                    h = g.BattleConfig.Dir_Stream[C];
                                    break;
                                case "teleport_in":
                                    _ = new m.TeleportWaterData(m.Teleport_Type.Water_In, S.teleport_id),
                                        this.hasWaterTeleport = !0;
                                    break;
                                case "teleport_out":
                                    _ = new m.TeleportWaterData(m.Teleport_Type.Water_Out, S.teleport_id),
                                        this.hasWaterTeleport = !0;
                                    break;
                                case "teleport_land_in":
                                    _ = new m.TeleportLandData(m.Teleport_Type.Land_In, S.teleport_id),
                                        this.hasLandTeleport = !0;
                                    break;
                                case "teleport_land_out":
                                    _ = new m.TeleportLandData(m.Teleport_Type.Land_Out, S.teleport_id),
                                        this.hasLandTeleport = !0;
                                    break;
                                default:
                                    var O = S.type + (S.location ? "_" + S.location : ""),
                                        E = this.componentSeeds[O],
                                        T = m.Tile_Component.Create(m.Tile_Component_Type[O], S, E);
                                    T && r.components.push(T)
                            }
                            this.comptNum[S.type] = 1 + ~~this.comptNum[S.type]
                        }
                        r.groundData = s || new m.Ground_Data_Normal,
                            r.groundData.budSpawn = l,
                            r.groundData.leafSpawn = u,
                            r.groundData.teleport = _,
                            r.carrier = f,
                            r.stream = (null == _ ? void 0 : _.type) == m.Teleport_Type.Water_In ? -1 : h,
                            r.id = i,
                            n = r.key,
                            this.tiles[n] = r
                    }
                var k = g.BattleConfig.Tile_Offset[0],
                    P = g.BattleConfig.Tile_Offset[1];
                for (var n in this.tiles) {
                    var D,
                        G = (D = this.tiles[n]).col % 2 == 0 ? k : P;
                    for (i = 0; i < G.length; i++) {
                        var B = G[i],
                            U = B[0] + D.row + "_" + (B[1] + D.col);
                        D.neighbors.push(this.tiles[U])
                    }
                }
                this.refreshWallValueOfTile()
            } else
                p.Logger.debug("[LevelData initTiles] Ngoại lệ！")
        },
        t.prototype.deeperInvestigation = function (t) {
            if (!t.components.budbase)
                return [t];
            var e = [],
                n = [],
                o = t.components.color,
                i = 0,
                r = function (t, a, c) {
                    if (t && !t.components.isNull && !e.includes(t) && t.components.color == o && (!(a > 0) || t.components.allowPathing) && (!c || y.GameUtils.checkNeighborsOpen(c, t, !1))) {
                        e.push(t),
                            t.clear_idx = a,
                            t.clear_boss = c,
                            i = Math.max(i, a),
                            n.push(t);
                        for (var s = 0; s < t.neighbors.length; s++) {
                            var l = t.neighbors[s];
                            l && r(l, a + 1, t)
                        }
                    }
                };
            r(t, 0, void 0);
            for (var a = 0; a < n.length; a++) {
                var c = n[a];
                c.clear_idx = i - c.clear_idx
            }
            return n
        },
        t.prototype.addStrength = function (t) {
            for (var e = this, n = t, o = function (t, e, n) {
                return e ? 1 == n ? t.blast2_power1 : t.blast2_power2 : t.seed.blast1_power
            }, i = function (t, i, r) {
                var a = t.components.budbase;
                if (a) {
                    for (var c = [], s = 1; s <= 2; s++)
                        if (T = i[s + ""]) {
                            T.sort(function (t, n) {
                                var o,
                                    i,
                                    r = e.tiles[t.key],
                                    a = e.tiles[n.key],
                                    c = null === (o = null == r ? void 0 : r.components.budbase) || void 0 === o ? void 0 : o.strength;
                                return (null === (i = null == a ? void 0 : a.components.budbase) || void 0 === i ? void 0 : i.strength) - c
                            });
                            for (var l = 0; l < T.length; l++) {
                                var u = T[l];
                                if (k = e.tiles[u.key]) {
                                    var f = k.components.budbase,
                                        h = !1,
                                        d = {
                                            key: k.key,
                                            color: f ? f.color : -1,
                                            oldStrength: f ? f.strength : -1,
                                            strength: f ? f.strength : -1,
                                            removeRight: !1
                                        },
                                        g = k.components.runnerBase;
                                    if (g) {
                                        var y = o(g, r, s),
                                            _ = g.run(t, y);
                                        _ && (p.Logger.debug("[LevelData addStrength] run:", _), d.runner = _, h || (h = !0, c.push(d)))
                                    } else {
                                        var v = k.components.blast_protect;
                                        if (v) {
                                            var b = o(v, r, s),
                                                w = v.onBlast_protect(b);
                                            if (d.blast_protect = w, h || (c.push(d), h = !0), w.removeRight && k.components.removeBlastProtect(), null == f ? void 0 : f.seed.accept_blast_protect)
                                                continue;
                                            if (v.seed.absolute_blast_protect)
                                                continue
                                        }
                                        if (f) {
                                            var S = !1,
                                                C = o(f, r, s);
                                            if (f.addStrength(C, t), k.components.isInoperable && f.strength >= f.maxStrength) {
                                                S = !0;
                                                var O = k.components.getComponent(m.Tile_Component_Type.water_bucket);
                                                if (O) {
                                                    var E = O.waterFlow(t);
                                                    d.water_bucket = E,
                                                        k.components.removeByType(m.Tile_Component_Type.water_bucket),
                                                        h || (c.push(d), h = !0);
                                                    continue
                                                }
                                            }
                                            d.color = f.color,
                                                d.oldStrength = f.strengthOld,
                                                d.strength = f.strength,
                                                d.removeRight = S,
                                                h || (c.push(d), h = !0)
                                        }
                                    }
                                }
                            }
                        }
                    for (e.growAction.push({
                        key: t.key,
                        color: a.color,
                        oldStrength: a.strengthOld,
                        strength: a.strength,
                        boom: c,
                        onSelfBoom: t.components.onSelfBoom()
                    }), s = 1; s <= 2; s++) {
                        var T;
                        if (T = i[s + ""])
                            for (l = 0; l < T.length; l++) {
                                var k;
                                u = T[l],
                                    (k = e.tiles[u.key]) && (f = k.components.budbase) && (k.components.isInoperable ? f.strength >= f.maxStrength && k.components.removeBudbase() : n.push(k))
                            }
                    }
                    t.components.removeBudbase()
                }
            }, r = function () {
                var t = n.shift();
                if (!t)
                    return "continue";
                var e = t.components.budbase;
                if (!e)
                    return "continue";
                if (a.growAction.findIndex(function (e) {
                    return t.key == e.key
                }) >= 0)
                    return "continue";
                if (e.willBigBoom(e.strength)) {
                    var o = a.getRing(t, 2);
                    i(t, o, !0)
                } else
                    e.willBoom(e.strength) && (o = a.getRing(t, 1), i(t, o, !1))
            }, a = this; n.length > 0;)
                r()
        },
        t.prototype.getRing = function (t, e) {
            if (t) {
                var n = 0,
                    o = {};
                for (o[n + ""] = [(new v).initWithKey(t.key)], n = 1; n <= e; n++) {
                    var i = o[n - 1 + ""],
                        r = [];
                    o[n + ""] = r;
                    for (var a = 0; a < i.length; a++)
                        for (var c = i[a], s = c.col % 2 == 0 ? g.BattleConfig.Tile_Offset[0] : g.BattleConfig.Tile_Offset[1], l = function (t) {
                            var e = s[t],
                                n = (new v).initWithPos(e[0] + c.row, e[1] + c.col),
                                i = !1;
                            for (var a in o)
                                if (o[a].findIndex(function (t) {
                                    return t.isSame(n)
                                }) >= 0) {
                                    i = !0;
                                    break
                                }
                            if (i)
                                return "continue";
                            r.push(n)
                        }, u = 0; u < s.length; u++)
                            l(u)
                }
                return o
            }
        },
        t.prototype.shuffle = function () {
            var t = [],
                e = [];
            for (var n in this.tiles) {
                var o = this.tiles[n];
                o && o.components.bud && o.components.allowClick && (t.push(o), e.push(o.key))
            }
            t = f.Utils.shuffle2(t);
            for (var i = [], r = 0; r < t.length; r++)
                i.push({
                    keyFrom: t[r].key,
                    keyTo: e[r]
                });
            return i
        },
        t.prototype.molehillWorking = function () {
            var t = [a.N, a.NE, a.NW, a.S, a.SE, a.SW];
            for (var e in this.tiles) {
                var n = this.tiles[e];
                if (n.components.getComponent(m.Tile_Component_Type.molehill)) {
                    f.Utils.shuffle(t);
                    for (var o = 0; o < t.length; o++) {
                        var i = n.neighbors[t[o]];
                        if (i && i.getIsLivableMolehaill(n)) {
                            i.components.removeBudbase();
                            var r = {
                                animate_at_creation: "1",
                                health: 3,
                                type: "molehill"
                            },
                                c = m.Tile_Component_BudBase.Create(m.Tile_Component_Type.molehill, r, y.GameUtils.getJsonConfig(d.Idx_Json.obj)[r.type]);
                            return i.components.push(c),
                                i.key
                        }
                    }
                }
            }
        },
        t.prototype.onClear = function () {
            for (var t in this.tiles)
                this.tiles[t].onClear()
        },
        t.prototype.getCurComptNum = function (t) {
            var e = 0;
            for (var n in this.tiles) {
                var o = this.tiles[n];
                (null == o ? void 0 : o.components.getComponent(t)) && e++
            }
            return e
        },
        t.prototype.checkResult = function () {
            switch (r[this.properties.game_mode]) {
                case r.REACH_SCORE_TARGET:
                    return this.score >= this.properties.star_1;
                case r.SPRING_CLEANING:
                    return this.getCurComptNum(m.Tile_Component_Type.weed) <= 0;
                case r.COLLECT_FLOWERS:
                    return !this.properties.firstTask;
                case r.REMOVE_ALL_BIG_BUDS:
                    return this.getCurComptNum(m.Tile_Component_Type.big_bud) <= 0
            }
        },
        t.prototype.checkDeadlock = function () {
            var t = {};
            for (var e in this.tiles)
                if ((o = this.tiles[e]) && !t[e] && o.components.getComponent(m.Tile_Component_Type.big_bud)) {
                    if ((i = this.deeperInvestigation(o)).length >= g.BattleConfig.Min_Num_Group)
                        return p.Logger.debug("[MapView checkDeadlock]:正常：", i[0].key), this.tipList = i, this.lastDeadCheckTime = f.Utils.getCurTime(), !1;
                    for (var n = 0; n < i.length; n++)
                        t[i[n].key] = i[n]
                }
            for (var e in this.tiles) {
                var o;
                if ((o = this.tiles[e]) && !t[e] && o.components.allowClick) {
                    var i;
                    if ((i = this.deeperInvestigation(o)).length >= g.BattleConfig.Min_Num_Group)
                        return p.Logger.debug("[MapView checkDeadlock]:Bình thường：", i[0].key), this.tipList = i, this.lastDeadCheckTime = f.Utils.getCurTime(), !1;
                    for (n = 0; n < i.length; n++)
                        t[i[n].key] = i[n]
                }
            }
            return p.Logger.debug("[MapView checkDeadlock]:Không xử lý được，tải lại"),
                !0
        },
        t.prototype.refreshWallValueOfTile = function () {
            for (var t in this.tiles)
                this.tiles[t].refreshWallValueOfGround()
        },
        t
}
    ();
n.default = S;