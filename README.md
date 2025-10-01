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
