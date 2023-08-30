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
    n.Tile_Component_Rolling_Stone = n.Rolling_Stone_Hurt = n.Tile_Component_snail = n.Tile_Component_Bee = n.Tile_Component_Pileofleaves = n.Tile_Component_RunnerBase = n.Tile_Component_Crow = n.Tile_Component_Wall = n.Tile_Component_Slime = n.Tile_Component_Greenhouse = n.Tile_Component_WaterBucket = n.Tile_Component_FallingPot = n.Tile_Component_Pot = n.Tile_Component_Molehill = n.Tile_Component_weed = n.Tile_Component_Mushroom = n.Tile_Component_BigBud = n.Tile_Component_Bud = n.Tile_Component_BudBase = n.Tile_Component = n.TeleportLandData = n.TeleportWaterData = n.TeleportData = n.Teleport_Type = n.CarrierDataFloatingLog = n.CarrierDataLeaf = n.CarrierDataBase = n.Carrier_Type = n.Ground_Data_Water = n.Ground_Data_Normal = n.Ground_Data_Base = n.LeafSpawner = n.BudSpawner = n.Tile_Component_Container = n.TileData = n.Ground_Type = n.Tile_Component_Seed = n.Snail_State = n.Tile_Component_Type_Index = n.Tile_Component_Type = void 0;
var r,
    a,
    c = t("G"),
    s = t("logger"),
    l = t("Utils"),
    u = t("BattleConfig"),
    p = t("GameConfig"),
    f = t("GameUtils"),
    h = t("BattleEvents"),
    d = t("LevelData");
(function (t) {
    t.bud = "bud",
        t.big_bud = "big_bud",
        t.weed = "weed",
        t.green_house = "green_house",
        t.molehill = "molehill",
        t.pot = "pot",
        t.pile_of_leaves = "pile_of_leaves",
        t.crow = "crow",
        t.honey_bee = "honey_bee",
        t.exploding_mushroom = "exploding_mushroom",
        t.slime = "slime",
        t.wall_west = "wall_west",
        t.wall_south = "wall_south",
        t.wall_east = "wall_east",
        t.snail = "snail",
        t.falling_pot = "falling_pot",
        t.water_bucket = "water_bucket",
        t.rolling_stone = "rolling_stone"
})(r = n.Tile_Component_Type || (n.Tile_Component_Type = {})),
    function (t) {
        t[t.bud = 0] = "bud",
            t[t.big_bud = 1] = "big_bud",
            t[t.weed = 2] = "weed",
            t[t.green_house = 3] = "green_house",
            t[t.molehill = 4] = "molehill",
            t[t.pot = 5] = "pot",
            t[t.pile_of_leaves = 6] = "pile_of_leaves",
            t[t.crow = 7] = "crow",
            t[t.honey_bee = 8] = "honey_bee",
            t[t.exploding_mushroom = 9] = "exploding_mushroom",
            t[t.slime = 10] = "slime",
            t[t.wall_west = 11] = "wall_west",
            t[t.wall_south = 12] = "wall_south",
            t[t.wall_east = 13] = "wall_east",
            t[t.snail = 14] = "snail",
            t[t.falling_pot = 15] = "falling_pot",
            t[t.water_bucket = 16] = "water_bucket",
            t[t.rolling_stone = 17] = "rolling_stone"
    }
        (n.Tile_Component_Type_Index || (n.Tile_Component_Type_Index = {})),
    function (t) {
        t[t.idel = 0] = "idel",
            t[t.shaking = 1] = "shaking"
    }
        (a = n.Snail_State || (n.Snail_State = {}));
var g;
n.Tile_Component_Seed = function (t) {
    Object.assign(this, t)
},
    function (t) {
        t[t.Normal = 0] = "Normal",
            t[t.Water = 1] = "Water"
    }
        (g = n.Ground_Type || (n.Ground_Type = {}));
