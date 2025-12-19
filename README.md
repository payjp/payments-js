# @payjp/payments-js: ESModules JavaScript SDK library for PAY.JP v2 API

[![npm version](https://img.shields.io/npm/v/@payjp/payments-js.svg)](https://www.npmjs.com/package/@payjp/payments-js)

@payjp/payments-js は JavaScript / TypeScript で payments.js を利用するためのラッパーライブラリです。
payments.js のロードのサポートや型定義されたヘルパーメソッドを提供します。

## インストール方法

```bash
npm install @payjp/payments-js
```

## 使い方

### 1. payments.js のロード

```typescript
import { loadPayments } from '@payjp/payments-js'

const payments = await loadPayments('pk_test_0383a1b8f91e8a6e3ea0e2a9')
```

### 2. Widgets の生成

```typescript
const widgets = payments.widgets({ clientSecret })
```

### 3. Form の生成

```typescript
const paymentForm = widgets.createForm('payment')
const billingAddressForm = widgets.createForm('address', { mode: 'billing' })
```

### 4. Form のマウント

```typescript
paymentForm.mount('#payment-form')
billingAddressForm.mount('#billing-address-form')
```

### 5. PaymentFlow、SetupFlowのConfirm

```typescript
const result = await widgets.confirmPayment({ return_url: 'https://example.com/return_url' })
```

```typescript
const result = await widgets.confirmSetup({ return_url: 'https://example.com/return_url' })
```

## エラーハンドリング

`confirmPayment()` や `confirmSetup()` は正常に処理が進むと画面遷移が発生します。
これらのメソッドから値が返ってきた場合は `error.type` で種類を判別し、適切なハンドリングを行ってください。

### エラータイプ一覧

| type | 説明 | 対応方法 |
|------|------|----------|
| `payment_error` | 支払い処理が失敗しました | 利用者に別の支払い情報の入力を促してください |
| `validation_error` | 入力内容に問題があります | フォームにエラーメッセージが自動表示されるため、通常は追加の対応は不要です |
| `api_error` | APIリクエストでエラーが発生しました | `code` を確認し、実装の見直しまたは時間をおいた再試行を検討してください |
| `sdk_error` | SDKの使用方法に問題がある可能性があります | 実装内容の再確認をお願いします |
| `user_error` | キャンセルや支払い方法が利用不可など利用者の操作に起因するエラーです | 通常は追加の対応は不要です |

### 使用例

```typescript
import { PayjpPaymentsError } from '@payjp/payments-js'

function handleError(error: PayjpPaymentsError) {
  switch (error.type) {
    case "payment_error":
      showMessage("お支払いに失敗しました。別の支払い情報をお試しください。");
      break;
    case "validation_error":
      // フォームにエラーが自動表示されるため、通常は追加の対応は不要です
      break;
    case "api_error":
      // error.code を確認し、実装の見直しまたは再試行を検討してください
      console.error(error.code, error.message);
      break;
    case "sdk_error":
      // SDKの初期化や使用方法に問題がある可能性があります。実装を見直してください
      console.error(error.code, error.message);
      break;
    case "user_error":
      // 利用者の操作に起因するエラーです、通常は追加の対応は不要です
      break;
    default:
      // 将来追加される可能性のある新しいエラータイプに対応
      console.error(error.type, error.code, error.message);
  }
}

const { error } = await widgets.confirmPayment({ return_url: "..." });
if (error) {
  handleError(error);
}
```
