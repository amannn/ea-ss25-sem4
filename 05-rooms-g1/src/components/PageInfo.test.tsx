import {it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Pagination from './Pagination';

it('renders', () => {
  render(
    <Pagination
      page={{
        number: 0, // Index of current page
        size: 9, // Size of current page
        totalElements: 20, // Total number of elements
        totalPages: 3 // Amount of pages available
      }}
    />
  );
  screen.debug();
  screen.getByText('Page 1 of 3 (20 results in total)');
});

// TODOs:
// 1. Receive page in Pagination component and render accordingly
// 2. Add more tests (first page, middle, end)
// 3. Add links for prev/next and assert for them
