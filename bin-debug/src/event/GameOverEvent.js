/**
 * Created by jack on 15/7/24.
 */
var GameOverEvent = (function (_super) {
    __extends(GameOverEvent, _super);
    function GameOverEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        this.score = 0;
        _super.call(this, type, bubbles, cancelable);
    }
    var __egretProto__ = GameOverEvent.prototype;
    Object.defineProperty(__egretProto__, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    return GameOverEvent;
})(egret.Event);
GameOverEvent.prototype.__class__ = "GameOverEvent";
