import { getUser, updateUser } from '@/app/data-access/user';
import { revalidatePath } from 'next/cache';
import { updateNameAction } from './actions';

export default async function UsersPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUser(params.userId);

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>Users {user.name}</div>

      <form action={updateNameAction.bind(null, user.id)}>
        <input
          type="text"
          name="name"
          className="text-black border border-gray-400 py-2 px-4 me-2 rounded"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
