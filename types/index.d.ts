import { PayjpPayments, PayjpPaymentsConstructor, PayjpPaymentsConstructorOptions } from "./payments-js";

export * from "./payments-js";
export const loadPayments: (publicKey: string, options?: PayjpPaymentsConstructorOptions) => Promise<PayjpPayments>;