# Тесты API зоомагазина

## Запуск тестов

npm install --save-dev jest axios
Для запуска тестов используйте команду `npm test`.

## Тестовые сценарии

- `добавление питомца`: Этот тест проверяет, что новый питомец может быть добавлен через конечную точку `POST /pet`.
- `редактирование питомца`: Этот тест проверяет, что данные существующего питомца могут быть обновлены через конечную точку `PUT /pet`.
- `удаление питомца`: Этот тест проверяет, что существующий питомец может быть удален через конечную точку `DELETE /pet/{petId}`.
- `поиск питомца (и по id и по статусу)`: Этот тест проверяет, что питомец может быть найден либо по его id через конечную точку `GET /pet/{petId}`, либо по его статусу через конечную точку `GET /pet/findByStatus`.
- `загрузка изображений питомца`: Этот тест проверяет, что для питомца можно загрузить изображение через конечную точку `POST /pet/{petId}/uploadImage`.