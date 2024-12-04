---
title: ERD
sidebar_position: 1
---

# Модель данных

## Логическая модель

import Drawio from '@theme/Drawio'
import diagram from '!!raw-loader!./model.drawio';

<Drawio content={diagram} editable={false} />

---
## Физическая модель

```plantuml

@startuml
entity "Users" as Users {
  * user_id: integer [PK]
  ---
  first_name: varchar(255)
  second_name: varchar(255)
  email: varchar(255) [UNIQUE]
  birth: date
  gender: char(1)
  city: varchar(100)
  role: varchar(50) 
  native_language: varchar(50)
  foreign_language: varchar(50) 
  level: varchar(50)
}

entity "Communities" as Communities {
  * community_id: integer [PK]
  ---
  title: varchar(255)
  description: text
  language: varchar(50)
  topic: varchar(100)
}

entity "Chats" as Chats {
  * chat_id: integer [PK]
  ---
  community_id: integer [FK]
  user_id: varchar(255) [FK]
  message: text
  created_at: timestamp
}

entity "Services" as Services {
  * service_id: integer [PK]
  ---
  service_name: varchar(255)
  service_type: varchar(50)
  price: decimal(10,2)
}

entity "User_Service" as User_Service {
  * user_id: integer [PK (FK)]
  * service_id: integer [PK (FK)]
  ---
  date_start: timestamp
  date_end: timestamp
}

entity "User_Community" as User_Community {
  * user_id: integer [PK (FK)]
  * community_id: integer [PK (FK)]
  ---
  joined_at: timestamp
  left_at: timestamp
}

Users ||--o{ User_Community 
Communities ||--o{ User_Community 
Communities ||--|| Chats
Users ||--o{ User_Service 
Services ||--o{ User_Service 

@enduml

```
---
## Users

| Название         | Тип        | Описание                          |
| --------         | ---------- | --------------------------------- |
| user_id          | int        | Идентификатор пользователя        |
| first_name       | varchar    | Имя пользователя                  |
| last_name        | varchar    | Фамилия пользователя              |
| email            | varchar    | Электронная почта                 |
| birth            | date       | Дата рождения пользователя        |
| gender           | char       | Пол пользователя (Ж, М)           |
| city             | varchar    | Выбранный город                   |
| role             | varchar    | Роль (Студент, партнер)           | 
| native_language  | varchar    | Родной язык                       |
| foreign_language | varchar    | Изучаемый язык                    |
| level            | varchar    | Уровень владения изучаемым языком |

## Communities

| Название      | Тип     | Описание                 |
| --------      | ------- | ------------------------ |
| community_id  | int     | Идентификатор сообщества |
| title         | varchar | Название сообщества      |
| description   | varchar | Описание                 |
| language      | varchar | Язык сообщества          |
| topic         | varchar | Ключевая тема            |

## User_Community

| Название      | Тип       | Описание                   |
| --------      | ----------| ---------------------------|
| user_id       | int       | Идентификатор пользователя |
| community_id  | int       | Идентификатор сообщества   |
| joined_at     | timestamp | Дата присоединения         |
| left_at       | timestamp | Дата выхода                |

## Chats

| Название      | Тип       | Описание                   |
| --------      | ----------| ---------------------------|
| chat_id       | int       | Идентификатор чата         |
| community_id  | int       | Идентификатор сообщества   |
| user_id       | int       | Идентификатор пользователя |
| message       | text      | Текст сообщения            |
| created_at    | timestamp | Дата создания сообщения    |

## Services

| Название      | Тип     | Описание                      |
| --------      | ------- | ----------------------------- |
| service_id    | int     | Идентификатор услуги          |
| service_name  | varchar | Название услуги               |
| service_type  | varchar | Тип услуги (Подписка, услуга) |
| price         | decimal | Стоимость                     |

## User_Service

| Название      | Тип       | Описание                      |
| --------      | --------- | ----------------------------- |
| user_id       | int       | Идентификатор пользователя    |
| service_id    | int       | Идентификатор услуги          |
| date_start    | timestamp | Дата начала действия          |
| date_end      | timestamp | Дата окончания действия       |


