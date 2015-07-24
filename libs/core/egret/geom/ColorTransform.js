//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    /**
     * @class egret.ColorTransform
     * @classdesc
     * 可使用 ColorTransform 类调整显示对象的颜色值。可以将颜色调整或颜色转换应用于所有四种通道：红色、绿色、蓝色和 Alpha 透明度。
     * 当 ColorTransform 对象应用于显示对象时，将按如下方法为每个颜色通道计算新值：
     * 新红色值 = (旧红色值 * redMultiplier) + redOffset
     * 新绿色值 = (旧绿色值 * greenMultiplier) + greenOffset
     * 新蓝色值 = (旧蓝色值 * blueMultiplier) + blueOffset
     * 新 Alpha 值 = (旧 Alpha 值 * alphaMultiplier) + alphaOffset
     * @extends egret.HashObject
     * @private
     */
    var ColorTransform = (function (_super) {
        __extends(ColorTransform, _super);
        /**
         * 创建一个 egret.ColorTransform 对象
         * @method egret.ColorTransform#constructor
         * @param redMultiplier {number} 红色乘数的值，在 0 到 1 范围内。
         * @param greenMultiplier {number} 绿色乘数的值，在 0 到 1 范围内。
         * @param blueMultiplier {number} 蓝色乘数的值，在 0 到 1 范围内。
         * @param alphaMultiplier {number} Alpha 透明度乘数的值，在 0 到 1 范围内。
         * @param redOffset {number} 红色通道值的偏移量，在 -255 到 255 范围内。
         * @param greenOffset {number} 绿色通道值的偏移量，在 -255 到 255 范围内。
         * @param blueOffset {number} 蓝色通道值的偏移量，在 -255 到 255 范围内。
         * @param alphaOffset {number} Alpha 透明度通道值的偏移量，在 -255 到 255 范围内。
         */
        function ColorTransform(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
            if (redMultiplier === void 0) { redMultiplier = 1.0; }
            if (greenMultiplier === void 0) { greenMultiplier = 1.0; }
            if (blueMultiplier === void 0) { blueMultiplier = 1.0; }
            if (alphaMultiplier === void 0) { alphaMultiplier = 1.0; }
            if (redOffset === void 0) { redOffset = 0; }
            if (greenOffset === void 0) { greenOffset = 0; }
            if (blueOffset === void 0) { blueOffset = 0; }
            if (alphaOffset === void 0) { alphaOffset = 0; }
            _super.call(this);
            this._redMultiplier = redMultiplier;
            this._greenMultiplier = greenMultiplier;
            this._blueMultiplier = blueMultiplier;
            this._alphaMultiplier = alphaMultiplier;
            this._redOffset = redOffset;
            this._greenOffset = greenOffset;
            this._blueOffset = blueOffset;
            this._alphaOffset = alphaOffset;
        }
        var __egretProto__ = ColorTransform.prototype;
        Object.defineProperty(__egretProto__, "alphaMultiplier", {
            /**
             * 与 Alpha 透明度通道值相乘的十进制值。
             * @member {number} egret.ColorTransform#alphaMultiplier
             * @default 1
             */
            get: function () {
                return this._alphaMultiplier;
            },
            set: function (value) {
                this._alphaMultiplier = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "alphaOffset", {
            /**
             * -255 到 255 之间的数字，加到 Alpha 透明度通道值和 alphaMultiplier 值的乘积上。
             * @member {number} egret.ColorTransform#alphaOffset
             * @default 0
             */
            get: function () {
                return this._alphaOffset;
            },
            set: function (value) {
                this._alphaOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "blueMultiplier", {
            /**
             * 与蓝色通道值相乘的十进制值。
             * @member {number} egret.ColorTransform#blueMultiplier
             * @default 1
             */
            get: function () {
                return this._blueMultiplier;
            },
            set: function (value) {
                this._blueMultiplier = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "blueOffset", {
            /**
             * -255 到 255 之间的数字，加到蓝色通道值和 blueMultiplier 值的乘积上。
             * @member {number} egret.ColorTransform#blueOffset
             * @default 0
             */
            get: function () {
                return this._blueOffset;
            },
            set: function (value) {
                this._blueOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "greenMultiplier", {
            /**
             * 与绿色通道值相乘的十进制值。
             * @member {number} egret.ColorTransform#greenMultiplier
             * @default 1
             */
            get: function () {
                return this._greenMultiplier;
            },
            set: function (value) {
                this._greenMultiplier = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "greenOffset", {
            /**
             * -255 到 255 之间的数字，加到绿色通道值和 greenMultiplier 值的乘积上。
             * @member {number} egret.ColorTransform#greenOffset
             * @default 0
             */
            get: function () {
                return this._greenOffset;
            },
            set: function (value) {
                this._greenOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "redMultiplier", {
            /**
             * 与红色通道值相乘的十进制值。
             * @member {number} egret.ColorTransform#redMultiplier
             * @default 1
             */
            get: function () {
                return this._redMultiplier;
            },
            set: function (value) {
                this._redMultiplier = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "redOffset", {
            /**
             * -255 到 255 之间的数字，加到红色通道值和 redMultiplier 值的乘积上。
             * @member {number} egret.ColorTransform#redOffset
             * @default 0
             */
            get: function () {
                return this._redOffset;
            },
            set: function (value) {
                this._redOffset = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "color", {
            /**
             * ColorTransform 对象的 RGB 颜色值。
             * @member {number} egret.ColorTransform#color
             */
            get: function () {
                return this._redOffset << 16 + this._greenOffset << 8 + this._blueOffset;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.identityColorTransform = function (colorTransform) {
            this._alphaMultiplier = colorTransform._alphaMultiplier;
            this._alphaOffset = colorTransform._alphaOffset;
            this._redMultiplier = colorTransform._redMultiplier;
            this._redOffset = colorTransform._redOffset;
            this._greenMultiplier = colorTransform._greenMultiplier;
            this._greenOffset = colorTransform._greenOffset;
            this._blueMultiplier = colorTransform._blueMultiplier;
            this._blueOffset = colorTransform._blueOffset;
        };
        /**
         * 将 second 参数指定的 ColorTransform 对象与当前 ColorTransform 对象连接，并将当前对象设置为结果，即两个颜色转换的相加组合
         * @method egret.ColorTransform#concat
         * @param second {egret.ColorTransform} 要与当前 ColorTransform 对象合并的 ColorTransform 对象
         */
        __egretProto__.concat = function (second) {
            this._redMultiplier *= second._redMultiplier;
            this._greenMultiplier *= second._greenMultiplier;
            this._blueMultiplier *= second._blueMultiplier;
            this._alphaMultiplier *= second._alphaMultiplier;
            this._redOffset += second._redOffset;
            this._greenOffset += second._greenOffset;
            this._blueOffset += second._blueOffset;
            this._alphaOffset += second._alphaOffset;
        };
        /**
         * 设置字符串格式并将其返回，该字符串描述 ColorTransform 对象的所有属性
         * @method egret.ColorTransform#toString
         */
        __egretProto__.toString = function () {
            return "(redMultiplier=" + this._redMultiplier + ", greenMultiplier=" + this._greenMultiplier + ", blueMultiplier=" + this._blueMultiplier + ", alphaMultiplier=" + this._alphaMultiplier + ", redOffset=" + this._redOffset + ", greenOffset=" + this._greenOffset + ", blueOffset=" + this._blueOffset + ", alphaOffset=" + this._alphaOffset + ")";
        };
        return ColorTransform;
    })(egret.HashObject);
    egret.ColorTransform = ColorTransform;
    ColorTransform.prototype.__class__ = "egret.ColorTransform";
})(egret || (egret = {}));
