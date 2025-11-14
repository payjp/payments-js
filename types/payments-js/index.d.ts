import { PayjpWidgets } from './widgets';
import * as paymentFlows from './payment-flows';
import * as setupFlows from './setup-flows';
import { PaymentFlow } from '../api/payment-flows';
import { SetupFlow } from '../api/setup-flows';
export * from './widgets';
export * from './form';
export * from './payment-flows';
export * from './setup-flows';

export interface PayjpPayments {
    widgets(options?: PayjpWidgetsOptionsClientSecret): PayjpWidgets;

    retrievePaymentFlow(clientSecret: string): Promise<PaymentFlow>
    retrieveSetupFlow(clientSecret: string): Promise<SetupFlow>

    handleNextAction(options: {clientSecret: string}): Promise<void>;
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

interface PayjpWidgetsOptionsBase {
  locale?: Locales;
  appearance?: Appearance;
}

export type PayjpWidgetsOptionsClientSecret = PayjpWidgetsOptionsBase & {
  clientSecret: string;
}

export type PayjpWidgetsUpdateOptions = Partial<PayjpWidgetsOptionsBase>

export interface PayjpPaymentsConstructor {
  (publicKey: string): PayjpPayments;
  (publicKey: string, options?: PayjpPaymentsConstructorOptions): PayjpPayments;
}

export interface PayjpPaymentsConstructorOptions {
  jsOrigin?: string;
}

export type PayjpPaymentsError = any // TODO
