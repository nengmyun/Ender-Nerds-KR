---
sidebar_position: 8
title: '어드밴처 패스'
---





# :dart: **어드벤처 패스**

저희는 최고의 시즌패스를 자랑스럽게 구현했습니다.
이 가이드의 목표는 이 자랑거리를 최대한 쉽게 사용할 수 있도록 하는 것입니다.


### 어떻게 수정할 수 있나요?
어드벤처 패스의 구성 파일은 아래 경로에서 찾을 수 있습니다.
`unlimited_adventures/AdventurePass`

### 어떻게 시즌을 시작/재시작 할 수 있나요??

현재 시즌(모든 플레이어의 진행 상황, 레벨, XP 및 보상)을 재설정하려면 해당 명령어를 실행해야 합니다.\
`/adventurepass newseason`


### 어떻게 플레이어에게 어드벤처 패스 XP를 추가하나요?

`/adventurepass givexp` 명령어를 사용하여 플레이어에게 어드벤처 패스 경험치를 쉽게 추가할 수 있습니다. 예시:\
`/adventurepass givexp [플레이어] [경험치량]`



### :package: 어드벤처 패스 보상을 어떻게 변경하나요?

어드벤처 패스 시스템의 보상을 추가, 변경 및 삭제 하는 방법은 매우 쉽습니다.\
그러기 위해서는 해당 `unlimited_adventures/AdventurePass/rewards.yml` 경로에 있는 콘피그 파일을 찾아야합니다.



### 4가지 타입의 보상을 설정 할 수 있습니다:

#### :moneybag: 골드 보상
골드 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:\
`gold [갯수]`, 예시: `gold 500`

#### :gem: 젬 보상:
젬 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:\
`gems [갯수]`, 예시: `gems 500`


#### :hammer: 아이템 보상:
아이템 보상을 추가하고 싶다면 아래 예시 처럼 입력하세요:\
`[갯수] of [아이템]`, 예시: `5 of iron sword`.

> 물론 인첸트된 아이템도 아래 예시 처럼 지원합니다:\
`iron sword of sharpness 5 and unbreaking 3`

> 물론 이름도 지정할 수 있어요!\
`iron sword named "&6&l짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`

> 내구도를 무한으로 할 수도 있죠!\
`unbreakable iron sword named "&6&l무한으로 짱쌔짱쌔 검" of sharpness 5 and fire aspect 2 and unbreaking 3`


#### :computer: 명령어로 지급하는 보상:
명령어로 보상을 지급하고 싶다면 아래 예시 처럼 입력하세요:\
`command [명령어]`\
예시: `command premiumcurrency YUNE4979 add 100`\
예시 2: `command ban YUNE4979`(보상으로 밴을 줄 수 도 있답니다.)



## 15개의 Placeholders 지원:

| Placeholder | 설명 |
| - | - |
| `%valiant_battlepass_rewardavailable%` | 플레이어가 받지 않은 보상이 있는 경우 이 Placeholder를 "true"로 표시됩니다. |
| `%valiant_battlepass_premium%` | 플레이어가 프리미엄 패스를 가지고 있을 경우 이 Placeholder를 "ture"로 표시됩니다. |
| `%valiant_battlepass_page%` | 이 Placeholder는 플레이어가 있는 어드벤처 패스 메뉴 페이지(현재 어드벤처 패스 레벨이 포함된 페이지)를 표시합니다. |
| `%valiant_battlepass_rewardavailable_LEVEL%` | 이 Placeholder는 플레이어가 지정된 어드벤처 패스 레벨에 대해 사용 가능하지만 받지 않은 보상을 가지고 있는 경우 "true"로 표사합니다. |
| `%valiant_battlepass_dq_timeuntilreset%` | 이 Placeholder는 일일 퀘스트가 리셋될 때까지의 시간을 표시합니다. |
| `%valiant_battlepass_wq_timeuntilreset%` | 이 Placeholder는 주간 퀘스트가 리셋될 때까지의 시간을 표시합니다. |
| `%valiant_battlepass_dq_timeuntilexpiration%` | 이 Placeholder는 일일 퀘스트가 만료될 때까지의 시간을 표시합니다. |
| `%valiant_battlepass_wq_timeuntilexpiration%` | 이 Placeholder는 주간 퀘스트가 만료될 때까지의 시간을 표시합니다. |
| `%valiant_battlepass_dq_number%` | 이 Placeholder는 일일 퀘스트 ID 번호를 표시합니다. ([GUI 메뉴](/docs/unlimited-adventures/basic_configuration)에서 표시 목적으로 사용됨) |
| `%valiant_battlepass_wq_number%` | 이 Placeholder는 주간 퀘스트 ID 번호를 표시합니다. ([GUI 메뉴](/docs/unlimited-adventures/basic_configuration)에서 표시 목적으로 사용됨) |
| `%valiant_battlepass_level_progress_percent%` | 이 Placeholder는 다음 어드벤처 패스 레벨에 대한 진행 상황을 백분율로 표시합니다. |
| `%valiant_battlepass_level_progress_graphic%` | 이 Placeholder는 색상이 지정된 진행률 표시줄 형태로 다음 어드벤처 패스 레벨에 대한 진행 상황을 표시합니다. |
| `%valiant_battlepass_level%` | 이 Placeholder는 플레이어의 어드벤처 패스 레벨을 표시합니다. |
| `%valiant_battlepass_xp%` |- 이 Placeholder는 플레이어의 어드벤처 패스 경험량을 표시합니다. |
| `%valiant_battlepass_xp_need%` | 이 Placeholder는 레벨 업에 필요한 플레이어의 어드벤처 패스 경험치를 표시합니다. |
