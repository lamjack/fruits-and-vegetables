/**
 * Created by jack on 15/7/23.
 */

class IntroSence extends egret.DisplayObjectContainer
{
    private _btnStart:egret.Bitmap;
    private _bg:egret.Bitmap;
    private _title:egret.Bitmap;
    private _descriptions:egret.Bitmap;

    constructor()
    {
        super();
        if (this.stage) {
            this.init();
        } else {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
    }

    private onAddToStage(event:egret.Event)
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    }

    private init()
    {
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

    }

    private btnStartHandle(e:egret.TouchEvent)
    {
        this.dispatchEvent(new egret.Event("GameStart"));
    }
}