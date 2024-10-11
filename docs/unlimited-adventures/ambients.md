---
sidebar_position: 13
title: '환경음'
---



# 🔊 **환경음**

저희 환경음 시스템은 Unlimited Adventures를 위해 특별히 설계된 강력한 매커니즘입니다. 완전히 독자적이고 맞춤형 소프트웨어로 제작되었죠.\
주변 환경, 바이옴, 시간대, 심지어 날씨에 따라 사실적인 사운드 분위기를 만들어주는 시스템입니다!


## ⚙ 어떻게 환경음을 설정하나요?

환경음을 위한 구성 설정이 제공됩니다.
현재 플레이어에게 재생할 환경음을 결정하는 요소:
- Biome (바이옴)
- Levels (지상으로부터의 - Y 좌표) (고도)
- Time of the day (시간대)
- Weather (날씨)

다른 조정 가능 요소:
- Volume, (볼륨)
- Delay, (딜레이)
- Amplitude of delay (랜덤 딜레이), (딜레이 증폭)
- Sound overlapping (다른 소리가 재생중일 때 소리가 재생되지 않도록 설정), (사운드 오버렙)

**소리 설정에 대한 예시**
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




## ➕ 새로운 소리 추가는 어떻게 하나요?

소리를 추가하는건 매우 쉽습니다. 간단하지만 강력한 구성을 사용해 추가하고 싶은 소리를 사운드 리스트에 넣어주세요!

### 🎨 [Step 1/2] 리소스 팩에 소리를 추가하세요.

#### ✅ 사운드가 올바르게 저장되었는지 확인합니다.
- 파일이 .ogg 형식인지 확인합니다. (다른 형식은 마인크래프트에서 재생되지 않습니다!)
- 3d 사운드를 원한다면 모노로 만들어주세요.
- 재생 방향이 상관없는 사운드를 원하신다면 스테레오로 만들어주세요.

#### ⬆️ 이제 [리소스 팩](resource-pack)에 소리를 업로드합니다.
- `assets/minecraft/sounds/custom/`로 들어갑니다.
- 폴더 하나를 선택하거나 새 폴더를 만들어주세요. 경로는 다음 예시와 같이 적어주세요. `assets/minecraft/sounds/custom/effect/`

#### ⚙ 사운드를 `sounds.json` 파일에 추가해주세요.
- `assets/minecraft` 폴더에 들어가서 `sounds.json` 파일을 여세요.
- 리스트에 소리를 추가하세요. `hello.ogg`이라는 파일 이름으로 예시를 들어보죠.

```
"custom.hello" : {
	"sounds":[
		"custom/effect/hello"
	]
},
```

무작위 선택 가능한 다양한 사운드 변형을 원한다면 이렇게 하세요.

```
"custom.hello" : {
	"sounds":[
	        "custom/effect/hello_1",
                "custom/effect/hello_2",
                "custom/effect/hello_3" <- 이 부분은 쉼표(,)를 적으면 안됩니다!
	]
},
```

해당 목록의 마지막줄에는 끝에 쉼표를 쓰지 않는 것을 명심하세요. 중요합니다!


### ⚙ [Step 2/2] 사운드 리스트에 추가하세요

#### ➕ 소리 구성을 파일에 추가하세요

예시 구성:
```
hello:
    sound: hello
    biomes:
    - plains
    delay: 20
```

더 자세한 예시:
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
