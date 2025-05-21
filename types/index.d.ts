import { PayjpPayments, PayjpPaymentsConstructorOptions } from "./payments-js";

export * from "./payments-js";
export * from "./api";

export const loadPayments: (publicKey: string, options?: PayjpPaymentsConstructorOptions) => Promise<PayjpPayments>;