---
sidebar_position: 3
title: '업데이트'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';





# :bulb: **서버팩을 어떻게 업데이트 하나요?**

이미 서버팩을 설치하였으나 새로운 버전으로 업데이트 하고 싶나요? 아래 단계를 잘 따라오시면 정말 쉬워요!

:::warning[버전을 스킵하지 마세요!]
서버팩의 버전을 건너뛰어선 안됩니다! 예시로, 2.0 버전 에서 2.4 버전으로 퀀텀 점프를 하면 안되는 것 입니다!\
만약 2.0 버전을 사용하고 계신다면, 2.1 버전을 다운로드 하고, 업데이트 설정을 완료하고 2.2 버전을 설치하고, 그 다음 2.3 버전을 설치하는 식으로 차근차근 업데이트 해야합니다.
:::

:::warning[먼저 백업하세요!]
우리는 업데이트 하기 전 **항상** 백업을 우선시 해야합니다. 그래야 업데이트 설정을 망쳐도 다시 시작 할 수 있으니까요!
:::

<Tabs>
  <TabItem value="2.8" label="2.8 업데이트">

#### Step 1
:red_circle: 서버를 끕니다.

#### Step 2
❌ 다음 폴더를 제거하세요:
- `unlimited_adventures/CustomItems/`
- `unlimited_adventures/Ambients/`

#### Step 3
❌ 다음 플러그인을 제거하세요:
- `ChatManager`
- `NexEngine`
- `ExcellentEnchants` 
- `Chunky`
- `World Edit`
- `World Guard`
- `FastAsyncWorldEdit`

#### Step 4
❌ 다음 스크립트를 제거하세요:
- `plugins/Skript/scripts/chat_manager.sk`
- `plugins/Skript/scripts/ambients.sk`

#### Step 5
⬇️ [Paper 1.21](https://api.papermc.io/v2/projects/paper/versions/1.21/builds/130/downloads/paper-1.21-130.jar)을 다운로드하세요.

#### Step 5
⬇️ 다음 플러그인들을 업데이트 하세요:
- [TAB](https://github.com/NEZNAMY/TAB/releases/download/4.1.8/TAB.v4.1.8.jar) 업데이트.
- [Citizens](https://ci.citizensnpcs.co/job/citizens2/lastSuccessfulBuild/artifact/dist/target/Citizens-2.0.35-b3580.jar) 업데이트.
- [Model Engine](https://mythiccraft.io/index.php?pages/official-modelengine4-download/&download=free&f=4.0.7) 업데이트.
- [Mythic Mobs](https://www.mythiccraft.io/downloads/mythicmobs/free/MythicMobs-5.7.2.jar) 업데이트.


#### Step 6
`Update Files` 폴더의 모든 내용을 주 서버 폴더로 복사합니다.\
("대상 폴더의 파일 덮어쓰기"을 클릭합니다)



  </TabItem>
  <TabItem value="2.6.1" label="2.6.1 업데이트">

#### Step 1
:red_circle: 서버를 끕니다.

#### Step 2
❌ 다음 폴더를 제거하세요:
- `spawn`
- `plugins/CommandPanels/panels`

#### Step 3
❌ 다음 파일을 제거하세요:
- `plugins/worldedit.jar`
- `plugins/AureliumSkills.jar` 
- `plugins/Skript/scripts/rtp.sk`

#### Step 4
[Paper 1.20.4](https://api.papermc.io/v2/projects/paper/versions/1.20.4/builds/485/downloads/paper-1.20.4-485.jar)를 다운로드하세요.

#### Step 5
[Citizens](https://ci.citizensnpcs.co/job/citizens2/3373/artifact/dist/target/Citizens-2.0.33-b3373.jar)를 업데이트하세요.

#### Step 6
`Update Files` 폴더의 모든 내용을 주 서버 폴더로 복사합니다.\
("대상 폴더의 파일 덮어쓰기"을 클릭합니다)

  </TabItem>
    <TabItem value="Other versions" label="다른 버전">

#### Step 1
:red_circle: 서버를 끕니다.

#### Step 2
`Update Files` 폴더의 모든 내용을 주 서버 폴더로 복사합니다.\
("대상 폴더의 파일 덮어쓰기"을 클릭합니다)

  </TabItem>
</Tabs>

:white_check_mark: 끝! Unlimited Adventures의 최신 버전을 즐길 수 있습니다!
