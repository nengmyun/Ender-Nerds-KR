---
sidebar_position: 8
title: '기본 설정'
---


# ⚙️ 기본 설정


저희는 설정을 최대한 쉽게 구성할 수 있도록 많은 노력을 기울였습니다. 다음은 구성 가능한 몇 가지 기능 예시입니다:

### :cloud: 채팅 시스템
채팅 관련 기능은 내장된 채팅 시스템을 통해 제어됩니다. 원하는 대로 설정하려면 다음 페이지로 이동하세요:
📁`unlimited_adventures/Chat/` 폴더.
- `config.yml` - 특정 기능을 활성화/비활성화 할 수 있습니다.
- `auto-broadcast.yml` - 2분마다 채팅으로 전송되는 팁을 설정할 수 있습니다.
- `banned-words.yml` - 검열되어 처벌받을 금칙어를 설정할 수 있습니다.
- `messages-of-mild-concern.yml` - 플레이어가 보낸 금칙어를 대체할 유머러스한 메시지를 설정할 수 있습니다.
- `chat-format.yml` - 개인 메시지 형식을 설정할 수 있습니다.
- `messages.yml` - 번역할 수 있는 다양한 문자열이 포함되어 있습니다.


### :bookmark_tabs: 스코어보드, 탭 목록
스코어보드와 탭 목록은 TAB 플러그인으로 관리됩니다. 이러한 기능을 설정하려면 폴더로 이동하세요:\
📁`plugins/TAB/config.yml`

### :pen: GUI 메뉴
대부분의 GUI 메뉴는 📁`plugins/CommandPanels/panels/` 폴더에서 변경 가능합니다.

### :earth_americas:  스폰을 옮기는 방법

스폰을 이동하려면 다음이 필요합니다:
- 스폰 위치를 `/setspawn` 명령어로 이동시킵니다.
- NPC를 `/npc select` 명령어로 선택한 후 `/npc movehere` 명령어로 이동시킵니다.
- 홀로그램을 `/dh movehere name` 명령어로 이동시킵니다.
- Wilderness Portal을 `/rg redefine wild_tp` 명령어로 이동시킵니다.
- 선택사항: `/rg redefine jump_pad` 명령어로 점프패드를 이동시킵니다.
- 선택사항: Portal Stone 아이템을 사용하여 스컬크 포털을 새로운 위치에 배치하면 간단히 이동할 수 있습니다.




