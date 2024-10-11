---
sidebar_position: 22
title: '랭크 텍스쳐'
---
import img1 from './assets/rank_textures_1.png';
import img2 from './assets/rank_textures_2.png';
import img3 from './assets/rank_textures_3.png';
import img4 from './assets/rank_textures_4.png';

# 랭크 텍스쳐 (접두사)

이 가이드에서는 랭크 텍스처 변경 방법을 알려드립니다.

<img src={img1} alt="Image Description" width="459" height="215"/>

### 택스쳐가 아니라 글자로 변경하고 싶어요 (접두사)

> 랭크 텍스쳐를 제거하려면, 해당 명령어를 입력해주세요:
> `/lp editor`
> 그런 다음 링크를 입력하고 제거하려는 텍스처가 있는 순위를 찾으세요. 이 가이드는 기본(플레이어) 랭크를 예시로 작성되었습니다.
> 'prefix.0.&f'를 찾으세요
> '' 부분에 원하는 랭크 이름을 입력하세요
> 이번 가이드에선 'prefix.0.&fPlayer'로 바꿔보았습니다.

<img src={img2} alt="Image Description" width="331" height="140"/>
<img src={img3} alt="Image Description" width="346" height="133"/>

### 랭크 텍스쳐를 어떻게 변경하나요?

랭크 텍스처를 변경하려면 서버의 리소스팩을 수정해야 합니다.
```assets/minecraft/textures/custom/icons```
이 폴더에는 다양한 서버 아이콘이 포함되어 있습니다. Ultra 랭크의 텍스처를 변경하고 싶다면 `ultra_icon` 파일만 변경하면 됩니다.
파일을 변경한 후 적용하면 제대로 작동합니다.

:::tip[팁]
순위 텍스처를 직접 변경하고 싶지 않거나 만드는 방법을 모르는 경우 랭크 텍스처 패키지를 주문할 수 있습니다.
8.90 달러로 5개의 새로운 랭크 접두사가 제공됩니다. 주문하시려면 [디스코드](https://discord.gg/wdBFC7Hc6X)로 연락주세요.
:::

### TAB에서 플레이어 랭크 접두사를 어떻게 변경하나요?

<img src={img4} alt="Image Description" width="270" height="36"/>

`plugins/TAB/groups.yml` 으로 이동한 후 아래 부분을 변경하시면 됩니다:

Default:
tabprefix: "&f "
tagprefix: "&f "
