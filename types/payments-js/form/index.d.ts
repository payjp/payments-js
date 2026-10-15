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
 * Widgets のセッションを取得できず、Form を表示できないときに渡されるイベントです。
 *
 * `error` は `{ type: "sdk_error", code: "session_not_loaded" }` です。
 * 通信エラーなどで再試行しても取得できなかった場合のほか、client_secret が無効な場合にも発火します。
 * Form の iframe 自体を読み込めなかった場合（CSP の設定漏れなど）は発火しません。
 *
 * 一時的な障害であれば再読み込みで解消するため、利用者にはページの再読み込みを促してください。
 * 再読み込みしても解消しない場合は、client_secret が正しいか確認してください。
 */
export type PayjpFormLoadErrorEvent = {
  error: PayjpPaymentsError;
};
