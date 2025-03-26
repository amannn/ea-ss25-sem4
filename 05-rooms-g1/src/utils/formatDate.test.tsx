import {it, expect} from 'vitest';
import formatDate from './formatDate';

it('should format a date', () => {
  // 1st second of 1/1/1970
  const date = new Date(1);

  const result = formatDate(date);
  expect(result).toBe('Jan 1, 1970');
});
