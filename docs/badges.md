---
sidebar_position: 13
title: 'Badges'
---



# 🎖️ 플레이어 배지

배지는 플레이어들이 성취감을 느낄 수 있도록 드리는 작은 보상입니다.\
해금한 배지는 배지 메뉴에서 볼 수 있으며, 플레이어의 이름 밑에 `17 ⭐`와 같이 개수가 표시됩니다.

## ➕ 배지는 어떻게 추가하나요?

배지 설정 파일을 통해 쉽게 추가하실 수 있습니다.\
`unlimited_adventures/Badges/badges.yml`로 들어가시면 설정 파일이 있습니다.
```
your_badge:
    '1':
        requirement: statistic_mine_block:STONE
        value: 100
    '2':
        requirement: statistic_mine_block:STONE
        value: 500
    '3':
        requirement: statistic_mine_block:GRAVEL
        value: 100
    '4':
        requirement: statistic_mine_block:SAND
        value: 150
```

`unlimited_adventures/Badges/rewards.yml`에 보상을 추가하세요.
```
your_badge:
    '1':
        '1': command eco give PLAYER_NAME 100
    '2':
        '1': command eco give PLAYER_NAME 150
    '3':
        '1': command eco give PLAYER_NAME 200
    '4':
        '1': command eco give PLAYER_NAME 250
```

`unlimited_adventures/Badges/messages.yml`에서 배지 메세지를 설정할 수 있습니다.

```
your_badge_level_up: "§x&f&f&e&8&1&7&lBadges ▶ §x&3&1&e&d&9&6Your Badge is now: LEVEL Badge!"
your_badge_badge_level: "§x&f&f&e&8&1&7&lBadges ▶ LEVEL Your Badge"
```

## ✏️ 배지 수정

#### ⚙️ 해금 조건 변경

```unlimited_adventures/Badges/badges.yml```에서 배지 카테고리와 레벨을 수정할 수 있습니다.
배지는 플레이어의 진행 상황을 신뢰성 있게 추적하기 위해 플레이스홀더를 사용한다는 점에 유의해 주세요.\
많은 플레이스홀더는 리스트에서 확인해주세요. [here](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)\
(일부는 '/papi ecloud download name' 명령어로 설치해야 합니다.)



#### :package: How to change Badge rewards?

You can easily change the badge rewards. To do it, head to:
```unlimited_adventures/Badges/rewards.yml```
In there, you can modify the rewards for different badge categories and tiers.





### 4 Types of rewards available:

#### :moneybag: Gold Rewards:
In order to add a gold reward, you have to type in:
`gold [amount]`, for example: `gold 500`

#### :gem: Gems Rewards:
In order to add a gems reward, you have to type in:
`gems [amount]`, for example: `gems 500`


#### :hammer: Item Rewards: In order to add a gold reward, you have to type in:
`[amount] of [item]`, for example: `5 of iron sword`.

:::tip
Enchantments are also supported:\
`iron sword of sharpness 5 and unbreaking 3`

You can even use names!\
`iron sword named "&6&lPowerful Sword" of sharpness 5 and fire aspect 2 and unbreaking 3`

You can make the item unbreakable:\
`unbreakable iron sword named "&6&lPowerful Sword" of sharpness 5 and fire aspect 2 and unbreaking 3`
:::

#### :computer: Command Rewards:
You can use commands as rewards, by doing as following:\
`command premiumcurrency PLAYER_NAME add 100`
