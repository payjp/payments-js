import { PayjpElements } from './elements';
import * as paymentIntents from './payment-intents';
import * as setupIntents from './setup-intents';

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
