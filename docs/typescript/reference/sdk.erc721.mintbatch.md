---
slug: /reference/sdk.erc721.mintbatch
title: Erc721.mintBatch() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc721.mintBatch() method

Mint Many unique NFTs

## Example

```javascript*
// Custom metadata of the NFTs you want to mint.
const metadatas = [{
  name: "Cool NFT #1",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
}, {
  name: "Cool NFT #2",
  description: "This is a cool NFT",
  image: fs.readFileSync("path/to/other/image.png"),
}];

const tx = await contract.erc721.mintBatch(metadatas);
const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
const firstTokenId = tx[0].id; // token id of the first minted NFT
const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
```

**Signature:**

```typescript
mintBatch(metadatas: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFT>[]>;
```

## Parameters

| Parameter | Type                                              | Description |
| --------- | ------------------------------------------------- | ----------- |
| metadatas | [NFTMetadataOrUri](./sdk.nftmetadataoruri.md)\[\] |             |

**Returns:**

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[NFT](./sdk.nft.md)&gt;\[\]&gt;

## Remarks

Mint many unique NFTs at once to the connected wallet