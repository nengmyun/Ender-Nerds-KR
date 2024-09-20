---
sidebar_position: 10
title: '커스텀 아이템'
---



# :hammer:  제작 & 커스텀 아이템

제작은 플레이어가 강력한 신규 무기를 만들 수 있는 강력한 기능입니다.

:::tip[팁]
모든 신규 아이템을 보려면 `/getitems` 명령어를 입력하세요.\
누군가한테 주고 싶다면 `/givecustomitem [아이템 이름] [플레이어 이름] 을 입력하세요!`
:::

#### :bulb: 새로운 아이템을 어떻게 추가하나요?
> 모든 사용자 정의 항목은 다음에서 찾을 수 있습니다: `unlimited_adventures/CustomItems/items.yml`\
> 기존 항목을 config에서 복제하고 이름과 속성을 원하는 대로 변경하면 새 항목을 추가할 수 있습니다.\
> `/giveitem [아이템 이름]` 명령어로 새로 만든 아이템을 받아보세요!

#### :pencil2: 아이템을 어떻게 수정하나요?
> 커스텀 아이템의 정보는 아래 경로에 있는 파일에서 수정 가능합니다:
```unlimited_adventures/CustomItems/items.yml```

#### :pencil2: 어떻게 제작법을 바꾸나요?
> 커스텀 아이템의 조합법은 아래 경로에 있는 파일에서 수정 가능합니다:
```unlimited_adventures/CustomItems/recipes.yml```


#### :unlock: 조합법을 어떻게 잠금 해제하나요?
> 콘피그에서 조합법 잠금을 활성화한 경우 플레이어는 아이템을 제작하기 전에 먼저 레시피를 잠금 해제해야 합니다.\
> 이 경우 플레이어에게 조합법을 지급하는 명령어는 다음과 같습니다. `/forgeunlock [플레이어 이름] [아이템 이름]`, 예시: `/forgeunlock Steve1337 adventure_backpack`

## 2가지 Placeholders 를 제공합니다:

| Placeholder | 설명 |
| - | - |
| `%valiant_craftingunlocked_ITEM%` | 플레이어가 조합법 잠금을 해제하면 True 를 표시합니다. |
| `%valiant_cancraft_ITEM%` | 플레이어가 조합에 필요한 아이템을 가지고 있으면 True를 표시합니다. |