var y = function () {
    function t(t) {
        this.neighbors = [],
            this.stream = -1,
            this.isClicked = !1,
            this.levelData = t,
            this.components = new _(this)
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function () {
            return this._key || (this._key = this.row + "_" + this.col),
                this._key
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t.prototype, "carrier", {
            get: function () {
                return this._carrier
            },
            set: function (t) {
                this._carrier = t
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isDrop", {
            get: function () {
                return !this.isClicked && this.components.isDrop
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.onClear = function () {
            this.components.onClear(),
                this.neighbors = [],
                this.levelData = void 0
        },
        t.prototype.checkDirOpen = function (t, e) {
            return void 0 === e && (e = !1),
                !((this.groundData.wall & 1 << t) > 0) && this.components.checkDirOpen(t, e)
        },
        t.prototype.getDirTo = function (t) {
            return this.neighbors.findIndex(function (e) {
                return t == e
            })
        },
        t.prototype.getIsLivableMolehaill = function (t) {
            return !(this.groundData instanceof S) && this.components.getIsLivableMolehaill(t)
        },
        t.prototype.refreshWallValueOfGround = function () {
            var t;
            if (this.groundData.type != g.Normal)
                null !== (t = this.carrier) && void 0 !== t && t.isOpen() ? this.groundData.wall = u.BattleConfig.WallValue.OpenAll : this.groundData.wall = u.BattleConfig.WallValue.CloseAll;
            else {
                if (this.groundData.teleport instanceof D) {
                    var e = this.groundData.teleport;
                    return void (e.type == E.Land_In ? this.groundData.wall = e.status ? u.BattleConfig.WallValue.Teleport_In : u.BattleConfig.WallValue.CloseAll : e.type == E.Land_Out && (this.groundData.wall = u.BattleConfig.WallValue.Teleport_Out))
                }
                this.groundData.wall = u.BattleConfig.WallValue.OpenAll
            }
        },
        t
}
    ();
n.TileData = y;
var _ = function () {
    function t(t) {
        this._components = {},
            this.tileData = t
    }
    return Object.defineProperty(t.prototype, "components", {
        get: function () {
            return this._components
        },
        enumerable: !1,
        configurable: !0
    }),
        t.prototype.push = function (t) {
            this.components[t.type] && (this.components[t.type].onClear(), this.deleteComponent(t.type)),
                this.components[t.type] = t,
                t.container = this
        },
        t.prototype.pushList = function (t) {
            for (var e in t)
                this.push(t[e])
        },
        t.prototype.getComponent = function (t) {
            return this.components[t]
        },
        Object.defineProperty(t.prototype, "num", {
            get: function () {
                var t = 0;
                for (var e in this.components)
                    this.components[e] && t++;
                return t
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isNull", {
            get: function () {
                return 0 == this.num
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isDrop", {
            get: function () {
                var t;
                for (var e in this.components)
                    if (null === (t = this.components[e]) || void 0 === t ? void 0 : t.isDrop)
                        return !0;
                return !1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isBlok", {
            get: function () {
                var t;
                for (var e in this.components)
                    if (null === (t = this.components[e]) || void 0 === t ? void 0 : t.isBlock)
                        return !0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.checkMaskTrue = function (t) {
            for (var e in this.components)
                if (!t(this.components[e]))
                    return !1;
            return !0
        },
        t.prototype.getIsLivableMolehaill = function (t) {
            if (!f.GameUtils.checkNeighborsOpen(t, this.tileData, !1))
                return !1;
            if (t.groundData.teleport)
                return !1;
            for (var e in this._components) {
                var n = this._components[e];
                if (n instanceof H)
                    return !1;
                if (n instanceof R)
                    return !1;
                if (0 != n.seed.blast_protect)
                    return !1;
                if (n.seed.allow_body + n.seed.allow_head == 0)
                    return !1
            }
            return !0
        },
        t.prototype.getIsLivableSnail = function (t) {
            if (!f.GameUtils.checkNeighborsOpen(t, this.tileData, !0))
                return !1;
            for (var e in this._components) {
                var n = this._components[e];
                if (n instanceof H)
                    return !1;
                if (0 != n.seed.blast_protect && n.seed.type != r.slime)
                    return !1
            }
            return !0
        },
        Object.defineProperty(t.prototype, "isEdibleForCrow", {
            get: function () {
                if (0 == this.num)
                    return !1;
                for (var t in this._components) {
                    var e = this._components[t];
                    if (![r.bud, r.green_house].includes(e.type))
                        return !1
                }
                return !0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.removeBudbase = function () {
            for (var t in this._components)
                this._components[t] instanceof B && this.deleteComponent(t)
        },
        t.prototype.removeByType = function (t) {
            for (var e in this._components)
                this._components[e].type == t && this.deleteComponent(e)
        },
        t.prototype.removeById = function (t) {
            for (var e in this._components)
                if (this._components[e].id == t)
                    return void this.deleteComponent(e)
        },
        t.prototype.removeBlastProtect = function () {
            for (var t in this._components)
                this._components[t].seed.blast_protect > 0 && this.deleteComponent(t)
        },
        t.prototype.removeUppers = function () {
            var t = {};
            for (var e in this._components) {
                var n = this._components[e];
                n.type.startsWith("wall") || (t[e] = n, this.deleteComponent(e))
            }
            return t
        },
        Object.defineProperty(t.prototype, "color", {
            get: function () {
                for (var t in this._components) {
                    var e = this._components[t];
                    if (e.color > 0)
                        return e.color
                }
                return -1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "bud", {
            get: function () {
                return this.components[r.bud]
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "budbase", {
            get: function () {
                for (var t in this._components) {
                    var e = this._components[t];
                    if (e instanceof B)
                        return e
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "blast_protect", {
            get: function () {
                for (var t in this._components) {
                    var e = this._components[t];
                    if (0 != e.seed.blast_protect)
                        return e
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "runnerBase", {
            get: function () {
                for (var t in this._components) {
                    var e = this._components[t];
                    if (e instanceof H)
                        return e
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "allowClick", {
            get: function () {
                if (0 == this.num)
                    return !1;
                for (var t in this._components)
                    if (0 == this._components[t].seed.allow_head)
                        return !1;
                return !0
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "allowPathing", {
            get: function () {
                for (var t in this._components)
                    if (0 == this._components[t].seed.allow_body)
                        return !1;
                return !0
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isInoperable", {
            get: function () {
                for (var t in this._components) {
                    var e = this._components[t].seed;
                    if (e.allow_body + e.allow_head == 0)
                        return !0
                }
                return !1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "bud_strength", {
            get: function () {
                var t = this.budbase;
                return t ? t.strength : 0
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.pullDroper = function () {
            var t = [];
            for (var e in this._components) {
                var n = this._components[e];
                (null == n ? void 0 : n.isDrop) && (t.push(n), delete this._components[e])
            }
            return t
        },
        t.prototype.pull = function (t) {
            var e = [];
            for (var n in this._components) {
                var o = this._components[n];
                (null == o ? void 0 : o.type) == t && (e.push(o), delete this._components[n])
            }
            return e
        },
        t.prototype.pullBud = function () {
            return this.pull(r.bud)
        },
        t.prototype.onSelfBoom = function () {
            var t = void 0;
            for (var e in this._components) {
                var n = this._components[e];
                if (n && !(n instanceof V)) {
                    var o = n.onSelfBoom();
                    o && (t || (t = {}), t[n.type] = o, n.strength >= n.maxStrength && this.deleteComponent(e))
                }
            }
            return t
        },
        t.prototype.deleteComponent = function (t) {
            delete this._components[t]
        },
        t.prototype.onClear = function () {
            for (var t in this._components)
                this._components[t].onClear()
        },
        Object.defineProperty(t.prototype, "comptShovel", {
            get: function () {
                var t = this.runnerBase;
                if (null == t ? void 0 : t.seed.allow_shovel)
                    return t;
                var e = this.blast_protect;
                if (null == e ? void 0 : e.seed.allow_shovel)
                    return e;
                var n = this.budbase;
                return (null == n ? void 0 : n.seed.allow_shovel) ? n : void 0
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "comptKettle", {
            get: function () {
                if (!this.blast_protect && !this.getComponent(r.honey_bee)) {
                    var t = this.budbase;
                    return (null == t ? void 0 : t.seed.allow_kettle) && t.strength < 9 ? t : void 0
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "comptBrush", {
            get: function () {
                var t = this.budbase;
                if (null == t ? void 0 : t.seed.allow_brush)
                    return t
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.checkDirOpen = function (t, e) {
            for (var n in this._components) {
                var o = this._components[n];
                if ((!e || o instanceof V) && (o.wall & 1 << t) > 0)
                    return !1
            }
            return !0
        },
        Object.defineProperty(t.prototype, "walls", {
            get: function () {
                var t = [];
                for (var e in this._components) {
                    var n = this._components[e];
                    n instanceof V && t.push(n)
                }
                return t
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.getWallWithDir = function (t) {
            for (var e in this._components) {
                var n = this._components[e];
                if (n instanceof V && n.dir == t)
                    return n
            }
        },
        t
}
    ();
n.Tile_Component_Container = _;
var m = function () {
    function t(t) {
        this.max_start_strength = ~~t.max_start_strength || 4,
            this.min_start_strength = ~~t.min_start_strength || 2,
            this.exclude_color = ~~t.exclude_color,
            this.color = ~~t.color
    }
    return t.prototype.spawn = function (t) {
        var e;
        if (this.color > 0)
            e = this.color;
        else {
            for (var n = [], o = 1; o < d.Tile_Color.Length; o++)
                o != this.exclude_color && n.push(o);
            e = n[l.Utils.randomInt(0, n.length)]
        }
        var i = {
            type: r.bud,
            color: e,
            strength: l.Utils.randomIntInclusive(this.min_start_strength, this.max_start_strength)
        };
        return G.Create(r.bud, i, t)
    },
        t
}
    ();
n.BudSpawner = m;
n.LeafSpawner = function () { };
var v = function () {
    function t() { }
    return Object.defineProperty(t.prototype, "isBudSpawner", {
        get: function () {
            return !!this.budSpawn
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t.prototype, "isLeafSpawner", {
            get: function () {
                return !!this.leafSpawn
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
    ();
n.Ground_Data_Base = v;
var b = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.type = g.Normal,
            e.wall = u.BattleConfig.WallValue.OpenAll,
            e
    }
    return i(e, t),
        e
}
    (v);
n.Ground_Data_Normal = b;
var w,
    S = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.type = g.Water,
                e.wall = u.BattleConfig.WallValue.CloseAll,
                e
        }
        return i(e, t),
            e
    }
        (v);
n.Ground_Data_Water = S,
    function (t) {
        t[t.water_lily_leaf = 0] = "water_lily_leaf",
            t[t.floating_log = 1] = "floating_log"
    }
        (w = n.Carrier_Type || (n.Carrier_Type = {}));
var C = function () {
    function t() { }
    return t.prototype.isOpen = function () {
        return !0
    },
        t
}
    ();
n.CarrierDataBase = C;
var O = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.type = w.water_lily_leaf,
            n.level = e,
            n.streaming = !1,
            n
    }
    return i(e, t),
        e.prototype.isOpen = function () {
            return this.level >= 2
        },
        e
}
    (C);
n.CarrierDataLeaf = O;
var E,
    T = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.type = w.floating_log,
                e.level = 99,
                e.streaming = !0,
                e
        }
        return i(e, t),
            e
    }
        (C);
n.CarrierDataFloatingLog = T,
    function (t) {
        t[t.Water_In = 0] = "Water_In",
            t[t.Water_Out = 1] = "Water_Out",
            t[t.Land_In = 2] = "Land_In",
            t[t.Land_Out = 3] = "Land_Out"
    }
        (E = n.Teleport_Type || (n.Teleport_Type = {}));
var k = function (t, e) {
    this.type = t,
        this.pair_id = e
};
n.TeleportData = k;
var P = function (t) {
    function e(e, n) {
        return t.call(this, e, n) || this
    }
    return i(e, t),
        e
}
    (k);
n.TeleportWaterData = P;
var D = function (t) {
    function e(e, n) {
        var o = t.call(this, e, n) || this;
        return o.status = !1,
            o
    }
    return i(e, t),
        e
}
    (k);
n.TeleportLandData = D;
var G = function () {
    function t(e, n, o) {
        this.id = t.CptId++,
            this.type = e,
            this.color = ~~n.color,
            this.strength = ~~n.strength,
            this.seed = o,
            this.maxStrength = o.max_level,
            this.strengthOld = 0,
            this.seed.allow_shovel = !0,
            this.seed.allow_kettle = !0,
            this.seed.allow_brush = !1,
            this.seed.accept_blast_protect = !0,
            this.seed.absolute_blast_protect = !1,
            this.wall = u.BattleConfig.WallValue.OpenAll
    }
    return t.GetComponentTypeString = function (t) {
        return r[t]
    },
        t.Create = function (t, e, n) {
            switch (t) {
                case r.bud:
                    return new U(t, e, n);
                case r.big_bud:
                    return new R(t, e, n);
                case r.weed:
                    return new x(t, e, n);
                case r.green_house:
                    return new L(t, e, n);
                case r.molehill:
                    return new I(t, e, n);
                case r.pot:
                    return new N(t, e, n);
                case r.pile_of_leaves:
                    return new K(t, e, n);
                case r.crow:
                    return new W(t, e, n);
                case r.honey_bee:
                    return new Y(t, e, n);
                case r.exploding_mushroom:
                    return new M(t, e, n);
                case r.slime:
                    return new F(t, e, n);
                case r.wall_west:
                case r.wall_south:
                case r.wall_east:
                    return new V(t, e, n);
                case r.snail:
                    return new J(t, e, n);
                case r.falling_pot:
                    return new A(t, e, n);
                case r.water_bucket:
                    return new j(t, e, n);
                case r.rolling_stone:
                    return new z(t, e, n)
            }
        },
        Object.defineProperty(t.prototype, "wall", {
            get: function () {
                return this._wall
            },
            set: function (t) {
                this._wall = t
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.onClear = function () {
            this.container = void 0
        },
        t.prototype.addStrength = function (t) {
            return this.strengthOld = this.strength,
                this.strength += t,
                this.strength >= this.maxStrength
        },
        Object.defineProperty(t.prototype, "isDrop", {
            get: function () {
                return 1 == this.seed.drop
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "isBlock", {
            get: function () {
                return 1 == this.seed.block
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.willBoom = function (t) {
            return t >= this.maxStrength
        },
        Object.defineProperty(t.prototype, "blast2_power1", {
            get: function () {
                return this.seed.blast2_power1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(t.prototype, "blast2_power2", {
            get: function () {
                return this.seed.blast2_power2
            },
            enumerable: !1,
            configurable: !0
        }),
        t.prototype.onNear = function (t) {
            return this.seed.near > 0 && (this.addStrength(this.seed.near, t), !0)
        },
        t.prototype.onSelfBoom = function () {
            if (this.seed.blast1_power_self > 0) {
                var t = this.addStrength(this.seed.blast1_power_self);
                return {
                    key: this.container.tileData.key,
                    oldStrength: this.strength - this.seed.blast1_power_self,
                    strength: this.strength,
                    removeRight: t
                }
            }
        },
        t.prototype.onBlast_protect = function (t) {
            if (this.seed.blast_protect > 0) {
                var e = this.addStrength(t);
                return {
                    key: this.container.tileData.key,
                    oldStrength: this.strength - t,
                    strength: this.strength,
                    removeRight: e
                }
            }
        },
        t.prototype._getDir = function (t) {
            for (var e, n = -1, o = null === (e = this.container) || void 0 === e ? void 0 : e.tileData, i = 0; i < t.neighbors.length; i++) {
                var r = t.neighbors[i];
                if (r && r == o)
                    return n = i
            }
            for (var a = this.container.tileData.levelData.getRing(t, 3)[3], c = function (t) {
                var e = a[t],
                    i = l.container.tileData.levelData.tiles[e.key];
                return i && i.components.checkMaskTrue(l.checkIn) ? (n = o.neighbors.findIndex(function (t) {
                    return i == t
                })) >= 0 ? (s.Logger.debug(o.key + "=>" + i.key, " dir:", n), {
                    value: n
                }) : void 0 : "continue"
            }, l = this, u = 0; u < a.length; u++) {
                var p = c(u);
                if ("object" == typeof p)
                    return p.value
            }
            return n
        },
        t.prototype.checkIn = function () {
            return !1
        },
        t.CptId = 0,
        t
}
    ();
n.Tile_Component = G;
var B = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.color < 1 && (i.color = l.Utils.randomInt(1, d.Tile_Color.Length)),
            i
    }
    return i(e, t),
        e.prototype.willBigBoom = function () {
            return !1
        },
        e
}
    (G);
n.Tile_Component_BudBase = B;
var U = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.allow_brush = !0,
            i.seed.accept_blast_protect = !1,
            p.GameConfig.DEBUG_FLOWER_STRENGTH && (i.strength = 5),
            i
    }
    return i(e, t),
        e.prototype.willBigBoom = function (t) {
            return t >= u.BattleConfig.Strength_Boom2
        },
        e
}
    (B);
n.Tile_Component_Bud = U;
var R = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.allow_shovel = !1,
            i.seed.allow_kettle = !1,
            i.seed.accept_blast_protect = !1,
            i.maxStrength = ~~n.max_strength,
            i
    }
    return i(e, t),
        e.prototype.willBigBoom = function (t) {
            return t >= this.maxStrength
        },
        e
}
    (B);
n.Tile_Component_BigBud = R;
var M = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.max_level = i.maxStrength = 2,
            i.seed.blast1_power = 1,
            i.seed.blast2_power1 = 3,
            i.seed.blast2_power2 = 3,
            i.seed.allow_brush = !0,
            i.seed.allow_brush = !1,
            i.seed.allow_kettle = !1,
            i.seed.allow_shovel = !1,
            i.strength = 1,
            i
    }
    return i(e, t),
        e.prototype.willBoom = function () {
            return !1
        },
        e.prototype.willBigBoom = function () {
            return !1
        },
        e.prototype.addStrength = function (t) {
            return 3 == t ? (this.strengthOld = this.strength, this.strength = 5) : this.strength < 2 && 1 == t && (this.strengthOld = this.strength, this.strength = 2),
                !1
        },
        e
}
    (B);
n.Tile_Component_Mushroom = M;
var x = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.maxStrength = 4,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.allow_kettle = !1,
            i
    }
    return i(e, t),
        e
}
    (B);
n.Tile_Component_weed = x;
var I = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.animate_at_creation = !1,
            i.maxStrength = 4,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.layer = 0,
            i.animate_at_creation = "1" == n.animate_at_creation,
            i
    }
    return i(e, t),
        e.prototype.addStrength = function (e, n) {
            var o = t.prototype.addStrength.call(this, e, n);
            return c.GlobalEvent.dispatchEvent(new h.EventOnMolehillBeHurt),
                o
        },
        e
}
    (B);
n.Tile_Component_Molehill = I;
var N = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.maxStrength = 4,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.layer = 0,
            i
    }
    return i(e, t),
        e
}
    (B);
n.Tile_Component_Pot = N;
var A = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.score = 500,
            i
    }
    return i(e, t),
        e
}
    (N);
n.Tile_Component_FallingPot = A;
var j = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.score = 500,
            i.seed.accept_blast_protect = !0,
            i.level = ~~n.level,
            i
    }
    return i(e, t),
        e.prototype.waterFlow = function (t) {
            var e;
            if (this.container) {
                var n = null === (e = this.container) || void 0 === e ? void 0 : e.tileData,
                    o = this._getDir(t),
                    i = [];
                if (o < 0)
                    s.Logger.warn("[Tile_Component_WaterBucket waterFlow] 无路可去！keyFrom:", null == t ? void 0 : t.key, " keyThis:", n.key);
                else
                    for (var r = function () {
                        for (var t = void 0, e = u.BattleConfig.Dir_Run[o], r = 0; r < e.length; r++) {
                            var c = e[r],
                                s = n.neighbors[c];
                            if (s && f.GameUtils.checkNeighborsOpen(n, s, !0) && s.components.checkMaskTrue(a.checkIn)) {
                                t = s,
                                    o = c;
                                break
                            }
                        }
                        if (!t)
                            return "break";
                        var l = t.key;
                        if (i.findIndex(function (t) {
                            return t.key == l
                        }) < 0) {
                            var p = t.components.budbase,
                                h = a.level;
                            if (p) {
                                var d = ~~u.BattleConfig.Water_Flow_Influence[p.type],
                                    g = p.strength + h * d;
                                g = Math.min(p.maxStrength, g);
                                var y = (g = Math.max(1, g)) - p.strength,
                                    _ = {
                                        key: t.key,
                                        color: -1,
                                        oldStrength: p.strength,
                                        strength: g
                                    };
                                p.addStrength(y),
                                    i.push(_)
                            } else
                                i.push({
                                    key: t.key,
                                    color: -1,
                                    oldStrength: 0,
                                    strength: 0
                                });
                            n = t
                        }
                    }, a = this, c = 0; c < u.BattleConfig.Grid_Num_WaterBucket && "break" !== r(); c++);
                return s.Logger.debug("[Tile_Component_WaterBucket waterFlow] path:", i),
                    i
            }
        },
        e.prototype.checkIn = function (t) {
            switch (t.type) {
                case r.bud:
                case r.big_bud:
                case r.weed:
                case r.green_house:
                case r.wall_east:
                case r.wall_south:
                case r.wall_west:
                case r.water_bucket:
                    return !0;
                default:
                    return !1
            }
        },
        e
}
    (N);
n.Tile_Component_WaterBucket = j;
var L = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.maxStrength = 4,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.layer = 1,
            i.seed.allow_kettle = !1,
            i
    }
    return i(e, t),
        e
}
    (G);
n.Tile_Component_Greenhouse = L;
var F = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.maxStrength = 3,
            i.seed.max_level = 3,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.layer = 1,
            i.seed.allow_kettle = !1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.near = 1,
            i.seed.block = 0,
            i.seed.absolute_blast_protect = !0,
            i.wall = u.BattleConfig.WallValue.LikeSlime,
            i
    }
    return i(e, t),
        e
}
    (G);
n.Tile_Component_Slime = F;
var V = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.maxStrength = 4,
            i.seed.max_level = 3,
            i.strength = o.max_level - (~~n.health || 3) + 1,
            i.seed.allow_kettle = !1,
            i.seed.allow_brush = !1,
            i.seed.allow_shovel = !1,
            i.seed.allow_body = 1,
            i.seed.allow_head = 1,
            i.seed.near = 1,
            i.seed.block = 0,
            i.seed.layer = -1,
            i.seed.blast1_power_self = 1,
            i.seed.blast2_power1 = 3,
            i.seed.blast2_power2 = 1,
            i.undead = "wall" == n.wall_type,
            i.dir = u.BattleConfig.Wall_Dir[n.location],
            i.wall = 1 << i.dir,
            i
    }
    return i(e, t),
        e.prototype.addStrength = function (e, n) {
            return !this.undead && t.prototype.addStrength.call(this, e, n)
        },
        e
}
    (G);
n.Tile_Component_Wall = V;
var W = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        switch (n.direction) {
            case "left":
                i.direction = d.Neighbor_Dir.NW;
                break;
            case "right":
                i.direction = d.Neighbor_Dir.NE;
                break;
            case "up":
                i.direction = d.Neighbor_Dir.N
        }
        return i.maxStrength = 4,
            i.strength = o.max_level - ~~n.health + 1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.layer = 0,
            i
    }
    return i(e, t),
        e.prototype.addStrength = function (e, n) {
            var o = t.prototype.addStrength.call(this, e, n);
            return c.GlobalEvent.dispatchEvent(new h.EventOnCrowBeHurt),
                o
        },
        e
}
    (B);
n.Tile_Component_Crow = W;
var H = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.seed.layer = 2,
            i
    }
    return i(e, t),
        e.prototype.run = function (t, e) {
            var n;
            if (void 0 === e && (e = 0), this.container) {
                var o,
                    i = null === (n = this.container) || void 0 === n ? void 0 : n.tileData,
                    r = this._getDir(t);
                if (r < 0)
                    s.Logger.warn("[Tile_Component_Pileofleaves run] 无路可去！keyFrom:", null == t ? void 0 : t.key, " keyThis:", i.key);
                else {
                    for (var a = u.BattleConfig.Dir_Run[r], c = 0; c < a.length; c++) {
                        var l = a[c],
                            p = i.neighbors[l];
                        if (p && f.GameUtils.checkNeighborsOpen(i, p, !0) && p.components.checkMaskTrue(this.checkIn)) {
                            o = p;
                            break
                        }
                    }
                    if (o) {
                        var h = i.components.pull(this.type);
                        for (c = 0; c < h.length; c++) {
                            var d = h[c];
                            o.components.push(d)
                        }
                        return {
                            id: this.id,
                            keyTo: o.key,
                            addStrength: e
                        }
                    }
                }
            }
        },
        e.prototype.checkIn = function () {
            return !1
        },
        e
}
    (G);
n.Tile_Component_RunnerBase = H;
var K = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.strength = 1,
            i.maxStrength = 1,
            i.seed.near = 1,
            i.seed.blast1_power = 1,
            i.seed.blast2_power1 = 2,
            i.seed.blast2_power2 = 1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.allow_brush = !1,
            i.seed.allow_shovel = !0,
            i.seed.score = 500,
            i
    }
    return i(e, t),
        e.prototype.onNear = function (t) {
            var e = this.run(t, this.seed.near);
            return e && c.GlobalEvent.dispatchEvent(new h.EventOnRunnerBeHurt({
                id: e.id,
                keyTo: e.keyTo,
                addStrength: this.seed.near
            })),
                !0
        },
        e.prototype.checkIn = function (t) {
            switch (t.type) {
                case r.bud:
                case r.weed:
                case r.pot:
                case r.falling_pot:
                case r.exploding_mushroom:
                case r.molehill:
                case r.pile_of_leaves:
                case r.green_house:
                case r.slime:
                case r.wall_east:
                case r.wall_south:
                case r.wall_west:
                    return !0;
                default:
                    return !1
            }
        },
        e
}
    (H);
n.Tile_Component_Pileofleaves = K;
var Y = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.roundNum = 0,
            i.seed.max_level = 4,
            i.maxStrength = i.seed.max_level,
            i.strength = 1,
            i.seed.near = 0,
            i.seed.blast1_power = 1,
            i.seed.blast2_power1 = 1,
            i.seed.blast2_power2 = 1,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.allow_brush = !0,
            i.seed.allow_shovel = !0,
            i.seed.drop = 0,
            i
    }
    return i(e, t),
        e.prototype.run = function (t, e) {
            if (void 0 === e && (e = 0), this.container)
                return this.roundNum = 0, this.addStrength(e), this.container.removeByType(r.honey_bee), {
                    id: this.id,
                    keyTo: null == t ? void 0 : t.key,
                    addStrength: e
                }
        },
        e.prototype.addStrength = function (e, n) {
            return t.prototype.addStrength.call(this, e, n)
        },
        e.prototype.checkIn = function (t) {
            switch (t.type) {
                case r.bud:
                case r.big_bud:
                case r.wall_east:
                case r.wall_south:
                case r.wall_west:
                    return !0;
                default:
                    return !1
            }
        },
        e
}
    (H);
n.Tile_Component_Bee = Y;
var X,
    J = function (t) {
        function e(e, n, o) {
            var i = t.call(this, e, n, o) || this;
            return i.seed.near = 1,
                i.seed.max_level = 100,
                i.seed.blast1_power = 2,
                i.seed.blast2_power1 = 2,
                i.seed.blast2_power2 = 2,
                i.seed.allow_body = 0,
                i.seed.allow_head = 0,
                i.seed.allow_kettle = !1,
                i.seed.allow_brush = !0,
                i.seed.allow_shovel = !0,
                i.seed.drop = 0,
                i.strength = 10,
                i.maxStrength = 100,
                i.curState = a.idel,
                i.dir = l.Utils.randomInt(0, d.Neighbor_Dir.Length),
                i.roundNum = 0,
                i
        }
        return i(e, t),
            e.prototype.onNear = function (t) {
                var e = this.run(t, this.seed.near);
                return e && c.GlobalEvent.dispatchEvent(new h.EventOnRunnerBeHurt({
                    id: e.id,
                    keyTo: e.keyTo,
                    addStrength: this.seed.near
                })),
                    !0
            },
            e.prototype.run = function (e, n) {
                if (void 0 === n && (n = 0), this.container)
                    switch (this.curState) {
                        case a.idel:
                            if (n >= 2)
                                return this.roundNum = 0, this.curState = a.shaking, this.dir = d.Neighbor_Dir.SW, {
                                    id: this.id,
                                    keyTo: "shaking",
                                    addStrength: n
                                };
                            break;
                        case a.shaking:
                            return t.prototype.run.call(this, e, n)
                    }
            },
            e.prototype.addStrength = function (e, n) {
                return t.prototype.addStrength.call(this, e, n)
            },
            e.prototype.checkIn = function (t) {
                switch (t.type) {
                    case r.bud:
                    case r.slime:
                    case r.wall_east:
                    case r.wall_south:
                    case r.wall_west:
                        return !0;
                    default:
                        return !1
                }
            },
            e
    }
        (H);
n.Tile_Component_snail = J,
    function (t) {
        t[t.bud = 10] = "bud",
            t[t.big_bud = 3] = "big_bud",
            t[t.weed = 1] = "weed",
            t[t.green_house = 0] = "green_house",
            t[t.molehill = 1] = "molehill",
            t[t.pot = 1] = "pot",
            t[t.pile_of_leaves = 0] = "pile_of_leaves",
            t[t.crow = 1] = "crow",
            t[t.honey_bee = 0] = "honey_bee",
            t[t.exploding_mushroom = 1] = "exploding_mushroom",
            t[t.slime = 0] = "slime",
            t[t.wall_west = 1] = "wall_west",
            t[t.wall_south = 1] = "wall_south",
            t[t.wall_east = 1] = "wall_east",
            t[t.snail = 0] = "snail",
            t[t.falling_pot = 1] = "falling_pot",
            t[t.water_bucket = 0] = "water_bucket",
            t[t.rolling_stone = 0] = "rolling_stone"
    }
        (X = n.Rolling_Stone_Hurt || (n.Rolling_Stone_Hurt = {}));
var z = function (t) {
    function e(e, n, o) {
        var i = t.call(this, e, n, o) || this;
        return i.running = !1,
            i.strength = 1,
            i.maxStrength = 5,
            i.seed.near = 0,
            i.seed.blast1_power = 0,
            i.seed.blast2_power1 = 0,
            i.seed.blast2_power2 = 0,
            i.seed.allow_body = 0,
            i.seed.allow_head = 0,
            i.seed.allow_kettle = !1,
            i.seed.allow_brush = !1,
            i.seed.allow_shovel = !0,
            i.seed.score = 500,
            i
    }
    return i(e, t),
        e.prototype.run = function (t) {
            if (!this.running && (this.running = !0, this.container)) {
                var e = this.container.tileData,
                    n = this._getDir(t),
                    o = {
                        id: this.id,
                        key: e.key,
                        oldStrength: this.strength,
                        steps: []
                    };
                if (n < 0)
                    s.Logger.warn("[Tile_Component_WaterBucket waterFlow] 无路可去！keyFrom:", null == t ? void 0 : t.key, " keyThis:", e.key);
                else {
                    e.components.pull(r.rolling_stone);
                    for (var i = void 0, a = 0; a < u.BattleConfig.Grid_Num_RollingStone; a++) {
                        for (var c = void 0, l = u.BattleConfig.Dir_Run[n], p = 0; p < l.length; p++) {
                            var f = l[p],
                                h = e.neighbors[f];
                            if (h && h.components.checkMaskTrue(this.checkIn)) {
                                c = h,
                                    n = f;
                                break
                            }
                        }
                        var d = e.components.getWallWithDir(n);
                        if (d) {
                            var y = void 0;
                            if (!d.undead) {
                                var _ = d.strength,
                                    m = d.addStrength(u.BattleConfig.Rolling_Strong_Power);
                                y = {
                                    type: d.type,
                                    id: d.id,
                                    oldStrength: _,
                                    strength: d.strength
                                },
                                    m && d.container.removeById(d.id)
                            }
                            var v = this.addStrength(u.BattleConfig.Rolling_Strong_Behurt),
                                b = o.steps[a];
                            return b || (b = o.steps[a] = []),
                                b.push({
                                    key: e.key,
                                    key_stay: e.key,
                                    strength: this.strength,
                                    dir: n,
                                    isCrachWallOut: !0,
                                    removeRight: v,
                                    destructions: y
                                }),
                                v ? this.container.removeById(this.id) : this.pushToTile(e),
                                o
                        }
                        if (!c)
                            break;
                        var w = c.components.getWallWithDir(u.BattleConfig.Dir_Reverse[n]);
                        if (w) {
                            var S = void 0;
                            w.undead || (_ = w.strength, m = w.addStrength(u.BattleConfig.Rolling_Strong_Power), S = {
                                type: w.type,
                                id: w.id,
                                oldStrength: _,
                                strength: w.strength
                            }, m && w.container.removeById(w.id)),
                                v = this.addStrength(u.BattleConfig.Rolling_Strong_Behurt);
                            var C = o.steps[a];
                            return C || (C = o.steps[a] = []),
                                C.push({
                                    key: c.key,
                                    key_stay: e.key,
                                    strength: this.strength,
                                    dir: n,
                                    isCrachWallIn: !0,
                                    removeRight: v,
                                    destructions: S
                                }),
                                v ? this.container.removeById(this.id) : this.pushToTile(e),
                                o
                        }
                        if (c.groundData.type == g.Water && c.groundData.wall == u.BattleConfig.WallValue.CloseAll) {
                            var O = o.steps[a + 1];
                            return O || (O = o.steps[a + 1] = []),
                                O.push({
                                    key: c.key,
                                    key_stay: c.key,
                                    strength: 999,
                                    dir: n,
                                    removeRight: !0,
                                    isFallIntoWater: !0,
                                    destructions: void 0
                                }),
                                this.container.removeById(this.id),
                                o
                        }
                        var E = c.components.getComponent(r.rolling_stone);
                        if (E) {
                            v = this.addStrength(u.BattleConfig.Rolling_Strong_Behurt);
                            var T = o.steps[a];
                            return T || (T = o.steps[a] = []),
                                T.push({
                                    key: c.key,
                                    key_stay: e.key,
                                    strength: this.strength,
                                    dir: n,
                                    removeRight: v,
                                    destructions: void 0,
                                    crashStone: E.run(e)
                                }),
                                v ? this.container.removeById(this.id) : this.pushToTile(e),
                                o
                        }
                        var k = c.components.budbase,
                            P = void 0,
                            D = c.key;
                        if (k) {
                            _ = k.strength;
                            var G = X[k.type],
                                B = k.addStrength(G);
                            if (P = {
                                type: k.type,
                                id: k.id,
                                oldStrength: _,
                                strength: k.strength
                            }, !B) {
                                v = this.addStrength(u.BattleConfig.Rolling_Strong_Behurt),
                                    D = e.key;
                                var U = o.steps[a];
                                return U || (U = o.steps[a] = []),
                                    U.push({
                                        key: c.key,
                                        key_stay: D,
                                        strength: this.strength,
                                        dir: n,
                                        removeRight: v,
                                        destructions: P
                                    }),
                                    v ? this.container.removeById(this.id) : this.pushToTile(e),
                                    o
                            }
                            k.container.removeBudbase()
                        }
                        var R = o.steps[a + 1];
                        R || (R = o.steps[a + 1] = []),
                            R.push({
                                key: c.key,
                                key_stay: D,
                                strength: this.strength,
                                dir: n,
                                removeRight: !1,
                                destructions: P
                            }),
                            i = c,
                            e = c
                    }
                    i && this.pushToTile(i)
                }
                return s.Logger.debug("[Tile_Component_WaterBucket waterFlow] path:", o),
                    o
            }
        },
        e.prototype.pushToTile = function (t) {
            t.components.push(this)
        },
        e.prototype.checkIn = function (t) {
            switch (t.type) {
                case r.bud:
                case r.big_bud:
                case r.rolling_stone:
                case r.pot:
                case r.falling_pot:
                case r.weed:
                case r.wall_east:
                case r.wall_south:
                case r.wall_west:
                    return !0;
                default:
                    return !1
            }
        },
        e
}
    (H);
n.Tile_Component_Rolling_Stone = z;