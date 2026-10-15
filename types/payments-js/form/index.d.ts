import { PayjpAddressForm } from './address-form';
import { PayjpPaymentForm } from './payment-form';
import { PayjpPaymentsError } from '..';

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

/**
 * Form の読み込みに失敗したときに渡されるイベントです。
 *
 * Widgets のセッションを取得できなかった場合、`error` は `{ type: "sdk_error", code: "session_not_loaded" }` になります。
 * Form は表示されないため、利用者にページの再読み込みを促してください。
 */
export type PayjpFormLoadErrorEvent = {
  error: PayjpPaymentsError;
};
