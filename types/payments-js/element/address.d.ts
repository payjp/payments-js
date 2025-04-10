import { PayjpElementBase } from ".";

export type PayjpAddressElement = PayjpElementBase & {
  update(options: PayjpAddressElementOptions): void;
}

export type AddressMode = "shipping" | "billing";

export interface PayjpAddressElementOptions {
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
}

export interface PayjpAddressElementGetAddressOption {
    /**
     * 取得するAddressElementの種類を指定します。
     */
    mode: AddressMode;
}