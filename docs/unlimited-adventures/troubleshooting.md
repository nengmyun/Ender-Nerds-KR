---
sidebar_position: 4
title: '문제 해결'
---



# 일반적인 문제 해결 방법

서버 작업이 계획대로 되지 않고 `문제가 발생`할 때가 있다는 것을 이해합니다.이 가이드는 그런 상황에서 빠르게 도움을 제공하기 위해 만들어졌습니다!


### ⚠️ 서버가 제대로 설치되었는지 확인하세요

1. 📗 [**설치 지침서**](https://endernerds.netlify.app/docs/unlimited-adventures/installation)에 따라 설정을 설치했는지 확인하세요.
2. 📄 [**Paper 1.20.4**](https://api.papermc.io/v2/projects/paper/versions/1.20.4/builds/497/downloads/paper-1.20.4-497.jar)를 사용 중인지 확인하세요.
3. 🟢 [**최신 설정 버전**](https://builtbybit.com/resources/unlimited-adventures-survival-setup.27917/updates)을 사용 중인지 확인하세요.
4. ☕ [**Java 21**](https://www.oracle.com/pl/java/technologies/downloads/#java21)을 사용 중인지 확인하세요.


#### 🎨 텍스처 팩이 작동하지 않나요?

서버에서 텍스처 팩이 작동하지 않는 이유는 여러 가지가 있을 수 있습니다.

1. Oraxen 또는 ItemsAdder를 설치했나요? 그렇다면 리소스 팩을 병합해야 합니다. 각 가이드를 사용하세요: [Oraxen](oraxen) [ItemsAdder](itemsadder)
2. 클라이언트 언어 설정에서 `강제 유니코드` 설정이 비활성화되어 있는지 확인하세요.
3. 리소스 팩이나 모델에 수정 사항을 적용했나요? 수정 사항이 문제를 일으킬 수 있으므로 기본 파일로 되돌리고, 하나씩 변경하여 문제가 무엇인지 확인하세요.
4. Oraxen 또는 ItemsAdder를 사용 중이라면 리소스 팩에서 `modelengine` 폴더를 제거해야 합니다. 제거했나요?
5. 모델에 문제가 있나요? `ModelEngine` 플러그인 폴더와 리소스 팩 파일을 깨끗한 설치에서 가져온 원본 파일로 교체해 보세요.
