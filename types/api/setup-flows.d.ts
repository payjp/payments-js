import type { PaymentMethodTypes } from './payment-flows';

/**
 * SetupFlowResponse
 */
export type SetupFlow = {
    /**
     * Id
     *
     * ID
     */
    id: string;
    /**
     * Object
     */
    object: 'setup_flow';
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
     * Client Secret
     *
     * この SetupFlow のクライアントシークレットです。フロントエンドで公開鍵と合わせて使用し、SetupFlow の取得や支払い処理を行います。**この値はこの SetupFlow の支払いを行う顧客以外へ公開しないでください。
     */
    client_secret: string;
    /**
     * Customer Id
     *
     * この SetupFlow が属する顧客の ID。SetupFlow に PaymentMethod が設定されている場合、SetupFlow の設定が成功するとその PaymentMethod は顧客に紐付きます。別の顧客に紐付いている PaymentMethod をこの SetupFlow で使用することはできません。
     */
    customer_id: string | null;
    /**
     * Description
     *
     * 説明。顧客に表示されます。
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
     * この SetupFlow に紐付ける決済方法のID
     */
    payment_method_id: string | null;
    /**
     * Payment Method Options
     *
     * この SetupFlow の支払い方法の個別設定。
     */
    payment_method_options: {
        [key: string]: unknown;
    } | null;
    /**
     * Payment Method Types
     *
     * この SetupFlow で使用できる支払い方法の種類（カードなど）のリストです。 指定しない場合、ダッシュボードで利用可能な状態にしている支払い方法が自動的に設定されます。
     */
    payment_method_types: Array<PaymentMethodTypes>;
    /**
     * この SetupFlow のステータスです。<a href="https://docs.pay.jp/v2/setup_flows#status" target="_blank">ステータスの詳細についてはこちらをご覧ください。</a>
     *
     * | 値 |
     * |:---|
     * | **requires_payment_method**: 支払い方法が必要です。 |
     * | **requires_confirmation**: 確認が必要です。 |
     * | **requires_action**: 顧客のアクションが必要です。 |
     * | **processing**: 処理中です。 |
     * | **succeeded**: 成功しました。 |
     * | **canceled**: キャンセルされました。 |
     */
    status: SetupFlowStatus;
    /**
     * Next Action
     *
     * 顧客が支払い設定を続けるために必要な対応がある場合、対応方法が記載されています。
     */
    next_action: {
        [key: string]: unknown;
    } | null;
    /**
     * Return Url
     *
     * 顧客が支払いを完了後、あるいはキャンセルした後にリダイレクトされるURL。アプリにリダイレクトしたい場合は URI Scheme を指定できます。`confirm=true` の場合のみ指定できます。
     */
    return_url: string | null;
    /**
     * Last Setup Error
     *
     * この SetupFlow で発生した最後のエラーです。
     */
    last_setup_error: {
        [key: string]: unknown;
    } | null;
};

/**
 * SetupFlowStatus
 */
export type SetupFlowStatus = 'canceled' | 'processing' | 'requires_action' | 'requires_confirmation' | 'requires_payment_method' | 'succeeded';
