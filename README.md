# [![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&random=false&width=500&lines=Movies-explorer.+Backend)](https://git.io/typing-svg)
Дипломный проект в рамках учебы в [Яндекс.Практикум](https://practicum.yandex.ru/) на факультете [Веб-разработчик](https://practicum.yandex.ru/web/)

![Movies Explorer](https://github.com/Shnd3r/movies-explorer-api/assets/116545792/1c615142-ed07-4a49-b3b1-2b58ea027c89)

## Описание проекта
**Movies Explorer** - приложение для поиска и просмотра фильмов международного фестиваля документального кино о новой культуре **Beat Film Festival**. Отзывчиво-адаптивное приложение (SPA), написанное на React (frontend) и Express (backend).

**Ссылки на проект:**
- IP: 158.160.120.12
- Frontend: https://movies-explorer.shndr.nomoredomainsrocks.ru
- Backend: https://movies-explorer.shndr.nomoredomainsrocks.ru 

## Функциональность (Backend): 
* Роуты для пользователей:
  + GET /users/me — возвращает информацию о пользователе
  + PATCH /users/me — обновляет информацию о пользователе
* Роуты для фильмов: 
  + GET /movies — возвращает все фильмы из базы
  + POST /movies — создаёт фильм
  + DELETE /movies/:movieId — удаляет фильм по _id 

## Используемые технологии (Backend):
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

## 🚀 Запуск проекта (Backend):

#### Клонировать репозиторий:
```
git clone https://github.com/Shnd3r/movies-explorer-api.git
```
#### Установить зависимости:
```
npm install
```
#### Запустить приложение:
```
npm run start
```
#### Запустить сервер с hot-reload:
```
npm run dev
```

## Автор

**Данила Шнайдер**

- E-mail: [d.shnder@gmail.com](mailto:d.shnder@gmail.com)
- Telegram: [@shnd3r](https://t.me/shnd3r)


