---
sidebar_position: 8
title: '기본 설정법'
---





설정을 가능한 한 쉽게 구성할 수 있도록 많은 노력을 기울였습니다. 구성할 수 있는 몇 가지 기능의 예사는 다음과 같습니다.

### :cloud: 규칙, 환영 메시지, 팁, 채팅에서 보이는 칭호 및 색상
채팅과 관련된 기능은 ChatManager 플러그인을 사용합니다. 원하는 대로 설정하려면 ```plugins/ChatManager/``` 폴더로 이동 해야합니다.
- `AutoBroadcast.yml` - 2 분 마다 팁을 채팅으로 전송하는 파일입니다.
- `config.yml` - 규칙, 채팅에서 보이는 칭호와 색상을 설정할 수 있습니다.

### :bookmark_tabs: 스코어 보드, 탭 리스트
스코어보드와 탭리스트는 TAB 플러그인을 사용합니다. 이 기능을 수정하고 싶으시면 ```plugins/TAB/config.yml``` 폴더로 이동 해야합니다.

### :pen: GUI 메뉴
모든 GUI 메뉴는`plugins/CommandPanels/panels/` 폴더에서 수정 가능합니다.

### :earth_americas:  월드 사전 생성

서버의 월드를 미리 생성하는 것을 추천합니다.
미리 생성하기 위해 [Chunky](https://dev.bukkit.org/projects/chunky-pregenerator/files)와 같은 플러그인을 사용할 수 있습니다.\
월드를 미리 생성하면 서버 성능이 향상될 수 있습니다.\
저희가 추천하는 월드 사이즈는 5,000 x 5,000 또는 10,000 x 10,000 입니다.


