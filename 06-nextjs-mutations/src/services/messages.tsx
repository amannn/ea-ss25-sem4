import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/messages.json');

export type Message = {
  id: number;
  content: string;
};

export async function getMessages() {
  const messages = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(messages) as Array<Message>;
}

export async function addMessage(content: string) {
  const messages = await getMessages();
  messages.push({
    id: Date.now(),
    content: content
  });
  await fs.writeFile(filePath, JSON.stringify(messages));
}
