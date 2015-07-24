/**
 * Created by jack on 15/7/23.
 */

class ItemsNode extends egret.DisplayObjectContainer
{
    static SPACING_Y:number = 170;

    private _pass:number;
    private _length:number;
    private _result:number;
    private _items:Item[] = [];

    constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event)
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 初始化元素
        for (var i = 0; i < 5; i++) {
            var bm:Item = ItemsNode.createItem();
            this._items.push(bm);
        }
        this.init();
    }

    private init():void
    {
        var stageW:number = this.stage.stageWidth;

        this._pass = 0;
        this._length = 5;

        // 初始化元素
        for (var i = 0; i < this._length; i++) {
            this._items[i].x = (stageW - this._items[i].width) / 2;
            this._items[i].y = 770 - (ItemsNode.SPACING_Y * i);
            this.addChild(this._items[i]);
        }

        this._result = this._items[0].type;
    }

    public pass()
    {
        var bm:Item = ItemsNode.createItem();
        var stageW:number = this.stage.stageWidth;
        bm.x = (stageW - bm.width) / 2;
        bm.y = 770 - (ItemsNode.SPACING_Y * this._length);
        this._items.push(bm);
        this.addChild(bm);

        this._pass++;
        this._length++;

        var tween:egret.Tween = egret.Tween.get(this);
        tween.to({y: ItemsNode.SPACING_Y * this._pass}, 200).call(function ()
        {
            this.removeChild(this._items.shift());
            this._result = this._items[0].type;
        }, this);
    }

    public dispass()
    {
        var offset = 20;
        var time = 20;
        var item = this._items[0];
        var tween:egret.Tween = egret.Tween.get(item);
        var initX = item.x;
        tween
            .to({x: item.x - offset}, time)
            .to({x: item.x + offset * 2}, time)
            .to({x: item.x - offset * 2}, time)
            .to({x: item.x + offset * 2}, time)
            .to({x: item.x - offset * 2}, time)
            .to({x: item.x - offset * 2}, time)
            .to({x: item.x - offset * 2}, time)
            .to({x: item.x - offset * 2}, time)
            .to({x: item.x + offset * 2}, time).call(function ()
            {
                item.x = initX;
            });
    }

    public get result():number
    {
        return this._result;
    }

    static createItem():Item
    {
        var textureName:string = ItemsNode.getRandomTextureName();
        var bm:Item = new Item(RES.getRes('ui_json.' + textureName));
        if (textureName.indexOf('fruit') == 0) {
            bm.type = Item.FRUIT;
        } else {
            bm.type = Item.VEGETABLE;
        }
        return bm;
    }

    static getRandomTextureName():string
    {
        var arr:Array<string> = [
            "fruit_1", "vegetable_1", "fruit_2", "vegetable_2", "fruit_3", "vegetable_3",
            "fruit_4", "vegetable_4", "fruit_5", "vegetable_5", "fruit_6", "vegetable_6",
            "fruit_7", "vegetable_7", "fruit_8", "vegetable_8", "fruit_9", "vegetable_9"
        ];
        var index:number = Math.floor(Math.random() * (arr.length - 1));
        return arr[index];
    }
}