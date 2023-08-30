var t = require;
var e = module;
cc.Class({
    extends: cc.ScrollView,
    properties: {
        m_InnerScrollViews: [t("NestableScrollView_Inner")],
        m_PlanDir: {
            default:
                null,
            visible: !1
        },
        m_ScrollingInnerSv: {
            default:
                null,
            visible: !1
        }
    },
    onLoad: function () {
        var t = this;
        this.m_PlanDir = null,
            this.m_InnerScrollViews.forEach(function (e) {
                e && e.setOuterScrollView(t)
            })
    },
    _isHisChild: function (t, e) {
        return t == e || null != t.parent && (t.parent == e || this._isHisChild(t.parent, e))
    },
    _findScrollingInnerSv: function (t) {
        for (var e = 0; e < this.m_InnerScrollViews.length; e++) {
            var n = this.m_InnerScrollViews[e];
            if (n && this._isHisChild(t, n.node))
                return n
        }
        return null
    },
    isDifferentBetweenSettingAndPlan: function (t) {
        return !(0 == this.m_PlanDir || 1 == this.m_PlanDir && t.horizontal || -1 == this.m_PlanDir && t.vertical)
    },
    _hasNestedViewGroup: function (t) {
        if (t.eventPhase === cc.Event.CAPTURING_PHASE)
            return !1
    },
    _onTouchBegan: function (t, e) {
        if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
            this.m_PlanDir = null,
                this.m_ScrollingInnerSv = null;
            var n = t.touch;
            this.content && this._handlePressLogic(n),
                this._touchMoved = !1,
                this._stopPropagationIfTargetIsMe(t)
        }
    },
    _onTouchMoved: function (t, e) {
        if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
            var n = t.touch,
                o = n.getLocation().sub(n.getStartLocation());
            if (null == this.m_PlanDir && o.mag() > 7)
                if (this.m_ScrollingInnerSv = this._findScrollingInnerSv(t.target), null != this.m_ScrollingInnerSv) {
                    var i = this.m_ScrollingInnerSv.content.getContentSize(),
                        r = this.m_ScrollingInnerSv.node.getContentSize();
                    this.m_ScrollingInnerSv.vertical && i.height > r.height || this.m_ScrollingInnerSv.horizontal && i.width > r.width ? this.m_PlanDir = Math.abs(o.x) > Math.abs(o.y) ? 1 : -1 : this.m_PlanDir = 0
                } else
                    this.m_PlanDir = 0;
            if (this.content && (this.isDifferentBetweenSettingAndPlan(this) || this._handleMoveLogic(n)), this.cancelInnerEvents && null == this.m_ScrollingInnerSv) {
                if (o.mag() > 7 && !this._touchMoved && t.target !== this.node) {
                    var a = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
                    a.type = cc.Node.EventType.TOUCH_CANCEL,
                        a.touch = t.touch,
                        a.simulate = !0,
                        t.target.dispatchEvent(a),
                        this._touchMoved = !0
                }
                this._stopPropagationIfTargetIsMe(t)
            }
        }
    }
});