---
sidebar_position: 16
title: '일일 보상'
---



# :gift: 일일 보상 수정

Unlimited Adventures는 자체 개발된 강력하고 자체 개발한 일일 보상 시스템을 활용합니다.
덕분에 최대 4개의 다양한 보상 유형, 4개의 Placeholder 및 2개의 변수를 사용할 수 있습니다!



#### :package: 보상을 어떻게 변경하나요?

일일 보상 시스템에서 보상을 쉽게 추가, 변경 또는 제거할 수 있습니다.
그렇게 하려면 `unlimited_adventures/DailyRewards/rewards.yml` 해당 경로에서 구성 파일을 찾아야 합니다.



### 4가지 타입의 보상을 설정 할 수 있습니다:

#### :moneybag: 골드로 보상:
골드 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:
`gold [갯수]`, 예시: `gold 500`

#### :gem: 젬으로 지급:
젬 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:
`gems [갯수]`, 예시: `gems 500`


#### :hammer: 아이템으로 지급:
아이템 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:
`[amount] of [item]`, for example: `5 of iron sword`.

:::tip
물론 인첸트된 아이템도 아래 예시 처럼 지원합니다:
`iron sword of sharpness 5 and unbreaking 3`

물론 이름도 지정할 수 있어요!\
`iron sword named "&6&l짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`

내구도를 무한으로 할 수도 있죠!\
`unbreakable iron sword named "&6&l무한으로 짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`
:::

#### :computer: 명령어로 지급:
명령어로 보상을 지급하고 싶다면 아래 예시 처럼 입력하세요:
`command premiumcurrency PLAYER_NAME add 100`


### 2가지 타입의 변수를 사용할 수 있습니다:

`PLAYER_NAME` - 플레이어의 닉네임\
`DAY_NUMBER` - 플레이어의 일일 보상 번호

## 4가지 Placeholder를 사용할 수 있습니다.:

| Placeholder | 설명 |
| - | - |
| `%valiant_dailyrewards_canclaim%` | 플레이어가 수령하지 않은 일일 보상이 있는 경우 "true"를 표시합니다. |
| `%valiant_dailyrewards_timeuntilclaim%` | 플레이어가 일일 보상을 받을 수 있을 때까지 남은 시간을 표시합니다. |
| `%valaint_dailyrewards_timeuntilexpiration%` | 수령하지 않은 일일 보상이 만료되고 수령 상태가 초기화될 때까지 남은 시간을 표시합니다. |
| `%valiant_dailyrewards_daynumber%` | 플레이어가 접속한 날의 일일 보상 날짜를 표시합니다. |
