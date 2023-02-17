---
slug: /react.usetokendrop
title: useTokenDrop
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useTokenDrop

> Warning: This API is now obsolete.
>
> This hook is deprecated and will be removed in a future major version. You should use instead.
>
> ```diff
> - const token = useTokenDrop("0x1234...");
> + const token = useContract("0x1234...", "token-drop").contract;
> ```

Hook for getting an instance of a `Token Drop` contract.

## Example

```javascript
import { useContract } from '@thirdweb-dev/react'

export default function Component() {
  const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "token-drop")

  // Now you can use the token drop contract in the rest of the component

  // For example, this function will get the connected wallets token balance
  async function balance() {
    const balance = await contract.balance()
    return balance
  }

  ...
}
```

**Signature:**

```typescript
export declare function useTokenDrop(
  contractAddress: RequiredParam<string>,
): import("@thirdweb-dev/sdk").TokenDrop | undefined;
```

## Parameters

| Parameter       | Type                                                    | Description                                                              |
| --------------- | ------------------------------------------------------- | ------------------------------------------------------------------------ |
| contractAddress | [RequiredParam](./react.requiredparam.md)&lt;string&gt; | the address of the Token Drop contract, found in your thirdweb dashboard |

**Returns:**

import("@thirdweb-dev/sdk").TokenDrop \| undefined