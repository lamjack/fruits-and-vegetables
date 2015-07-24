/**
 * Created by jack on 15/7/24.
 */
var Item = (function (_super) {
    __extends(Item, _super);
    function Item(texture) {
        _super.call(this, texture);
    }
    var __egretProto__ = Item.prototype;
    Object.defineProperty(__egretProto__, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Item.VEGETABLE = 1;
    Item.FRUIT = 2;
    return Item;
})(egret.Bitmap);
Item.prototype.__class__ = "Item";
