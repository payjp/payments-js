import { PayjpPaymentElement, PayjpPaymentElementOptions } from "./element/payment";
import { PayjpAddressElement, PayjpAddressElementGetAddressOption, PayjpAddressElementOptions } from "./element/address";

export type PayjpElementType = "payment" | "address";

export interface PayjpElements {
  create(type: "payment", options?: PayjpPaymentElementOptions): PayjpPaymentElement;
  getElement(elementType: 'payment'): PayjpPaymentElement | null;

  create(type: "address", options?: PayjpAddressElementOptions): PayjpAddressElement;
  getElement(elementType: 'address', options: PayjpAddressElementGetAddressOption): PayjpAddressElement | null;
}
