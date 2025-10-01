import { PayjpAddressForm } from './address-form';
import { PayjpPaymentForm } from './payment-form';

export * from './payment-form';
export * from './address-form';

export type PayjpFormBase = {
  /**
   * Form を DOM にマウントします。
   * @param selector - マウント先のCSSセレクタまたはHTMLElement
   */
  mount(selector: string | HTMLElement): void;

  /**
   * Form を DOM からアンマウントします。
   */
  unmount(): void;
}

export type PayjpForm = PayjpPaymentForm | PayjpAddressForm;
