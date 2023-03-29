---
title: Getting Started
hide_title: true
displayed_sidebar: react-native
---

# Getting Started

Our SDK uses a [Provider Pattern](https://flexiple.com/react/provider-pattern-with-react-context-api/); meaning any component within the `ThirdwebProvider` will have access to the SDK.

Let's take a look at a typical setup:

## Configure the `ThirdwebProvider`

Specify the network your smart contracts are deployed to in the `activeChain` prop and wrap your application like so:

```tsx title="App.tsx"
import { ThirdwebProvider } from "@thirdweb-dev/react-native";

const App = () => {
  return (
    <ThirdwebProvider activeChain={"mainnet"}>
      <AppInner />
    </ThirdwebProvider>
  );
};
```

Below is an example of where to set this up in your application:

<p>
  <a href="https://github.com/thirdweb-example/react-native-typescript-starter/blob/main/App.tsx">Create React Native App</a>
</p>

Finally, we can run our app!

```sh
yarn android
```

```sh
yarn ios
```

## Connect to a wallet using our Connect Wallet button

```javascript
import React from "react";
import { SafeAreaView } from "react-native";

import { ConnectWallet } from "@thirdweb-dev/react-native";

const AppInner = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ConnectWallet />
    </SafeAreaView>
  );
};
```

## Interact With Contracts

Connect to your smart contract using the [`useContract`](https://portal.thirdweb.com/react/react.usecontract) hook like so:

```jsx title="pages/index.jsx"
import { useContract } from "@thirdweb-dev/react-native";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");

  // Now you can use the contract in the rest of the component!
}
```

You can then use [`useContractRead`](https://portal.thirdweb.com/react/react.usecontractread) and [`useContractWrite`](https://portal.thirdweb.com/react/react.usecontractwrite) to read data and write transactions to the contract.

You pass the `contract` object returned from `useContract` to these hooks as the first parameter and the name of the function (or view/mapping, etc.) on your smart contract as the second parameter. If your function requires parameters, you can pass them as additional arguments.

For example, we can read the `name` of our contract like so:

```jsx title="pages/index.jsx"
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react-native";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: name, isLoading: loadingName } = useContractRead(
    contract,
    "name", // The name of the view/mapping/variable on your contract
  );
  const { mutate: setName, isLoading: settingName } = useContractWrite(
    contract,
    "setName", // The name of the function on your contract
  );
}
```

## Using Extensions

Each [extension](https://portal.thirdweb.com/extensions) you implement in your smart contract unlocks new functionality in the SDK.

These hooks make it easy to interact with your smart contracts by implementing the complex logic for you under the hood.

For example, if your smart contract implements [ERC721Supply](https://portal.thirdweb.com/solidity/extensions/erc721supply#sdk-usage), you unlock the ability to [view all NFTs](https://portal.thirdweb.com/typescript/sdk.erc721supply) on that contract using the SDK; which fetches all of your NFT metadata and the current owner of each NFT in parallel. In the React SDK, that is available using `useNFTs`:

```jsx
import { useContract, useNFTs } from "@thirdweb-dev/react-native";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
}
```

If we want to mint an NFT and our contract implements [ERC721Mintable](https://portal.thirdweb.com/solidity/extensions/erc721mintable), we can use the [`useMintNFT`](https://portal.thirdweb.com/react/react.usemintnft) hook to mint an NFT from the connected wallet; handling all of the logic of uploading and pinning the metadata to IPFS for us behind the scenes.

```jsx
import { useContract, useNFTs, useMintNFT } from "@thirdweb-dev/react-native";

export default function Home() {
  const { contract } = useContract("<CONTRACT_ADDRESS>");
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
  const { mutate: mintNFT, isLoading: isMintingNFT } = useMintNFT(contract);
}
```

# Advanced Configuration

The `ThirdwebProvider` offers a number of configuration options to control the behavior of the React and Typescript SDK.

These are all the configuration options of the `<ThirdwebProvider />`.
We provide defaults for all of these, but you customize them to suit your needs.

```jsx title="App.jsx"
import React from 'react';
import {
  coinbaseWallet,
  metamaskWallet,
  rainbowWallet,
  trustWallet,
  ThirdwebProvider,
} from '@thirdweb-dev/react-native';
import {Ethereum} from '@thirdweb-dev/chains';

const KitchenSinkExample = () => {
  return (
    <ThirdwebProvider
      activeChain={Ethereum}
      dAppMeta={{
        name: 'Example App',
        description: 'This is an example app',
        isDarkMode: false,
        logoUrl: 'https://example.com/logo.png',
        url: 'https://example.com',
      }}
      supportedChains={[Ethereum]}
      supportedWallets-={[
        metamaskWallet(),
        rainbowWallet(),
        coinbaseWallet(),
        trustWallet(),
      ]}
      sdkOptions={{
        gasSettings: {maxPriceInGwei: 500, speed: 'fast'},
        readonlySettings: {
          chainId: 'mainnet',
          rpcUrl: 'https://mainnet.localhost.io/v3',
        },
        gasless: {
          openzeppelin: {
            relayerUrl: 'your-relayer-url',
          },
        },
      }}>
      <AppInner />
    </ThirdwebProvider>
  );
};
```
