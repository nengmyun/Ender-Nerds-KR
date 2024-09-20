---
sidebar_position: 5
title: 'Items Adder'
---

import ReactPlayer from 'react-player'
import video from './assets/ItemsAdder.mp4';

# Unlimited Adventures 리소스팩을 ItemsAdder 에 적용시키는 법

ItemsAdder를 사용하여 설정을 작동시키려면 리소스 팩을 ItemsAdder와 병합해야 합니다.\
어려워 보아셔도 실제론 매우 쉽습니다. 글로 된 가이드를 참고 하시거나 영상을 시청하실 수 있습니다,!

#### Step 1
> :red_circle: 서버를 끕니다.

#### Step 2
> ❌ `server.properties` 파일 속 `resource-pack=` 부분의 링크를 지웁니다.

#### Step 3
> :wrench: `unlimited_adventures/AdventureCore/resource_pack` 경로에서 `use_oraxen_or_itemsadder` 설정을 찾은 후 `true` 로 값을 변경합니다.

#### Step 4
> ❌ 리소스팩 폴더 `assets/modelengine`에서 `modelengine` 폴더를 제거하세요 (ItemsAdder에서 자동 생성됩니다)

#### Step 5
> `plugins/ItemsAdder/contents` 경로에 Unlimited Adventures 리소스 팩을 넣으세요.

:::tip[리소스팩 찾기]
리소스팩을 얻는 방법을 모르시나요? [여기](resource-pack)에서 확인하세요!
:::

#### Step 6
> `/iazip` 명령어를 실행합니다.

끝났습니다! 이제 ItemsAdder로 Unlimited Adventures 의 리소스팩을 관리할 수 있습니다 :heart:

:::warning[경고]
ItemsAdder 를 처음 사용하신다면, [ItemsAdder 설치 가이드](https://itemsadder.devs.beer/first-install)를 참고하세요.
:::


<ReactPlayer playing controls url={video} />



### 다른 자료를 찾으시나요?:

- [Items Adder 설치 가이드](https://itemsadder.devs.beer/first-install) - Items Adder 를 처음 설치하실 경우 꼭 읽어주세요.
- [Items Adder 리소스팩 적용 가이드](https://itemsadder.devs.beer/plugin-usage/merge-resourcepacks) - 기본적으로 이 페이지에서 설명하는 것과 동일한 내용을 설명합니다.
