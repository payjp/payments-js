import { PayjpPayments, PayjpPaymentsConstructor, PayjpPaymentsConstructorOptions } from "../types/payments-js";

declare global {
  interface Window {
    // NOTE: https://js.pay.jp/payments.js が読み込まれた際に window に PayjpPayments を提供する
    PayjpPayments?: PayjpPaymentsConstructor;
  }
}

export const loadPayments = async (publicKey: string, options?: PayjpPaymentsConstructorOptions): Promise<PayjpPayments> => {
  const PayjpPayments = await loadScript(options);
  return PayjpPayments(publicKey);
}

const loadScript = (options?: PayjpPaymentsConstructorOptions): Promise<PayjpPaymentsConstructor> => {
  const ORIGIN = options?.jsOrigin || 'https://js.pay.jp';
  const JS_URL = `${ORIGIN}/payments.js`;

  const mountPoint = document.head || document.body;

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = JS_URL;
    script.onload = () => {
      if (window.PayjpPayments) {
        resolve(window.PayjpPayments);
      } else {
        reject(new Error("Failed to load script"));
      }
    };
    script.onerror = () => {
      reject(new Error("Failed to load script"));
    };
    mountPoint.appendChild(script);
  });
}
