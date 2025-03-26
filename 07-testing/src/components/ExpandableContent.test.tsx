import {afterEach, it} from 'vitest';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import ExpandableContent from './ExpandableContent';

afterEach(cleanup);

it('reveals content on click', () => {
  // Step 1: Render
  render(<ExpandableContent showLabel="Show">Hello</ExpandableContent>);

  // Step 2: Select elements
  const button = screen.getByRole('button', {name: 'Show'});

  // Step 3: Interact with `fireEvent`
  fireEvent.click(button);

  // Step 4: Assert on content
  screen.getByText('Hello');
});
