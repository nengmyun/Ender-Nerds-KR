---
sidebar_position: 15
title: 'Ancient Traveler'
---



# :briefcase: 고대 여행자

고대 여행자는 Unlimited Adventures을 위해 자체 제작된 기간 한정 상점 시스템 입니다.
매일 3가지 독특한 아이템을 제공하며 이를 가성비 높은 가격에 판매합니다.
His items stock is unique, you cannot purchase them through the regular Buy Shop.



#### How to change Ancient Traveler's items?

In order to change the Ancient Traveler's item stock, you need to go to:\
`unlimited_adventures/AncientTraveler/config.yml`\
This file contains the item tags to the items configured in Command Panels' Ancient Traveler's menu.
That list can be used to add, remove or rename tags.



#### In order to modify the actual items, you need to go to:
`plugins/CommandPanels/panels/ancient_traveler_menu.yml`\
In that file, you will find the 'custom-item' node, that contains all of the items sold by the Ancient Traveler.\
That's the spot in which you can modify them.
