import {ErrorRepository} from '../errorRepository';

const errorRepository = new ErrorRepository;

test('ErrorRepository - get error message', () => {
    expect(errorRepository.translate(1)).toBe('Ошибка 1');
})

test('ErrorRepository - get default error message ', () => {
    expect(errorRepository.translate(100)).toBe('Unknown error');
})