import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { loadPayments } from './index';
import type { PayjpPaymentsConstructor } from '../types/payments-js';

describe('loadPayments', () => {
  const TEST_PUBLIC_KEY = 'pk_test_123456789';
  let mockPayjpPayments: ReturnType<PayjpPaymentsConstructor>;

  beforeEach(() => {
    // DOMをリセット
    document.head.innerHTML = '';
    document.body.innerHTML = '';

    // window.PayjpPaymentsをクリア
    delete (window as any).PayjpPayments;

    // モックのPayjpPaymentsインスタンスを作成
    mockPayjpPayments = {
      widgets: vi.fn(),
      retrievePaymentFlow: vi.fn(),
      retrieveSetupFlow: vi.fn(),
    } as any;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('正常にスクリプトをロードし、PayjpPaymentsインスタンスを返す', async () => {
    const mockConstructor = vi.fn(() => mockPayjpPayments);

    const promise = loadPayments(TEST_PUBLIC_KEY);

    // headにスクリプトタグが追加されることを確認
    const headScripts = document.head.querySelectorAll('script');
    expect(headScripts.length).toBe(1);

    const script = headScripts[0] as any;
    expect(script.src).toBe('https://js.pay.jp/payments.js');

    // スクリプトのロードをシミュレート
    (window as any).PayjpPayments = mockConstructor;
    script.dispatchEvent(new Event('load'));

    const result = await promise;

    expect(mockConstructor).toHaveBeenCalledWith(TEST_PUBLIC_KEY);
    expect(result).toBe(mockPayjpPayments);
  });

  it('スクリプトのロードに失敗した場合にエラーを返す', async () => {
    const promise = loadPayments(TEST_PUBLIC_KEY);

    const script = document.querySelector('script') as any;
    expect(script).not.toBeNull();
    script.dispatchEvent(new Event('error'));

    await expect(promise).rejects.toThrow('Failed to load script');
  });

  it('スクリプトがロードされたがwindow.PayjpPaymentsが存在しない場合にエラーを返す', async () => {
    const promise = loadPayments(TEST_PUBLIC_KEY);

    const script = document.querySelector('script') as any;
    expect(script).not.toBeNull();
    // window.PayjpPaymentsを設定せずにloadイベントを発火
    script.dispatchEvent(new Event('load'));

    await expect(promise).rejects.toThrow('Failed to load script');
  });
});
