var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {
    value: !0
}),
    n.SaveNodeConfig = n.DataNode = void 0;
var o = t("GameConfig"),
    i = t("SaveDataConfig"),
    r = t("logger"),
    a = t("Utils"),
    s = t("G"),
    l = t("GlobalEvents"),
    p = t("PlatformManager"),
    f = function () {
        function t(t, e, n) {
            void 0 === n && (n = !0),
                this.isGameLogined = !1,
                this.list = new Map,
                this.nodeConfig = {},
                this.netKey = t,
                this._saveKey = t,
                this.nodeConfig = e,
                this.upload = n
        }

        return Object.defineProperty(t.prototype, "saveKey", {
            get: function () {
                return this._saveKey + "_" + o.GameConfig.GAME_MODEL
            },
            enumerable: !1,
            configurable: !0
        }),
            Object.defineProperty(t.prototype, "timestamp", {
                get: function () {
                    return this.getValue(i.SaveDataConfig.keyTimesTamp)
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.init = function () {
                this.isGameLogined = !1;
                var t = p.pm.Get(this.saveKey),
                    e = t ? JSON.parse(t) : {};
                for (var n in this.nodeConfig) {
                    var o = this.nodeConfig[n],
                        r = new h(o, e);
                    this.addNode(r)
                }
                this.addNode(new h(new d(i.SaveDataConfig.keyTimesTamp, 0, !1), e))

                if (window.FBInstant) {
                    let key = this.saveKey
                    let timeStamp = this.timestamp
                    let setValue = this.setValue
                    window.FBInstant.player.getDataAsync([key]).then(function (data) {
                        let fbData = data[key]
                        if (fbData && timeStamp) {
                            let fbDataTimestamp = fbData[i.SaveDataConfig.keyTimesTamp];
                            if (fbDataTimestamp && parseInt(fbDataTimestamp) > timeStamp) {
                                for (let r in fbData) {
                                    let a = fbData[r];
                                    setValue(r, a.v, !1)
                                }
                            }
                        }
                    })
                }
            },
            t.prototype.onLogin = function (t) {
                this.isGameLogined = !0;
                let e = t[i.SaveDataConfig.SaveKeyAdapter[this.netKey]];
                if (e) {
                    let n = JSON.parse(e);
                    let o = n[i.SaveDataConfig.keyTimesTamp];
                    if (parseInt(o) > this.timestamp)
                        for (let r in n) {
                            let a = n[r];
                            this.setValue(r, a.v, !1)
                        }
                }
            },
            t.prototype.save = function () {
                let saveData = {};
                this.list.forEach(function (e) {
                    saveData[e.key] = e.saveObj
                });
                saveData[i.SaveDataConfig.keyTimesTamp] = a.Utils.getCurMillisecond();
                let n = JSON.stringify(saveData);
                p.pm.Set(this.saveKey, n);
                // if (this.upload && this.isGameLogined) {
                //     var o = {
                //         token: c.dm.player.token,
                //         key: i.SaveDataConfig.SaveKeyAdapter[this.netKey],
                //         data: n
                //     };
                //     u.net.Post("setData", o, void 0)
                // }

                if (window.FBInstant) {
                    let fbData = {}
                    for (let key in i.SaveDataConfig.SaveKeyAdapter) {
                        let saveKey = key + "_" + o.GameConfig.GAME_MODEL
                        fbData[saveKey] = this.saveKey === saveKey ? n : p.pm.Get(saveKey)
                    }
                    window.FBInstant.player.setDataAsync(fbData)

                    if (this.saveKey.toString().toLowerCase() === i.SaveDataConfig.SaveKeyAdapter.Stage + "_" + o.GameConfig.GAME_MODEL) {
                        let starsList = Object.keys(saveData.stars.v).map(key => saveData.stars.v[key])
                        let score = starsList.reduce((prev, curr) => prev + curr, 0)

                        fetch("https://api.annalala.com/addOrUpdatePlayerInfo?" + new URLSearchParams({
                            fbId: window.FBInstant.player.getID(),
                            name: window.FBInstant.player.getName(),
                            photo: window.FBInstant.player.getPhoto(),
                            score: score,
                        }),
                            {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }
                            }
                        )
                            .then((response) => response.json())
                            .then((data) => {
                                console.log(data)
                            })
                    }
                }
            },
            t.prototype.addNode = function (t) {
                this.list.set(t.key, t)
            },
            t.prototype.getNode = function (t) {
                return this.list.get(t)
            },
            t.prototype.getValue = function (t) {
                return this.getNode(t) ? this.getNode(t).value : {}
            },
            t.prototype.setValue = function (t, e, n) {
                void 0 === n && (n = !0);
                var o = this.getNode(t);
                o.value = e,
                    s.GlobalEvent.dispatchEvent(new l.EventOnDataChange({
                        model: this.saveKey,
                        key: t,
                        value: o.value
                    })),
                n && r.Logger.debug("[SaveData save] " + t + " 数据上传"),
                n && this.save()
            },
            t
    }
    ();
n.default = f;
var h = function () {
    function t(t, e) {
        if (this.key = t.key, this.normal = t.normal, this.daily = t.daily, e && e[this.key]) {
            var n = e[this.key];
            this._value = null == n.v ? this.normal : n.v,
                this.saveTime = n.t || 0
        } else
            this._value = this.normal
    }

    return Object.defineProperty(t.prototype, "value", {
        get: function () {
            if (this.daily) {
                var t = a.Utils.getCurTime();
                a.Utils.isToday(this.saveTime) || (this._value = this.normal, this.saveTime = t)
            }
            return this._value
        },
        set: function (t) {
            this._value = t,
            this.daily && (this.saveTime = a.Utils.getCurTime())
        },
        enumerable: !1,
        configurable: !0
    }),
        Object.defineProperty(t.prototype, "saveObj", {
            get: function () {
                var t = {};
                return t.v = this._value,
                this.daily && (t.t = this.saveTime),
                    t
            },
            enumerable: !1,
            configurable: !0
        }),
        t
}
();
n.DataNode = h;
var d = function (t, e, n) {
    this.key = t,
        this.normal = e,
        this.daily = n
};
n.SaveNodeConfig = d;