---
sidebar_position: 13
title: '후원상점'
---

import tebex1 from './assets/tebex_premium_currency_1.png';
import tebex2 from './assets/tebex_premium_currency_2.png';


# :moneybag: 후원 상점 설정

후원 상점은 Unlimited Adventures의 주요 기능 중 하나이며 가장 독창적인 기능 중 하나입니다. 그렇기에 많이 낯설 수 있습니다.
하지만 걱정하지 마세요. 실제로는 매우 간단합니다!

### 후원 상점을 어떻게 시작하나요?

후원 상점은 저희가 미리 지정해 둔 아이템을 제공합니다.(물론 수정도 가능합니다!)
당신이 해야 할 유일한 일은 후원 제화(젬)를 서버의 웹 스토어에 추가하는 것입니다.

#### 어떻게 웹 스토어에 후원 제화 패키지를 추가하나요?

1. 먼저 웹 스토어에 새 패키지를 추가해야 합니다(예로 Tebex를 사용하고 있습니다).
2. 다음으로 패키지 구매 시 실행할 명령을 구성해야 합니다.

<img src={tebex1} alt="Image Description" width="824" height="204"/>

3. 다음 명령어를 입력합니다: `/premiumcurrency {username} add 1000`

<img src={tebex2} alt="Image Description" width="984" height="191"/>

4. 'Create' 를 클릭하세요. 짜잔, 다 끝났습니다!




### 보너스: 후원 제화 패키지 가격대 추천

저희가 추천하는 후원 제화 패키지 가격입니다.
:::tip[팁]한국버전 문서에선 한국 통화(KRW)로 표시됩니다. 원화(USD)로 확인하고 싶으시면 원본 문서를 참고하세요.:::
| 젬 수량 | 가격 |
| - | - |
| 1000 젬 | 10,000 ₩ |
| 2500 젬 | 25,000 ₩ |
| 6000 젬 | 60,000 ₩ |

가격은 사용자의 상황에 맞게 조정할 수 있지만 KRW와 USD의 환율이 높으므로 최대한 동일한 비율을 유지 해야합니다.



### :money_with_wings: 다른 사람에게 후원 제화를 추가하는 방법은 무엇인가요?

매ㅐㅐㅐ우 쉽습니다! 다음 명령어를 입력하면 됩니다:\
```/premiumcurrency [플레이어] add [수량]```\
아니면 이렇게 간결하게 적어도 됩니다:\
```/gems [플레이어] add [수량]```

### :gem: 후원 제화 Placeholder

사용 가능한 젬 Placeholder: `%valiant_premium_currency%`\
플레이어가 보유한 젬의 양을 표시합니다.
