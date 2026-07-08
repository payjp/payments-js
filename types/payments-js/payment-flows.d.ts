import { Address, PayjpPaymentsError } from '..';

export type ConfirmPaymentParams = {
    return_url: string;
    payment_method_data?: {
        billing_details?: {
            name?: string;
            email?: string;
            phone?: string;
            address?: Address;
        };
    };
}

export type DirectConfirmPaymentParams = {
    return_url: string;
    payment_method_data: {
        type: 'paypay';
        billing_details?: {
            name?: string;
            email?: string;
            phone?: string;
            address?: Address;
        };
    };
}

export type ConfirmPaymentOptions = {
    clientSecret: string;
    confirmParams: DirectConfirmPaymentParams;
};

export type PaymentFlowResult = { error: PayjpPaymentsError };
