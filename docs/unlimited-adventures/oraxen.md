---
sidebar_position: 6
title: 'Oraxen'
---

import video from './assets/Oraxen.mp4';

# 🖼️ nlimited Adventures 리소스팩을 Oraxen 에 적용 시키는 방법

Oraxen을 설치하려면 리소스 팩을 Oraxen과 병합해야 합니다.\
방법은 아주 쉬워요. 글로 된 가이드를 참고하거나 영상을 시청하실 수 있어요!

**Step 1**
> :red_circle: 서버를 끕니다.

#### Step 2
> ❌ `server.properties` 파일 속 `resource-pack=` 부분의 링크를 지웁니다.

#### Step 3
> :wrench: `unlimited_adventures/AdventureCore/resource_pack` 경로에서 `use_oraxen_or_itemsadder` 설정을 찾은 후 `true` 로 값을 변경합니다.

#### Step 4
> ❌ 리소스팩 폴더 `assets/modelengine`에서 `modelengine` 폴더를 제거하세요 (Oraxen에서 자동 생성됩니다)


#### Step 5
> Unlimited Adventures 리소스 팩의 내용을 복사합니다. (전부 `Unlimited Adventures/assets/`에 있습니다.)
:::tip[리소스팩 찾기]
리소스팩을 얻는 방법을 모르시나요? [여기](resource-pack)에서 확인하세요!
:::
#### Step 6
> 💾 복사한 폴더를 `plugins/Oraxen/pack/assets`에 붙여넣습니다.

끝났습니다! 이제 Oraxen 으로 Unlimited Adventures 의 리소스팩을 관리할 수 있습니다 :heart:

<video src={video} controls width="384" height="216">
</video>
