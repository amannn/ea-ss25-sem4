'use client';

import {useActionState} from 'react';

type Props = {
  submit: (
    prevState: unknown,
    formData: FormData
  ) => Promise<
    // All ok
    | undefined

    // A validation error has occured
    | {
        error: string;
        formData: FormData;
      }
  >;
};

export default function ChatForm({submit}: Props) {
  const [state, formAction, pending] = useActionState(submit, undefined);

  let errorMessage;
  let defaultValue;
  if (state) {
    // We have an error
    errorMessage = <p>{state.error}</p>;
    defaultValue = state.formData.get('content') as string;
  }

  return (
    <div>
      <form action={formAction}>
        <input
          required
          name="content"
          className="border disabled:opacity-50"
          disabled={pending}
          defaultValue={defaultValue}
        />
        <button className="disabled:opacity-50" disabled={pending}>
          Submit
        </button>
      </form>
      {errorMessage}
    </div>
  );
}
