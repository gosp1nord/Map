import ErrorRepository from '../repository';

test('test error', () => {
  const errorMap = new ErrorRepository();
  const error = errorMap.translate(100);
  expect(error).toBe('Ошибка поиска');
});

test('test error', () => {
  const errorMap = new ErrorRepository();
  const error = errorMap.translate(200);
  expect(error).toBe('Unknown error');
});
