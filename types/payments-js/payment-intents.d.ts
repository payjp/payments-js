import { PayjpPaymentsError } from '..';

export type ConfirmPaymentParams = {
    return_url: string;
    payment_method_data?: {
        billing_details?: {
            name?: string;
            email?: string;
            phone?: string;
        };
    };
}

export type PaymentIntentResult = { error: PayjpPaymentsError };
