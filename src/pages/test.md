---
title: '테스트 페이지'
---




:::info[정보]
해당 페이지는 번역에 이상한 부분이 없는지 적용 전 테스트를 하는 공간입니다.
:::

---
sidebar_position: 7
title: '브랜딩'
---




# **💎 브랜딩**

Unlimited Adventures에는 저희의 브랜드 패키지가 함께 제공됩니다.
기본 텍스처와 로고를 계속 사용하셔도 상관 없지만, 자신만의 브랜드로 수정하는 것을 추천합니다.
이 페이지에서는 설정의 가장 중요한 브랜딩 기능을 변경하는 방법을 설명합니다.
### 'ESC' 메뉴 로고
#### 로고를 수정하는 방법
'ESC' 메뉴 로고는 리소스팩을 이용하여 수정할 수 있습니다.\
`Assets/minecraft/textures/custom/icons/title.png`에서 로고 텍스쳐를 찾을 수 있습니다.\
로고 텍스쳐를 변경하려면 해당 텍스처를 편집해야합니다.

:::tip[로고 크기]
로고 사이즈는 최대 256x256px 크기여야 합니다. 이는 Minecraft에서 제한해 놓은 사항이기에 어쩔 수 없습니다.
:::

#### 로고 삭제
어떤 이유에서든 로고를 완전히 삭제하려면, `assets/minecraft/lang/en_us.json`으로 이동하여 해당 줄을 다른 텍스트로 수정하거나 파일 자체를 지워 원래 상태로 되돌릴 수 있습니다.

### MOTD
서버 MOTD는 자체 제작된 Adventure Core에서 처리됩니다. `unlimited_adventures/AdventureCore/motd`에서 수정할 수 있습니다(`plugins/` 폴더에 **존제하지 않습니다**!).
```
motd_line:
    '1': "            §x&6&d&d&4&4&4&lUNLIMITED ADVENTURES &f[§x&a&c&e&6&7&31.20.4&f]"
    '2': "   §x&f&f&c&8&0&0⭐ Ambient Sounds §x&9&0&e&3&4&e🪣 3D Backpacks §x&f&7&4&1&5&4☠ §x&f&7&4&1&5&4Dungeons"
```

### 탭 리스트
Tablist는 `plugins/TAB/config.yml`에서 편집할 수 있습니다.
```
header-footer:
  enabled: true
  header:
  - '%animation:ServerName%'
  - ''
  footer:
  - ''
  - ' &f #31ed96Website: %color_server_name_accent%www.unlimited-adventures.com'
  - ''
  - '%valiant_active_boosters%'
  - '%valiant_active_boosters_2%'
```
### 스코어보드
스코어보드(사이드바)는 `plugins/TAB/config.yml`에서 편집할 수 있습니다.
```
scoreboard:
  enabled: true
  toggle-command: /sb
  remember-toggle-choice: true
  hidden-by-default: true
  use-numbers: false
  static-number: 0
  delay-on-join-milliseconds: 0
  respect-other-plugins: true
  scoreboards:
    scoreboard:
      title: '%color_server_name%🔔 %animation:ServerName% %color_server_name%🔔'
      lines:
      - ''
      - '&f[%color_primary_color%&l%player%&f]'
      - ' &fRank: %luckperms_prefix%'
      - ' &fGold: %color_gold%%vault_eco_balance_fixed% &f'
      - ' &fGems: %color_gems%%valiant_premium_currency% &f'
      - ''
      - '  {%color_server_name_accent%}play.unlimitedadventures.com'
```
