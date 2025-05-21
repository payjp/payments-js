import { PayjpElements } from './elements';
import * as paymentIntents from './payment-intents';
import * as setupIntents from './setup-intents';
import { PaymentIntent } from '../api/payment-intents';
import { SetupIntent } from '../api/setup-intents';
export * from './elements';
export * from './element';
export * from './payment-intents';
export * from './setup-intents';

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

    retrievePaymentIntent(clientSecret: string): Promise<PaymentIntent>
    retrieveSetupIntent(clientSecret: string): Promise<SetupIntent>
}

export type Locales = 'ja' | 'en'

export type Appearance = {
  theme: "payjp" | "dark";
  variables?: {
    colorPrimary?: string;
    colorBackground?: string;
    colorText?: string;
    colorDanger?: string;
    fontFamily?: string;
    fontSizeBase?: string;
  };
};

interface PayjpElementsOptionsBase {
  locale?: Locales;
  appearance?: Appearance;
}

export type PayjpElementsOptionsClientSecret = PayjpElementsOptionsBase & {
  clientSecret: string;
}

export type PayjpElementsUpdateOptions = Partial<PayjpElementsOptionsBase>

export interface PayjpPaymentsConstructor {
  (publicKey: string): PayjpPayments;
  (publicKey: string, options?: PayjpPaymentsConstructorOptions): PayjpPayments;
}

export interface PayjpPaymentsConstructorOptions {
  jsOrigin?: string;
}

export type PayjpPaymentsError = any // TODO
