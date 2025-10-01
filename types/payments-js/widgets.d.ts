import { PayjpPaymentForm, PayjpPaymentFormOptions } from "./form/payment-form";
import { PayjpAddressForm, PayjpAddressFormGetAddressOption, PayjpAddressFormOptions } from "./form/address-form";
import { PayjpWidgetsUpdateOptions } from "..";

export type PayjpFormType = "payment" | "address";

export interface PayjpWidgets {
  createForm(type: "payment", options?: PayjpPaymentFormOptions): PayjpPaymentForm;
  getForm(formType: 'payment'): PayjpPaymentForm | null;

  createForm(type: "address", options?: PayjpAddressFormOptions): PayjpAddressForm;
  getForm(formType: 'address', options: PayjpAddressFormGetAddressOption): PayjpAddressForm | null;

  update(options: PayjpWidgetsUpdateOptions): void;
  fetchUpdates(): Promise<void>;
}
