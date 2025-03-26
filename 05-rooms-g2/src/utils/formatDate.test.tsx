import {it, expect} from 'vitest';
import formatDate from './formatDate';

it('formats a date in a readable way', () => {
  const date = new Date(1);
  const result = formatDate(date);

  expect(result).toBe('Jan 1, 1970');
});
