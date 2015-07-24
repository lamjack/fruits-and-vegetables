declare module egret {
    /**
     * @private
     */
    class DefaultLoadingView extends DisplayObjectContainer implements ILoadingView {
        private textField;
        constructor();
        init(): void;
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    interface ILoadingView {
        init(): void;
        setProgress(current: any, total: any): void;
        loadError(): void;
    }
}

declare module egret {
    /**
     * @private
     */
    class Html5VersionController extends egret.EventDispatcher implements IVersionController {
        constructor();
        fetchVersion(): void;
        checkIsNewVersion(virtualUrl: string): boolean;
        saveVersion(virtualUrl: string): void;
        /**
         * 获取所有有变化的文件
         * @returns {Array<string>}
         */
        getChangeList(): Array<string>;
        getVirtualUrl(url: string): string;
    }
}

declare module egret {
    /**
     * @private
     */
    class NativeVersionController extends egret.EventDispatcher implements IVersionController {
        private _versionInfo;
        private _versionPath;
        private _localFileArr;
        constructor();
        fetchVersion(): void;
        private getList(callback, type, root?);
        checkIsNewVersion(virtualUrl: string): boolean;
        saveVersion(virtualUrl: string): void;
        /**
         * 获取所有有变化的文件
         * @returns {Array<string>}
         */
        getChangeList(): Array<string>;
        getVirtualUrl(url: string): string;
        private _iLoadingView;
        private loadAllChange();
        private getLocalData(filePath);
        private getLocalDataByOld(filePath);
    }
}

