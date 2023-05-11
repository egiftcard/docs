---
slug: /reference/sdk.thirdwebsdk.getmarketplace
title: ThirdwebSDK.getMarketplace() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ThirdwebSDK.getMarketplace() method

> Warning: This API is now obsolete.
>
> This method is deprecated and will be removed in a future major version. You should use instead.
>
> ```diff
> - const marketplace = await sdk.getMarketplace("0x1234...");
> + const marketplace = await sdk.getContract("0x1234...", "marketplace");
> ```

Get an instance of a Marketplace contract

**Signature:**

```typescript
getMarketplace(contractAddress: string): Promise<import("..").Marketplace>;
```

## Parameters

| Parameter       | Type   | Description                          |
| --------------- | ------ | ------------------------------------ |
| contractAddress | string | the address of the deployed contract |

**Returns:**

Promise&lt;import("..").[Marketplace](./sdk.marketplace.md)&gt;