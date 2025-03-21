import {revalidatePath} from 'next/cache';
import CreateForm from './CreateForm';

export default function CreatePage() {
  async function submit(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;

    const response = await fetch('http://localhost:3001/rooms', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: 'This is a new room',
        heroUrl:
          'https://c.pxhere.com/photos/75/9b/sailboat_ship_sailing_greenland_boat-1092104.jpg!d',
        pricePerNight: {
          amount: 100,
          currency: 'USD'
        }
      })
    });

    if (!response.ok) {
      const data = await response.json();
      console.log(data);
    }

    revalidatePath('/rooms');
  }

  // Next steps:
  // 1. Extract form to separate component
  // 2. Pass submit as prop — make sure everything works
  // 3. BACKUP - Commit
  // 4. Add useActionState(submit, undefined) - Add prevState to server action
  // 5. Pending state, return value submit (errors)

  return <CreateForm submit={submit} />;
}
