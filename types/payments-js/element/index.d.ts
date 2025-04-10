import { PayjpAddressElement } from './address';
import { PayjpPaymentElement } from './payment';

export * from './payment';
export * from './address';

export type PayjpElementBase = {
  /**
   * Element を DOM にマウントします。
   * @param selector - マウント先のCSSセレクタまたはHTMLElement
   */
  mount(selector: string | HTMLElement): void;

  /**
   * Element を DOM からアンマウントします。
   */
  unmount(): void;
}

export type PayjpElement = PayjpPaymentElement | PayjpAddressElement;
