import {addMessage, getMessages, Message} from '@/services/messages';
import {revalidatePath} from 'next/cache';
import ChatForm from './ChatForm';

export default async function Home() {
  const messages = await getMessages();

  async function submit(formData: FormData) {
    'use server';
    const content = formData.get('content');
    if (typeof content !== 'string') return;
    if (content.trim().length < 1) return;
    console.log('submit', content);

    await addMessage(content);
    revalidatePath('/');
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

function ChatItem({message}: {message: Message}) {
  return <li>{message.content}</li>;
}
