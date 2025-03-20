import {revalidatePath} from 'next/cache';

export default function CreatePage() {
  async function submit(formData: FormData) {
    'use server';

    const title = formData.get('title') as string;

    const response = await fetch('http://localhost:3001/rooms', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: 'This is a new room',
        // heroUrl:
        //   'https://c.pxhere.com/photos/75/9b/sailboat_ship_sailing_greenland_boat-1092104.jpg!d',
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

  // Step 1: Move form to a separate component, add 'use client', accept action as prop
  // Step 2: COMMIT!!
  // Step 3: Add useActionState (moves formData to second argument—after prevState),
  // add formAction as returned to from useActionState to form
  // Step 4: Verify app works
  // Step 5: Add pending state (disable inputs)
  // Step 6: Use returned errors from server in case of !response.ok

  return (
    <form action={submit}>
      <input placeholder="Title" name="title" />
      <button>Submit</button>
    </form>
  );
}
