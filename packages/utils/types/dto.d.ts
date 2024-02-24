import type { CookieAttributes } from 'js-cookie';

export {};

declare global {
 
  interface ResponseDTO<T> {
    result: T;
    isSuccess : boolean;
    exception : string;
    code : string;
  }


  // SOCKET
  interface PortalEasyConnectionConnectDTO {
    socketId: number,
    resultAsJson: boolean,
    subscriptionCode: string,
    sppId?: number,
    movId?: number,
    idChannel?: number,
  }

  interface CookieOptions extends CookieAttributes {
    expires?: Date;
    sameSite?: 'strict' | 'lax' | 'none';
  }

  // IMAGE GENERATOR
  interface ImageGeneratorBasicInterface {
    format: 'webp' | 'jpg';
    size: string;
    quality: string;
  }
  
  type QrErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
  
  interface ImageGeneratorQrCodeInterface extends ImageGeneratorBasicInterface {
    data: string,
    errorCorrectionLevel: QrErrorCorrectionLevel,
    primaryColor: string,
    secondaryColor: string,
    margin: 1 | 2 | 4,
  }
}
