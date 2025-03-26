import {it} from 'vitest';
import {render, screen} from '@testing-library/react';
import Pagination from './Pagination';

it('renders the first page', () => {
  render(
    <Pagination
      page={{
        number: 0, // Number of current page
        size: 9, // Amount of elements on page
        totalElements: 20, // Number of elements in total
        totalPages: 3 // Number of pages in total
      }}
    />
  );
  screen.debug();
  screen.getByText('Page 1 of 3 (20 results in total)');
});

// Next steps
// 1. Use the page prop and render accordingly
// 2. Add more tests for first page, middle, last
// 3. Add and verify links to prev/next page are rendered
