import { PayjpElementBase } from ".";

export type PayjpPaymentElement = PayjpElementBase & {
  /**
   * PaymentElement をどの支払い手段も選択されていない状態にします。
   */
  collapse(): void;

  update(options: PayjpPaymentElementOptions): void;
}

export type PaymentElementLayoutTypes = "tab" | "accordion";
export type PaymentElementLayoutOptions =
  | PaymentElementLayoutTypes
  | {
      type: PaymentElementLayoutTypes;
      defaultCollapsed: boolean;
    };

export type PaymentElementFieldBillingDetailsTypes = "auto" | "never"
export type PaymentElementFieldBillingDetailsOptions = 
  | PaymentElementFieldBillingDetailsTypes
  | {
      name?: PaymentElementFieldBillingDetailsTypes;
      email?: PaymentElementFieldBillingDetailsTypes;
      phone?: PaymentElementFieldBillingDetailsTypes;
    };

export type PaymentMethodTypes =
  | "card"
  | "paypay"

export interface PayjpPaymentElementOptions {
  /**
   * PaymentElement の表示形式を指定します。
   * tab: タブ形式
   * accordion: アコーディオン形式
   * type, defaultCollapsed をキーにもつオブジェクトを指定することもできます。
   */
  layout?: PaymentElementLayoutOptions;

  /**
   * PaymentElement で入力する請求先情報のデフォルト値を指定します。
   */
  defaultValues?: {
    billingDetails?: {
      name?: string;
      email?: string;
      phone?: string;
    };
  };

  /**
   * PaymentElement の請求先情報入力フォームの表示方法を指定します。
   * auto: 必要がある場合に表示します。
   * never: 表示しません。 入力フォームを表示しない場合、 confirmPayment, confirmSetup メソッド呼び出し時に必要なパラメータを渡す必要があります。
   */
  fields?: {
    billingDetails?: PaymentElementFieldBillingDetailsOptions;
  };

  /**
   * PaymentElement に表示する決済手段の順番を指定します。
   */
  paymentMethodOrder?: PaymentMethodTypes[];
}