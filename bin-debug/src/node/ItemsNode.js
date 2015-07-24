/**
 * Created by jack on 15/7/23.
 */
var ItemsNode = (function (_super) {
    __extends(ItemsNode, _super);
    function ItemsNode() {
        _super.call(this);
        this._items = [];
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = ItemsNode.prototype;
    __egretProto__.onAddToStage = function (event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        for (var i = 0; i < 5; i++) {
            var bm = ItemsNode.createItem();
            this._items.push(bm);
        }
        this.init();
    };
    __egretProto__.init = function () {
        var stageW = this.stage.stageWidth;
        this._pass = 0;
        this._length = 5;
        for (var i = 0; i < this._length; i++) {
            this._items[i].x = (stageW - this._items[i].width) / 2;
            this._items[i].y = 770 - (ItemsNode.SPACING_Y * i);
            this.addChild(this._items[i]);
        }
        this._result = this._items[0].type;
    };
    __egretProto__.pass = function () {
        var bm = ItemsNode.createItem();
        var stageW = this.stage.stageWidth;
        bm.x = (stageW - bm.width) / 2;
        bm.y = 770 - (ItemsNode.SPACING_Y * this._length);
        this._items.push(bm);
        this.addChild(bm);
        this._pass++;
        this._length++;
        var tween = egret.Tween.get(this);
        tween.to({ y: ItemsNode.SPACING_Y * this._pass }, 200).call(function () {
            this.removeChild(this._items.shift());
            this._result = this._items[0].type;
        }, this);
    };
    __egretProto__.dispass = function () {
        var offset = 20;
        var time = 20;
        var item = this._items[0];
        var tween = egret.Tween.get(item);
        var initX = item.x;
        tween.to({ x: item.x - offset }, time).to({ x: item.x + offset * 2 }, time).to({ x: item.x - offset * 2 }, time).to({ x: item.x + offset * 2 }, time).to({ x: item.x - offset * 2 }, time).to({ x: item.x - offset * 2 }, time).to({ x: item.x - offset * 2 }, time).to({ x: item.x - offset * 2 }, time).to({ x: item.x + offset * 2 }, time).call(function () {
            item.x = initX;
        });
    };
    Object.defineProperty(__egretProto__, "result", {
        get: function () {
            return this._result;
        },
        enumerable: true,
        configurable: true
    });
    ItemsNode.createItem = function () {
        var textureName = ItemsNode.getRandomTextureName();
        var bm = new Item(RES.getRes('ui_json.' + textureName));
        if (textureName.indexOf('fruit') == 0) {
            bm.type = Item.FRUIT;
        }
        else {
            bm.type = Item.VEGETABLE;
        }
        return bm;
    };
    ItemsNode.getRandomTextureName = function () {
        var arr = [
            "fruit_1",
            "vegetable_1",
            "fruit_2",
            "vegetable_2",
            "fruit_3",
            "vegetable_3",
            "fruit_4",
            "vegetable_4",
            "fruit_5",
            "vegetable_5",
            "fruit_6",
            "vegetable_6",
            "fruit_7",
            "vegetable_7",
            "fruit_8",
            "vegetable_8",
            "fruit_9",
            "vegetable_9"
        ];
        var index = Math.floor(Math.random() * (arr.length - 1));
        return arr[index];
    };
    ItemsNode.SPACING_Y = 170;
    return ItemsNode;
})(egret.DisplayObjectContainer);
ItemsNode.prototype.__class__ = "ItemsNode";
