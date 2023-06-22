import { classNames } from 'helpers/classNames';

describe('classnames', () => {
  test('with classname only', () => {
    expect(classNames('class')).toBe('class');
  });

  test('with additional class', () => {
    expect(classNames('class', {}, ['additional'])).toBe('class additional');
  });

  test('with additional class and mode', () => {
    expect(classNames('class', { hovered: true }, ['additional'])).toBe('class additional hovered');
  });
});
