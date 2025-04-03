import { PayjpElements } from './elements';
import * as paymentIntents from './payment-intents';
import * as setupIntents from './setup-intents';

export interface PayjpPayments { 
    elements(options?: PayjpElementsOptionsClientSecret): PayjpElements;

    confirmPayment(options: {
      elements: PayjpElements;
      confirmParams: paymentIntents.ConfirmPaymentParams;
    }): Promise<paymentIntents.PaymentIntentResult>;

    confirmSetup(options: {
      elements: PayjpElements;
      confirmParams: setupIntents.ConfirmSetupParams;
    }): Promise<setupIntents.SetupIntentResult>;
}

export interface PayjpElementsOptionsClientSecret {
  clientSecret: string;
}

export interface PayjpPaymentsConstructor {
  (publicKey: string): PayjpPayments;
  (publicKey: string, options?: PayjpPaymentsConstructorOptions): PayjpPayments;
}

export interface PayjpPaymentsConstructorOptions {
  jsOrigin?: string;
}

export type PayjpPaymentsError = any // TODO
