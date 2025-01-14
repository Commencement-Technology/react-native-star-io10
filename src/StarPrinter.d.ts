import { NativeObject } from './NativeObject';
import { StarConnectionSettings } from './StarConnectionSettings';
import { StarPrinterInformation } from './StarPrinterInformation';
import { StarPrinterStatus } from './StarPrinterStatus';
import { PrinterDelegate } from './PrinterDelegate';
import { DrawerDelegate } from './DrawerDelegate';
import { InputDeviceDelegate } from './InputDeviceDelegate';
import { DisplayDelegate } from './DisplayDelegate';
import { StarSpoolJobSettings } from './StarSpoolJobSettings';
import { StarSpoolJobStatus } from './StarSpoolJobStatus';
import { StarConfigurationSetResult } from './StarConfigurationSetResult';
export declare class StarPrinter extends NativeObject {
    private _eventSubscriptions;
    private _connectionSettings;
    private _printerDelegate;
    private _drawerDelegate;
    private _inputDeviceDelegate;
    private _displayDelegate;
    _information: StarPrinterInformation | undefined;
    openTimeout: number;
    printTimeout: number;
    getStatusTimeout: number;
    starConfigurationTimeout: number;
    template: string | undefined;
    get information(): StarPrinterInformation | undefined;
    get connectionSettings(): StarConnectionSettings;
    get printerDelegate(): PrinterDelegate;
    get drawerDelegate(): DrawerDelegate;
    get inputDeviceDelegate(): InputDeviceDelegate;
    get displayDelegate(): DisplayDelegate;
    constructor(connectionSettings: StarConnectionSettings);
    open(): Promise<void>;
    print(command: string): Promise<void>;
    print(command: string, starSpoolJobSettings: StarSpoolJobSettings): Promise<number>;
    printRawData(data: Array<number>): Promise<void>;
    getStatus(): Promise<StarPrinterStatus>;
    getSpoolJobStatus(jobId: number): Promise<StarSpoolJobStatus>;
    getSpoolJobStatusList(size: number): Promise<Array<StarSpoolJobStatus>>;
    setStarConfiguration(starConfiguration: string): Promise<StarConfigurationSetResult>;
    getStarConfiguration(password?: string | undefined): Promise<string>;
    getDefaultStarConfiguration(): Promise<string>;
    close(): Promise<void>;
    dispose(): Promise<void>;
    protected _initNativeObjectImpl(): Promise<string>;
    protected _disposeNativeObjectImpl(nativeObject: string): Promise<void>;
}
