---
sidebar_position: 1
title: '고대 여행자'
---
# :briefcase: 고대 여행자

고대 여행자는 Unlimited Adventures을 위해 자체 제작된 기간 한정 상점 시스템 입니다.
매일 3가지 독특한 아이템을 제공하며 이를 가성비 높은 가격에 판매합니다.
고대 여행자가 판매하는 아이템은 특별하며 일반 상점을 통해 구매할 수 없습니다.

#### 어떻게 고대 여행자의 아이템을 수정하나요?

고대 여행자의 아이템 목록을 변경하려면 다음 경로로 이동해야 합니다:
`unlimited_adventures/AncientTraveler/config.yml`
이 파일에는 Command Panels(플러그인)의 고대 여행자 메뉴에 구성된 아이템에 대한 아이템 태그가 포함되어 있습니다.
해당 목록에서 태그를 추가 및 제거하거나 이름을 변경할 수 있습니다.

#### 실제 항목을 수정하려면 다음 경로로 이동해야 합니다:

`plugins/CommandPanels/panels/ancient_traveler_menu.yml`
해당 파일에는 고대 여행자가 판매하는 모든 아이템이 포함된 'custom-item' 노드가 있습니다.
그곳이 바로 수정이 가능한 곳입니다.
