/**
 * Created by jack on 15/7/23.
 */
var GameSence = (function (_super) {
    __extends(GameSence, _super);
    function GameSence() {
        _super.call(this);
        if (this.stage) {
            this.init();
        }
        else {
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }
    }
    var __egretProto__ = GameSence.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.init();
    };
    __egretProto__.init = function () {
        var stageW = this.stage.stageWidth;
        this._curTime = GameSence.TIME_LIMIT;
        this._score = 0;
        this._lift = GameSence.MAX_LIFT;
        this._bg = new egret.Bitmap();
        this._bg.texture = RES.getRes('bg_png');
        this._bg.width = this.stage.stageWidth;
        this._bg.height = this.stage.stageHeight;
        this.addChild(this._bg);
        this._topFlower = new egret.Bitmap();
        this._topFlower.texture = RES.getRes('ui_json.most_top');
        this.addChild(this._topFlower);
        // 倒计时生命条
        this._iconLife = new egret.Bitmap();
        this._iconLife.texture = RES.getRes('ui_json.life');
        this._iconLife.x = stageW - 150;
        this._iconLife.y = GameSence.STATUS_OFFSET_Y;
        this.addChild(this._iconLife);
        this._textLife = new egret.TextField();
        this._textLife.textColor = 0xffdb5d;
        this._textLife.size = 30;
        this._textLife.text = this._lift.toString();
        this._textLife.x = stageW - 80;
        this._textLife.y = GameSence.STATUS_OFFSET_Y + 10;
        this.addChild(this._textLife);
        this._iconTime = new egret.Bitmap();
        this._iconTime.texture = RES.getRes('ui_json.time');
        this._iconTime.x = 50;
        this._iconTime.y = GameSence.STATUS_OFFSET_Y;
        this.addChild(this._iconTime);
        this._textTime = new egret.TextField();
        this._textTime.textColor = 0xffdb5d;
        this._textTime.size = 30;
        this._textTime.text = this._curTime.toString();
        this._textTime.x = 120;
        this._textTime.y = GameSence.STATUS_OFFSET_Y + 10;
        this.addChild(this._textTime);
        this._itemsNode = new ItemsNode();
        this.addChild(this._itemsNode);
        // 选择按钮
        this._btnVegetables = new egret.Bitmap();
        this._btnVegetables.texture = RES.getRes('ui_json.vegetables');
        this._btnVegetables.x = (stageW - this._btnVegetables.width) / 2 + GameSence.BTN_OFFSET_X;
        this._btnVegetables.y = GameSence.BTN_Y;
        this._btnVegetables.touchEnabled = true;
        this._btnVegetables.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnVegetablesTap, this);
        this.addChild(this._btnVegetables);
        this._btnFruits = new egret.Bitmap();
        this._btnFruits.texture = RES.getRes('ui_json.fruits');
        this._btnFruits.x = (stageW - this._btnFruits.width) / 2 - GameSence.BTN_OFFSET_X;
        this._btnFruits.y = GameSence.BTN_Y;
        this._btnFruits.touchEnabled = true;
        this._btnFruits.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnFruitsTap, this);
        this.addChild(this._btnFruits);
        this._tween = new egret.Tween.get(this._itemsNode);
        // 计时器
        this._timer = new egret.Timer(1000, 0);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.updateTextTime, this);
        this._timer.start();
    };
    __egretProto__.onBtnFruitsTap = function (e) {
        this.onBtnTag(Item.FRUIT);
    };
    __egretProto__.onBtnVegetablesTap = function (e) {
        this.onBtnTag(Item.VEGETABLE);
    };
    __egretProto__.onBtnTag = function (id) {
        if (this._itemsNode.result == id) {
            this._score++;
            this._itemsNode.pass();
        }
        else {
            this.lifeDeduct();
            this._itemsNode.dispass();
        }
    };
    __egretProto__.lifeDeduct = function () {
        --this._lift;
        if (this._lift == 0) {
            this.gameOver();
        }
        else {
            this._textLife.text = (this._lift).toString();
        }
    };
    __egretProto__.updateTextTime = function () {
        this._curTime--;
        this._textTime.text = this._curTime.toString();
        if (this._curTime == 0) {
            this.gameOver();
        }
    };
    __egretProto__.gameOver = function () {
        var event = new GameOverEvent("GameOver");
        event.score = this._score;
        this.dispatchEvent(event);
    };
    GameSence.BTN_Y = 770;
    GameSence.BTN_OFFSET_X = 200;
    GameSence.STATUS_OFFSET_Y = 100;
    GameSence.TIME_LIMIT = 60;
    GameSence.MAX_LIFT = 3;
    return GameSence;
})(egret.Sprite);
GameSence.prototype.__class__ = "GameSence";
