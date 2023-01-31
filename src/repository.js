export default class ErrorRepository {
  constructor() {
    this.ErrRepository = new Map([
      [100, 'Ошибка поиска'],
      [110, 'Ошибка авторизации'],
      [120, 'Пользователь не найден'],
    ]);
  }

  translate(code) {
    if (this.ErrRepository.has(code)) {
      return this.ErrRepository.get(code);
    }
    return 'Unknown error';
  }
}
