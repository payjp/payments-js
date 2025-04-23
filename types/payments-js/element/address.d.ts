import { PayjpElementBase } from ".";

export type PayjpAddressElement = PayjpElementBase & {
  /**
   * AddressElement の options を更新します。
   * @param options
   */
  update(options: PayjpAddressElementUpdateOptions): void;
}

export type AddressMode = "shipping" | "billing";

export type PayjpAddressElementOptions = {
  /**
   * AddressElement で入力する住所の種類を指定します。
   * shipping: 配送先住所
   * billing: 請求先住所
   */
  mode: AddressMode;

  /**
   * 住所の自動補完機能を有効にするかどうかを指定します。
   * automatic: 利用可能な場合に有効にします。
   * disabled: 無効にします。
   * google_maps_api: 指定した GoogleMap の API キー利用して有効にします。
   * google_maps_api の場合、apiKey に Google Maps API のキーを指定してください。
   */
  autocomplete?:
    | { mode: "automatic" }
    | { mode: "disabled" }
    | { mode: "google_maps_api"; apiKey: string };

  /**
   *  デフォルトの入力値を指定します。
   */
  defaultValues?: {
    name?: string | null;
    address?: {
      line1?: string | null;
      line2?: string | null;
      city?: string | null;
      state?: string | null;
      zip?: string | null;
      country: string;
    };
    phone?: string | null;
  };

  /**
   *  電話番号の入力欄を表示するかどうかを指定します。
   * always: 常に表示します。
   * auto: 必要がある場合に表示します。
   * never: 常に表示しません。
   */
  fields?: {
    phone?: 'always' | 'auto' | 'never';
  },
}

export type PayjpAddressElementUpdateOptions = Partial<Omit<PayjpAddressElementOptions, "mode" | "autocomplete">>

export interface PayjpAddressElementGetAddressOption {
    /**
     * 取得するAddressElementの種類を指定します。
     */
    mode: AddressMode;
}