---
slug: /Staking721Base
title: Staking721Base
hide_title: true
displayed_sidebar: contracts
---

# Staking721Base

note: This contract is provided as a base contract.

## Methods

### claimRewards

```solidity
function claimRewards() external nonpayable
```

Claim accumulated rewards.

_See {\_claimRewards}. Override that to implement custom logic. See {\_calculateRewards} for reward-calculation logic._

### contractURI

```solidity
function contractURI() external view returns (string)
```

Returns the contract metadata URI.

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | string | undefined   |

### depositRewardTokens

```solidity
function depositRewardTokens(uint256 _amount) external payable
```

_Admin deposits reward tokens._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| \_amount | uint256 | undefined   |

### getRewardTokenBalance

```solidity
function getRewardTokenBalance() external view returns (uint256)
```

View total rewards available in the staking contract.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### getRewardsPerUnitTime

```solidity
function getRewardsPerUnitTime() external view returns (uint256 _rewardsPerUnitTime)
```

#### Returns

| Name                 | Type    | Description |
| -------------------- | ------- | ----------- |
| \_rewardsPerUnitTime | uint256 | undefined   |

### getStakeInfo

```solidity
function getStakeInfo(address _staker) external view returns (uint256[] _tokensStaked, uint256 _rewards)
```

View amount staked and total rewards for a user.

#### Parameters

| Name     | Type    | Description                              |
| -------- | ------- | ---------------------------------------- |
| \_staker | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type      | Description                         |
| -------------- | --------- | ----------------------------------- |
| \_tokensStaked | uint256[] | List of token-ids staked by staker. |
| \_rewards      | uint256   | Available reward amount.            |

### getTimeUnit

```solidity
function getTimeUnit() external view returns (uint256 _timeUnit)
```

#### Returns

| Name       | Type    | Description |
| ---------- | ------- | ----------- |
| \_timeUnit | uint256 | undefined   |

### indexedTokens

```solidity
function indexedTokens(uint256) external view returns (uint256)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### isIndexed

```solidity
function isIndexed(uint256) external view returns (bool)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```

Receives and executes a batch of function calls on this contract.

_Receives and executes a batch of function calls on this contract._

#### Parameters

| Name | Type    | Description                                                          |
| ---- | ------- | -------------------------------------------------------------------- |
| data | bytes[] | The bytes data that makes up the batch of function calls to execute. |

#### Returns

| Name    | Type    | Description                                                                      |
| ------- | ------- | -------------------------------------------------------------------------------- |
| results | bytes[] | The bytes data that makes up the result of the batch of function calls executed. |

### nativeTokenWrapper

```solidity
function nativeTokenWrapper() external view returns (address)
```

_The address of the native token wrapper contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) external view returns (bytes4)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |
| \_1  | address | undefined   |
| \_2  | uint256 | undefined   |
| \_3  | bytes   | undefined   |

#### Returns

| Name | Type   | Description |
| ---- | ------ | ----------- |
| \_0  | bytes4 | undefined   |

### owner

```solidity
function owner() external view returns (address)
```

Returns the owner of the contract.

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### rewardToken

```solidity
function rewardToken() external view returns (address)
```

_ERC20 Reward Token address. See {\_mintRewards} below._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```

Lets a contract admin set the URI for contract-level metadata.

_Caller should be authorized to setup contractURI, e.g. contract admin. See {\_canSetContractURI}. Emits {ContractURIUpdated Event}._

#### Parameters

