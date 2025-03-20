import {addMessage, getMessages} from '@/services/messages';
import {revalidatePath} from 'next/cache';
import ChatForm from './ChatForm';
import ChatItem from './ChatItem';

export default async function Home() {
  const messages = await getMessages();

  async function submit(prevState: unknown, formData: FormData) {
    'use server';
    const content = formData.get('content');
    if (typeof content !== 'string') return;
    if (content.trim().length < 5) {
      return {
        error: 'Please provide a valid content',
        formData: formData
      };
    }
    console.log('submit', content);

    await addMessage(content);
    revalidatePath('/');
    return undefined;
  }

  return (
    <main>
      <ul>
        {messages.map((message) => (
          <ChatItem key={message.id} message={message} />
        ))}
      </ul>
      <ChatForm submit={submit} />
    </main>
  );
}
