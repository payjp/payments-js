export type PaymentIntent = {
    /**
    * Id
     * @description 支払いインテントID
     */
    id: string;
    /**
     * Object
     * @default payment_intent
     * @constant
     */
    object: "payment_intent";
    /**
     * Created At
     * Format: date-time
     * @description 支払い方法作成時の日時(UTC)
     */
    created_at: string;
    /**
     * Updated At
     * Format: date-time
     * @description 支払い方法更新時の日時(UTC)
     */
    updated_at: string;
    /**
     * Livemode
     * @description 本番環境かどうか
     */
    livemode: boolean;
    /**
     * Amount
     * @description 支払い金額
     */
    amount: number;
    /**
     * Amount Capturable
     * @description キャプチャ可能金額
     */
    amount_capturable: number | null;
    /**
     * Amount Received
     * @description 受領金額
     */
    amount_received: number | null;
    /**
     * Client Secret
     * @description クライアントシークレット
     */
    client_secret: string;
    /**
     * Confirmation Method
     * @description 確認方法
     */
    confirmation_method: string | null;
    /**
     * Customer
     * @description 顧客ID
     */
    customer?: string | null;
    /**
     * Description
     * @description 説明
     */
    description?: string | null;
    /**
     * Metadata
     * @description メタデータ
     * @default {}
     */
    metadata: {
        [key: string]: string | number | boolean;
    };
    /**
    * Payment Method
    * @description 支払い方法ID
    */
    payment_method?: string | null;
    /**
     * Payment Method Options
     * @description 支払い方法オプション
     */
    payment_method_options?: Record<string, never> | null;
    /**
     * Payment Method Types
     * @description 支払い方法の種類
     */
    payment_method_types: string[];
    /**
     * Receipt Email
     * @description 領収書送付先メールアドレス
     */
    receipt_email?: string | null;
    /** @description 支払いステータス */
    status: PaymentIntentStatus;
    /**
     * Next Action
     * @description 次のアクション
     */
    next_action?: Record<string, never> | null;
    /**
     * Return Url
     * @description リダイレクトURL
     */
    return_url?: string | null;
    /** @description キャプチャ方法 */
    capture_method: CaptureMethod;
};

export type PaymentIntentStatus =
  | "canceled"
  | "processing"
  | "requires_action"
  | "requires_capture"
  | "requires_confirmation"
  | "requires_payment_method"
  | "succeeded";

export type CaptureMethod = "automatic" | "manual";
