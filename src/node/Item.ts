/**
 * Created by jack on 15/7/24.
 */

class Item extends egret.Bitmap
{
    static VEGETABLE:number = 1;
    static FRUIT:number = 2;

    private _type:number;

    constructor(texture:egret.Texture)
    {
        super(texture);
    }

    public get type():number
    {
        return this._type;
    }

    public set type(value:number)
    {
        this._type = value;
    }
}