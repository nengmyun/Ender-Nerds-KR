---
sidebar_position: 13
title: '3D 모험 악세서리'
---



# 👑 **모험 악세서리**

모험 악세서리는 플레이어가 눈에 띄는 3D 가방과 도구를 몸에 착용할 수 있게 해주는 **독점적** 이고 **자체 제작된** 시스템입니다!

#### 모험 악세서리의 구성을 어떻게 변경하나요?
> 모험 악세서리 시스템의 매개변수는 다음 위치에서 편집할 수 있습니다.
```unlimited_adventures/AdventureApparel/config.yml```

#### 플레이어가 순간이동을 하거나 명령을 사용할 수 없습니다.
Spigot 제한으로 인해 모험 악세서리가 가끔 순간이동을 차단할 수 있습니다.
우리는 평소처럼 순간이동 명령을 사용할 수 있도록 하는 해결책을 만들었습니다.

Please go to the Adventure Apparel's config.yml and locate 'teleport-commands:'. It's at the bottom of the file.\
Now add all commands that don't work on your server to this list.\
This should fix your issue, if it doesn't, please make a report on our [Discord](https://discord.gg/wdBFC7Hc6X).