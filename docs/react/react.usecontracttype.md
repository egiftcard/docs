---
slug: /react.usecontracttype
title: useContractType
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# useContractType

**Signature:**

```typescript
export declare function useContractType(
  contractAddress: RequiredParam<ContractAddress>,
): UseQueryResult<
  | "split"
  | "custom"
  | "edition-drop"
  | "edition"
  | "marketplace"
  | "marketplace-v3"
  | "multiwrap"
  | "nft-collection"
  | "nft-drop"
  | "pack"
  | "signature-drop"
  | "token-drop"
  | "token"
  | "vote"
  | null,
  unknown
>;
```

## Parameters

| Parameter       | Type                                                                                           | Description |
| --------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| contractAddress | [RequiredParam](./react.requiredparam.md)&lt;[ContractAddress](./react.contractaddress.md)&gt; |             |

**Returns:**

UseQueryResult&lt;"split" \| "custom" \| "edition-drop" \| "edition" \| "marketplace" \| "marketplace-v3" \| "multiwrap" \| "nft-collection" \| "nft-drop" \| "pack" \| "signature-drop" \| "token-drop" \| "token" \| "vote" \| null, unknown&gt;