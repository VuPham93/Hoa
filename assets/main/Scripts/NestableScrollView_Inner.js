var t = require;
var e = module;
cc.Class({
    extends: cc.ScrollView,
    properties: {
        m_OuterScrollView: {
            default:
                null,
            visible: !1
        }
    },
    setOuterScrollView: function (t) {
        this.m_OuterScrollView = t
    },
    _onTouchMoved: function (t, e) {
        if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
            var n = t.touch,
                o = n.getLocation().sub(n.getStartLocation());
            if (this.content && (this.m_OuterScrollView.isDifferentBetweenSettingAndPlan(this) || this._handleMoveLogic(n)), this.cancelInnerEvents) {
                if (o.mag() > 7 && !this._touchMoved && t.target !== this.node) {
                    var i = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
                    i.type = cc.Node.EventType.TOUCH_CANCEL,
                        i.touch = t.touch,
                        i.simulate = !0,
                        t.target.dispatchEvent(i),
                        this._touchMoved = !0
                }
                this._stopPropagationIfTargetIsMe(t)
            }
        }
    }
});