| Name  | Type   | Description                                                           |
| ----- | ------ | --------------------------------------------------------------------- |
| \_uri | string | keccak256 hash of the role. e.g. keccak256(&quot;TRANSFER_ROLE&quot;) |

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```

Lets an authorized wallet set a new owner for the contract.

#### Parameters

| Name       | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| \_newOwner | address | The address to set as the new owner of the contract. |

### setRewardsPerUnitTime

```solidity
function setRewardsPerUnitTime(uint256 _rewardsPerUnitTime) external nonpayable
```

Set rewards per unit of time. Interpreted as x rewards per second/per day/etc based on time-unit.

_Only admin/authorized-account can call it._

#### Parameters

| Name                 | Type    | Description                |
| -------------------- | ------- | -------------------------- |
| \_rewardsPerUnitTime | uint256 | New rewards per unit time. |

### setTimeUnit

```solidity
function setTimeUnit(uint256 _timeUnit) external nonpayable
```

Set time unit. Set as a number of seconds. Could be specified as -- x _ 1 hours, x _ 1 days, etc.

_Only admin/authorized-account can call it._

#### Parameters

| Name       | Type    | Description    |
| ---------- | ------- | -------------- |
| \_timeUnit | uint256 | New time unit. |

### stake

```solidity
function stake(uint256[] _tokenIds) external nonpayable
```

Stake ERC721 Tokens.

_See {\_stake}. Override that to implement custom logic._

#### Parameters

| Name       | Type      | Description              |
| ---------- | --------- | ------------------------ |
| \_tokenIds | uint256[] | List of tokens to stake. |

### stakerAddress

```solidity
function stakerAddress(uint256) external view returns (address)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### stakers

```solidity
function stakers(address) external view returns (uint256 amountStaked, uint256 timeOfLastUpdate, uint256 unclaimedRewards, uint256 conditionIdOflastUpdate)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name                    | Type    | Description |
| ----------------------- | ------- | ----------- |
| amountStaked            | uint256 | undefined   |
| timeOfLastUpdate        | uint256 | undefined   |
| unclaimedRewards        | uint256 | undefined   |
| conditionIdOflastUpdate | uint256 | undefined   |

### stakersArray

```solidity
function stakersArray(uint256) external view returns (address)
```

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### stakingToken

```solidity
function stakingToken() external view returns (address)
```

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_See {IERC165-supportsInterface}._

#### Parameters

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| interfaceId | bytes4 | undefined   |

#### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
| \_0  | bool | undefined   |

### withdraw

```solidity
function withdraw(uint256[] _tokenIds) external nonpayable
```

Withdraw staked tokens.

_See {\_withdraw}. Override that to implement custom logic._

#### Parameters

| Name       | Type      | Description                 |
| ---------- | --------- | --------------------------- |
| \_tokenIds | uint256[] | List of tokens to withdraw. |

### withdrawRewardTokens

```solidity
function withdrawRewardTokens(uint256 _amount) external nonpayable
```

_Admin can withdraw excess reward tokens._

#### Parameters

| Name     | Type    | Description |
| -------- | ------- | ----------- |
| \_amount | uint256 | undefined   |

## Events

### ContractURIUpdated

```solidity
event ContractURIUpdated(string prevURI, string newURI)
```

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| prevURI | string | undefined   |
| newURI  | string | undefined   |

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed prevOwner, address indexed newOwner)
```

#### Parameters

| Name                | Type    | Description |
| ------------------- | ------- | ----------- |
| prevOwner `indexed` | address | undefined   |
| newOwner `indexed`  | address | undefined   |

### RewardsClaimed

```solidity
event RewardsClaimed(address indexed staker, uint256 rewardAmount)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| rewardAmount     | uint256 | undefined   |

### TokensStaked

```solidity
event TokensStaked(address indexed staker, uint256[] indexed tokenIds)
```

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed staker, uint256[] indexed tokenIds)
```

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### UpdatedRewardsPerUnitTime

```solidity
event UpdatedRewardsPerUnitTime(uint256 oldRewardsPerUnitTime, uint256 newRewardsPerUnitTime)
```

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| oldRewardsPerUnitTime | uint256 | undefined   |
| newRewardsPerUnitTime | uint256 | undefined   |

### UpdatedTimeUnit

```solidity
event UpdatedTimeUnit(uint256 oldTimeUnit, uint256 newTimeUnit)
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| oldTimeUnit | uint256 | undefined   |
| newTimeUnit | uint256 | undefined   |
