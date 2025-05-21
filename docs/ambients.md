---
sidebar_position: 13
title: '🔊 환경음'
---



# 🔊 **환경음**

저희의 환경음 시스템은 Unlimited Adventures를 위해 특별히 고안된 기술입니다. 완전히 독창적이고 맞춤 제작된 시스템이죠.\
이는 당신의 주변 상황과 바이옴, 시간대, 날씨를 반영한 현실적인 분위기를 만들어줍니다.


## ⚙ 환경음 설정은 어떻게 하나요?

저희는 여러 세부적인 세팅을 제공하고있습니다.\
세팅에서는 각 조건에 따라 플레이어에게 들려줄 소리를 설정할 수 있습니다.
- Biomes - 생물군계,
- Levels - 고도 (Height - Y position),
- Time of the day - 시간대
- Weather - 날씨

You can also adjust:\
또한 다른 세부사항도 조절할 수 있습니다.
- Volume - 음량,
- Delay - 딜레이,
- Amplitude of delay - 딜레이 진폭 (랜덤 딜레이),
- Sound overlaping - 사운드 오버랩 (다른 소리가 재생중일 때 소리가 겹치지 않도록 설정할 수 있습니다)

**소리 설정 예시**
```
yellowstone_elk:
    sound: ambient.elk
    biomes:
    - t:yellowstone
    levels:
    - surface
    time_of_day:
    - morning
    - noon
    - evening
    weather:
    - clear
    - rain
    delay: 120
    amplitude: 50
    prevent_stacking: 5
    volume: 0.5
```




## ➕ 소리 추가는 어떻게 하나요?

환경음을 추가하는 것은 매우 간단합니다. 리소스팩에 파일을 넣고 해당 설정 파일을 업데이트 하기만 해주시면 됩니다.

### 🎨 [Step 1/2] 리소스팩에 음성 파일 추가하기

#### ✅ 파일이 올바르게 저장되었는지 확인
- 파일이 .ogg 형식인지 확인하세요. (마인크래프트는 다른 파일 형식은 지원하지 않습니다)
- 지향성 음향 (TNT폭파, 플레이어 발소리 등) => MONO
- 무지향성 음향 (경험치 획득, 배경음악 등) => STEREO

#### ⬆️ [resource pack](resource-pack)에 음성 파일을 업로드
- 📁`assets/minecraft/sounds/custom/`로 들어가세요.
- 폴더를 선택하거나 새로 만드세요. 예를 들어, 최종 목적지는
📁`assets/minecraft/sounds/custom/effect/`같은 식으로 되어있을 것입니다.

#### ⚙ 음성 파일을 `sounds.json`에 추가
- 📁`assets/minecraft`에 들어가서 `sounds.json`파일을 엽니다.
- 파일을 리스트에 추가합니다. 예시로 파일명이 `hello.ogg`라고 되어있다면,

```
"custom.hello" : {
	"sounds":[
		"custom/effect/hello"
	]
},
```

위와 같이 추가해주시면 됩니다.
여러 소리를 랜덤으로 재생하고 싶으시다면

```
"custom.hello" : {
	"sounds":[
	        "custom/effect/hello_1",
                "custom/effect/hello_2",
                "custom/effect/hello_3"
	]
},
```

이렇게 적어주시면 됩니다.
마지막 파일명에 쉼표가 들어가지 않도록 주의해주세요.


### ⚙ [Step 2/2] 소리를 환경음 리스트에 추가하기

#### ➕ 파일에 소리 설정 추가
You can find the file in 파일은 `unlimited_adventures/Ambients/sounds.yml`에서 찾으실 수 있습니다.

설정 예시:
```
hello:
    sound: hello
    biomes:
    - plains
    delay: 20
```

심화 예시:
```
hello:
    sound: hello
    biomes:
    - green biomes
    - high biomes
    - !t: yellowstone
    levels:
    - surface
    - sky
    weather:
    - clear
    delay: 20
    amplitude: 5
    volume: 0.8
```
