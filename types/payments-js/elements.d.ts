import { PayjpPaymentElement, PayjpPaymentElementsOptions } from "./elements/payment";
import { PayjpAddressElement, PayjpAddressElementGetAddressOption, PayjpAddressElementsOptions } from "./elements/address";

export interface PayjpElements {
  create(type: "payment", options?: PayjpPaymentElementsOptions): PayjpPaymentElement;
  getElement(elementType: 'payment'): PayjpPaymentElement | null;

  create(type: "address", options?: PayjpAddressElementsOptions): PayjpAddressElement;
  getElement(elementType: 'address', options: PayjpAddressElementGetAddressOption): PayjpAddressElement | null;
}
