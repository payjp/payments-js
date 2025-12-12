import type { PaymentMethodTypes } from '../payments-js/form/payment-form';

/**
 * PaymentFlowResponse
 */
export type PaymentFlow = {
    /**
     * Id
     *
     * 支払いフローID
     */
    id: string;
    /**
     * Object
     */
    object: 'payment_flow';
    /**
     * Created At
     *
     * 作成日時 (UTC, ISO 8601 形式)
     */
    created_at: string;
    /**
     * Updated At
     *
     * 更新日時 (UTC, ISO 8601 形式)
     */
    updated_at: string;
    /**
     * Livemode
     *
     * 本番環境かどうか
     */
    livemode: boolean;
    /**
     * Amount
     *
     * 支払い予定の金額
     */
    amount: number;
    /**
     * Amount Capturable
     *
     * このPaymentFlowの確定可能な金額
     */
    amount_capturable: number | null;
    /**
     * Amount Received
     *
     * このPaymentFlowの `amount` のうち、確定した金額
     */
    amount_received: number | null;
    /**
     * Client Secret
     *
     * このPaymentFlowのクライアントシークレットです。フロントエンドで公開APIキーと合わせて使用しPaymentFlowの情報を取得や支払い処理を行います。**この値はこのPaymentFlowの支払いを行う顧客以外へ公開しないでください。**また保存やログへの記録なども行わないでください。
     */
    client_secret: string;
    /**
     * Customer Id
     *
     * このPaymentFlowに関連付けられた顧客のID
     */
    customer_id: string | null;
    /**
     * Description
     *
     * オブジェクトにセットする任意の文字列。ユーザーには表示されません。
     */
    description: string | null;
    /**
     * Metadata
     *
     * メタデータ
     */
    metadata: {
        [key: string]: string | number | boolean;
    };
    /**
     * Payment Method Id
     *
     * 支払い方法ID
     */
    payment_method_id: string | null;
    /**
     * Payment Method Options
     *
     * このPaymentFlow固有の支払い方法の設定
     */
    payment_method_options: {
        [key: string]: unknown;
    } | null;
    /**
     * Payment Method Types
     *
     * このPaymentFlowで使用できる支払い方法の種類のリスト
     */
    payment_method_types: Array<PaymentMethodTypes>;
    /**
     * このPaymentFlowのステータス。<a href="https://docs.pay.jp/v2/payment_flows#status" target="_blank">ステータスの詳細についてはこちらをご覧ください。</a>
     *
     * | 値 |
     * |:---|
     * | **requires_payment_method**: 支払い方法が必要です。 |
     * | **requires_confirmation**: 確認が必要です。 |
     * | **requires_action**: 顧客のアクションが必要です。 |
     * | **processing**: 処理中です。 |
     * | **requires_capture**: 確定が必要です。 |
     * | **canceled**: キャンセルされました。 |
     * | **succeeded**: 成功しました。 |
     */
    status: PaymentFlowStatus;
    /**
     * Next Action
     *
     * プロパティが存在する場合、顧客が支払い設定を続けるために必要な対応が記載されています。
     */
    next_action: {
        [key: string]: unknown;
    } | null;
    /**
     * Return Url
     *
     * 顧客が支払いを完了後かキャンセルした後にリダイレクトされるURL
     */
    return_url: string | null;
    /**
     * 支払いの確定方法
     *
     * | 指定できる値 |
     * |:---|
     * | **automatic**: (デフォルト) 顧客が支払いを承認すると、自動的に確定させます。 |
     * | **manual**: 顧客が支払いを承認すると一旦確定を保留し、後で Capture API を使用して確定します。（すべての支払い方法がこれをサポートしているわけではありません）。 |
     */
    capture_method: CaptureMethod;
    /**
     * Last Payment Error
     *
     * このPaymentFlowで発生した最後の支払いエラー
     */
    last_payment_error: {
        [key: string]: unknown;
    } | null;
};

/**
 * PaymentFlowStatus
 */
export type PaymentFlowStatus = 'canceled' | 'processing' | 'requires_action' | 'requires_capture' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded';

export type CaptureMethod = 'automatic' | 'manual';
