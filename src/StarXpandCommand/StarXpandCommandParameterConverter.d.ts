import { StarXpandCommand } from '../../index';
import { BlackMarkPosition } from './Printer/BlackMarkPosition';
import { Alignment } from './Printer/Alignment';
import { FontType } from './Printer/FontType';
import { CjkCharacterType } from './Printer/CjkCharacterType';
import { AmbiguousCharacterWidthType } from './Printer/AmbiguousCharacterWidthType';
import { CutType } from './Printer/CutType';
import { BarcodeSymbology } from './Printer/BarcodeSymbology';
import { BarcodeBarRatioLevel } from './Printer/BarcodeBarRatioLevel';
import { Pdf417Level } from './Printer/Pdf417Level';
import { QRCodeModel } from './Printer/QRCodeModel';
import { QRCodeLevel } from './Printer/QRCodeLevel';
import { TextWidthType } from './Printer/TextWidthType';
import { TextAlignment } from './Printer/TextAlignment';
import { TextEllipsizeType } from './Printer/TextEllipsizeType';
import { TextPrintType } from './Printer/TextPrintType';
import { SoundStorageArea } from './MelodySpeaker/SoundStorageArea';
import { CursorState } from './Display/CursorState';
import { Contrast } from './Display/Contrast';
export declare class StarXpandCommandParameterConverter {
    static convertNumber(value: number): string;
    static convertString(value: string): string;
    static convertBlackMarkPosition(value: BlackMarkPosition): string;
    static convertAlignment(value: Alignment): string;
    static convertFontType(value: FontType): string;
    static convertPrinterInternationalCharacterType(value: StarXpandCommand.Printer.InternationalCharacterType): string;
    static convertCjkCharacterTypeArray(values: Array<CjkCharacterType>): Array<string>;
    static convertPrinterCharacterEncodingType(value: StarXpandCommand.Printer.CharacterEncodingType): string;
    static convertAmbiguousCharacterWidthType(value: AmbiguousCharacterWidthType): string;
    static convertCutType(value: CutType): string;
    static convertBarcodeSymbology(value: BarcodeSymbology): string;
    static convertBarcodeBarRatioLevel(value: BarcodeBarRatioLevel): string;
    static convertPdf417Level(value: Pdf417Level): string;
    static convertQRCodeModel(value: QRCodeModel): string;
    static convertQRCodeLevel(value: QRCodeLevel): string;
    static convertTextWidthType(value: TextWidthType): string;
    static convertTextAlignment(value: TextAlignment): string;
    static convertTextEllipsizeType(value: TextEllipsizeType): string;
    static convertTextPrintType(value: TextPrintType): string;
    static convertDrawerChannel(value: StarXpandCommand.Drawer.Channel): string;
    static convertBuzzerChannel(value: StarXpandCommand.Buzzer.Channel): string;
    static convertSoundStorageArea(value: SoundStorageArea): string;
    static convertDisplayInternationalCharacterType(value: StarXpandCommand.Display.InternationalCharacterType): string;
    static convertDisplayCharacterEncodingType(value: StarXpandCommand.Display.CharacterEncodingType): string;
    static convertCursorState(value: CursorState): string;
    static convertContrast(value: Contrast): string;
    static convertPresenterLedType(value: StarXpandCommand.Presenter.LedType): string;
    static convertBezelLedType(value: StarXpandCommand.Bezel.LedType): string;
    static convertLineStyle(value: StarXpandCommand.Printer.LineStyle): string;
    static convertPageModePrintDirection(value: StarXpandCommand.Printer.PageModePrintDirection): string;
}