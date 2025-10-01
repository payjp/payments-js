import { PayjpFormBase } from ".";

export type PayjpPaymentForm = PayjpFormBase & {
  /**
   * PaymentForm をどの支払い手段も選択されていない状態にします。
   */
  collapse(): void;

  /**
   * PaymentForm の options を更新します。
   * @param options
   */
  update(options: PayjpPaymentFormUpdateOptions): void;
}

export type PaymentFormLayoutTypes = "tab" | "accordion";
export type PaymentFormLayoutOptions =
  | PaymentFormLayoutTypes
  | {
      type: PaymentFormLayoutTypes;
      defaultCollapsed: boolean;
    };

export type PaymentFormFieldBillingDetailsTypes = "auto" | "never"
export type PaymentFormFieldBillingDetailsOptions =
  | PaymentFormFieldBillingDetailsTypes
  | {
      name?: PaymentFormFieldBillingDetailsTypes;
      email?: PaymentFormFieldBillingDetailsTypes;
      phone?: PaymentFormFieldBillingDetailsTypes;
    };

export type PaymentMethodTypes =
  | "card"
  | "paypay"

export type PayjpPaymentFormOptions = {
  /**
   * PaymentForm の表示形式を指定します。
   * tab: タブ形式
   * accordion: アコーディオン形式
   * type, defaultCollapsed をキーにもつオブジェクトを指定することもできます。
   */
  layout?: PaymentFormLayoutOptions;

  /**
   * PaymentForm で入力する請求先情報のデフォルト値を指定します。
   */
  defaultValues?: {
    billingDetails?: {
      name?: string;
      email?: string;
      phone?: string;
    };
  };

  /**
   * PaymentForm の請求先情報入力フォームの表示方法を指定します。
   * auto: 必要がある場合に表示します。
   * never: 表示しません。 入力フォームを表示しない場合、 confirmPayment, confirmSetup メソッド呼び出し時に必要なパラメータを渡す必要があります。
   */
  fields?: {
    billingDetails?: PaymentFormFieldBillingDetailsOptions;
  };

  /**
   * PaymentForm に表示する決済手段の順番を指定します。
   */
  paymentMethodOrder?: PaymentMethodTypes[];
}

export type PayjpPaymentFormUpdateOptions = Partial<Omit<PayjpPaymentFormOptions, "layout">> 
