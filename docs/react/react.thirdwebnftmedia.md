---
slug: /react.thirdwebnftmedia
title: ThirdwebNftMedia variable
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# ThirdwebNftMedia variable

This component can be used to render NFTs from the thirdweb SDK. It will render the animation_url if it exists, otherwise it will render the image. The default size is 300px by 300px, but this can be changed using the `width` and `height` props.

Props: [ThirdwebNftMediaProps](./react.thirdwebnftmediaprops.md)

## Example

```jsx
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
export default function NFTCollectionRender() {
  const { contract } = useContract(<your-contract-address>);
  const { data: nft, isLoading } = useNFT(contract, 0);

  return (
    <div>
      {!isLoading && nft ? (
        <ThirdwebNftMedia metadata={nft.metadata} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
```

**Signature:**

```typescript
ThirdwebNftMedia: React.ForwardRefExoticComponent<
  ThirdwebNftMediaProps & React.RefAttributes<HTMLMediaElement>
>;
```