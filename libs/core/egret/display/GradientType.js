var egret;
(function (egret) {
    var GradientType = (function () {
        function GradientType() {
        }
        var __egretProto__ = GradientType.prototype;
        /**
         * 用于指定线性渐变填充的值
         * @method egret.GradientType.LINEAR
         */
        GradientType.LINEAR = "linear";
        /**
         * 用于指定放射状渐变填充的值
         * @method egret.GradientType.RADIAL
         */
        GradientType.RADIAL = "radial";
        return GradientType;
    })();
    egret.GradientType = GradientType;
    GradientType.prototype.__class__ = "egret.GradientType";
})(egret || (egret = {}));
