import {Message, removeMessage} from '@/services/messages';
import {revalidatePath} from 'next/cache';

type Props = {
  message: Message;
};

export default function ChatItem({message}: Props) {
  async function remove(formData: FormData) {
    'use server';
    const rawId = formData.get('id');
    if (typeof rawId !== 'string') return;
    const id = parseInt(rawId);
    await removeMessage(id);
    revalidatePath('/');
  }

  return (
    <li className="flex w-[230px]">
      <span className="grow">{message.content}</span>
      <form action={remove}>
        <button>ⓧ</button>
        <input type="hidden" name="id" value={message.id} />
      </form>
    </li>
  );
}
