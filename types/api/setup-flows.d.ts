export type SetupFlow = {
    /**
     * Id
     * @description 支払い方法設定フローID
     */
    id: string;
    /**
     * Object
     * @default setup_flow
     * @constant
     */
    object: "setup_flow";
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
     * Client Secret
     * @description クライアントシークレット
     */
    client_secret: string;
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
    /** @description 支払いステータス */
    status: SetupFlowStatus;
};

export type SetupFlowStatus =
  | "canceled"
  | "processing"
  | "requires_action"
  | "requires_confirmation"
  | "requires_payment_method"
  | "succeeded";