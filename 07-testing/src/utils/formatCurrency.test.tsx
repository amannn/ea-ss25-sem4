import {it, expect} from 'vitest';
import formatCurrency from './formatCurrency';

it('formats a USD amount', () => {
  const result = formatCurrency(299.99, 'USD');
  expect(result).toBe('$299.99');
});

it('formats an EUR amount', () => {
  const result = formatCurrency(299.99, 'EUR');
  expect(result).toBe('€299.99');
});

// No need for this test
// it('accepts only numbers', () => {
//   formatCurrency('unknown', 'USD')
// });

it('throws if an unknown currency is received', () => {
  expect(() => formatCurrency(299.99, 'unknown')).toThrow();
});
