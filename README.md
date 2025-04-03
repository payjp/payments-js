# @payjp/payments-js: ESModules JavaScript SDK library for PAY.JP v2 API

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

### 2. Elements の生成

```typescript
const elements = payments.elements({ clientSecret })
```

### 3. Element の生成

```typescript
const paymentElement = elements.create('payment')
const billingAddressElement = elements.create('address', { type: 'billing' })
```

### 4. Element のマウント

```typescript
paymentElement.mount('#payment-element')
billingAddressElement.mount('#billing-address-element')
```

### 5. 決済インテント、決済情報登録インテントのConfirm

```typescript
const result = await payments.confirmPayment({ elements, confirmParams: { return_url: 'https://example.com/return_url' } })
```
