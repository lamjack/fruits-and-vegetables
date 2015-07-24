/**
 * Created by jack on 15/7/23.
 */
var IntroSence = (function (_super) {
    __extends(IntroSence, _super);
    function IntroSence() {
        _super.call(this);
        if (this.stage) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
    }
    var __egretProto__ = IntroSence.prototype;
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
        this._btnStart = new egret.Bitmap();
        this._btnStart.texture = RES.getRes('ui_json.start');
        this._btnStart.touchEnabled = true;
        this._btnStart.width = 204;
        this._btnStart.height = 265;
        this._btnStart.x = (this.stage.stageWidth - 204) / 2;
        this._btnStart.y = 360;
        this._btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnStartHandle, this);
        this.addChild(this._btnStart);
        this._title = new egret.Bitmap();
        this._title.texture = RES.getRes('ui_json.title');
        this._title.width = 415;
        this._title.height = 111;
        this._title.x = (this.stage.stageWidth - 415) / 2;
        this._title.y = 120;
        this.addChild(this._title);
        this._descriptions = new egret.Bitmap();
        this._descriptions.texture = RES.getRes('ui_json.description');
        this._descriptions.x = (this.stage.stageWidth - 244) / 2;
        this._descriptions.y = 240;
        this.addChild(this._descriptions);
    };
    __egretProto__.btnStartHandle = function (e) {
        this.dispatchEvent(new egret.Event("GameStart"));
    };
    return IntroSence;
})(egret.DisplayObjectContainer);
IntroSence.prototype.__class__ = "IntroSence";
