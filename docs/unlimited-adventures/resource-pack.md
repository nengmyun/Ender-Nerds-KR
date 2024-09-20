---
sidebar_position: 8
title: '리소스팩 적용'
---

import resource_pack_zip from './assets/resource-pack-zip.jpg';



# :file_folder:  리소스팩에 어떻게 접근하나요?

이 가이드에서는 Unlimited Adventures 리소스팩을 다운로드하는 방법을 설명합니다.

#### Step 1
`server.properties` 파일을 찾으세요.(`server.jar`과 같은 위치 입니다.)

#### Step 2
파일을 열고 `Ctrl(컨트롤) + F`를 누른 뒤 `resource-pack=` 을 검색하여 찾으세요.

#### Step 3
https 뒤에 `\`가 추가되어 있습니다. **이것만 제거하세요.**\
`https\://download.mc-packs.net/pack/afdbe0108c6d2126eddb96c57013829bd00e4300.zip`


그러면 이렇게 될겁니다.:\
`https://download.mc-packs.net/pack/afdbe0108c6d6126eddb96d57013839bd00e4300.zip`

#### Step 4
브라우저(Chrome, Edge 등등)에 붙여넣기하시면 다운로드가 완료됩니다!

:::warning[경고]
위 링크는 예시용 링크 이므로, 꼭 `server.properties` 파일의 링크를 사용하여 리소스 팩을 다운로드하세요!
:::




<br></br>
<br></br>
<br></br>

# 서버의 리소스 팩을 업데이트하는 방법

**Step 1**
> 리소스 팩을 압축하되, 폴더 안에 압축하지 마세요. 파일들을 압축해야합니다. (아래 이미지를 참조하세요.)
<img src={resource_pack_zip} alt="Image Description" width="400" height="150"/>

**Step 2**
> 압축된 파일을 [MCPacks](https://mc-packs.net/)에 업로드합니다.

**Step 3**
> 리소스팩 링크와 SHA1 값을 복사하세요.

**Step 4**
> `server.properties`에서 `resource-pack=`을 찾아 여기에 리소스팩 링크를 붙여넣으세요.\
> 그리고 `resource-pack-sha1=`을 찾아 여기에 SHA1 값을 붙여넣으세요.


