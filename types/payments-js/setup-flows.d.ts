import { Address, PayjpPaymentsError } from '..';

export type ConfirmSetupParams = {
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

export type SetupFlowResult = { error: PayjpPaymentsError };