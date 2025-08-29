import { PayjpElementBase } from ".";

export type Address = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

export type PayjpAddressElement = PayjpElementBase & {
  /**
   * AddressElement の options を更新します。
   * @param options
   */
  update(options: PayjpAddressElementUpdateOptions): void;

  /**
   * AddressElement の状態が変化したときに発火するイベントハンドラを登録します。
   */
  on(
    event: "change",
    handler: (event: {
      elementType: "address";
      elementMode: AddressMode;
      empty: boolean;
      complete: boolean;
      value: { name: string; address: Address; phone: string };
    }) => void
  ): void;
  on(event: "ready", handler: () => void): void;
  on(event: "focus", handler: () => void): void;
  on(event: "blur", handler: () => void): void;

  /**
   * AddressElement の状態が変化したときに発火するイベントハンドラを解除します。
   */
  off(
    event: "change",
    handler: (event: {
      elementType: "address";
      elementMode: AddressMode;
      empty: boolean;
      complete: boolean;
      value: { name: string; address: Address; phone: string };
    }) => void
  ): void;
  off(event: "ready", handler: () => void): void;
  off(event: "focus", handler: () => void): void;
  off(event: "blur", handler: () => void): void;
};

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