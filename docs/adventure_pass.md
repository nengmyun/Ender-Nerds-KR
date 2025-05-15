---
sidebar_position: 13
title: '🎯 어드벤처 패스'
---





# :dart: **어드벤처 패스**

우리는 최고의 배틀 패스 구현을 자랑스럽게 생각합니다.
이 가이드는 이 솔루션을 가능한 한 쉽게 사용할 수 있도록 돕기 위해 작성되었습니다.


### 콘피그 파일은 어디에 있나요?
어드벤처 패스 콘피그 파일은 여기에 있습니다:
📁`unlimited_adventures/AdventurePass`

### 시즌을 시작/초기화 하는 방법

현재 시즌(모든 플레이어의 진행 상황, 레벨, 경험치 및 보상)을 재설정하려면 다음 명령을 실행해야 합니다.\
`/adventurepass newseason`


### 플레이어에게 어드벤처 패스 XP를 추가하는 방법

`/adventurepass givexp` 명령을 사용하면 플레이어에게 어드벤처 패스 경험치를 쉽게 추가할 수 있습니다. 예:\
`/adventurepass givexp [플레이어] [수량]`



### :package: 어드벤처 패스 보상을 변경하는 방법

어드벤처 패스 시스템에서 보상을 쉽게 추가, 변경 또는 제거할 수 있습니다.\
그렇게 하려면 `unlimited_adventures/AdventurePass/rewards.yml` 구성 파일을 찾아야 합니다.



### 4가지 유형의 보상이 제공됩니다.

#### :moneybag: 골드 보상:
골드 보상을 추가하려면 다음을 입력해야 합니다:\
`gold [수량]`, 예시: `gold 500`

#### :gem: 젬 보상:
젬 보상을 추가하려면 다음을 입력해야 합니다:\
`gems [수량]`, 예시: `gems 500`


#### :hammer: 아이템 보상:
아이템 보상을 추가하려면 다음을 입력해야 합니다:\
`[수량] of [아이템]`, 예시: `5 of iron sword`.

> 인첸트도 물론 지원합니다:\
`iron sword of sharpness 5 and unbreaking 3`

> 물론 이름도 설정할 수 있죠!\
`iron sword named "&6&l기가채드의 검" of sharpness 5 and fire aspect 2 and unbreaking 3`

> 내구도를 무한으로 지정할 수도 있습니다:\
`unbreakable iron sword named "&6&l기가채드의 검" of sharpness 5 and fire aspect 2 and unbreaking 3`


#### :computer: 커멘드 보상:
커멘드로 보상을 지급하려는 경우 아래 방식을 사용할 수 있습니다:\
`command premiumcurrency PLAYER_NAME add 100`




## 15개의 Placeholder 사용 가능:

| Placeholder | 설명(추 후 번역 예정) |
| - | - |
| `%adventurepass_rewardavailable%` | This placeholder returns "true", if the player has available, unclaimed rewards. |
| `%adventurepass_premium%` | This placeholder returns "true", if the player has the Premium Pass. |
| `%adventurepass_page%` | This placeholder returns the Adventure Pass Menu page that the player is on (the page that contains his current Adventure Pass level) |
| `%adventurepass_rewardavailable_LEVEL%` | This placeholder returns "true", if player has an available, unclaimed reward for the specified Adventure Pass level. |
| `%adventurepass_dq_timeuntilreset%` | This placeholder returns the time until the Daily Quest resets. |
| `%adventurepass_wq_timeuntilreset%` | This placeholder returns the time until the Weekly Quest resets. |
| `%adventurepass_dq_timeuntilexpiration%` | This placeholder returns the time until the Daily Quest expires. |
| `%adventurepass_wq_timeuntilexpiration%` | This placeholder returns the time until the Weekly Quest expires. |
| `%adventurepass_dq_number%` | This placeholder returns the Daily Quest ID number. (used for display purposes in the CP menu) |
| `%adventurepass_wq_number%` | This placeholder returns the Weekly Quest ID number. (used for display purposes in the CP menu) |
| `%adventurepass_level_progress_percent%` | This placeholder returns the progress towards the next Adventure Pass level in percentage. |
| `%adventurepass_level_progress_graphic%` | This placeholder returns the progress towards the next Adventure Pass level in the form of a colored progress bar. |
| `%adventurepass_level%` | This placeholder returns the player's Adventure Pass level. |
| `%adventurepass_xp%` |- This placeholder returns the player's Adventure Pass experience amount. |
| `%adventurepass_xp_need%` | This placeholder returns the player's Adventure Pass experience amount needed to level up. |
