---
slug: /sdk.nftcollection.mintadditionalsupplyto
title: NFTCollection.mintAdditionalSupplyTo() method
hide_title: true
displayed_sidebar: solana
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# NFTCollection.mintAdditionalSupplyTo() method

Mint additional supply of an NFT to the specified wallet

**Signature:**

```typescript
mintAdditionalSupplyTo(to: string, nftAddress: string, amount: Amount): Promise<string[]>;
```

## Parameters

| Parameter  | Type   | Description                                   |
| ---------- | ------ | --------------------------------------------- |
| to         | string | the address to mint the NFT to                |
| nftAddress | string | the mint address to mint additional supply to |
| amount     | Amount | the amount of NFTs to mint                    |

**Returns:**

Promise&lt;string\[\]&gt;

the mint address of the minted NFT

## Example

```jsx
// Specify who to mint the additional NFT to
const to = "..."
// The address of the already minted NFT
const nftAddress = "..."
* // The amount of additional NFTs to mint
const amount = 1;
// Mint an additional NFT of the original NFT
const addresses = await program.mintAdditionalSupplyTo(to, nftAddress, amount);
```