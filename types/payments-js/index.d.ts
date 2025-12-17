import { PayjpWidgets } from './widgets';
import * as paymentFlows from './payment-flows';
import * as setupFlows from './setup-flows';
import { PaymentFlow } from '../api/payment-flows';
import { SetupFlow } from '../api/setup-flows';
export * from './widgets';
export * from './form';
export * from './payment-flows';
export * from './setup-flows';

export interface PayjpPayments {
    widgets(options?: PayjpWidgetsOptionsClientSecret): PayjpWidgets;

    retrievePaymentFlow(clientSecret: string): Promise<PaymentFlow>
    retrieveSetupFlow(clientSecret: string): Promise<SetupFlow>

    handleNextAction(options: {clientSecret: string}): Promise<void>;
}

export type Locales = 'ja' | 'en'

export type Appearance = {
  theme: "payjp" | "dark";
  variables?: {
    colorPrimary?: string;
    colorBackground?: string;
    colorText?: string;
    colorDanger?: string;
    fontFamily?: string;
    fontSizeBase?: string;
  };
};

interface PayjpWidgetsOptionsBase {
  locale?: Locales;
  appearance?: Appearance;
}

export type PayjpWidgetsOptionsClientSecret = PayjpWidgetsOptionsBase & {
  clientSecret: string;
}

export type PayjpWidgetsUpdateOptions = Partial<PayjpWidgetsOptionsBase>

export interface PayjpPaymentsConstructor {
  (publicKey: string): PayjpPayments;
  (publicKey: string, options?: PayjpPaymentsConstructorOptions): PayjpPayments;
}

export interface PayjpPaymentsConstructorOptions {
  jsOrigin?: string;
}

/**
 * バリデーションエラーの詳細情報です。
 *
 * `PayjpPaymentsError` の `validationErrors` フィールドに含まれます。
 */
export type PayjpValidationError = {
  /** エラーが発生したフィールド名 */
  field: string;
  /** エラーの内容を説明するメッセージ */
  message: string;
  /** エラーの種類 */
  error_type: string;
};

/**
 * PayjpPaymentsError の type フィールドに設定される値です。
 *
 * エラーの種類に応じて適切なハンドリングを行ってください:
 *
 * - `"card_error"`: カードの支払い処理が失敗しました。利用者に別の支払い情報の入力を促してください。
 * - `"validation_error"`: 入力内容に問題があります。フォームにエラーメッセージが自動表示されるため、通常は追加の対応は不要です。
 * - `"api_error"`: APIリクエストでエラーが発生しました。`code` を確認し、実装の見直しまたは時間をおいた再試行を検討してください。
 * - `"sdk_error"`: SDKの使用方法に問題がある可能性があります。実装内容の再確認をお願いします。
 * - `"user_error"`: キャンセルや支払い方法が利用不可など利用者の操作に起因するエラーです。通常は追加の対応は不要です。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpPaymentsErrorType =
  | "card_error"
  | "validation_error"
  | "api_error"
  | "sdk_error"
  | "user_error"
  | (string & {});

/**
 * 支払いエラーコード
 *
 * `type: "card_error"` の場合に返されるエラーコードです。
 *
 * このエラーが発生した場合は、利用者に対して別の支払い情報の入力を促してください。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpPaymentErrorCode =
  | "card_declined"
  | "expired_card"
  | "invalid_cvc"
  | "processing_error"
  | "invalid_expiration_date"
  | "three_d_secure_failed"
  | "test_card_on_livemode"
  | (string & {});

/**
 * バリデーションエラーコード
 *
 * `type: "validation_error"` の場合に返されるエラーコードです。
 *
 * フォームのバリデーションエラーメッセージは自動的に表示されるため、追加のエラーハンドリングは通常不要です。
 * 詳細なエラー内容は `validationErrors` フィールドで確認できます。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpValidationErrorCode =
  | "validation_error"
  | (string & {});

/**
 * APIエラーコード
 *
 * `type: "api_error"` の場合に返されるエラーコードです。
 *
 * このエラーが発生した場合は、APIの使用方法に問題があるか一時的な障害などの可能性があります。
 * `code` の値を確認し、利用方法の再確認または時間をおいた再試行を検討してください。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpApiErrorCode =
  | "invalid_status"
  | "missing_payment_method"
  | "detached_payment_method_not_usable"
  | "payment_method_not_owned_by_customer"
  | "customer_required_for_payment_method"
  | "payment_method_not_in_allowed_types"
  | "not_found"
  | "internal_server_error"
  | (string & {});

/**
 * SDKエラーコード
 *
 * `type: "sdk_error"` の場合に返されるエラーコードです。
 *
 * このエラーが発生した場合は、SDKの初期化や使用方法に問題がある可能性がありますので、実装を再確認してください。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpSdkErrorCode =
  | "session_not_loaded"
  | "form_not_found"
  | (string & {});

/**
 * ユーザーエラーコード
 *
 * `type: "user_error"` の場合に返されるエラーコードです。
 *
 * このエラーは利用者の操作に起因して発生します。
 * 通常追加の対応は不要ですが、必要に応じて利用者へ情報提供を行なってください。
 *
 * 将来の変更で新しい値が追加される可能性があるため、列挙されている以外の値も受け入れられる実装をしてください。
 */
export type PayjpUserErrorCode =
  | "apple_pay_not_available"
  | "apple_pay_canceled"
  | (string & {});

/**
 * payments.js SDK から返されるエラーオブジェクトです。
 *
 * `confirmPayment()` や `confirmSetup()` の結果として返されます。
 * `type` フィールドでエラーの種類を判別し、適切なハンドリングを行ってください。
 *
 * @example
 * ```typescript
 * const { error } = await widgets.confirmPayment({ return_url: "..." });
 * if (error) {
 *   switch (error.type) {
 *     case "card_error":
 *       showMessage("お支払いに失敗しました。別のカードをお試しください。");
 *       break;
 *     case "validation_error":
 *       // フォームにエラーが自動表示されるため、通常は追加の対応は不要です
 *       break;
 *     case "api_error":
 *       // error.code を確認し、実装の見直しまたは再試行を検討してください
 *       console.error(error.code, error.message);
 *       break;
 *     case "sdk_error":
 *       // SDKの初期化や使用方法に問題がある可能性があります。実装を見直してください
 *       console.error(error.code, error.message);
 *       break;
 *     case "user_error":
 *       // 利用者の操作に起因するエラーです、通常は追加の対応は不要です
 *       break;
 *   }
 * }
 * ```
 */
export type PayjpPaymentsError = {
  /**
   * エラーの種類を示します。この値に応じて適切なハンドリングを行ってください。
   */
  type: PayjpPaymentsErrorType;
  /**
   * エラーの詳細を示すコードです。
   *
   * `type` の値によって返されるコードの種類が異なります:
   * - `"card_error"` → `PayjpPaymentErrorCode`
   * - `"validation_error"` → `PayjpValidationErrorCode`
   * - `"api_error"` → `PayjpApiErrorCode`
   * - `"sdk_error"` → `PayjpSdkErrorCode`
   * - `"user_error"` → `PayjpUserErrorCode`
   */
  code: PayjpPaymentErrorCode | PayjpValidationErrorCode | PayjpApiErrorCode | PayjpSdkErrorCode | PayjpUserErrorCode;
  /**
   * エラーの内容を説明するメッセージです。
   */
  message?: string;
  /**
   * バリデーションエラーの詳細情報です。
   * `type` が `"validation_error"` の場合のみ設定されます。
   */
  validationErrors?: PayjpValidationError[];
};
