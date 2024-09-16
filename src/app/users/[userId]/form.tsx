'use client';

import { useRef } from 'react';
import { updateNameAction } from './actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function Form({ userId }: { userId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(updateNameAction, {
    userId,
    name: '',
    message: '',
  });

  if (state.message === 'success') {
    formRef.current?.reset();
  }

  return (
    <form action={action} ref={formRef}>
      <input
        type="text"
        name="name"
        className="text-black border border-gray-400 py-2 px-4 me-2 rounded"
      />
      <SubmitButton />
    </form>
  );
}

export function SubmitButton() {
  const status = useFormStatus();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {status.pending ? 'Saving...' : 'Submit'}
    </button>
  );
}
