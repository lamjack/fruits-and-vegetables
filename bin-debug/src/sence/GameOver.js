/**
 * Created by jack on 15/7/24.
 */
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        _super.call(this);
        this._score = 0;
        if (this.stage) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
    }
    var __egretProto__ = GameOver.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };
    __egretProto__.init = function () {
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes('bg_png');
        this._bg.width = this.stage.stageWidth;
        this._bg.height = this.stage.stageHeight;
        this.addChild(this._bg);
        this._overBg = new egret.Bitmap();
        this._overBg.texture = RES.getRes('over_png');
        this._overBg.x = (this.stage.stageWidth - this._overBg.width) / 2;
        this._overBg.y = (this.stage.stageHeight - this._overBg.height) / 2;
        this.addChild(this._overBg);
        this._textScore = new egret.TextField();
        this._textScore = new egret.TextField();
        this._textScore.textColor = 0xffdb5d;
        this._textScore.size = 40;
        this._textScore.text = "我吃掉了 " + this._score.toString() + " 個果蔬";
        this._textScore.x = (this.stage.stageWidth - this._textScore.width) / 2;
        this._textScore.y = (this.stage.stageHeight - this._textScore.height) / 2 - 60;
        this.addChild(this._textScore);
        this._btnRetry = new egret.Bitmap();
        this._btnRetry.texture = RES.getRes('ui_json.retry');
        this._btnRetry.x = (this.stage.stageWidth - this._btnRetry.width) / 2 - 100;
        this._btnRetry.y = (this.stage.stageHeight - this._btnRetry.height) / 2 + 80;
        this._btnRetry.touchEnabled = true;
        this._btnRetry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.retry, this);
        this.addChild(this._btnRetry);
        this._btnShare = new egret.Bitmap();
        this._btnShare.texture = RES.getRes('ui_json.share');
        this._btnShare.x = (this.stage.stageWidth - this._btnShare.width) / 2 + 100;
        this._btnShare.y = (this.stage.stageHeight - this._btnShare.height) / 2 + 80;
        this.addChild(this._btnShare);
    };
    __egretProto__.retry = function () {
        this.dispatchEvent(new egret.Event("GameStart"));
    };
    Object.defineProperty(__egretProto__, "score", {
        set: function (value) {
            this._score = value;
        },
        enumerable: true,
        configurable: true
    });
    return GameOver;
})(egret.DisplayObjectContainer);
GameOver.prototype.__class__ = "GameOver";
