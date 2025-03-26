import {it, vi, expect, describe, beforeEach} from 'vitest';
import {getMessages, addMessage} from './messages';
import fs from 'fs/promises';

vi.mock('fs/promises', () => ({
  default: {
    async readFile() {
      return '[{"id": 1, "content": "Hello!"}]';
    },
    writeFile: vi.fn()
  }
}));

describe('getMessages', () => {
  it('can read messages', async () => {
    const result = await getMessages();
    expect(result).toEqual([
      {
        id: 1,
        content: 'Hello!'
      }
    ]);
  });
});

describe('addMessage', () => {
  beforeEach(() => {
    const spy = vi.spyOn(globalThis.Date, 'now');
    spy.mockImplementation(() => 2);

    return () => {
      spy.mockRestore();
    };
  });

  it('can add a message', async () => {
    await addMessage('Hello 2');
    expect(fs.writeFile).toHaveBeenCalled();
    expect(vi.mocked(fs.writeFile).mock.calls[0][1]).toEqual(
      '[{"id":1,"content":"Hello!"},{"id":2,"content":"Hello 2"}]'
    );
  });
});
