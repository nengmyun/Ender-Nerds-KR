---
sidebar_position: 14
title: '배지'
---



# 플레이어 배지

배지는 Unlimited Adventures의 완전 독특한 기능입니다. 플레이어의 성과에 맞는 만족스러운 배지 상을 보상하도록 설계되었습니다.



#### 배지 달성 조건을 어떻게 변경하나요?

배지 요구 사항을 변경하려면 
```unlimited_adventures/Badges/badges.yml``` 경로에 있는 파일로 이동하세요.
여기에서 다양한 배지 카테고리와 레벨을 수정할 수 있습니다.
배지는 플레이어의 진행 상황을 안정적으로 추적하기 위해 Placeholder를 사용합니다.



#### :package: 배지 보상을 변경하는 방법은 무엇입니까?

배지 보상을 쉽게 변경할 수 있습니다. 번경하시려면 
```unlimited_adventures/Badges/rewards.yml``` 경로에 있는 파일로 이동하세요.
여기에서 다양한 배지 카테고리 및 등급에 대한 보상을 수정할 수 있습니다.



### 4가지 타입의 보상을 설정 할 수 있습니다:

#### :moneybag: 골드로 지급:
골드 보상을 추가하려면 다음 명령어를 입력해야 합니다:
`gold [수량]`, 예시: `gold 500`

#### :gem: 젬으로 지급:
젬 보상을 추가하려면 다음 명령어를 입력해야 합니다:
`gems [수량]`, 예시: `gems 500`


#### :hammer: 아이템으로 지급:
아이템 보상을 추가하려면 다음 명령어를 입력해야 합니다:
`[수량] of [아이템]`, 예시: `5 of iron sword`.

:::tip[팁]
인챈트도 지원됩니다:\
`iron sword of sharpness 5 and unbreaking 3`

이름을 변경할 수도 있습니다!\
`iron sword named "&6&l짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`

내구도를 무한으로 할 수도 있습니다:\
`unbreakable iron sword named "&6&l무한으로 짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`
:::

#### :computer: 명령어로 지급:
다음과 같이 명령어로 보상으로 사용할 수 있습니다:\
`command premiumcurrency 플레이어_이름 add 100`
